import type { TajweedSection } from "@/lib/types";

export const TAJWEED_SECTIONS: TajweedSection[] = [
  {
    id: "pengenalan",
    title: "Pengenalan: Nun Mati & Tanwin",
    intro:
      "Nun Mati adalah huruf Nun (\u0646) yang berharakat sukun (tanda mati). Artinya huruf Nun ini tidak memiliki vokal, hanya menghasilkan bunyi \"n\" yang tertahan. Contoh: \u0645\u0650\u0646\u0652 (min), \u0639\u064E\u0646\u0652 ('an), \u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E (an'amta). Tanwin adalah bunyi \"n\" di akhir kata yang muncul dari harakat dobel. Tidak ada huruf Nun tertulis \u2014 hanya tanda harakat ganda. Nun mati dan tanwin sama-sama menghasilkan bunyi \"n\", sehingga hukum tajweednya berlaku sama.",
    rules: [
      {
        id: "pengenalan-fathatain",
        title: "Fathatain",
        caraBaca: "Dobel fathah \u2014 menghasilkan bunyi -an",
        examples: [
          {
            ayat: "\u0643\u0650\u062A\u064E\u0627\u0628\u064B\u0627",
            latin: "kitaaban",
            keterangan: "Dobel fathah di akhir kata",
          },
        ],
      },
      {
        id: "pengenalan-kasratain",
        title: "Kasratain",
        caraBaca: "Dobel kasrah \u2014 menghasilkan bunyi -in",
        examples: [
          {
            ayat: "\u0643\u0650\u062A\u064E\u0627\u0628\u064D",
            latin: "kitaabin",
            keterangan: "Dobel kasrah di akhir kata",
          },
        ],
      },
      {
        id: "pengenalan-dhammatain",
        title: "Dhammatain",
        caraBaca: "Dobel dhammah \u2014 menghasilkan bunyi -un",
        examples: [
          {
            ayat: "\u0643\u0650\u062A\u064E\u0627\u0628\u064C",
            latin: "kitaabun",
            keterangan: "Dobel dhammah di akhir kata",
          },
        ],
      },
    ],
  },
  {
    id: "nun-mati-tanwin",
    title: "Hukum Nun Mati & Tanwin",
    intro:
      "Ada 5 hukum yang berlaku ketika nun mati atau tanwin bertemu huruf tertentu setelahnya.",
    rules: [
      {
        id: "idzhar-halqi",
        title: "Idzhar Halqi \u2014 Dibaca Jelas",
        huruf: "\u0621 \u0647\u0640 \u0639 \u062D \u063A \u062E",
        caraBaca:
          "Nun mati atau tanwin bertemu salah satu dari 6 huruf halq (huruf tenggorokan). Nun/tanwin dibunyikan dengan jelas dan tegas, tidak ada dengung.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0639\u0650\u0644\u0652\u0645\u064D",
            latin: "min 'ilmin",
            keterangan: "Nun mati + \u0639 \u2192 dibaca jelas",
          },
          {
            ayat: "\u064A\u064E\u0646\u0652\u0623\u064E\u0648\u0652\u0646\u064E",
            latin: "yan-awna",
            keterangan: "Nun mati + \u0621 \u2192 dibaca jelas",
          },
          {
            ayat: "\u0639\u064E\u0644\u0650\u064A\u0645\u064C \u062D\u064E\u0643\u0650\u064A\u0645\u064C",
            latin: "'aliimun hakiim",
            keterangan: "Tanwin + \u062D \u2192 dibaca jelas",
          },
        ],
      },
      {
        id: "idgham-bighunnah",
        title: "Idgham Bighunnah \u2014 Lebur + Dengung",
        huruf: "\u064A \u0646 \u0645 \u0648",
        caraBaca:
          "Nun mati atau tanwin bertemu salah satu dari 4 huruf: \u064A \u0646 \u0645 \u0648. Nun hilang/lebur ke huruf berikutnya, disertai dengung 2 harakat.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0648\u064E\u0644\u0650\u064A\u0651\u064D",
            latin: "miwwaliyy",
            keterangan: "Nun lebur ke waw + dengung",
          },
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064D",
            latin: "minni'mah",
            keterangan: "Nun lebur ke nun + dengung",
          },
          {
            ayat: "\u062E\u064E\u064A\u0652\u0631\u064B\u0627 \u064A\u064E\u0631\u064E\u0647\u064F",
            latin: "khoiray-yaroh",
            keterangan: "Tanwin lebur ke ya + dengung",
          },
        ],
      },
      {
        id: "idgham-bilaghunnah",
        title: "Idgham Bilaghunnah \u2014 Lebur Tanpa Dengung",
        huruf: "\u0644 \u0631",
        caraBaca:
          "Nun mati atau tanwin bertemu huruf \u0644 atau \u0631. Nun hilang/lebur ke huruf berikutnya, tanpa dengung.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0631\u064E\u0628\u0651\u0650\u0647\u0650\u0645",
            latin: "mirrabbihim",
            keterangan: "Nun lebur ke ra, tanpa dengung",
          },
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0644\u064E\u062F\u064F\u0646\u0652\u0647\u064F",
            latin: "milladunhu",
            keterangan: "Nun lebur ke lam, tanpa dengung",
          },
          {
            ayat: "\u0647\u064F\u062F\u064B\u0649 \u0644\u0650\u0644\u0652\u0645\u064F\u062A\u064E\u0651\u0642\u0650\u064A\u0646\u064E",
            latin: "hudallilmuttaqiin",
            keterangan: "Tanwin lebur ke lam",
          },
        ],
      },
      {
        id: "iqlab",
        title: "Iqlab \u2014 Berubah Jadi Mim",
        huruf: "\u0628",
        caraBaca:
          "Nun mati atau tanwin bertemu huruf \u0628 (ba). Bunyi nun berubah menjadi mim, lalu dibaca dengan dengung 2 harakat.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0628\u064E\u0639\u0652\u062F\u064D",
            latin: "mim ba'di",
            keterangan: "Nun \u2192 mim + dengung sebelum ba",
          },
          {
            ayat: "\u0623\u064E\u0646\u0652\u0628\u0650\u0626\u0652\u0647\u064F\u0645",
            latin: "ambi-hum",
            keterangan: "Nun \u2192 mim + dengung",
          },
          {
            ayat: "\u0633\u064E\u0645\u0650\u064A\u0639\u064C \u0628\u064E\u0635\u0650\u064A\u0631\u064D",
            latin: "samii'um bashiir",
            keterangan: "Tanwin \u2192 mim + dengung",
          },
        ],
      },
      {
        id: "ikhfa-haqiqi",
        title: "Ikhfa Haqiqi \u2014 Bunyi Samar + Dengung",
        huruf:
          "\u062A \u062B \u062C \u062F \u0630 \u0632 \u0633 \u0634 \u0635 \u0636 \u0637 \u0638 \u0641 \u0642 \u0643",
        caraBaca:
          "Nun mati atau tanwin bertemu 15 huruf sisanya. Nun dibunyikan samar (antara jelas dan lebur), disertai dengung 2 harakat. Posisi lidah bersiap ke huruf berikutnya.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0642\u064E\u0628\u0652\u0644\u0650",
            latin: "ming qobli",
            keterangan: "Nun samar + dengung sebelum qaf",
          },
          {
            ayat: "\u0623\u064E\u0646\u0652\u062A\u064E",
            latin: "anta",
            keterangan: "Nun samar (bukan \"an-ta\" yang tegas)",
          },
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0630\u064E\u0627",
            latin: "min dza",
            keterangan: "Nun samar + dengung sebelum dzal",
          },
          {
            ayat: "\u0639\u064E\u0644\u0650\u064A\u0645\u064B\u0627 \u0633\u064E\u0645\u0650\u064A\u0639\u064B\u0627",
            latin: "'aliiman samii'an",
            keterangan: "Tanwin samar sebelum sin",
          },
        ],
      },
    ],
  },
  {
    id: "mim-mati",
    title: "Hukum Mim Mati",
    intro:
      "Mim Mati (\u0645\u0652) adalah huruf Mim yang berharakat sukun. Ada 3 hukum:",
    rules: [
      {
        id: "ikhfa-syafawi",
        title: "Ikhfa Syafawi \u2014 Mim Samar + Dengung",
        huruf: "\u0628",
        caraBaca:
          "Mim mati bertemu huruf \u0628 (ba). Mim dibunyikan samar dengan dengung 2 harakat, bibir hampir tertutup.",
        examples: [
          {
            ayat: "\u062A\u064E\u0631\u0652\u0645\u0650\u064A\u0647\u0650\u0645 \u0628\u0650\u062D\u0650\u062C\u064E\u0627\u0631\u064E\u0629\u064D",
            latin: "tarmiihim bihijaaroh",
            keterangan: "Mim samar + dengung sebelum ba",
          },
          {
            ayat: "\u064A\u064E\u0639\u0652\u062A\u064E\u0635\u0650\u0645 \u0628\u0650\u0627\u0644\u0644\u0647\u0650",
            latin: "ya'tashim billaah",
            keterangan: "Mim samar + dengung sebelum ba",
          },
        ],
      },
      {
        id: "idgham-mimi",
        title: "Idgham Mimi \u2014 Mim Lebur + Dengung",
        huruf: "\u0645",
        caraBaca:
          "Mim mati bertemu huruf \u0645 (mim). Dua mim dilebur jadi satu + dengung 2 harakat.",
        examples: [
          {
            ayat: "\u0644\u064E\u0647\u064F\u0645\u0652 \u0645\u064E\u0627",
            latin: "lahumm maa",
            keterangan: "Dua mim jadi satu + dengung",
          },
          {
            ayat: "\u0643\u064F\u0646\u0652\u062A\u064F\u0645\u0652 \u0645\u064F\u0624\u0652\u0645\u0650\u0646\u0650\u064A\u0646\u064E",
            latin: "kuntumm mu'miniin",
            keterangan: "Mim lebur ke mim + dengung",
          },
        ],
      },
      {
        id: "idzhar-syafawi",
        title: "Idzhar Syafawi \u2014 Mim Jelas",
        huruf: "Selain \u0628 dan \u0645 (26 huruf lainnya)",
        caraBaca:
          "Mim mati bertemu huruf selain \u0628 dan \u0645. Mim dibunyikan jelas dan tegas \u2014 bibir rapat lalu dilepas.",
        examples: [
          {
            ayat: "\u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E",
            latin: "an'amta",
            keterangan: "Mim jelas sebelum ta",
          },
          {
            ayat: "\u0647\u064F\u0645\u0652 \u0641\u0650\u064A\u0647\u064E\u0627",
            latin: "hum fiihaa",
            keterangan: "Mim jelas sebelum fa",
          },
          {
            ayat: "\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652 \u0648\u064E\u0644\u064E\u0627",
            latin: "'alaihim walaa",
            keterangan: "Mim jelas sebelum waw",
          },
        ],
      },
    ],
  },
  {
    id: "mad",
    title: "Hukum Mad (Panjang Bacaan)",
    intro:
      "Mad artinya memanjangkan bunyi vokal. Terjadi ketika ada huruf mad (alif \u0627, waw \u0648, ya \u064A) setelah harakat yang sesuai: Alif setelah fathah, Waw setelah dhammah, Ya setelah kasrah. 1 harakat \u2248 1 ketukan jari. Mad diukur dalam satuan harakat.",
    rules: [
      {
        id: "mad-thabii",
        title: "Mad Thabi'i / Asli \u2014 2 Harakat",
        caraBaca:
          "Mad tanpa sebab tambahan (tidak bertemu hamzah atau sukun). Panjang: 2 harakat.",
        examples: [
          {
            ayat: "\u0642\u064E\u0627\u0644\u064E",
            latin: "qoo-la",
            keterangan: "Alif setelah fathah \u2192 panjang 2 ketukan",
          },
          {
            ayat: "\u064A\u064E\u0642\u064F\u0648\u0644\u064F",
            latin: "yaquu-lu",
            keterangan: "Waw setelah dhammah \u2192 panjang 2 ketukan",
          },
          {
            ayat: "\u0641\u0650\u064A\u0647\u0650",
            latin: "fii-hi",
            keterangan: "Ya setelah kasrah \u2192 panjang 2 ketukan",
          },
        ],
      },
      {
        id: "mad-wajib-muttashil",
        title: "Mad Wajib Muttashil \u2014 4-5 Harakat",
        caraBaca:
          "Huruf mad bertemu hamzah (\u0621) dalam satu kata. Wajib dipanjangkan 4-5 harakat.",
        examples: [
          {
            ayat: "\u062C\u064E\u0627\u0621\u064E",
            latin: "jaaaa-a",
            keterangan: "Alif + hamzah dalam 1 kata, ditarik panjang",
          },
          {
            ayat: "\u0633\u064F\u0648\u0621\u064E",
            latin: "suuuu-a",
            keterangan: "Waw + hamzah dalam 1 kata",
          },
          {
            ayat: "\u062C\u0650\u064A\u0621\u064E",
            latin: "jiiii-a",
            keterangan: "Ya + hamzah dalam 1 kata",
          },
        ],
      },
      {
        id: "mad-jaiz-munfashil",
        title: "Mad Jaiz Munfashil \u2014 2-4 Harakat",
        caraBaca:
          "Huruf mad di akhir kata bertemu hamzah di awal kata berikutnya. Boleh dipanjangkan 2-4 harakat.",
        examples: [
          {
            ayat: "\u0628\u0650\u0645\u064E\u0627 \u0623\u064F\u0646\u0652\u0632\u0650\u0644\u064E",
            latin: "bimaaaa unzila",
            keterangan: "Alif akhir kata + hamzah kata berikut",
          },
          {
            ayat: "\u0642\u064E\u0627\u0644\u064F\u0648\u0627 \u0625\u0650\u0646\u0651\u064E\u0627",
            latin: "qooluuuu innaa",
            keterangan: "Waw + hamzah kata berikut",
          },
          {
            ayat: "\u0641\u0650\u064A \u0623\u064E\u0646\u0652\u0641\u064F\u0633\u0650\u0647\u0650\u0645\u0652",
            latin: "fiiii anfusihim",
            keterangan: "Ya + hamzah kata berikut",
          },
        ],
      },
      {
        id: "mad-aridh-lissukun",
        title: "Mad Aridh Lissukun \u2014 2-6 Harakat",
        caraBaca:
          "Huruf mad sebelum huruf terakhir yang diwaqafkan (berhenti). Boleh dipanjangkan 2, 4, atau 6 harakat.",
        examples: [
          {
            ayat: "\u0646\u064E\u0633\u0652\u062A\u064E\u0639\u0650\u064A\u0646\u064F",
            latin: "nasta'iiiin",
            keterangan: "Berhenti di nun akhir ayat",
          },
          {
            ayat: "\u0627\u0644\u0652\u0639\u064E\u0627\u0644\u064E\u0645\u0650\u064A\u0646\u064E",
            latin: "al-'aalamiiiin",
            keterangan: "Berhenti di akhir ayat",
          },
          {
            ayat: "\u062A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E",
            latin: "ta'maluuuun",
            keterangan: "Berhenti di akhir ayat",
          },
        ],
      },
    ],
  },
  {
    id: "ghunnah",
    title: "Ghunnah (Dengung)",
    intro:
      "Ghunnah/dengung adalah bunyi \"nng\" yang keluar dari rongga hidung, bukan dari mulut. Panjangnya 2 harakat (sekitar 2 ketukan). Cara merasakan: Tutup mulut, lalu bunyikan \"mmm\" atau \"nnn\". Getaran yang terasa di pangkal hidung itulah ghunnah. Kalau hidung dipencet dan bunyinya hilang, berarti sudah benar keluarnya dari hidung.",
    rules: [
      {
        id: "ghunnah-idgham",
        title: "Idgham Bighunnah",
        caraBaca: "Dengung saat nun lebur ke waw, ya, nun, atau mim.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0648\u064E\u0644\u0650\u064A\u0651\u064D",
            latin: "miwwaliyy",
            keterangan: "Dengung saat nun lebur ke waw",
          },
        ],
      },
      {
        id: "ghunnah-ikhfa",
        title: "Ikhfa Haqiqi",
        caraBaca: "Dengung saat nun samar sebelum 15 huruf.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0642\u064E\u0628\u0652\u0644\u0650",
            latin: "ming qobli",
            keterangan: "Dengung saat nun samar",
          },
        ],
      },
      {
        id: "ghunnah-iqlab",
        title: "Iqlab",
        caraBaca: "Dengung setelah nun jadi mim sebelum ba.",
        examples: [
          {
            ayat: "\u0645\u0650\u0646\u0652 \u0628\u064E\u0639\u0652\u062F\u064D",
            latin: "mim ba'di",
            keterangan: "Dengung setelah nun jadi mim",
          },
        ],
      },
      {
        id: "ghunnah-ikhfa-syafawi",
        title: "Ikhfa Syafawi",
        caraBaca: "Dengung saat mim samar sebelum ba.",
        examples: [
          {
            ayat: "\u0647\u064F\u0645\u0652 \u0628\u0650",
            latin: "hum bi",
            keterangan: "Dengung saat mim samar sebelum ba",
          },
        ],
      },
      {
        id: "ghunnah-idgham-mimi",
        title: "Idgham Mimi",
        caraBaca: "Dengung saat mim bertemu mim.",
        examples: [
          {
            ayat: "\u0644\u064E\u0647\u064F\u0645\u0652 \u0645\u064E\u0627",
            latin: "lahumm maa",
            keterangan: "Dengung saat mim bertemu mim",
          },
        ],
      },
      {
        id: "ghunnah-tasydid",
        title: "Nun/Mim Tasydid",
        caraBaca: "Otomatis ada dengung pada nun atau mim bertasydid.",
        examples: [
          {
            ayat: "\u062B\u064F\u0645\u0651\u064E / \u0625\u0650\u0646\u0651\u064E",
            latin: "inna / tsumma",
            keterangan: "Otomatis ada dengung pada tasydid",
          },
        ],
      },
    ],
  },
  {
    id: "qalqalah",
    title: "Qalqalah (Memantul)",
    intro:
      "Qalqalah adalah bunyi memantul yang terjadi pada 5 huruf tertentu ketika huruf tersebut berharakat sukun (mati). 5 Huruf Qalqalah: \u062F \u062C \u0628 \u0637 \u0642 (disingkat: \u0642\u064F\u0637\u0652\u0628\u064F \u062C\u064E\u062F\u0651\u064D). Pantulan qalqalah harus ringan dan alami, tidak berlebihan. Bunyi pantulannya mengikuti vokal terdekat.",
    rules: [
      {
        id: "qalqalah-sughra",
        title: "Qalqalah Sughra (Kecil)",
        caraBaca:
          "Huruf qalqalah mati di tengah kata. Pantulan ringan.",
        examples: [
          {
            ayat: "\u064A\u064E\u0642\u0652\u0637\u064E\u0639\u064F",
            latin: "yaq-tha'u",
            keterangan: "Qaf mati di tengah kata \u2192 pantulan ringan",
          },
        ],
      },
      {
        id: "qalqalah-kubra",
        title: "Qalqalah Kubra (Besar)",
        caraBaca:
          "Huruf qalqalah mati di akhir kata/ayat. Pantulan lebih kuat dan jelas.",
        examples: [
          {
            ayat: "\u0627\u0644\u0652\u0641\u064E\u0644\u064E\u0642\u0652",
            latin: "al-falaq",
            keterangan: "Qaf mati di akhir ayat \u2192 pantulan kuat",
          },
        ],
      },
    ],
  },
  {
    id: "waqaf",
    title: "Tanda Waqaf (Berhenti)",
    intro:
      "Tanda waqaf adalah simbol di dalam mushaf yang menunjukkan apakah pembaca boleh, sebaiknya, atau tidak boleh berhenti pada posisi tertentu. Berikut tanda-tanda waqaf di Mushaf Madinah. Prinsip umum: jika ragu, lihat apakah makna kalimat sudah lengkap. Kalau belum lengkap, lanjutkan bacaan. Akhir ayat (tanda lingkaran dengan nomor) selalu merupakan tempat yang baik untuk berhenti.",
    rules: [
      {
        id: "waqaf-lazim",
        title: "Waqaf Lazim",
        huruf: "\u0645\u0640",
        caraBaca:
          "Wajib berhenti. Jika tidak berhenti, bisa mengubah makna ayat.",
        examples: [],
      },
      {
        id: "waqaf-jaiz",
        title: "Waqaf Jaiz",
        huruf: "\u062C",
        caraBaca:
          "Boleh berhenti atau lanjut. Keduanya sama-sama baik.",
        examples: [],
      },
      {
        id: "washl-awla",
        title: "Washl Awla",
        huruf: "\u0635\u0644\u0649",
        caraBaca:
          "Lebih baik lanjut, tapi boleh berhenti karena makna belum lengkap.",
        examples: [],
      },
      {
        id: "waqaf-awla",
        title: "Waqaf Awla",
        huruf: "\u0642\u0644\u0649",
        caraBaca:
          "Lebih baik berhenti, tapi boleh lanjut. Berhenti lebih baik.",
        examples: [],
      },
      {
        id: "waqaf-la",
        title: "Waqaf La",
        huruf: "\u0644\u0627",
        caraBaca:
          "Jangan berhenti. Makna ayat akan rusak jika berhenti di sini.",
        examples: [],
      },
      {
        id: "muanaqah",
        title: "Mu'anaqah",
        huruf: "\u2234",
        caraBaca:
          "Berhenti di salah satu. Ada 2 tanda: boleh berhenti di salah satu, tapi jangan berhenti di keduanya.",
        examples: [],
      },
    ],
  },
  {
    id: "adab-quran",
    title: "Adab Membaca Al-Qur'an",
    intro:
      "Yang Paling Penting: Jangan sampai urusan \"harus sempurna dulu\" menjadi penghalang untuk membaca Al-Qur'an. Lebih baik membaca dengan kondisi seadanya daripada tidak membaca sama sekali. Tajweed bisa diperbaiki sambil jalan \u2014 yang penting mulai dulu.",
    rules: [
      {
        id: "adab-1",
        title: "Berwudhu",
        caraBaca:
          "Dianjurkan (sunnah). Sebagian ulama mewajibkan wudhu untuk menyentuh mushaf fisik.",
        examples: [],
      },
      {
        id: "adab-2",
        title: "Menutup Aurat",
        caraBaca:
          "Tidak wajib, tetapi sangat dianjurkan sebagai penghormatan terhadap kalamullah.",
        examples: [],
      },
      {
        id: "adab-3",
        title: "Menghadap Kiblat",
        caraBaca: "Dianjurkan jika memungkinkan, tetapi tidak wajib.",
        examples: [],
      },
      {
        id: "adab-4",
        title: "Tempat Bersih",
        caraBaca:
          "Pastikan tempat duduk dan sekitar dalam keadaan bersih.",
        examples: [],
      },
      {
        id: "adab-5",
        title: "Membaca Ta'awudz",
        caraBaca:
          "Baca A'udzubillaahi minasy syaithaanirrajiim sebelum mulai membaca.",
        examples: [],
      },
      {
        id: "adab-6",
        title: "Membaca Basmalah",
        caraBaca:
          "Baca Bismillaahirrahmaanirrahiim di awal setiap surah (kecuali At-Taubah).",
        examples: [],
      },
      {
        id: "adab-7",
        title: "Tartil",
        caraBaca:
          "Baca dengan pelan dan jelas, perhatikan tajweed. Jangan terburu-buru.",
        examples: [],
      },
    ],
  },
];
