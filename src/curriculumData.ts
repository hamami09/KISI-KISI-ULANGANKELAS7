import { CurriculumBlueprint } from "./types";

export const curriculumDatabase: CurriculumBlueprint[] = [
  {
    subjectId: "matematika",
    subjectName: "Matematika",
    capaianPembelajaran: "Peserta didik dapat menyelesaikan masalah yang berkaitan dengan perbandingan senilai dan berbalik nilai, menggunakan konsep aritmetika sosial (persentase, diskon, bruto, tara, netto, bunga tunggal, pajak) dalam transaksi ekonomi sehari-hari, serta memahami sifat-sifat garis dan hubungan antar sudut pada bidang datar.",
    topics: [
      {
        name: "Perbandingan (Senilai & Berbalik Nilai)",
        description: "Konsep rasio, perbandingan senilai (proporsional), dan perbandingan berbalik nilai beserta aplikasinya pada peta/skala dan pembagian proporsional.",
        indicators: [
          "Menganalisis situasi sehari-hari yang berkaitan dengan rasio atau perbandingan senilai/berbalik nilai (C4 - Analisis).",
          "Memecahkan masalah kontekstual mengenai skala peta atau model miniatur menggunakan perbandingan senilai (C4 - Analisis).",
          "Menyimpulkan pengaruh perubahan satu variabel terhadap variabel lain dalam kasus perbandingan berbalik nilai (C5 - Evaluasi)."
        ]
      },
      {
        name: "Aritmetika Sosial",
        description: "Perhitungan finansial dasar sehari-hari seperti nilai barang (untung, rugi, persentase), potongan harga (diskon), beban tambahan (pajak), serta pengukuran fisik (bruto, netto, tara).",
        indicators: [
          "Menghitung persentase keuntungan atau kerugian dari suatu transaksi perdagangan bertingkat (C3 - Aplikasi).",
          "Menganalisis perbandingan diskon ganda pada dua toko berbeda untuk menentukan harga akhir yang paling hemat (C4 - Analisis).",
          "Memecahkan masalah terkait bruto, netto, dan tara dalam kemasan produk komersial untuk menghitung efisiensi harga beli (C4 - Analisis)."
        ]
      },
      {
        name: "Geometri (Garis dan Sudut)",
        description: "Kedudukan dua garis (sejajar, berpotongan, berhimpit), hubungan antar sudut (berpelurus, berpenyiku, bertolak belakang), serta sudut-sudut yang terbentuk oleh dua garis sejajar yang dipotong garis transversal.",
        indicators: [
          "Menentukan nilai sudut yang tidak diketahui pada gambar garis transversal sejajar menggunakan sifat sudut sehadap/dalam berseberangan (C3 - Aplikasi).",
          "Menganalisis hubungan antar sudut (berpelurus atau bertolak belakang) untuk menyusun persamaan aljabar mencari nilai variabel tertentu (C4 - Analisis).",
          "Mengkonstruksi pembuktian sederhana mengenai hubungan dua garis lurus jika besar sudut-sudut sepihaknya diketahui (C5 - Evaluasi)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "mat_01",
        questionText: "Sebuah proyek pembangunan jembatan ditargetkan selesai dalam waktu 30 hari oleh 12 orang pekerja. Setelah dikerjakan selama 10 hari, pekerjaan dihentikan selama 4 hari karena cuaca ekstrem. Jika proyek harus selesai tepat waktu sesuai target awal, berapa banyak tambahan pekerja yang dibutuhkan?",
        options: [
          "A. 3 orang",
          "B. 4 orang",
          "C. 6 orang",
          "D. 15 orang"
        ],
        correctAnswer: "A",
        explanation: "Konsep perbandingan berbalik nilai. Sisa hari normal adalah 30 - 10 = 20 hari, yang bisa selesai dengan 12 pekerja (Beban kerja = 20 hari x 12 pekerja = 240 orang-hari). Akibat libur 4 hari, waktu tersisa tinggal 20 - 4 = 16 hari. Jumlah pekerja yang dibutuhkan (X) agar selesai dalam 16 hari: 16 * X = 240, didapat X = 15 pekerja. Tambahan pekerja yang dibutuhkan = 15 - 12 = 3 orang."
      },
      {
        id: "mat_02",
        questionText: "Toko 'Amanah' menjual sebuah jaket dengan harga Rp250.000,00 dan menawarkan diskon sebesar 20%. Toko 'Berkah' menjual jaket yang sama dengan harga Rp280.000,00 namun memberikan diskon bertingkat sebesar 15% + 10%. Pernyataan manakah yang paling tepat jika seorang pembeli ingin mencari jaket dengan harga termurah?",
        options: [
          "A. Toko Berkah lebih murah karena total diskonnya adalah 25%.",
          "B. Toko Amanah lebih murah dengan harga akhir Rp200.000,00.",
          "C. Toko Berkah lebih murah dengan harga akhir Rp198.400,00.",
          "D. Kedua toko menawarkan harga akhir yang persis sama setelah diskon."
        ],
        correctAnswer: "B",
        explanation: "Perhitungan harga akhir di kedua toko:\n1. Toko Amanah: Diskon 20% dari Rp250.000 = Rp50.000. Harga akhir = Rp250.000 - Rp50.000 = Rp200.000.\n2. Toko Berkah: Diskon bertingkat 15% + 10%. Diskon pertama = 15% x Rp280.000 = Rp42.000 (Harga setelah diskon pertama = Rp238.000). Diskon kedua = 10% x Rp238.000 = Rp23.800. Harga akhir = Rp238.000 - Rp23.800 = Rp214.200.\nJadi, Toko Amanah lebih murah karena harga akhirnya Rp200.000,00 sedangkan Toko Berkah Rp214.200,00."
      },
      {
        id: "mat_03",
        questionText: "Dua garis sejajar g dan h dipotong oleh garis transversal k. Sudut A1 (luar berseberangan dengan B7) memiliki besar (3x + 15) derajat, sedangkan sudut B7 memiliki besar (5x - 25) derajat. Berapakah besar sudut pelurus dari sudut A1?",
        options: [
          "A. 20 derajat",
          "B. 75 derajat",
          "C. 105 derajat",
          "D. 180 derajat"
        ],
        correctAnswer: "C",
        explanation: "Dua sudut luar berseberangan memiliki besar yang sama. Maka A1 = B7.\n3x + 15 = 5x - 25\n2x = 40 => x = 20.\nBesar sudut A1 = 3(20) + 15 = 75 derajat.\nSudut pelurus (suplemen) dari A1 adalah sudut yang jika dijumlahkan menghasilkan 180 derajat. Pelurus A1 = 180 - 75 = 105 derajat."
      }
    ]
  },
  {
    subjectId: "ipa",
    subjectName: "Ilmu Pengetahuan Alam (IPA)",
    capaianPembelajaran: "Peserta didik dapat mengidentifikasi interaksi ekologi antarmakhluk hidup dan lingkungannya, merancang upaya pencegahan pencemaran lingkungan serta pelestarian keanekaragaman hayati Indonesia. Peserta didik juga mampu menganalisis karakteristik sistem tata surya, gerak bumi, gerak bulan, dan dampaknya terhadap fenomena alam di bumi.",
    topics: [
      {
        name: "Ekologi dan Keanekaragaman Hayati",
        description: "Komponen ekosistem (biotik & abiotik), rantai dan jaring makanan, tipe interaksi organisme (simbiosis, kompetisi, predasi), pencemaran lingkungan, serta pentingnya menjaga keanekaragaman hayati khas Indonesia (fauna tipe Asiatis, Peralihan, Australis).",
        indicators: [
          "Menganalisis dampak kepunahan suatu konsumen tingkat satu terhadap keseimbangan jaring-jaring makanan di suatu ekosistem hutan (C4 - Analisis).",
          "Membandingkan perilaku adaptasi morfologi dan fisiologi pada flora/fauna endemik Indonesia sebagai bentuk respon pertahanan habitat (C4 - Analisis).",
          "Memformulasikan solusi ekologis berbasis kearifan lokal guna menangani akumulasi limbah plastik mikro di perairan tawar (C6 - Kreasi)."
        ]
      },
      {
        name: "Bumi dan Tata Surya",
        description: "Anggota tata surya (planet, asteroid, komet, meteoroid), karakteristik bumi, akibat rotasi dan revolusi bumi (pergantian musim, perbedaan waktu, gerak semu), serta fenomena konjungsi benda langit seperti gerhana matahari dan bulan.",
        indicators: [
          "Membandingkan karakteristik planet kebumian (terrestrial) dengan planet gas raksasa (jovian) berdasarkan densitas dan komposisi atmosfer (C4 - Analisis).",
          "Menganalisis perbedaan lamanya waktu siang dan malam di belahan bumi utara dan selatan akibat kemiringan poros bumi saat revolusi (C4 - Analisis).",
          "Menggambarkan skema posisi orbit bumi, bulan, dan matahari untuk memprediksi jenis pasang-surut air laut maksimum (pasang perbani vs pasang purnama) (C4 - Analisis)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "ipa_01",
        questionText: "Di sebuah ekosistem persawahan, populasi burung hantu mengalami penurunan drastis akibat perburuan liar oleh manusia. Dampak ekologis berantai yang paling mungkin terjadi pada ekosistem tersebut adalah...",
        options: [
          "A. Populasi ular sawah menurun diikuti peningkatan populasi padi.",
          "B. Populasi tikus sawah meningkat tajam sehingga produktivitas padi menurun drastis.",
          "C. Populasi serangga hama meningkat karena hilangnya predator utama.",
          "D. Tanaman padi tumbuh subur karena nutrisi tanah bertambah dari sisa tubuh burung hantu."
        ],
        correctAnswer: "B",
        explanation: "Burung hantu merupakan predator alami utama bagi tikus sawah (konsumen tingkat 1). Jika populasi burung hantu menurun drastis, tikus sawah kehilangan pemangsanya sehingga populasinya melonjak tajam (ledakan populasi). Akibatnya, tanaman padi selaku produsen dasar akan habis dimakan oleh tikus, menurunkan produktivitas pertanian sawah secara signifikan."
      },
      {
        id: "ipa_02",
        questionText: "Garis Wallace dan Weber membagi wilayah Indonesia menjadi tiga zona zoogeografi. Seekor satwa memiliki ciri kulit tebal, berkantung untuk merawat anaknya yang baru lahir, serta berukuran tubuh relatif kecil. Di wilayah manakah habitat asli hewan ini dapat ditemukan?",
        options: [
          "A. Kalimantan Timur (Tipe Asiatis)",
          "B. Sulawesi Selatan (Tipe Peralihan)",
          "C. Papua Barat (Tipe Australis)",
          "D. Sumatra Utara (Tipe Neotropis)"
        ],
        correctAnswer: "C",
        explanation: "Hewan berkantung (marsupialia) seperti kuskus, walabi, dan kanguru pohon merupakan ciri khas fauna tipe Australis. Di Indonesia, fauna tipe ini hidup di wilayah bagian timur (Papua, Kepulauan Aru) yang dibatasi oleh Garis Weber. Sumatra dan Kalimantan berciri fauna Asiatis (mamalia besar, kera, tidak berkantung), sedangkan Sulawesi dihuni tipe Peralihan/Endemik."
      },
      {
        id: "ipa_03",
        questionText: "Ketika belahan bumi utara mengalami puncak musim dingin pada bulan Desember, belahan bumi selatan justru mengalami puncak musim panas. Faktor utama yang melatarbelakangi perbedaan musim yang berkebalikan ini adalah...",
        options: [
          "A. Rotasi Bumi pada porosnya yang menghasilkan siklus siang dan malam.",
          "B. Revolusi Bumi mengelilingi matahari dengan kemiringan poros bumi sebesar 23.5 derajat terhadap bidang ekliptika.",
          "C. Orbit elips Bumi yang menyebabkan jarak Bumi-Matahari berubah secara drastis sepanjang tahun.",
          "D. Pergeseran lempeng tektonik global yang mempengaruhi distribusi suhu kutub."
        ],
        correctAnswer: "B",
        explanation: "Perbedaan musim di kedua belahan bumi disebabkan oleh revolusi bumi mengelilingi matahari dalam kondisi poros bumi miring 23,5 derajat terhadap bidang tegak lurus ekliptika. Pada bulan Desember, belahan bumi selatan condong ke arah matahari (menerima intensitas cahaya matahari langsung lebih lama/panas), sedangkan belahan bumi utara menjauhi matahari (menerima sedikit cahaya/dingin)."
      }
    ]
  },
  {
    subjectId: "bahasa_indonesia",
    subjectName: "Bahasa Indonesia",
    capaianPembelajaran: "Peserta didik mampu menganalisis gagasan, pikiran, pandangan, arahan, atau pesan dari berbagai jenis teks (berita, surat pribadi dan resmi, serta literasi fiksi/nonfiksi) baik lisan maupun tulis, serta menulis gagasan tersebut secara logis dan runtut sesuai kaidah kebahasaan Indonesia.",
    topics: [
      {
        name: "Teks Berita",
        description: "Struktur teks berita (Kepala/Lead, Tubuh Berita, Kaki Berita), unsur berita ADiKSiMBa (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana) atau 5W+1H, serta aspek kebahasaan berita seperti kalimat langsung/tidak langsung dan kata kerja mental.",
        indicators: [
          "Mengklasifikasikan struktur teks berita acak menjadi bagian kepala berita, tubuh berita, dan ekor berita secara logis (C4 - Analisis).",
          "Menganalisis keaslian fakta vs opini dalam sebuah teks berita daring yang kontroversial (C4 - Analisis).",
          "Mengonversi kalimat langsung dalam teks wawancara berita menjadi kalimat tidak langsung tanpa mengubah isi informasi pokok (C3 - Aplikasi)."
        ]
      },
      {
        name: "Surat Pribadi dan Surat Resmi",
        description: "Perbedaan fungsi, struktur, dan ragam bahasa dari surat pribadi (kekeluargaan, non-formal) dengan surat resmi (dinas, organisasi, menggunakan kop surat, nomor surat, bahasa baku, dan tanda tangan instansi).",
        indicators: [
          "Menganalisis kesalahan penggunaan tanda baca dan kata sapaan tidak baku dalam draf surat dinas osis sekolah (C4 - Analisis).",
          "Membedakan tujuan komunikatif surat pribadi dan surat resmi berdasarkan bagian pembuka dan penutupnya (C4 - Analisis).",
          "Menyusun surat pribadi dengan gaya bahasa santun namun hangat untuk sahabat karib yang berada di luar pulau (C6 - Kreasi)."
        ]
      },
      {
        name: "Literasi Buku Fiksi dan Nonfiksi",
        description: "Unsur intrinsik buku fiksi (tema, tokoh, alur, latar, amanat) dan unsur ekstrinsik, serta karakteristik fungsional buku nonfiksi (indeks, daftar pustaka, glosarium, fakta ilmiah). Teknik merangkum buku dengan peta pikiran (mind mapping).",
        indicators: [
          "Menganalisis watak tokoh protagonis secara tidak langsung (implisit) melalui dialog antar tokoh dalam cuplikan cerpen (C4 - Analisis).",
          "Membandingkan keakuratan data pendukung pada bagian penahbisan indeks dan glosarium dalam buku ilmiah populer (C4 - Analisis).",
          "Membuat komentar atau resensi objektif mengenai kelebihan dan kelemahan penulisan buku komik fabel anak (C5 - Evaluasi)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "bi_01",
        questionText: "Bacalah teks berikut:\n'Siswa SMP Negeri 1 Serang berhasil mengolah limbah minyak jelantah sekolah menjadi lilin aromaterapi ramah lingkungan pada Jumat (22/5). Kegiatan inovatif ini dibimbing oleh guru IPA di laboratorium sekolah dengan tujuan mengurangi pencemaran air sungai akibat minyak goreng rumah tangga.'\nUnsur ADiKSiMBa yang tidak ditulis secara rinci dalam paragraf berita di atas adalah...",
        options: [
          "A. Siapa (subjek pelaku inovasi tersebut)",
          "B. Mengapa (alasan dilaksanakannya pengolahan limbah)",
          "C. Bagaimana (proses detil pembuatan lilin dari minyak jelantah)",
          "D. Kapan (waktu pelaksanaan kegiatan)"
        ],
        correctAnswer: "C",
        explanation: "Paragraf berita tersebut memuat informasi: 'Siswa SMPN 1 Serang' (Siapa), 'olahan jelantah jadi lilin' (Apa), 'Jumat 22/5' (Kapan), 'laboratorium sekolah' (Di mana), 'mengurangi pencemaran sungai' (Mengapa). Namun, paragraf ini TIDAK menjelaskan langkah-langkah runtut atau proses detil pembuatan lilin tersebut (Bagaimana). Jadi unsur 'Bagaimana' adalah yang paling kurang rinci."
      },
      {
        id: "bi_02",
        questionText: "Perhatikan kutipan bagian surat berikut:\n'Dengan hormat,\nMadrasah kami bermaksud mengadakan studi banding kelestarian alam ke Kebun Raya Bogor. Berkenaan dengan hal tersebut, kami mengajukan permohonan izin kunjungan pada hari Rabu, 10 Juni 2026...'\nBerdasarkan struktur dan pemilihan kosakatanya, kutipan tersebut merupakan bagian dari...",
        options: [
          "A. Pembuka surat pribadi karena menggunakan sapaan hangat kekeluargaan.",
          "B. Isi surat resmi karena menggunakan kop madrasah dan bahasa baku instruktif.",
          "C. Isi surat resmi dinas karena menyampaikan tujuan delegasi formal instansi dengan kalimat baku.",
          "D. Penutup surat dinas karena meminta permohonan persetujuan akomodasi."
        ],
        correctAnswer: "C",
        explanation: "Kutipan surat tersebut memuat salam pembuka baku ('Dengan hormat'), bahasa resmi-baku, dan menyampaikan esensi tujuan pengiriman surat berupa permohonan izin kunjungan studi oleh suatu lembaga (Madrasah). Sesuai strukturnya, ini merupakan bagian isi (maksud/tujuan) dari surat resmi dinas."
      },
      {
        id: "bi_03",
        questionText: "Di bawah ini, manakah yang termasuk ke dalam ciri buku nonfiksi yang membedakannya dengan cerpen atau novel fiksi?",
        options: [
          "A. Menyajikan konflik batin antartokoh secara dramatis dan menggunakan sudut pandang orang pertama.",
          "B. Memuat halaman indeks yang memfasilitasi pencarian kata kunci istilah ilmiah secara cepat.",
          "C. Alur cerita bersifat maju-mundur untuk meningkatkan rasa penasaran pembaca.",
          "D. Bahasa yang digunakan bermakna konotatif yang kaya akan kiasan puitis."
        ],
        correctAnswer: "B",
        explanation: "Buku nonfiksi menyajikan informasi faktual berbasis keilmuan atau data nyata. Salah satu kelengkapan penulisan dalam aspek akademis nonfiksi adalah halaman indeks (daftar kata penting yang tersusun secara alfabetis beserta letak halamannya) untuk kemudahan navigasi pembaca ilmiah. Sementara opsi A, C, dan D merupakan karakteristik karya fiksi (naratif/imajinatif)."
      }
    ]
  },
  {
    subjectId: "ips",
    subjectName: "Ilmu Pengetahuan Sosial (IPS)",
    capaianPembelajaran: "Peserta didik mampu memahami konsep interaksi antarmanusia dengan lingkungan sekitarnya, menganalisis ragam kegiatan ekonomi masyarakat dalam memenuhi kebutuhan hidupnya, serta menjelaskan periodisasi kehidupan bangsa Indonesia mulai dari masa praaksara, Hindu-Buddha, hingga perkembangan kerajaan Islam di Nusantara.",
    topics: [
      {
        name: "Ragam Kegiatan Ekonomi",
        description: "Kegiatan produksi (pola efisiensi, input/output), distribusi (saluran distribusi langsung & tidak langsung, peran agen/perantara), dan konsumsi (faktor selera, pendapatan, harga barang). Dilengkapi pelaku ekonomi seperti rumah tangga keluarga, produsen, pemerintah, dan luar negeri.",
        indicators: [
          "Menganalisis pengaruh maraknya jual beli online (ecommerce) terhadap efisiensi mata rantai distribusi barang konsumsi (C4 - Analisis).",
          "Membandingkan perilaku konsumsi rasional dan irasional berdasarkan skala prioritas kebutuhan siswa (C4 - Analisis).",
          "Menyusun diagram siklus interaksi (circular flow diagram) dua sektor antar rtk dan rtp (C6 - Kreasi)."
        ]
      },
      {
        name: "Kehidupan Masa Praaksara hingga Kerajaan Islam",
        description: "Pembagian zaman praaksara secara geologis & arkeologis, teori masuknya agama Hindu-Buddha (Ksatria, Waisya, Brahmana, Arus Balik), serta perkembangan kerajaan-kerajaan besar Islam di Nusantara (Samudera Pasai, Demak, Gowa-Tallo) beserta peninggalan budayanya.",
        indicators: [
          "Menganalisis perbedaan corak kehidupan sosial-ekonomi masyarakat berburu tingkat lanjut dengan masa bercocok tanam (C4 - Analisis).",
          "Membandingkan kelebihan dan kelemahan Teori Brahmana dengan Teori Arus Balik terkait penyebaran Hindu di Indonesia (C5 - Evaluasi).",
          "Menghubungkan letak geografis strategis Kerajaan Demak dengan peranannya dalam monopoli perdagangan rempah maritim Jawa-Maluku (C4 - Analisis)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "ips_01",
        questionText: "Zahra menerima uang saku mingguan sebesar Rp150.000,00. Ia mencatat kebutuhan minggunya: membeli buku paket IPS (Rp65.000,00), mengisi kuota belajar (Rp40.000,00), menabung (Rp20.000,00), dan membeli sepatu olahraga bermerek impor baru yang sedang tren (Rp350.000,00). Tindakan prioritas yang paling mencerminkan prinsip ekonomi rasional bagi Zahra adalah...",
        options: [
          "A. Meminjam uang temannya agar bisa langsung membeli sepatu olahraga baru.",
          "B. Mengabaikan buku paket IPS dan mengalokasikan seluruh uang saku untuk kuota serta sepatu.",
          "C. Membeli buku paket, kuota internet, menabung sisa uangnya, dan menunda pembelian sepatu.",
          "D. Membagi habis uang saku untuk kuota belajar dan membeli sepatu tiruan (imitasi)."
        ],
        correctAnswer: "C",
        explanation: "Prinsip ekonomi rasional menuntut pelaku konsumsi menyusun skala prioritas berdasarkan tingkat kepentingan dan kesesuaian anggaran. Buku paket (pendidikan) dan kuota belajar adalah kebutuhan primer/mendesak bagi seorang pelajar, sedangkan sepatu olahraga baru (terlebih yang mahal melampaui tabungan) adalah kebutuhan tersier yang bisa ditunda. Memilih membeli kebutuhan utama dan menabung sisa uang adalah tindakan yang paling ekonomis dan rasional."
      },
      {
        id: "ips_02",
        questionText: "Masyarakat pada masa bercocok tanam (neolitikum) sudah mulai menetap (sedenter) dan tidak lagi berpindah-pindah (nomaden). Perubahan pola hunian ini dipengaruhi oleh perkembangan kemampuan penting, yaitu...",
        options: [
          "A. Kemampuannya memproduksi alat dari logam perunggu untuk berperang.",
          "B. Penemuan api yang digunakan untuk berburu binatang buas jarak jauh.",
          "C. Kemampuan bercocok tanam, berternak, dan membangun pondok tempat tinggal sederhana.",
          "D. Adanya kepemimpinan kepala suku (primus inter pares) yang bersifat mutlak."
        ],
        correctAnswer: "C",
        explanation: "Perubahan pola hidup nomaden (berpindah-pindah mencari makan / food gathering) menjadi sedenter (menetap) terjadi karena manusia purba mulai menguasai teknik memproduksi makanannya sendiri (food producing). Caranya adalah dengan bercocok tanam padi/umbi-umbian serta menjinakkan hewan ternak. Karena tanaman butuh dirawat hingga panen, mereka pun mendirikan permukiman permanen sederhana."
      },
      {
        id: "ips_03",
        questionText: "Teori Arus Balik dalam masuknya pengaruh Hindu-Buddha ke Nusantara menekankan peran aktif dari rakyat Indonesia sendiri. Fakta sejarah manakah yang memperkuat keabsahan teori ini?",
        options: [
          "A. Penemuan Prasasti Nalanda yang menyebut pendirian asrama bagi pelajar Sriwijaya di India untuk belajar agama.",
          "B. Adanya kasta ksatria buronan perang yang mendirikan koloni baru di pedalaman Jawa.",
          "C. Penggunaan aksara Pallawa dan bahasa Sanskerta yang hanya dimengerti oleh kaum Brahmana India.",
          "D. Penjelajahan pedagang rempah-rempah Gujarat yang melakukan pernikahan dengan putri raja nusantara."
        ],
        correctAnswer: "A",
        explanation: "Teori Arus Balik (dikemukakan oleh F.D.K. Bosch) menyatakan bahwa pemuda Nusantara pergi ke India untuk belajar agama Buddha secara mendalam di pusat keagamaan Nalanda, dan sekembalinya ke tanah air mereka menyebarkan ajaran tersebut. Bukti arkeologis kuatnya adalah Prasasti Nalanda di India yang menerangkan pembangunan vihara khusus atas permintaan Raja Balaputradewa dari Kerajaan Sriwijaya untuk para pelajar Sriwijaya."
      }
    ]
  },
  {
    subjectId: "ppkn",
    subjectName: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
    capaianPembelajaran: "Peserta didik dapat mengidentifikasi keberagaman suku, agama, ras, dan antargolongan dalam bingkai Bhinneka Tunggal Ika secara inklusif. Peserta didik juga memahami karakteristik daerah tempat tinggalnya dalam kerangka Negara Kesatuan Republik Indonesia (NKRI) serta berkomitmen menjaga persatuan bangsa.",
    topics: [
      {
        name: "Keberagaman Indonesia (Bhinneka Tunggal Ika)",
        description: "Keberagaman suku bangsa, bahasa daerah, sistem kekerabatan (patrilineal, matrilineal, parental), keberagaman agama-kepercayaan di Indonesia, prasangka primordialisme/etnosentrisme, serta sikap toleransi beragama.",
        indicators: [
          "Menganalisis pemicu konflik sosial yang bersumber dari sikap etnosentrisme di lingkungan masyarakat majemuk (C4 - Analisis).",
          "Menyimpulkan fungsi semboyan Bhinneka Tunggal Ika sebagai instrumen integrasi nasional dalam menghadapi globalisasi (C5 - Evaluasi).",
          "Merancang kampanye digital anti-perundungan berbasis keberagaman budaya di lingkungan sekolah (C6 - Kreasi)."
        ]
      },
      {
        name: "Karakteristik Daerah dan NKRI",
        description: "Peranan daerah dalam perjuangan proklamasi kemerdekaan, bentuk kerangka NKRI berdasarkan UUD NRI Tahun 1945 pasal 1 ayat 1 (Negara kesatuan berbentuk republik), prinsip otonomi daerah, serta pentingnya menjaga keutuhan wilayah darat dan laut nasional.",
        indicators: [
          "Mengevaluasi kontribusi pemuda daerah luar Jawa dalam Kongres Pemuda II sebagai fondasi konsep satu tanah air (C5 - Evaluasi).",
          "Menganalisis hubungan sebab-akibat antara penerapan otonomi daerah dengan pemerataan pembangunan infrastruktur sosial (C4 - Analisis).",
          "Mendemonstrasikan komitmen bela negara dalam merawat batas kedaulatan laut teritorial dari ancaman pencurian sumber daya (C3 - Aplikasi)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "ppkn_01",
        questionText: "Sikap etnosentrisme merupakan salah satu ancaman utama bagi kerukunan masyarakat multikultural di Indonesia. Manakah contoh perilaku berikut yang mencerminkan sikap etnosentrisme tersebut?",
        options: [
          "A. Merasa bangga dengan kesenian tari daerah sendiri dan bersedia mempelajarinya dengan tekun.",
          "B. Anggapan bahwa kebudayaan suku sendiri adalah yang paling unggul, mulia, dan memandang rendah adat suku lain.",
          "C. Menilai perilaku sosial seseorang hanya berdasarkan standar norma lokal suku orang tersebut.",
          "D. Memberikan kesempatan yang setara bagi seluruh golongan masyarakat untuk merayakan hari besar agamanya."
        ],
        correctAnswer: "B",
        explanation: "Etnosentrisme adalah sikap/pandangan sosiologis di mana suatu kelompok merasa kebudayaannya sendiri lebih baik, benar, dan unggul dibandingkan dengan kebudayaan kelompok lain, serta mengukur kelompok lain dengan kacamata budayanya sendiri. Menilai rendah suku lain adalah ciri eksplisit dari prasangka etnosentrisme."
      },
      {
        id: "ppkn_02",
        questionText: "UUD NRI Tahun 1945 Pasal 1 Ayat 1 menegaskan bahwa 'Negara Indonesia ialah Negara Kesatuan, yang berbentuk Republik'. Pernyataan manakah yang paling akurat menerangkan peranan daerah otonom dalam memperkokoh bentuk kesatuan tersebut?",
        options: [
          "A. Daerah otonom memiliki kedaulatan penuh untuk membuat konstitusi negara sendiri dan melepas diri dari NKRI.",
          "B. Otonomi daerah memberi wewenang pada pemerintah daerah untuk mengurus urusan rumah tangganya sendiri di bawah pengawasan ketat pemerintah pusat demi pemerataan pembangunan nasional.",
          "C. Kepala daerah dipilih langsung untuk membentuk angkatan bersenjata lokal pertahanan mandiri.",
          "D. Setiap daerah otonom memiliki mata uang daerah sendiri yang bernilai lebih tinggi dari Rupiah."
        ],
        correctAnswer: "B",
        explanation: "Indonesia adalah negara kesatuan yang menganut prinsip desentralisasi melalui pemberian otonomi daerah. Hal ini bertujuan mempercepat pemerataan pembangunan di seluruh kepulauan secara mandiri dan efektif sesuai ciri lokalnya, tanpa menghilangkan kendali integrasi NKRI yang dipegang oleh koordinasi pemerintah pusat."
      },
      {
        id: "ppkn_03",
        questionText: "Perhatikan peribahasa Papua 'Satu Tungku Tiga Batu'. Tradisi lokal ini mencerminkan keharmonisan antarumat beragama yang hidup bersama mewakili tiga unsur (Islam, Kristen-Protestan, Katolik) dalam satu keluarga besar. Nilai luhur apakah yang dapat diaplikasikan secara nasional dari tradisi Papua tersebut?",
        options: [
          "A. Mengakui bahwa semua penganut agama harus tinggal dalam satu rumah adat yang sempit.",
          "B. Mengedepankan musyawarah mufakat di atas pilar toleransi demi keutuhan komunal tanpa sekat diskriminasi.",
          "C. Mengabaikan ajaran ritual keagamaan masing-masing demi keseragaman budaya politik.",
          "D. Memisahkan pembagian hak waris hanya berdasarkan dominasi kelompok agama sekte terbesar."
        ],
        correctAnswer: "B",
        explanation: "Tradisi adat 'Satu Tungku Tiga Batu' adalah simbol toleransi kekeluargaan lintas agama yang mengakar di pulau Papua. Penerapan nilai luhurnya dalam bingkai kebangsaan secara nasional adalah pentingnya merawat kesatuan sosial di atas dasar toleransi inklusif serta musyawarah mufakat demi persatuan segenap komponen bangsa."
      }
    ]
  },
  {
    subjectId: "bahasa_inggris",
    subjectName: "Bahasa Inggris",
    capaianPembelajaran: "Students are able to express opinions, participate in conversations, describe physical features of familiar objects, school environment, or people using appropriate descriptive adjectives, communicate about school schedule and daily student activities, as well as handle transaction actions in a simple shopping context.",
    topics: [
      {
        name: "My School Activities",
        description: "Talking about class schedules using school subjects (Indonesian, English, Natural Science, Social Science, Art and Culture), days of the week, school rooms (library, computer lab, school yard), and describing online learning activities or simple daily habits.",
        indicators: [
          "Analyze and complete a reading passage about weekly school schedules based on timetables (C4 - Analysis).",
          "Identify appropriate simple present tense verb agreements for habitual actions in the school library context (C3 - Application).",
          "Evaluate different verbs used in describing virtual / online learning etiquette guidelines (C5 - Evaluation)."
        ]
      },
      {
        name: "Describing Objects or People",
        description: "Using descriptive adjectives (smart, tall, round, wooden, sharp, cozy), patterns of identifying animals, and describing friends' characteristics or favorite study tools.",
        indicators: [
          "Formulate standard descriptive sentences using the correct adjectives order (Opinion - Size - Age - Shape - Color - Origin - Material) (C4 - Analysis).",
          "Analyze implicit features of a unique Indonesian animal (such as the Komodo dragon or Bekantan) from brief descriptive riddles (C4 - Analysis).",
          "Compare the physical features of two study tools to recommend the best option for artwork sketching (C4 - Analysis)."
        ]
      },
      {
        name: "Shopping",
        description: "Vocabulary related to purchasing transactions (cheap, expensive, discount, receipt, price tag), asking for prices ('How much is this?', 'Is there any discount?'), and identifying counts/quantifying nouns (a pair of, a slice of, a bottle of).",
        indicators: [
          "Incorporate quantifying determiners (many, much, few, a bar of) properly in custom shopping lists (C3 - Application).",
          "Analyze conversational nuances in bargaining interactions at a traditional market to find the final transaction agreement (C4 - Analysis).",
          "Deconstruct a payment receipt to calculate cumulative price balances of goods after tax cuts (C4 - Analysis)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "eng_01",
        questionText: "Read the school timetable entry:\n'On Mondays, Rian learns Indonesian Language at 07:30. At 09:00, he has a break for 30 minutes, then joins the Natural Science lab guide from 09:30 to 11:00. Finally, from 11:00 to 12:30, he practices volleyball in the school yard.'\nBased on this information, which of the following statements is true?",
        options: [
          "A. Rian practices volleyball before analyzing science experiments.",
          "B. Rian's natural science class starts immediately at 09:00.",
          "C. The total duration of Rian's science session is 90 minutes.",
          "D. Rian studies Indonesian Language for exactly two entire hours."
        ],
        correctAnswer: "C",
        explanation: "Let's check the duration: Natural Science runs from 09:30 to 11:00. 11:00 minus 09:30 equals 1 hour and 30 minutes, which is exactly 90 minutes. Thus, option C is mathematically and logically correct. Indonesian language only lasts 90 minutes (07:30 to 09:00), not two hours. Volleyball is after science."
      },
      {
        id: "eng_02",
        questionText: "I want to purchase a new pencil case for my drawing classes. I am looking for a container that is: made of high-quality wood, relatively small in dimensions, has a beautiful brown shade, and has an organic circular shape.\nWhat is the correct adjective order to describe this object?",
        options: [
          "A. A small round brown wooden pencil case.",
          "B. A wooden small round brown pencil case.",
          "C. A brown round small wooden pencil case.",
          "D. A round wooden small brown pencil case."
        ],
        correctAnswer: "A",
        explanation: "According to English grammar rules (Royal Order of Adjectives): Opinion -> Size (small) -> Age -> Shape (round) -> Color (brown) -> Origin -> Material (wooden) -> Purpose -> Noun. Putting them together yields: 'small (size) round (shape) brown (color) wooden (material)'. This matches option A."
      },
      {
        id: "eng_03",
        questionText: "Customer: 'Excuse me, how much does this woven backpack cost?'\nShopkeeper: 'It is Rp150,000. But if you purchase more than two bags, I will give you a 15% discount on the total price.'\nIf the customer wants to buy three woven backpacks, how much will they pay in total after the discount?",
        options: [
          "A. Rp382,500",
          "B. Rp425,000",
          "C. Rp450,000",
          "D. Rp127,500"
        ],
        correctAnswer: "A",
        explanation: "First, find the initial cost of 3 backpacks: 3 * Rp150,000 = Rp450,000. Under the shopkeeper's terms, because they are buying more than two bags (3 bags), they qualify for a 15% discount. Discount amount = 15% of Rp450,000 = Rp67,500. Total payment = Rp450,000 - Rp67,500 = Rp382,500."
      }
    ]
  }
];
