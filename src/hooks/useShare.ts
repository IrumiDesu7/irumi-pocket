import { useCallback, useState } from "react";

interface ShareContent {
  title: string;
  text: string;
}

type ShareStatus = "idle" | "copied" | "shared";

export function useShare(): {
  share: (content: ShareContent) => Promise<void>;
  status: ShareStatus;
} {
  const [status, setStatus] = useState<ShareStatus>("idle");

  const share = useCallback(async (content: ShareContent) => {
    if (navigator.share) {
      try {
        await navigator.share({ title: content.title, text: content.text });
        setStatus("shared");
      } catch (err) {
        if ((err as DOMException).name !== "AbortError") {
          await fallbackCopy(content.text);
          setStatus("copied");
        }
      }
    } else {
      await fallbackCopy(content.text);
      setStatus("copied");
    }

    setTimeout(() => setStatus("idle"), 2000);
  }, []);

  return { share, status };
}

async function fallbackCopy(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}
