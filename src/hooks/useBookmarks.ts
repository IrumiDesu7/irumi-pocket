import { useSyncExternalStore } from "react";

const STORAGE_KEY = "irumi-pocket-bookmarks";

let bookmarks = loadFromStorage();
let listeners = new Set<() => void>();

function loadFromStorage(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function persist(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...bookmarks]));
  listeners.forEach((fn) => fn());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Set<string> {
  return bookmarks;
}

export function toggleBookmark(id: string): void {
  bookmarks = new Set(bookmarks);
  if (bookmarks.has(id)) {
    bookmarks.delete(id);
  } else {
    bookmarks.add(id);
  }
  persist();
}

export function useBookmarks(): {
  bookmarks: Set<string>;
  isBookmarked: (id: string) => boolean;
  toggle: (id: string) => void;
  count: number;
} {
  const snap = useSyncExternalStore(subscribe, getSnapshot);
  return {
    bookmarks: snap,
    isBookmarked: (id: string) => snap.has(id),
    toggle: toggleBookmark,
    count: snap.size,
  };
}
