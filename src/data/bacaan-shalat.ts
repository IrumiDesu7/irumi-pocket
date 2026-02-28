import type { Chapter } from "@/lib/types";

export const BACAAN_SHALAT_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Takbiratul Ihram",
    sub: "Membuka shalat",
    sections: [
      {
        heading: "Takbir Pembuka",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-1-1",
              ar: "اللهُ أَكْبَرُ",
              latin: "Allahu Akbar",
              arti: "Allah Maha Besar",
              ref: "HR. Bukhari 735, Muslim 390",
            },
          },
          {
            t: "p",
            text: "Angkat kedua tangan sejajar bahu/telinga, jari terbuka rapat, telapak menghadap kiblat.",
          },
          {
            t: "p",
            text: "Lalu letakkan tangan kanan di atas pergelangan tangan kiri di atas dada. Pandangan ke tempat sujud.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Doa Istiftah",
    sub: "Pembuka shalat",
    sections: [
      {
        heading: "Bacaan Utama dalam Shalat Wajib",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-2-1",
              ar: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
              latin:
                "Allahumma baa'id baini wa baina khathaayaaya kamaa baa'adta bainal masyriqi wal maghrib. Allahumma naqqini min khathaayaaya kamaa yunaqqats tsaubul abyadhu minad danas. Allahummaghsilni min khathaayaaya bil maa-i wats tsalji wal barad.",
              arti: "Ya Allah, jauhkan antara diriku dan kesalahan-kesalahanku sebagaimana Engkau jauhkan antara timur dan barat. Ya Allah, bersihkan aku dari kesalahan-kesalahanku sebagaimana kain putih dibersihkan dari kotoran. Ya Allah, cucilah aku dari kesalahan-kesalahanku dengan air, salju, dan embun.",
              ref: "HR. Bukhari no. 744, Muslim no. 598",
            },
          },
        ],
      },
      {
        heading: "Alternatif Kedua",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-2-2",
              ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ",
              latin:
                "Subhaanakallahumma wa bihamdika, wa tabaarakasmuka, wa ta'aalaa jadduka, wa laa ilaaha ghairuk.",
              arti: "Maha Suci Engkau ya Allah dan segala puji bagi-Mu, Maha Berkah nama-Mu, Maha Tinggi keagungan-Mu, dan tidak ada Tuhan selain Engkau.",
              ref: "HR. Abu Dawud, An-Nasai, At-Tirmidzi — dishahihkan Al-Albani",
            },
          },
        ],
      },
      {
        heading: "Alternatif Ketiga",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-2-3",
              ar: "اللهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللهِ بُكْرَةً وَأَصِيلًا",
              latin:
                "Allahu Akbar kabiiran, walhamdulillaahi katsiiran, wa subhaanallaahi bukratan wa ashiilaa.",
              arti: "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak, Maha Suci Allah di pagi dan petang hari.",
              ref: "HR. Muslim no. 601, dari Ibnu Umar",
              fadl: "Nabi ﷺ bersabda: \"Aku takjub dengannya, dibukakan untuknya pintu-pintu langit.\" Ibnu Umar berkata: \"Aku tidak pernah meninggalkannya sejak itu.\"",
            },
          },
          {
            t: "highlight",
            text: "Disunnahkan bergantian mengamalkan ketiga versi doa istiftah yang shahih di atas.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Isti'adzah, Basmalah, Al-Fatihah",
    sub: "Bacaan wajib setiap rakaat",
    sections: [
      {
        heading: "Isti'adzah dan Basmalah",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-3-1",
              ar: "أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
              latin: "A'udzu billaahi minasy syaithaanir rajiim",
              arti: "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
              ref: "QS. An-Nahl: 98",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-3-2",
              ar: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ",
              latin: "Bismillaahir rahmaanir rahiim",
              arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
              ref: "QS. Al-Fatihah: 1",
            },
          },
        ],
      },
      {
        heading: "Membaca Al-Fatihah",
        content: [
          {
            t: "p",
            text: "Kemudian baca Al-Fatihah (rukun, wajib setiap rakaat). Setelah selesai ucapkan Aamiin — dijaharkan pada shalat jahriyyah.",
          },
          {
            t: "p",
            text: "Lalu baca surah/ayat setelah Al-Fatihah (sunnah, hanya di dua rakaat pertama).",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Rukuk",
    sub: "Membungkuk mengagungkan Allah",
    sections: [
      {
        heading: "Bacaan Rukuk",
        content: [
          {
            t: "p",
            text: "Takbir Allahu Akbar sambil angkat kedua tangan, lalu membungkuk dengan punggung lurus.",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-4-1",
              ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
              latin: "Subhaana Rabbiyal 'Azhiim",
              arti: "Maha Suci Tuhanku Yang Maha Agung.",
              ref: "HR. Muslim, dari Hudzaifah",
            },
          },
          {
            t: "note",
            text: "Minimal 1x, afdhal 3x atau lebih.",
          },
        ],
      },
      {
        heading: "Bacaan Tambahan Rukuk",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-4-2",
              ar: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
              latin:
                "Subhaanakallahumma Rabbanaa wa bihamdika, Allahummaghfir lii",
              arti: "Maha Suci Engkau ya Allah Tuhan kami dan segala puji bagi-Mu, Ya Allah ampunilah aku.",
              ref: "Muttafaq 'alaih",
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Bangkit dari Rukuk (I'tidal)",
    sub: "Berdiri tegak memuji Allah",
    sections: [
      {
        heading: "Bacaan Saat Bangkit",
        content: [
          {
            t: "p",
            text: "Sambil bangkit (angkat kedua tangan):",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-5-1",
              ar: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ",
              latin: "Sami'allaahu liman hamidah",
              arti: "Semoga Allah mendengar orang yang memuji-Nya.",
              ref: "HR. Bukhari, Muslim",
            },
          },
        ],
      },
      {
        heading: "Bacaan Setelah Berdiri Tegak",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-5-2",
              ar: "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ",
              latin:
                "Rabbanaa wa lakal hamd, hamdan katsiiran thayyiban mubaarakan fiih, mil-as samaawaati wa mil-al ardhi wa mil-a maa syi'ta min syai-in ba'd",
              arti: "Wahai Tuhan kami, bagi-Mu segala puji, pujian yang banyak, baik, penuh berkah, sepenuh langit, sepenuh bumi, dan sepenuh apa yang Engkau kehendaki setelah itu.",
              ref: "HR. Muslim",
            },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Sujud",
    sub: "Posisi paling dekat dengan Allah",
    sections: [
      {
        heading: "Bacaan Sujud",
        content: [
          {
            t: "p",
            text: "Takbir, lalu sujud di atas 7 anggota badan: dahi+hidung, 2 telapak tangan, 2 lutut, ujung jari kedua kaki.",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-6-1",
              ar: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
              latin: "Subhaana Rabbiyal A'laa",
              arti: "Maha Suci Tuhanku Yang Maha Tinggi.",
              ref: "HR. Muslim",
            },
          },
          {
            t: "note",
            text: "Minimal 1x, afdhal 3x atau lebih.",
          },
          {
            t: "highlight",
            text: "Perbanyak doa di sujud — posisi paling dekat dengan Allah. [HR. Muslim no. 482]",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Duduk Antara Dua Sujud",
    sub: "Memohon ampunan",
    sections: [
      {
        heading: "Bacaan Utama",
        content: [
          {
            t: "p",
            text: "Duduk iftirasy. Ulangi beberapa kali:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-7-1",
              ar: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
              latin: "Rabbi ighfir lii, Rabbi ighfir lii",
              arti: "Ya Tuhanku ampunilah aku, ya Tuhanku ampunilah aku.",
              ref: "HR. An-Nasai, Ibnu Majah — dari Hudzaifah",
            },
          },
        ],
      },
      {
        heading: "Bacaan Tambahan",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-7-2",
              ar: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَارْفَعْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي",
              latin:
                "Allahummaghfir lii, warhamni, wajburni, warfa'ni, wahdini, wa 'aafini, warzuqni",
              arti: "Ya Allah, ampunilah aku, rahmatilah aku, perbaikilah keadaanku, angkatlah derajatku, berilah aku petunjuk, berilah aku keselamatan, dan berilah aku rezeki.",
              ref: "HR. Abu Dawud no. 850, At-Tirmidzi no. 284, Ibnu Majah no. 898 — hasan",
            },
          },
          {
            t: "warn",
            text: "PENTING: Tanpa \"wa'fu 'anni\" — lafazh ini tidak ada dalam riwayat shahih doa antara dua sujud.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Sujud Kedua & Bangkit",
    sub: "Menuju rakaat berikutnya",
    sections: [
      {
        heading: "Sujud Kedua",
        content: [
          {
            t: "p",
            text: "Takbir, sujud kedua — bacaan sama dengan sujud pertama.",
          },
        ],
      },
      {
        heading: "Bangkit ke Rakaat Berikutnya",
        content: [
          {
            t: "p",
            text: "Takbir, bangkit berdiri — langsung baca Al-Fatihah (tanpa doa istiftah lagi).",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Tasyahhud Awal",
    sub: "Setelah rakaat ke-2",
    sections: [
      {
        heading: "Bacaan At-Tahiyyat",
        content: [
          {
            t: "p",
            text: "Duduk iftirasy (duduk di atas kaki kiri yang dihamparkan, kaki kanan ditegakkan). Riwayat Ibnu Mas'ud — paling shahih:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-9-1",
              ar: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
              latin:
                "At-tahiyyaatu lillaahi wash shalawaatu wath thayyibaat. As-salaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu an laa ilaaha illallaah, wa asyhadu anna Muhammadan 'abduhu wa rasuuluh.",
              arti: "Segala penghormatan, shalawat, dan kebaikan hanya bagi Allah. Salam sejahtera atasmu wahai Nabi, beserta rahmat Allah dan keberkahan-Nya. Salam sejahtera atas kami dan atas hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",
              ref: "HR. Bukhari no. 831, Muslim no. 402",
            },
          },
        ],
      },
      {
        heading: "Setelah Tasyahhud Awal",
        content: [
          {
            t: "note",
            text: "Pilihan A (Ibn Utsaimin): Langsung berdiri. Tidak menambah apa-apa.",
          },
          {
            t: "note",
            text: "Pilihan B (Ibn Baz, Al-Albani — lebih afdhal): Tambahkan shalawat Ibrahimiyyah LENGKAP (lihat tasyahhud akhir), lalu berdiri.",
          },
          {
            t: "warn",
            text: "JANGAN hanya ucapkan \"Allahumma shalli 'ala Muhammad\" lalu berdiri. Entah dibaca lengkap, entah tidak sama sekali.",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Tasyahhud Akhir",
    sub: "Rakaat terakhir",
    sections: [
      {
        heading: "A. Bacaan At-Tahiyyat",
        content: [
          {
            t: "p",
            text: "Duduk tawarruk (kaki kiri dikeluarkan dari bawah kaki kanan, bokong menempel lantai, kaki kanan ditegakkan). Bacaan sama persis dengan tasyahhud awal.",
          },
        ],
      },
      {
        heading: "B. Shalawat Ibrahimiyyah",
        content: [
          {
            t: "p",
            text: "WAJIB di tasyahhud akhir:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-10-1",
              ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
              latin:
                "Allahumma shalli 'alaa Muhammad wa 'alaa aali Muhammad, kamaa shallaita 'alaa Ibraahiim wa 'alaa aali Ibraahiim, innaka hamiidun majiid. Allahumma baarik 'alaa Muhammad wa 'alaa aali Muhammad, kamaa baarakta 'alaa Ibraahiim wa 'alaa aali Ibraahiim, innaka hamiidun majiid.",
              arti: "Ya Allah, berilah shalawat atas Muhammad dan keluarga Muhammad, sebagaimana Engkau memberi shalawat atas Ibrahim dan keluarga Ibrahim, sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berilah berkah atas Muhammad dan keluarga Muhammad, sebagaimana Engkau memberi berkah atas Ibrahim dan keluarga Ibrahim, sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
              ref: "HR. Bukhari no. 3370",
            },
          },
        ],
      },
      {
        heading: "C. Isti'adzah dari 4 Perkara",
        content: [
          {
            t: "dua",
            dua: {
              id: "shalat-10-2",
              ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
              latin:
                "Allahumma inni a'uudzu bika min 'adzaabi jahannam, wa min 'adzaabil qabr, wa min fitnatil mahyaa wal mamaat, wa min syarri fitnatil masiihid dajjaal.",
              arti: "Ya Allah, aku berlindung kepada-Mu dari siksa Jahannam, dari siksa kubur, dari fitnah kehidupan dan kematian, dan dari kejahatan fitnah Al-Masih Ad-Dajjal.",
              ref: "HR. Muslim no. 588",
            },
          },
        ],
      },
      {
        heading: "D. Doa Bebas",
        content: [
          {
            t: "p",
            text: "Sunnah, boleh diperpanjang:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-10-3",
              ar: "اللَّهُمَّ إِنِّيْ ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
              latin:
                "Allahumma inni zhalamtu nafsi zhulman katsiiran wa laa yaghfirudz dzunuuba illaa Ant, faghfir lii maghfiratan min 'indika warhamni, innaka Antal Ghafuurur Rahiim.",
              arti: "Ya Allah, aku telah banyak menzalimi diriku dan tidak ada yang mengampuni dosa kecuali Engkau, maka ampunilah aku dengan ampunan dari sisi-Mu dan rahmatilah aku, sesungguhnya Engkau Maha Pengampun lagi Maha Penyayang.",
              ref: "Muttafaq 'alaih — Nabi ﷺ mengajarkan ini kepada Abu Bakr",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-10-4",
              ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
              latin:
                "Allahumma a'inni 'alaa dzikrika wa syukrika wa husni 'ibaadatik.",
              arti: "Ya Allah, tolonglah aku untuk berdzikir, bersyukur, dan beribadah dengan baik kepada-Mu.",
              ref: "HR. Abu Dawud, An-Nasai — shahih",
            },
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Salam",
    sub: "Penutup shalat",
    sections: [
      {
        heading: "Bacaan Salam",
        content: [
          {
            t: "p",
            text: "Menoleh ke kanan lalu ke kiri:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-11-1",
              ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
              latin: "As-salaamu 'alaikum wa rahmatullaah",
              arti: "Keselamatan dan rahmat Allah atas kalian.",
              ref: "HR. Muslim",
            },
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Dzikir Ba'da Shalat",
    sub: "5 langkah setelah salam",
    sections: [
      {
        heading: "Langkah 1 — Istighfar & Dzikir Awal",
        content: [
          {
            t: "note",
            text: "Dijaharkan (diucapkan dengan suara).",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-1",
              ar: "أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ",
              latin: "Astaghfirullaah (3x)",
              arti: "Aku memohon ampun kepada Allah.",
              ref: "HR. Muslim",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-2",
              ar: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
              latin:
                "Allahumma Antas Salaam wa minkas salaam, tabaarakta yaa Dzal Jalaali wal Ikraam",
              arti: "Ya Allah, Engkaulah As-Salam dan dari-Mu-lah keselamatan, Maha Berkah Engkau wahai pemilik keagungan dan kemuliaan.",
              ref: "HR. Muslim, dari Tsauban",
            },
          },
          {
            t: "note",
            text: "Jika imam: setelah ini berbalik menghadap makmum.",
          },
        ],
      },
      {
        heading: "Langkah 2 — Tahlil",
        content: [
          {
            t: "note",
            text: "Dijaharkan.",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-3",
              ar: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
              latin:
                "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai-in qadiir",
              arti: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya, bagi-Nya kerajaan dan pujian, Dia Maha Kuasa atas segala sesuatu.",
              ref: "HR. Muslim",
            },
          },
          {
            t: "note",
            text: "1x atau 3x.",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-4",
              ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، لَا إِلَهَ إِلَّا اللهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحُسَنُ، لَا إِلَهَ إِلَّا اللهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ",
              latin:
                "Laa hawla wa laa quwwata illaa billaah. Laa ilaaha illallaahu wa laa na'budu illaa iyyaah, lahun ni'matu wa lahul fadhlu wa lahuts tsanaa-ul hasan. Laa ilaaha illallaahu mukhlishiina lahud diina wa law karihal kaafiruun.",
              arti: "Tiada daya dan upaya kecuali dengan pertolongan Allah. Tiada Tuhan selain Allah, kami tidak menyembah kecuali kepada-Nya, bagi-Nya nikmat, karunia, dan pujian yang baik. Tiada Tuhan selain Allah dengan memurnikan ibadah hanya untuk-Nya meskipun orang-orang kafir membencinya.",
              ref: "HR. Muslim, dari Abdullah bin Az-Zubair",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-5",
              ar: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
              latin:
                "Allahumma laa maani'a limaa a'thaita, wa laa mu'thiya limaa mana'ta, wa laa yanfa'u dzal jaddi minkal jadd",
              arti: "Ya Allah, tidak ada yang dapat menghalangi apa yang Engkau berikan, tidak ada yang memberi apa yang Engkau halangi, dan tidak bermanfaat kekayaan seseorang di hadapan-Mu.",
              ref: "HR. Bukhari-Muslim, dari Al-Mughirah",
            },
          },
        ],
      },
      {
        heading: "Langkah 3 — Bacaan Al-Quran",
        content: [
          { t: "sub", text: "Ayat Kursi" },
          {
            t: "dua",
            dua: {
              id: "shalat-12-6",
              ar: "اللهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ",
              latin:
                "Allaahu laa ilaaha illaa Huwal Hayyul Qayyuum, laa ta'khudzuhu sinatuw wa laa nawm, lahu maa fis samaawaati wa maa fil ardh, man dzal ladzii yasyfa'u 'indahu illaa bi idznih, ya'lamu maa baina aidiihim wa maa khalfahum, wa laa yuhiithuuna bi syai'im min 'ilmihii illaa bimaa syaa', wasi'a kursiyyuhus samaawaati wal ardh, wa laa ya'uuduhu hifzhuhumaa, wa Huwal 'Aliyyul 'Azhiim",
              arti: "Allah, tidak ada Tuhan selain Dia Yang Maha Hidup lagi terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui sesuatu pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi, dan Dia tidak merasa berat memelihara keduanya, dan Dia Maha Tinggi lagi Maha Agung.",
              ref: "QS. Al-Baqarah: 255 — 1x setiap selesai shalat",
            },
          },
          { t: "sub", text: "Surat Al-Ikhlas + Al-Falaq + An-Nas" },
          {
            t: "p",
            text: "Dibaca sebagai satu set berurutan (Al-Ikhlas \u2192 Al-Falaq \u2192 An-Nas), lalu set itu diulang:",
          },
          {
            t: "steps",
            items: [
              "1x setelah Zhuhur, Ashar, dan Isya",
              "3x setelah Maghrib dan Subuh",
            ],
          },
        ],
      },
      {
        heading: "Langkah 4 — Tasbih, Tahmid, Takbir",
        content: [
          {
            t: "highlight",
            text: "33x + 1 = 100",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-7",
              ar: "سُبْحَانَ اللهِ",
              latin: "Subhaanallaah — 33x",
              arti: "Maha Suci Allah.",
              ref: "HR. Muslim",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-8",
              ar: "الْحَمْدُ لِلَّهِ",
              latin: "Alhamdulillaah — 33x",
              arti: "Segala puji bagi Allah.",
              ref: "HR. Muslim",
            },
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-9",
              ar: "اللهُ أَكْبَرُ",
              latin: "Allaahu Akbar — 33x",
              arti: "Allah Maha Besar.",
              ref: "HR. Muslim",
            },
          },
          { t: "sub", text: "Genapkan yang ke-100 dengan:" },
          {
            t: "dua",
            dua: {
              id: "shalat-12-10",
              ar: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
              latin:
                "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai-in qadiir",
              arti: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya, bagi-Nya kerajaan dan pujian, Dia Maha Kuasa atas segala sesuatu.",
              ref: "HR. Muslim",
              fadl: "Diampuni kesalahannya walau sebanyak buih lautan.",
            },
          },
        ],
      },
      {
        heading: "Langkah 5 — Tambahan Ba'da Maghrib & Subuh",
        content: [
          {
            t: "p",
            text: "Setelah semua dzikir di atas, tambahkan 10 kali:",
          },
          {
            t: "dua",
            dua: {
              id: "shalat-12-11",
              ar: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
              latin:
                "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu yuhyii wa yumiitu wa huwa 'alaa kulli syai-in qadiir",
              arti: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya, bagi-Nya kerajaan, bagi-Nya pujian, Dia menghidupkan dan mematikan, Dia Maha Kuasa atas segala sesuatu.",
              ref: "HR. At-Tirmidzi, Ahmad — shahih",
              fadl: "Setara memerdekakan 4 budak, dan dijaga dari syaitan hingga sore/pagi hari.",
            },
          },
        ],
      },
    ],
  },
];
