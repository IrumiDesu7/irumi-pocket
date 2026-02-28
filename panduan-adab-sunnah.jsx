import { useState, useEffect, useRef } from "react";

const DATA = [
  {
    id: 1, title: "Bangun Tidur", sub: "Momen pertama mengingat Allah",
    sections: [
      { heading: "Doa Utama Bangun Tidur", content: [
        { t: "dua", ar: "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ", latin: "Alhamdulillāhil-ladzī ahyānā ba'da mā amātanā wa ilaihin-nusyūr.", arti: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami dibangkitkan.", ref: "HR. Bukhari no. 6325, Muslim no. 2711 — Shahih (Muttafaq 'Alaih)" },
        { t: "p", text: "Tidur disebut 'kematian kecil' karena ruh sementara diangkat. Doa ini dibaca segera setelah membuka mata sebagai ungkapan syukur atas kembalinya kehidupan." },
      ]},
      { heading: "Doa Tambahan Bangun Tidur", content: [
        { t: "dua", ar: "اَلْحَمْدُ لِلَّهِ الَّذِيْ عَافَانِيْ فِيْ جَسَدِيْ، وَرَدَّ عَلَيَّ رُوْحِيْ، وَأَذِنَ لِيْ بِذِكْرِهِ", latin: "Alhamdulillāhil-ladzī 'āfānī fī jasadī, wa radda 'alayya rūhī, wa adzina lī bidzikrik.", arti: "Segala puji bagi Allah yang telah memberikan kesehatan pada jasadku, mengembalikan ruhku, dan mengizinkanku untuk berdzikir kepada-Nya.", ref: "HR. Tirmidzi no. 3401 — Hasan (Al-Albani)" },
      ]},
      { heading: "Sunnah Setelah Bangun", content: [
        { t: "sub", text: "Mengusap Wajah dari Bekas Kantuk" },
        { t: "p", text: "Ibnu Abbas radhiyallahu 'anhu meriwayatkan bahwa Nabi ﷺ bangun lalu duduk sambil mengusap bekas kantuk dari wajahnya, lalu membaca 10 ayat terakhir Surat Ali Imran.", src: "HR. Bukhari no. 183" },
        { t: "sub", text: "Mencuci Kedua Tangan 3 Kali" },
        { t: "dua", ar: "إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنْ نَوْمِهِ فَلاَ يَغْمِسْ يَدَهُ فِي الإِنَاءِ حَتَّى يَغْسِلَهَا ثَلاَثًا", latin: "Idzā astayqazha ahadukum min nawmihi falā yaghmis yadahu fil-inā'i hattā yaghsilahā tsalātsan.", arti: "Apabila salah seorang di antara kalian bangun dari tidurnya, janganlah ia mencelupkan tangannya ke dalam wadah sebelum mencucinya tiga kali.", ref: "HR. Bukhari no. 162, Muslim no. 278 — Shahih" },
        { t: "sub", text: "Bersiwak" },
        { t: "dua", ar: "كَانَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا قَامَ مِنَ اللَّيْلِ يَشُوصُ فَاهُ بِالسِّوَاكِ", latin: "Kānan-Nabiyyu ﷺ idzā qāma minal-laili yasyūshu fāhu bis-siwāk.", arti: "Nabi ﷺ apabila bangun dari malam hari, beliau membersihkan mulutnya dengan siwak.", ref: "HR. Bukhari no. 245, Muslim no. 255 — Shahih" },
        { t: "note", text: "Keutamaan siwak: 'Siwak adalah pembersih mulut dan keridhaan Rabb' (HR. Ahmad — Irwa'ul Ghalil no. 66). Boleh diganti sikat gigi." },
        { t: "sub", text: "Istinsyaq 3 Kali" },
        { t: "dua", ar: "إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنْ مَنَامِهِ فَلْيَسْتَنْثِرْ ثَلَاثَ مَرَّاتٍ، فَإِنَّ الشَّيْطَانَ يَبِيتُ عَلَى خَيَاشِيمِهِ", latin: "Idzā astayqazha ahadukum min manāmihi falyastantsir tsalātsa marrāt, fa innasy-syaithāna yabītu 'alā khayāsyīmih.", arti: "Apabila salah seorang di antara kalian bangun dari tidurnya, hendaklah ia beristintsar tiga kali, karena setan bermalam di rongga hidungnya.", ref: "HR. Bukhari no. 3295, Muslim no. 238 — Shahih" },
      ]},
    ]
  },
  {
    id: 2, title: "Masuk & Keluar Kamar Mandi", sub: "Perlindungan dari gangguan setan",
    sections: [
      { heading: "Doa Masuk Kamar Mandi", content: [
        { t: "dua", ar: "بِسْمِ اللهِ، اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", latin: "Bismillāh, Allāhumma innī a'ūdzu bika minal-khubutsi wal-khabā'its.", arti: "Dengan menyebut nama Allah. Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.", ref: "HR. Bukhari no. 142, Muslim no. 375 — Shahih. Tambahan Bismillah: Tirmidzi no. 606" },
        { t: "p", text: "Doa dibaca sebelum masuk, bukan di dalamnya. Jika lupa, boleh membaca dalam hati." },
      ]},
      { heading: "Doa Keluar Kamar Mandi", content: [
        { t: "dua", ar: "غُفْرَانَكَ", latin: "Ghufrānak.", arti: "(Ya Allah, aku memohon) ampunan-Mu.", ref: "HR. Abu Dawud no. 30, Tirmidzi no. 7, Ibn Majah no. 300 — Shahih (Al-Albani)" },
        { t: "warn", text: "Hadits doa 'Alhamdulillahilladzi adzhaba 'annil adza wa 'afani' berstatus dha'if (lemah). Cukup membaca Ghufranaka saja." },
      ]},
      { heading: "Adab Kamar Mandi", content: [
        { t: "p", text: "Masuk dengan kaki kiri, keluar dengan kaki kanan — qiyas dari hadits Aisyah (HR. Bukhari no. 186, Muslim no. 268)." },
        { t: "p", text: "Menggunakan tangan kiri untuk bersuci (HR. Bukhari no. 152). Tidak menghadap/membelakangi kiblat di tempat terbuka (HR. Bukhari no. 394)." },
      ]},
    ]
  },
  {
    id: 3, title: "Wudhu", sub: "Membuka pintu-pintu surga",
    sections: [
      { heading: "Basmalah Sebelum Wudhu", content: [
        { t: "p", text: "Membaca Bismillah sebelum wudhu. 'Tidak ada wudhu bagi yang tidak menyebut nama Allah' (HR. Abu Dawud no. 101; hasan). Hukumnya sunnah muakkadah." },
      ]},
      { heading: "Tata Cara Wudhu", content: [
        { t: "p", text: "Berdasarkan hadits Humran (HR. Bukhari no. 159, Muslim no. 226):" },
        { t: "steps", items: ["Niat di dalam hati (tidak dilafalkan)", "Membaca Bismillah", "Membasuh kedua telapak tangan 3×", "Berkumur dan istinsyaq bersamaan", "Membasuh wajah 3×", "Membasuh kedua tangan sampai siku 3×, dimulai dari kanan", "Mengusap seluruh kepala sekali, depan ke belakang lalu kembali", "Mengusap kedua telinga", "Membasuh kedua kaki sampai mata kaki 3×, dimulai dari kanan"] },
      ]},
      { heading: "Doa Sesudah Wudhu", content: [
        { t: "dua", ar: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", latin: "Asyhadu allā ilāha illallāhu wahdahu lā syarīka lah, wa asyhadu anna Muhammadan 'abduhu wa rasūluh.", arti: "Aku bersaksi bahwa tidak ada tuhan yang berhak disembah selain Allah semata, tidak ada sekutu bagi-Nya. Dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.", ref: "HR. Muslim no. 234 — Shahih", fadl: "Dibukakan 8 pintu surga, masuk dari mana saja yang ia kehendaki." },
        { t: "dua", ar: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ", latin: "Allāhummaj'alnī minat-tawwābīna waj'alnī minal-mutathahhirīn.", arti: "Ya Allah, jadikanlah aku termasuk orang-orang yang bertaubat dan menyucikan diri.", ref: "HR. Tirmidzi no. 55 — Shahih (Al-Albani)" },
      ]},
    ]
  },
  {
    id: 4, title: "Berpakaian", sub: "Dimulai dari kanan",
    sections: [
      { heading: "Doa Memakai Pakaian", content: [
        { t: "dua", ar: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", latin: "Alhamdulillāhil-ladzī kasānī hādzā wa razaqanīhi min ghairi hawlin minnī wa lā quwwah.", arti: "Segala puji bagi Allah yang telah memberiku pakaian ini dan memberi rezeki tanpa daya dan kekuatan dariku.", ref: "HR. Abu Dawud no. 4023, Tirmidzi no. 3458 — Hasan", fadl: "Diampuni dosanya yang telah lalu." },
      ]},
      { heading: "Doa Memakai Pakaian Baru", content: [
        { t: "dua", ar: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ", latin: "Allāhumma lakal-hamdu anta kasautanīhi, as'aluka khairahu wa khaira mā shuni'a lah, wa a'ūdzu bika min syarrihi wa syarri mā shuni'a lah.", arti: "Ya Allah, segala puji bagi-Mu. Engkau telah memakaikan pakaian ini. Aku mohon kebaikannya dan berlindung dari keburukannya.", ref: "HR. Abu Dawud no. 4020, Tirmidzi no. 1767 — Hasan" },
      ]},
      { heading: "Adab Berpakaian", content: [
        { t: "p", text: "Mendahulukan kanan saat memakai, mendahulukan kiri saat melepas (HR. Bukhari no. 5856, Muslim no. 2097)." },
        { t: "p", text: "Membaca Bismillah saat melepas pakaian — penghalang pandangan jin (HR. Tirmidzi; hasan)." },
        { t: "p", text: "Larangan isbal bagi laki-laki (HR. Bukhari no. 5787). Larangan sutra dan emas bagi laki-laki (HR. Abu Dawud no. 4057)." },
      ]},
    ]
  },
  {
    id: 5, title: "Makan & Minum", sub: "Menyebut nama Allah mengusir setan",
    sections: [
      { heading: "Doa Sebelum Makan", content: [
        { t: "dua", ar: "بِسْمِ اللهِ", latin: "Bismillāh.", arti: "Dengan menyebut nama Allah.", ref: "HR. Bukhari no. 5376, Muslim no. 2022 — Shahih" },
        { t: "note", text: "Cukup 'Bismillah' tanpa 'Ar-Rahman Ar-Rahim' (pendapat Ibn Hajar)." },
      ]},
      { heading: "Jika Lupa Bismillah", content: [
        { t: "dua", ar: "بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ", latin: "Bismillāhi awwalahu wa ākhirahu.", arti: "Dengan menyebut nama Allah di awalnya dan di akhirnya.", ref: "HR. Abu Dawud no. 3767 — Shahih (Al-Albani)" },
      ]},
      { heading: "Doa Sesudah Makan", content: [
        { t: "dua", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", latin: "Alhamdulillāhil-ladzī ath'amanī hādzā wa razaqanīhi min ghairi hawlin minnī wa lā quwwah.", arti: "Segala puji bagi Allah yang telah memberi makan ini kepadaku tanpa daya dan kekuatan dariku.", ref: "HR. Tirmidzi no. 3458, Abu Dawud no. 4023 — Shahih", fadl: "Diampuni dosa yang telah lalu." },
      ]},
      { heading: "Adab Makan & Minum", content: [
        { t: "p", text: "Makan dengan tangan kanan — setan makan dengan kiri (HR. Muslim no. 2020). Nabi ﷺ tidak pernah mencela makanan (HR. Bukhari no. 3370)." },
        { t: "p", text: "Minum sambil duduk, 3 tegukan, mengambil napas di luar wadah (HR. Muslim no. 2024, Bukhari no. 5630)." },
      ]},
    ]
  },
  {
    id: 6, title: "Keluar & Masuk Rumah", sub: "Benteng dari gangguan setan",
    sections: [
      { heading: "Doa Keluar Rumah", content: [
        { t: "dua", ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", latin: "Bismillāhi tawakkaltu 'alallāh, lā hawla wa lā quwwata illā billāh.", arti: "Dengan nama Allah, aku bertawakal kepada Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.", ref: "HR. Abu Dawud no. 5095, Tirmidzi no. 3426 — Shahih", fadl: "Malaikat berkata: 'Kamu telah dibimbing, dicukupi, dan dilindungi.' Setan menjauh." },
      ]},
      { heading: "Doa Perlindungan", content: [
        { t: "dua", ar: "اللَّهُمَّ إنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ", latin: "Allāhumma innī a'ūdzu bika an adhilla aw udhalla, aw azilla aw uzalla, aw azhlima aw uzhlama, aw ajhala aw yujhala 'alayya.", arti: "Ya Allah, aku berlindung kepada-Mu dari kesesatan atau disesatkan, dari ketergelinciran atau digelincirkan, dari menzalimi atau dizalimi, dari kebodohan atau dijahili.", ref: "HR. Abu Dawud dan Ibn Majah — Shahih (Al-Albani)" },
      ]},
      { heading: "Masuk Rumah", content: [
        { t: "dua", ar: "إِذَا دَخَلَ الرَّجُلُ بَيْتَهُ فَذَكَرَ اللَّهَ عِنْدَ دُخُولِهِ وَعِنْدَ طَعَامِهِ قَالَ الشَّيْطَانُ لاَ مَبِيتَ لَكُمْ وَلاَ عَشَاءَ", latin: "Idzā dakhalar-rajulu baitahu fa dzakarallāha 'inda dukhūlihi wa 'inda tha'āmihi, qālasy-syaithānu lā mabīta lakum wa lā 'asyā'.", arti: "Apabila seseorang masuk rumahnya lalu menyebut nama Allah saat masuk dan makan, setan berkata: 'Kalian tidak mendapat tempat menginap dan makan malam.'", ref: "HR. Muslim no. 2018 — Shahih" },
      ]},
    ]
  },
  {
    id: 7, title: "Bercermin", sub: "Doa shahih sebagai doa umum",
    sections: [
      { heading: "Doa Bercermin", content: [
        { t: "dua", ar: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي", latin: "Allāhumma kamā hassanta khalqī fa hassin khuluqī.", arti: "Ya Allah, sebagaimana Engkau telah memperindah rupaku, maka perindahlah pula akhlakku.", ref: "Khusus cermin: Dha'if (Al-Albani). Sebagai doa umum: Shahih (HR. Ahmad no. 24392)" },
        { t: "warn", text: "Doa ini boleh dibaca kapan saja sebagai doa umum, namun mengkhususkannya saat bercermin tidak memiliki landasan yang kuat." },
      ]},
    ]
  },
  {
    id: 8, title: "Bersin & Menguap", sub: "Bersin dicintai Allah, menguap dibenci-Nya",
    sections: [
      { heading: "Tiga Tahap Adab Bersin", content: [
        { t: "highlight", text: "'Sesungguhnya Allah mencintai bersin dan membenci menguap' — HR. Bukhari no. 6223" },
        { t: "steps", items: ["Yang bersin: Alhamdulillāh", "Yang mendengar: Yarhamukallāh (Semoga Allah merahmatimu)", "Yang bersin membalas: Yahdīkumullāhu wa yushlih bālakum"] },
        { t: "note", text: "Seluruh pertukaran ini: HR. Bukhari no. 6224. Jika bersin >3×, cukup didoakan 'Syafākallāh'." },
      ]},
      { heading: "Adab Menguap", content: [
        { t: "p", text: "Menahan semampunya dan menutup mulut (HR. Bukhari no. 6223, Muslim no. 2994). Setan masuk melalui mulut yang terbuka lebar." },
      ]},
    ]
  },
  {
    id: 9, title: "Adab di Rumah", sub: "Empat perintah Nabi ﷺ",
    sections: [
      { heading: "Empat Perintah Sebelum Malam", content: [
        { t: "dua", ar: "غَطُّوا الإِنَاءَ وَأَوْكُوا السِّقَاءَ وَأَغْلِقُوا الْبَابَ وَأَطْفِئُوا السِّرَاجَ", latin: "Ghatthul-inā'a wa awkus-siqā'a wa aghliqul-bāba wa athfi'us-sirāj.", arti: "Tutuplah bejana, ikatlah kantung air, kuncilah pintu, dan padamkanlah lampu.", ref: "HR. Bukhari no. 5623, Muslim — Shahih" },
        { t: "steps", items: ["Menutup bejana — ada malam turunnya wabah (HR. Muslim)", "Mengunci pintu dengan Bismillah — setan tidak bisa membukanya (HR. Bukhari no. 3280)", "Mematikan api/lampu — 'Api adalah musuh bagi kalian' (HR. Bukhari-Muslim)", "Menahan anak-anak saat senja — setan bertebaran (HR. Bukhari-Muslim)"] },
      ]},
    ]
  },
  {
    id: 10, title: "Hubungan Suami Istri", sub: "Doa pelindung keturunan",
    sections: [
      { heading: "Doa Jima'", content: [
        { t: "dua", ar: "بِاسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا", latin: "Bismillāh, Allāhumma jannibnasy-syaithāna wa jannibisy-syaithāna mā razaqtanā.", arti: "Dengan nama Allah. Ya Allah, jauhkanlah kami dari setan, dan jauhkanlah setan dari apa yang Engkau rezekikan kepada kami.", ref: "HR. Bukhari no. 141, Muslim no. 1434 — Shahih", fadl: "Apabila ditakdirkan anak, setan tidak akan pernah membahayakannya selamanya." },
      ]},
    ]
  },
  {
    id: 11, title: "Safar & Bepergian", sub: "Doa pengawal perjalanan",
    sections: [
      { heading: "Doa Naik Kendaraan", content: [
        { t: "dua", ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", latin: "Subhānalladzī sakhkhara lanā hādzā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā lamunqalibūn.", arti: "Mahasuci Allah yang telah menundukkan ini bagi kami padahal sebelumnya kami tidak mampu, dan sesungguhnya kami akan kembali kepada Tuhan kami.", ref: "QS. Az-Zukhruf: 13–14; HR. Abu Dawud no. 2602 — Shahih" },
      ]},
      { heading: "Adab Safar", content: [
        { t: "p", text: "Takbir saat mendaki, tasbih saat menurun (HR. Bukhari no. 2993)." },
        { t: "p", text: "Doa musafir mustajab: 'Tiga doa pasti dikabulkan: doa orang dizalimi, doa musafir, dan doa orang tua' (HR. Tirmidzi no. 1905)." },
        { t: "p", text: "'Safar adalah bagian dari azab... jika urusan selesai, segeralah pulang' (HR. Bukhari-Muslim)." },
      ]},
    ]
  },
  {
    id: 12, title: "Mimpi", sub: "Tiga jenis mimpi",
    sections: [
      { heading: "Klasifikasi Mimpi", content: [
        { t: "dua", ar: "الرُّؤْيَا ثَلَاثَةٌ: فَرُؤْيَا الصَّالِحَةِ بُشْرَى مِنَ اللَّهِ، وَرُؤْيَا تَحْزِينٌ مِنَ الشَّيْطَانِ، وَرُؤْيَا مِمَّا يُحَدِّثُ الْمَرْءُ نَفْسَهُ", latin: "Ar-ru'yā tsalātsah: fa ru'yash-shālihah busyrā minallāh, wa ru'yā tahzīnun minasy-syaithān, wa ru'yā mimmā yuhadditsu-l-mar'u nafsah.", arti: "Mimpi ada tiga: mimpi baik dari Allah, mimpi menyedihkan dari setan, dan mimpi dari bisikan jiwa sendiri.", ref: "HR. Muslim no. 2263 — Shahih" },
      ]},
      { heading: "Adab Mimpi Buruk — 6 Langkah", content: [
        { t: "steps", items: ["Berlindung kepada Allah (isti'adzah) 3×", "Meludah ringan ke kiri 3× (tanpa air liur)", "Tidak menceritakannya kepada siapapun", "Berguling ke sisi lain", "Bangun dan shalat jika mampu", "Yakin mimpi itu tidak membahayakan — janji Nabi ﷺ"] },
        { t: "note", text: "HR. Bukhari no. 6986, Muslim no. 2261; kompilasi Ibn Hajar, Fathul Bari 12/370." },
      ]},
    ]
  },
  {
    id: 13, title: "Tidur", sub: "Benteng malam",
    sections: [
      { heading: "Doa Utama Sebelum Tidur", content: [
        { t: "dua", ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", latin: "Bismikallāhumma amūtu wa ahyā.", arti: "Dengan menyebut nama-Mu, ya Allah, aku mati dan aku hidup.", ref: "HR. Bukhari no. 6324 — Shahih" },
      ]},
      { heading: "Doa Penyerahan Diri", content: [
        { t: "dua", ar: "اَللَّهُمَّ أَسْلَمْتُ نَفْسِيْ إِلَيْكَ، وَفَوَّضْتُ أَمْرِيْ إِلَيْكَ، وَوَجَّهْتُ وَجْهِيَ إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِيْ إِلَيْكَ", latin: "Allāhumma aslamtu nafsī ilaik, wa fawwadhtu amrī ilaik, wa wajjahtu wajhī ilaik, wa alja'tu zhahrī ilaik.", arti: "Ya Allah, aku pasrahkan diriku kepada-Mu, aku serahkan urusanku kepada-Mu, aku hadapkan wajahku kepada-Mu, aku sandarkan punggungku kepada-Mu.", ref: "HR. Bukhari no. 247, Muslim no. 2710 — Shahih" },
        { t: "warn", text: "Nabi ﷺ mengoreksi Al-Bara' yang menyebut 'wa bi rasūlika' — yang benar adalah 'wa bi nabiyyika'. Harus jadi penutup terakhir." },
      ]},
      { heading: "Doa Meletakkan Lambung", content: [
        { t: "dua", ar: "بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ", latin: "Bismika Rabbī wadha'tu janbī, wa bika arfa'uh, fa in amsakta nafsī farhamhā, wa in arsaltahā fahfazhhā bimā tahfazhu bihi 'ibādakash-shālihīn.", arti: "Dengan nama-Mu, Rabbku, aku meletakkan lambungku. Jika Engkau menahan jiwaku, rahmatilah. Jika Engkau melepaskannya, jagalah sebagaimana Engkau menjaga hamba-hamba-Mu yang shalih.", ref: "HR. Bukhari no. 6320, Muslim no. 2714 — Shahih" },
      ]},
      { heading: "Sunnah Sebelum Tidur", content: [
        { t: "p", text: "Berwudhu sebelum tidur (HR. Bukhari no. 247)." },
        { t: "p", text: "Membaca Ayat Kursi — dijaga Allah, setan tidak mendekati sampai pagi (HR. Bukhari no. 3275)." },
        { t: "p", text: "Membaca 2 ayat terakhir Al-Baqarah — telah mencukupinya (HR. Bukhari no. 5009)." },
        { t: "p", text: "Membaca Al-Ikhlas, Al-Falaq, An-Nas lalu meniup telapak tangan dan mengusap tubuh, 3× (HR. Bukhari no. 5017)." },
        { t: "p", text: "Tidur miring ke kanan. Tengkurap dimurkai Allah (HR. Ibn Majah no. 3724)." },
      ]},
      { heading: "Dzikir Sebelum Tidur", content: [
        { t: "highlight", text: "Subhanallah 33× — Alhamdulillah 33× — Allahu Akbar 34×" },
        { t: "note", text: "HR. Bukhari no. 6318, Muslim no. 2727. Fathimah mengadu lelah. Nabi ﷺ: 'Maukah kuajarkan sesuatu yang lebih baik daripada pembantu?'" },
      ]},
      { heading: "Perlindungan Malam", content: [
        { t: "dua", ar: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", latin: "A'ūdzu bi kalimātillāhit-tāmmāti min syarri mā khalaq.", arti: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan apa yang Dia ciptakan.", ref: "HR. Muslim no. 2708 — Shahih" },
      ]},
      { heading: "Dzikir Terbangun Malam", content: [
        { t: "dua", ar: "لاَ إِلٰهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", latin: "Lā ilāha illallāhu wahdahu lā syarīka lah, lahul-mulku wa lahul-hamdu, wa huwa 'alā kulli syay'in qadīr.", arti: "Tidak ada tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Milik-Nya kerajaan dan segala pujian, Dia Maha Kuasa atas segala sesuatu.", ref: "HR. Bukhari no. 1154 — Shahih", fadl: "Barangsiapa membaca ini lalu berdoa — dikabulkan. Jika berwudhu lalu shalat — diterima." },
      ]},
    ]
  },
];

function Dua({ d }) {
  return (
    <div className="dua">
      <div className="dua-ar-wrap">
        <p className="dua-ar">{d.ar}</p>
      </div>
      {d.latin && <p className="dua-latin">{d.latin}</p>}
      <p className="dua-arti"><span className="arti-l">Artinya:</span> \u201c{d.arti}\u201d</p>
      <p className="dua-ref">{d.ref}</p>
      {d.fadl && <div className="dua-fadl">\u2726 <strong>Keutamaan:</strong> {d.fadl}</div>}
    </div>
  );
}

function Section({ s }) {
  return (
    <div className="sec">
      <h3 className="sec-h">{s.heading}</h3>
      {s.content.map((c, i) => {
        if (c.t === "dua") return <Dua key={i} d={c} />;
        if (c.t === "sub") return <h4 key={i} className="sec-sub">{c.text}</h4>;
        if (c.t === "warn") return <div key={i} className="box-warn">\u26a0 {c.text}</div>;
        if (c.t === "note") return <div key={i} className="box-note">{c.text}</div>;
        if (c.t === "highlight") return <div key={i} className="box-hl">{c.text}</div>;
        if (c.t === "steps") return (
          <ol key={i} className="ol">{c.items.map((s2, j) => <li key={j}>{s2}</li>)}</ol>
        );
        return (
          <p key={i} className="p-body">
            {c.text}
            {c.src && <span className="p-src"> ({c.src})</span>}
          </p>
        );
      })}
    </div>
  );
}

export default function App() {
  const [ch, setCh] = useState(null);
  const [mob, setMob] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const ref = useRef(null);

  const go = (id) => { setCh(id); setMob(false); setFadeKey(k => k + 1); };
  useEffect(() => { if (ref.current) ref.current.scrollTop = 0; }, [ch]);

  const cur = ch !== null ? DATA.find(d => d.id === ch) : null;

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');

:root {
  --bg: #f6f3ec; --paper: #fdfcf9; --ink: #1e1e1e; --ink2: #4a4a4a; --ink3: #8a8580;
  --green: #1a6b3c; --green-d: #0d4425; --green-l: #ebf3ee; --green-m: #2d8a55;
  --gold: #a17c28; --gold-bg: #faf6eb; --line: #e4ded4; --sidebar: #0e2f1a;
}
* { margin:0; padding:0; box-sizing:border-box; }
.shell { display:flex; height:100vh; background:var(--bg); overflow:hidden; }

.side { width:264px; min-width:264px; background:var(--sidebar); display:flex; flex-direction:column; transition:transform .28s cubic-bezier(.4,0,.2,1); }
.side-top { padding:32px 24px 24px; border-bottom:1px solid rgba(255,255,255,.06); }
.side-top h1 { font-family:'Cormorant Garamond',serif; font-size:17px; font-weight:600; color:#c9a94e; line-height:1.35; }
.side-top span { font-family:'Lora',serif; font-size:11px; color:rgba(255,255,255,.3); display:block; margin-top:5px; }
.side-scroll { flex:1; overflow-y:auto; padding:10px 0 24px; }
.side-scroll::-webkit-scrollbar { width:0; }

.si { display:flex; align-items:baseline; gap:14px; padding:9px 24px; cursor:pointer; border-left:2.5px solid transparent; transition:all .12s ease; }
.si:hover { background:rgba(255,255,255,.035); }
.si.on { background:rgba(255,255,255,.06); border-left-color:#c9a94e; }
.si-n { font-family:'Cormorant Garamond',serif; font-size:12px; color:#c9a94e; min-width:16px; opacity:.55; }
.si.on .si-n { opacity:1; }
.si-t { font-family:'Lora',serif; font-size:13px; color:rgba(255,255,255,.5); line-height:1.35; }
.si.on .si-t { color:rgba(255,255,255,.92); font-weight:500; }

.main { flex:1; overflow-y:auto; scroll-behavior:smooth; }
.main::-webkit-scrollbar { width:4px; }
.main::-webkit-scrollbar-thumb { background:var(--line); border-radius:4px; }

.land { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:60px 32px; background:linear-gradient(180deg,var(--paper),var(--bg)); text-align:center; animation:fu .6s ease both; }
@keyframes fu { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
.land-orn { width:100px; height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin-bottom:36px; }
.land-bism { font-family:'Amiri',serif; font-size:30px; color:var(--green); direction:rtl; line-height:2; margin-bottom:40px; }
.land h1 { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:600; color:var(--green-d); line-height:1.25; margin-bottom:10px; }
.land h2 { font-family:'Lora',serif; font-size:13px; font-weight:400; color:var(--ink3); letter-spacing:.12em; text-transform:uppercase; margin-bottom:32px; }
.land>p { font-family:'Lora',serif; font-size:15px; line-height:1.75; color:var(--ink2); max-width:400px; margin-bottom:40px; }
.land-btn { font-family:'Cormorant Garamond',serif; font-size:15px; font-weight:600; padding:11px 40px; background:var(--green); color:#fff; border:none; border-radius:5px; cursor:pointer; transition:all .18s ease; }
.land-btn:hover { background:var(--green-d); box-shadow:0 6px 20px rgba(13,68,37,.18); transform:translateY(-1px); }
.land-ft { margin-top:40px; font-family:'Lora',serif; font-size:11px; color:var(--ink3); }

.chp { max-width:600px; margin:0 auto; padding:52px 44px 80px; animation:fu .45s ease both; }
.chp-top { text-align:center; padding-bottom:28px; margin-bottom:32px; border-bottom:1px solid var(--line); }
.chp-num { display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:50%; background:var(--green); color:#fff; font-family:'Cormorant Garamond',serif; font-size:14px; font-weight:700; margin-bottom:14px; }
.chp-top h2 { font-family:'Cormorant Garamond',serif; font-size:26px; font-weight:600; color:var(--green-d); margin-bottom:4px; line-height:1.2; }
.chp-top p { font-family:'Lora',serif; font-size:14px; color:var(--gold); font-style:italic; }

.sec { margin-bottom:28px; }
.sec-h { font-family:'Cormorant Garamond',serif; font-size:17px; font-weight:600; color:var(--green); margin-bottom:3px; }
.sec-h::after { content:''; display:block; width:32px; height:2px; background:var(--green-m); margin-top:5px; margin-bottom:14px; border-radius:1px; }
.sec-sub { font-family:'Lora',serif; font-size:14px; font-weight:600; color:var(--ink); margin:18px 0 6px; }

.dua { margin:10px 0 14px; }
.dua-ar-wrap { background:var(--green-l); border:1px solid #c6d9cd; border-radius:8px; padding:20px 22px 18px; margin-bottom:8px; position:relative; overflow:hidden; }
.dua-ar-wrap::after { content:''; position:absolute; top:8px; right:0; bottom:8px; width:3.5px; background:var(--green-m); border-radius:2px 0 0 2px; }
.dua-ar { font-family:'Amiri',serif; font-size:22px; line-height:2.1; color:var(--green-d); direction:rtl; text-align:right; padding-right:6px; }
.dua-latin { font-family:'Lora',serif; font-size:13px; font-style:italic; color:var(--green-m); line-height:1.6; margin-bottom:5px; }
.dua-arti { font-family:'Lora',serif; font-size:14px; line-height:1.65; color:var(--ink); margin-bottom:4px; }
.arti-l { font-weight:600; }
.dua-ref { font-family:'Lora',serif; font-size:11px; color:var(--ink3); line-height:1.45; }
.dua-fadl { margin-top:8px; padding:9px 14px; background:var(--gold-bg); border-radius:6px; font-family:'Lora',serif; font-size:13px; line-height:1.55; color:#5c4a12; }

.p-body { font-family:'Lora',serif; font-size:14px; line-height:1.7; color:var(--ink2); margin-bottom:7px; }
.p-src { font-size:11px; color:var(--ink3); }
.box-note { font-family:'Lora',serif; font-size:12.5px; line-height:1.6; color:var(--ink2); padding:10px 14px; background:#f5f2ea; border-left:2.5px solid var(--line); border-radius:0 6px 6px 0; margin:8px 0; }
.box-warn { font-family:'Lora',serif; font-size:12.5px; line-height:1.6; color:#6b5510; padding:10px 14px; background:var(--gold-bg); border-left:2.5px solid var(--gold); border-radius:0 6px 6px 0; margin:8px 0; }
.box-hl { font-family:'Cormorant Garamond',serif; font-size:16px; font-weight:600; line-height:1.5; color:var(--green-d); padding:14px 18px; background:var(--green-l); border-radius:6px; margin:8px 0 12px; text-align:center; }
.ol { padding-left:20px; margin:8px 0 10px; }
.ol li { font-family:'Lora',serif; font-size:13.5px; line-height:1.65; color:var(--ink2); margin-bottom:3px; }
.ol li::marker { color:var(--green-m); font-weight:600; }

.ch-nav { display:flex; justify-content:space-between; gap:12px; margin-top:40px; padding-top:24px; border-top:1px solid var(--line); }
.nbtn { font-family:'Lora',serif; font-size:13px; padding:9px 20px; background:var(--paper); border:1px solid var(--line); border-radius:5px; color:var(--ink2); cursor:pointer; transition:all .14s ease; }
.nbtn:hover { border-color:var(--green-m); color:var(--green); background:var(--green-l); }
.nbtn-p { background:var(--green); color:#fff; border-color:var(--green); }
.nbtn-p:hover { background:var(--green-d); border-color:var(--green-d); color:#fff; }

.mbar { display:none; position:fixed; top:0;left:0;right:0; height:50px; background:var(--sidebar); z-index:100; align-items:center; padding:0 16px; gap:14px; }
.mbar button { background:none; border:none; color:rgba(255,255,255,.75); font-size:18px; cursor:pointer; }
.mbar h1 { font-family:'Cormorant Garamond',serif; font-size:14px; color:#c9a94e; font-weight:500; }
.ov { display:none; position:fixed; inset:0; background:rgba(0,0,0,.35); z-index:199; }
.ov.on { display:block; }

@media(max-width:740px) {
  .mbar{display:flex}
  .side{position:fixed;top:0;left:0;bottom:0;z-index:200;transform:translateX(-100%)}
  .side.on{transform:translateX(0)}
  .main{padding-top:50px}
  .chp{padding:32px 24px 60px}
  .dua-ar{font-size:19px;line-height:2}
  .land{padding-top:80px}
}
      `}</style>

      <div className="shell">
        <div className="mbar">
          <button onClick={() => setMob(true)}>\u2630</button>
          <h1>Panduan Adab & Sunnah</h1>
        </div>
        <div className={"ov" + (mob ? " on" : "")} onClick={() => setMob(false)} />
        <aside className={"side" + (mob ? " on" : "")}>
          <div className="side-top">
            <h1>Panduan Adab &<br/>Sunnah Harian</h1>
            <span>Berdasarkan Hadits Shahih</span>
          </div>
          <nav className="side-scroll">
            {DATA.map(d => (
              <div key={d.id} className={"si" + (ch === d.id ? " on" : "")} onClick={() => go(d.id)}>
                <span className="si-n">{d.id}</span>
                <span className="si-t">{d.title}</span>
              </div>
            ))}
          </nav>
        </aside>
        <main className="main" ref={ref}>
          {!cur ? (
            <div className="land">
              <div className="land-orn" />
              <div className="land-bism">{"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"}</div>
              <h1>Panduan Adab &amp;<br/>Sunnah Harian</h1>
              <h2>Berdasarkan Hadits Shahih</h2>
              <p>Amalan harian Nabi Muhammad \uFDFA dari bangun tidur hingga tidur kembali, disertai dalil shahih dan penjelasan ulama mu'tabar.</p>
              <button className="land-btn" onClick={() => go(1)}>Mulai Membaca</button>
              <div className="land-ft">Merujuk pada penilaian Al-Albani, Ibnu Baz, & Ibnu Utsaimin</div>
            </div>
          ) : (
            <div className="chp" key={fadeKey}>
              <div className="chp-top">
                <div className="chp-num">{cur.id}</div>
                <h2>{cur.title}</h2>
                <p>{cur.sub}</p>
              </div>
              {cur.sections.map((s, i) => <Section key={i} s={s} />)}
              <div className="ch-nav">
                {cur.id > 1 ? <button className="nbtn" onClick={() => go(cur.id - 1)}>{"\u2190"} {DATA[cur.id - 2].title}</button> : <span />}
                {cur.id < 13 ? <button className="nbtn nbtn-p" onClick={() => go(cur.id + 1)}>{DATA[cur.id].title} {"\u2192"}</button> : <button className="nbtn" onClick={() => go(null)}>{"\u2190"} Halaman Utama</button>}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
