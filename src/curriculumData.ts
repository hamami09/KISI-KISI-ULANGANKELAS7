import { CurriculumBlueprint } from "./types";

export const curriculumDatabase: CurriculumBlueprint[] = [
  {
    subjectId: "matematika",
    subjectName: "Matematika",
    capaianPembelajaran: "Peserta didik dapat melakukan operasi aritmetika pada bilangan bulat dan pecahan, menyederhanakan bentuk aljabar dan menentukan penyelesaian pertidaksamaan linear satu variabel, menerapkan konsep rasio dan skala peta, menganalisis hubungan antar sudut dan kedudukan garis sejajar serta geometri lingkaran, serta menyajikan dan menganalisis data statistika secara kritis.",
    topics: [
      {
        name: "Bilangan Bulat & Pecahan",
        description: "Operasi hitung pengurangan bilangan bulat dengan tanda berbeda (selisih suhu) dan perbandingan/pecahan campuran atau desimal dalam konteks kehidupan sehari-hari.",
        indicators: [
          "Menentukan selisih suhu tempat dengan tanda berbeda menggunakan bilangan bulat positif dan negatif (C2 - Pemahaman).",
          "Membandingkan dan mengurutkan beberapa nilai pecahan desimal dan pecahan biasa melalui penyamaan penyebut (C3 - Aplikasi).",
          "Melakukan operasi penjumlahan dan pengurangan pecahan campuran/biasa dalam masalah takaran kontekstual (C3 - Aplikasi)."
        ]
      },
      {
        name: "Aljabar & Persamaan/Pertidaksamaan Linear (PLSV & PtLSV)",
        description: "Operasi hitung bentuk aljabar sejenis, penentuan elemen dasar aljabar, dan himpunan penyelesaian pertidaksamaan linear satu variabel (PtLSV).",
        indicators: [
          "Mengidentifikasi elemen-elemen dasar aljabar seperti variabel, koefisien, dan konstanta dari suatu bentuk matematika (C1 - Pemahaman).",
          "Menyederhanakan draf operasi pengurangan aljabar sejenis yang memiliki tanda kurung (C2 - Pemahaman).",
          "Menentukan HP (Himpunan Penyelesaian) dari pertidaksamaan linear satu variabel (PtLSV) dan melukiskannya (C3 - Aplikasi)."
        ]
      },
      {
        name: "Rasio & Skala Peta",
        description: "Konsep dasar perbandingan, rumus penyelesaian skala peta dibanding jarak sebenarnya, serta pemecahan korelasi perbandingan berbalik nilai.",
        indicators: [
          "Menganalisis jarak sebenarnya kedua kota berdasarkan draf skala peta dan jarak pada peta (C2 - Pemahaman).",
          "Memecahkan masalah perbandingan berbalik nilai pada pengerjaan proyek atau pembagian pakan ternak (C3 - Aplikasi).",
          "Menerapkan perbandingan senilai untuk menentukan nilai konversi satuan/takaran bahan (C3 - Aplikasi)."
        ]
      },
      {
        name: "Garis & Hubungan Antar Sudut",
        description: "Kedudukan dua garis (sejajar), sudut saling berpelurus/berpenyiku, pasangan sudut luar/dalam berseberangan atau sepihak, dan jumlah besar sudut segitiga.",
        indicators: [
          "Menghitung besar salah satu sudut yang saling berpelurus atau berpenyiku melalui persamaan matematika (C3 - Aplikasi).",
          "Menentukan besar sudut sepihak atau sehadap dengan persamaan variabel x pada dua garis sejajar yang dipotong garis lain (C3 - Aplikasi).",
          "Membuktikan dan menemukan konsep jumlah sudut dalam sebuah segitiga datar (C4 - Analisis)."
        ]
      },
      {
        name: "Geometri Lingkaran",
        description: "Identifikasi unsur lingkaran (juring, tembereng, apotema), rumus menghitung keliling & luas, panjang busur, luas juring, serta sudut pusat & keliling.",
        indicators: [
          "Membedakan istilah geometris lingkaran seperti juring, tembereng, busur, tali busur, dan garis apotema (C2 - Pemahaman).",
          "Menghitung keliling dan luas lingkaran berdasarkan jari-jari atau diameter yang disajikan (C3 - Aplikasi).",
          "Menganalisis hubungan sudut pusat dengan sudut keliling dalam struktur lingkaran kompleks (C4 - Analisis)."
        ]
      },
      {
        name: "Statistika & Pengolahan Data",
        description: "Pengumpulan dan pembacaan tabel data frekuensi, kalkulasi nilai ukuran pemusatan (Mean rata-rata, Median nilai tengah), jangkauan (range), dan nilai di bawah rata-rata.",
        indicators: [
          "Membaca dan menafsirkan tabel jumlah distribusi data buku/frekuensi untuk menjawab kriteria tertentu (C1 - Pemahaman).",
          "Menghitung nilai rata-rata (mean), median, jangkauan, dan mencari nilai individu yang hilang menggunakan rumus rata-rata gabungan (C3 - Aplikasi).",
          "Menganalisis kuantitas siswa yang mendapat nilai ujian di bawah nilai rata-rata kelas (C4 - Analisis)."
        ]
      }
    ],
    sampleQuestions: [
      {
        id: "mat_01",
        questionText: "Di sebuah laboratorium penelitian benih, seekor spesimen disimpan di dalam lemari pendingin dengan suhu -7°C. Setelah dikeluarkan untuk diuji, suhu spesimen tersebut mengalami kenaikan dan suhunya kini menjadi 18°C. Berapa besar selisih perubahan suhu spesimen tersebut dari kondisi awal hingga saat diuji?",
        options: [
          "A. -25°C",
          "B. -11°C",
          "C. 11°C",
          "D. 25°C"
        ],
        correctAnswer: "D",
        explanation: "Selisih perubahan suhu dihitung dengan nilai akhir dikurangi nilai awal: Selisih = 18°C - (-7°C) = 18 + 7 = 25°C."
      },
      {
        id: "mat_02",
        questionText: "Empat orang siswa kelas 7 mengukur panjang sisa pita proyek seni mereka. Hasil pengukurannya adalah sebagai berikut:\n- Amanda: 0,625 meter\n- Beni: 5/8 meter\n- Cindi: 11/16 meter\n- Dodi: 0,65 meter\nManakah kesimpulan pernyataan perbandingan sisa pita yang BENAR berdasar data di atas?",
        options: [
          "A. Sisa pita Amanda lebih panjang daripada sisa pita Dodi.",
          "B. Sisa pita Beni memiliki panjang yang sama dengan sisa pita Amanda.",
          "C. Sisa pita Cindi adalah yang paling pendek di antara semuanya.",
          "D. Sisa pita Dodi lebih pendek daripada sisa pita Amanda."
        ],
        correctAnswer: "B",
        explanation: "Ubah semua pecahan ke bentuk desimal:\n- Amanda = 0,625 m\n- Beni = 5/8 = 0,625 m\n- Cindi = 11/16 = 0,6875 m\n- Dodi = 0,65 m\nPanjang sisa pita Amanda setara dengan sisa pita Beni (0,625 m = 0,625 m)."
      },
      {
        id: "mat_03",
        questionText: "Pada draf peta tata ruang wilayah Banten, tertulis bahwa skala peta adalah 1 : 1.250.000. Jika jarak garis lurus antara Kota Serang dan Kota Pandeglang pada peta tersebut adalah 4,8 cm, berapakah jarak sebenarnya dari kedua kota tersebut?",
        options: [
          "A. 30 km",
          "B. 48 km",
          "C. 60 km",
          "D. 75 km"
        ],
        correctAnswer: "C",
        explanation: "Jarak sebenarnya = Jarak pada peta / Skala = 4,8 cm * 1.250.000 = 6.000.000 cm. Mengubah sentimeter ke kilometer: 6.000.000 cm / 100.000 = 60 km."
      },
      {
        id: "mat_04",
        questionText: "Hitunglah draf hasil penyederhanaan dari operasi pengurangan aljabar berikut: (12a - 7b + 5) dikurangi dengan (5a - 11b - 3)!",
        options: [
          "A. 7a - 18b + 2",
          "B. 7a - 4b + 8",
          "C. 7a + 4b + 2",
          "D. 7a + 4b + 8"
        ],
        correctAnswer: "D",
        explanation: "Langkah operasi:\n(12 a - 7b + 5) - (5a - 11b - 3)\n= 12a - 7b + 5 - 5a + 11b + 3\n= (12a - 5a) + (-7b + 11b) + (5 + 3)\n= 7a + 4b + 8."
      },
      {
        id: "mat_05",
        questionText: "Tentukan himpunan penyelesaian dari pertidaksamaan linear satu variabel berikut untuk x merupakan variabel pada himpunan bilangan bulat: 3(x - 2) ≤ 5x + 8!",
        options: [
          "A. x ≤ -7",
          "B. x ≥ -7",
          "C. x ≤ 1",
          "D. x ≥ 1"
        ],
        correctAnswer: "B",
        explanation: "Pecahkan pertidaksamaannya:\n3(x - 2) ≤ 5x + 8\n3x - 6 ≤ 5x + 8\n3x - 5x ≤ 8 + 6\n-2x ≤ 14\nBagi kedua ruas dengan -2 (ingat mengubah arah tanda pertidaksamaan):\nx ≥ -7."
      },
      {
        id: "mat_06",
        questionText: "Perhatikan gambar model abstrak kubus ABCD.EFGH. Manakah di antara pasangan garis dalam rusuk kubus berikut yang memiliki kedudukan saling SEJAJAR?",
        options: [
          "A. Rusuk AB dan rusuk BC",
          "B. Rusuk AD dan rusuk FG",
          "C. Rusuk AE dan rusuk CG",
          "D. Rusuk EF dan rusuk FG"
        ],
        correctAnswer: "C",
        explanation: "Pada kubus ABCD.EFGH, semua rusuk tegak vertikal yaitu AE, BF, CG, dan DH memiliki kedudukan yang tegak lurus terhadap bidang alas dan saling sejajar satu sama lain."
      },
      {
        id: "mat_07",
        questionText: "Dua buah sudut saling berpelurus (suplemen) memiliki perbandingan besar sudut sebesar 3 : 7. Berapakah besar sudut yang lebih besar di antara kedua sudut tersebut?",
        options: [
          "A. 54 derajat",
          "B. 72 derajat",
          "C. 108 derajat",
          "D. 126 derajat"
        ],
        correctAnswer: "D",
        explanation: "Jumlah sudut berpelurus adalah 180°. Misalkan sudutnya 3x dan 7x.\n3x + 7x = 180 => 10x = 180 => x = 18°.\nBesar sudut terbesar adalah 7x = 7 * 18 = 126°."
      },
      {
        id: "mat_08",
        questionText: "Diketahui sudut P dan sudut Q merupakan sudut yang saling berpenyiku (komplementer). Jika besar sudut P adalah (2x + 15) derajat dan besar sudut Q adalah (x + 30) derajat, berapakah besar sudut Q yang sebenarnya?",
        options: [
          "A. 15 derajat",
          "B. 40 derajat",
          "C. 45 derajat",
          "D. 60 derajat"
        ],
        correctAnswer: "C",
        explanation: "Jumlah sudut berpenyiku adalah 90°.\n(2x + 15) + (x + 30) = 90\n3x + 45 = 90 => 3x = 45 => x = 15°.\nBesar sudut Q = x + 30 = 15 + 30 = 45°."
      },
      {
        id: "mat_09",
        questionText: "Dua buah garis sejajar m dan n dipotong oleh sebilah garis transversal l. Jika salah satu dari sudut dalam sepihak memiliki besar 68 derajat, berapakah besar sudut pasangan dalam sepihak yang lainnya?",
        options: [
          "A. 22 derajat",
          "B. 68 derajat",
          "C. 112 derajat",
          "D. 122 derajat"
        ],
        correctAnswer: "C",
        explanation: "Hubungan dua sudut dalam sepihak yaitu jumlah besarnya sama dengan 180°. Besar sudut pasangannya = 180° - 68° = 112°."
      },
      {
        id: "mat_10",
        questionText: "Dua buah garis sejajar dipotong oleh sebuah garis transversal. Sudut sehadap yang terbentuk adalah Sudut A sebesar (4x - 12) derajat dan Sudut B sebesar (2x + 24) derajat. Tentukan besar nilai x!",
        options: [
          "A. 6",
          "B. 12",
          "C. 18",
          "D. 24"
        ],
        correctAnswer: "C",
        explanation: "Sudut-sudut sehadap memiliki nilai besar sudut yang sama.\n4x - 12 = 2x + 24\n4x - 2x = 24 + 12\n2x = 36 => x = 18."
      },
      {
        id: "mat_11",
        questionText: "Pada pembuktian geometris matematika, jika ditarik garis sejajar melalui salah satu titik segitiga, kita dapat menyimpulkan karakteristik jumlah sudutnya. Berapakah jumlah total dari ketiga besar sudut dalam suatu segitiga?",
        options: [
          "A. 90 derajat",
          "B. 180 derajat",
          "C. 2700 derajat",
          "D. 360 derajat"
        ],
        correctAnswer: "B",
        explanation: "Konsep dasar jumlah sudut dalam segitiga datar membuktikan bahwa jumlah sudut A + B + C pada segitiga selalu bernilai 180 derajat (membentuk sudut lurus)."
      },
      {
        id: "mat_12",
        questionText: "Daerah di dalam suatu bangun datar lingkaran yang dibatasi oleh dua buah jari-jari lingkaran dan sebuah busur lingkaran diapitnya didefinisikan sebagai...",
        options: [
          "A. Tembereng",
          "B. Juring",
          "C. Apotema",
          "D. Tali Busur"
        ],
        correctAnswer: "B",
        explanation: "Juring adalah daerah lingkaran yang dibatasi oleh dua buah jari-jari dan satu busur. Sedangkan tembereng dibatasi oleh tali busur dan busur."
      },
      {
        id: "mat_13",
        questionText: "Sebuah hiasan dinding berbentuk lingkaran penuh memiliki ukuran panjang jari-jari (r) sepanjang 35 cm. Berapakah keliling dari hiasan dinding tersebut? (r = 35 cm, gunakan π = 22/7)",
        options: [
          "A. 110 cm",
          "B. 154 cm",
          "C. 220 cm",
          "D. 3.850 cm"
        ],
        correctAnswer: "C",
        explanation: "Keliling Lingkaran = 2 * π * r = 2 * (22/7) * 35 = 20 * 11 = 220 cm."
      },
      {
        id: "mat_14",
        questionText: "Sebuah papan jam dinding melingkar memiliki diameter (d) sepanjang 28 desimeter. Berapakah luas permukaan papan jam dinding tersebut? (d = 28 dm, gunakan π = 22/7)",
        options: [
          "A. 88 desimeter persegi",
          "B. 176 desimeter persegi",
          "C. 616 desimeter persegi",
          "D. 2.464 desimeter persegi"
        ],
        correctAnswer: "C",
        explanation: "Jari-jari lingkaran (r) = d / 2 = 14 dm. Luas Lingkaran = π * r * r = (22/7) * 14 * 14 = 22 * 2 * 14 = 616 dm²."
      },
      {
        id: "mat_15",
        questionText: "Sebuah lingkaran berpusat di titik O memiliki jari-jari sepanjang 21 cm. Terdapat busur PQ yang menghadap sudut pusat POQ sebesar 120 derajat. Berapakah panjang busur PQ tersebut? (r = 21 cm, π = 22/7)",
        options: [
          "A. 11 cm",
          "B. 22 cm",
          "C. 44 cm",
          "D. 66 cm"
        ],
        correctAnswer: "C",
        explanation: "Panjang Busur = (Sudut Pusat / 360) * 2 * π * r = (120 / 360) * 2 * (22/7) * 21 = (1/3) * 132 = 44 cm."
      },
      {
        id: "mat_16",
        questionText: "Tabel berikut menyajikan data jumlah buku dongeng yang berhasil dibaca sekelompok siswa selama masa libur semester:\n- Membaca 1 buku: 3 siswa\n- Membaca 2 buku: 6 siswa\n- Membaca 3 buku: 8 siswa\n- Membaca 4 buku: 5 siswa\n- Membaca 5 buku: 2 siswa\nBerapa jumlah siswa yang berhasil membaca 3 buku atau LEBIH?",
        options: [
          "A. 8 siswa",
          "B. 13 siswa",
          "C. 15 siswa",
          "D. 24 siswa"
        ],
        correctAnswer: "C",
        explanation: "Siswa yang membaca 3 buku atau lebih adalah siswa pada kategori membaca 3, 4, atau 5 buku: 8 + 5 + 2 = 15 siswa."
      },
      {
        id: "mat_17",
        questionText: "Berikut adalah laporan nilai hasil ulangan matematika tentang statistika dari 8 orang siswa terpilh: 85, 78, 90, 82, 80, 88, 79, dan 87. Nilai rata-rata (mean) dari data tersebut adalah...",
        options: [
          "A. 82,5",
          "B. 83,5",
          "C. 84,0",
          "D. 84,8"
        ],
        correctAnswer: "D",
        explanation: "Rentang nilai dijumlahkan: 85 + 78 + 90 + 82 + 80 + 88 + 79 + 87 = 679. Banyaknya data n = 8. Mean = 679 / 8 = 84,875 (dibulatkan 84,8)."
      },
      {
        id: "mat_18",
        questionText: "Hasil survei pengukuran tinggi badan (dalam cm) dari 9 orang anggota tim regu Pramuka adalah: 145, 142, 150, 148, 146, 143, 149, 147, dan 144. Tentukan median (nilai tengah) tinggi badan mereka!",
        options: [
          "A. 145 cm",
          "B. 146 cm",
          "C. 147 cm",
          "D. 148 cm"
        ],
        correctAnswer: "B",
        explanation: "Urutkan data: 142, 143, 144, 145, 146, 147, 148, 149, 150. Karena ganjil dengan n = 9, suku tengah ke-(9+1)/2 = suku ke-5, yaitu 146 cm."
      },
      {
        id: "mat_19",
        questionText: "Dalam suatu uji kompetensi fisika kelas 7 di laboratorium sekolah, tercacat data nilai rapor siswa: 98, 67, 85, 74, 90, 83, 72, 88, 65, dan 80. Berapakah jangkauan (range) dari kumpulan data nilai tersebut?",
        options: [
          "A. 28",
          "B. 30",
          "C. 33",
          "D. 35"
        ],
        correctAnswer: "C",
        explanation: "Range = Nilai Terbesar - Nilai Terkecil. Nilai terbesar = 98, nilai terkecil = 65. Jangkauan = 98 - 65 = 33."
      },
      {
        id: "mat_20",
        questionText: "Rata-rata gabungan nilai ulangan kimia dasar dari kelompok siswa laki-laki berjumlah 15 orang dan siswa perempuan berjumlah 10 orang adalah 80. Jika nilai rata-rata kelompok laki-laki saja adalah 78, berapakah rata-rata nilai matematika kelompok perempuannya?",
        options: [
          "A. 81",
          "B. 82",
          "C. 83",
          "D. 84"
        ],
        correctAnswer: "C",
        explanation: "Nilai kumulatif total umum = 25 * 80 = 2.000. Kumulatif laki-laki = 15 * 78 = 1.170. Kumulatif perempuan = 2.000 - 1.170 = 830. Rata-rata perempuan = 830 / 10 = 83."
      },
      {
        id: "mat_21",
        questionText: "[AKM Numerasi - Bilangan Bulat] Seorang nelayan tradisional menyelam mengumpulkan terumbu mutiara di dasar laut sedalam 18 meter di bawah permukaan laut. Setelah beristirahat di dek perahunya yang terapung tepat di permukaan laut, ia naik tebing batu karang setinggi 9 meter untuk mengeringkan peralatannya. Berapakah jarak vertikal total perpindahan yang ditempuh nelayan tersebut dari posisi menyelam di dasar laut ke atas tebing karang pantai?",
        options: [
          "A. 9 meter",
          "B. 18 meter",
          "C. 27 meter",
          "D. 36 meter"
        ],
        correctAnswer: "C",
        explanation: "Posisi awal menyelam -18 m, posisi akhir tebing +9 m. Jarak vertikal perpindahan = Posisi Akhir - Posisi Awal = 9 - (-18) = 27 meter."
      },
      {
        id: "mat_22",
        questionText: "[AKM Numerasi - Bilangan Bulat] Sisa kas mingguan unit usaha mandiri OSIS sekolah dicatat berkala: bertanda positif (+) untung dan negatif (-) rugi. Selama empat minggu berturut laporan kas dicatat: Minggu I (+Rp120.000), Minggu II (-Rp45.000), Minggu III (-Rp25.000), dan Minggu IV (+Rp70.000). Berapakah jumlah saldo kas OSIS tersebut di akhir minggu ke-4?",
        options: [
          "A. Rp120.000",
          "B. Rp110.000",
          "C. Rp50.000",
          "D. Rp190.000"
        ],
        correctAnswer: "B",
        explanation: "Akumulasi saldo kas: 120.000 - 45.000 - 25.000 + 70.000 = 75.000 - 25.000 + 70.000 = 50.000 + 70.000 = Rp110.000."
      },
      {
        id: "mat_23",
        questionText: "[AKM Numerasi - Bilangan Bulat] Temperatur udara dalam ruang pembekuan es di laboratorium kimia mula-mula adalah -5°C. Selama percobaan pemanasan, suhu zat naik 18°C. Setelah itu, akibat listrik praktikum terputus, suhunya turun kembali sebesar 4°C. Berapakah temperatur akhir zat tersebut saat ini?",
        options: [
          "A. 9°C",
          "B. 13°C",
          "C. -9°C",
          "D. 22°C"
        ],
        correctAnswer: "A",
        explanation: "Perhitungan suhunya: Suhu Akhir = -5 + 18 - 4 = 13 - 4 = 9°C."
      },
      {
        id: "mat_24",
        questionText: "[AKM Numerasi - Pecahan] Ibu guru meminta kelompok tata boga mencocokkan takaran tepung terigu resep mereka. Terdapat dua wadah berisi tepung terigu bersisa: Wadah A berisi 1 3/4 kg terigu, sedangkan Wadah B berisi 7/5 kg terigu. Jika resep kue kering membutuhkan wadah dengan takaran yang LEBIH BESAR, wadah manakah yang harus dipilih murid?",
        options: [
          "A. Wadah B karena pecahan biasa pecahan murni lebih sederhana.",
          "B. Keduanya setara karena nilai aslinya bernilai sama.",
          "C. Wadah A karena 1 3/4 kg setara dengan 1,75 kg yang lebih besar dibanding 1,4 kg.",
          "D. Belum dapat ditentukan sebelum penyebutnya disamakan ke 100."
        ],
        correctAnswer: "C",
        explanation: "Wadah A (1 3/4 kg) = 1,75 kg. Wadah B (7/5 kg) = 1,4 kg. Karena 1,75 > 1,4, maka Wadah A memiliki takaran tepung yang lebih besar."
      },
      {
        id: "mat_25",
        questionText: "[AKM Numerasi - Pecahan] Seorang pengrajin mengukur tebal kayu jati sisa pembuatan relief pesanan pelataran sekolah, tertulis berukuran 3 5/8 sentimeter. Berapakah ketebalan kayu pengrajin tersebut jika diekspresikan dalam pecahan desimal?",
        options: [
          "A. 3,58 cm",
          "B. 3,625 cm",
          "C. 3,125 cm",
          "D. 3,850 cm"
        ],
        correctAnswer: "B",
        explanation: "Pecahan campuran 3 5/8 diubah desimal: 3 + (5/8) = 3 + 0,625 = 3,625 cm."
      },
      {
        id: "mat_26",
        questionText: "[AKM Numerasi - Pecahan] Pak guru memiliki kawat tembaga sepanjang 5 1/2 meter. Kawat tembaga tersebut dipotong untuk menyambung sirkuit praktikum sepanjang 2 3/4 meter, kemudian disambung lagi dengan sisa kawat sepanjang 1 1/3 meter. Berapakah panjang total sisa kawat tembaga pak guru sekarang?",
        options: [
          "A. 4 1/12 meter",
          "B. 3 5/12 meter",
          "C. 4 1/2 meter",
          "D. 3 1/12 meter"
        ],
        correctAnswer: "A",
        explanation: "Persamaan hitungnya: 5 1/2 - 2 3/4 + 1 1/3 = 11/2 - 11/4 + 4/3. Samakan penyebut ke KPK yaitu 12: 66/12 - 33/12 + 16/12 = 33/12 + 16/12 = 49/12 = 4 1/12 meter."
      },
      {
        id: "mat_27",
        questionText: "[AKM Numerasi - Rasio] Di peta simulasi sebaran bencana daerah pesisir Banten, peta dicetak berskala 1 : 250.000. Jika jarak aman evakuasi laut antarpulau sekoci penyelamat berjarak 6,4 cm di peta, berapakah jarak sesungguhnya di laut lepas?",
        options: [
          "A. 1,6 km",
          "B. 16 km",
          "C. 160 km",
          "D. 25 km"
        ],
        correctAnswer: "B",
        explanation: "Jarak sebenarnya = Jarak Peta / Skala = 6,4 * 250.000 = 1.600.000 cm. Konversi ke km = 1.600.000 / 100.000 = 16 km."
      },
      {
        id: "mat_28",
        questionText: "[AKM Numerasi - Rasio] Stok pakan konsentrat hijauan rami pakan ternak di kandang Pak Slamet cukup mengisi kebutuhan nutrisi dari 24 ekor sapi perah peliharaannya selama 15 hari penuh. Jika Pak Slamet menjual 6 ekor sapi perahnya karena sudah tua, dalam berapa hari persediaan pakan kandang akan habis dikonsumsi sapi-sapi yang tersisa?",
        options: [
          "A. 12 hari",
          "B. 18 hari",
          "C. 20 hari",
          "D. 22 hari"
        ],
        correctAnswer: "C",
        explanation: "Gunakan perbandingan berbalik nilai: sisa sapi = 24 - 6 = 18 ekor. \nSapi1 * Hari1 = Sapi2 * Hari2\n24 * 15 = 18 * X => 360 = 18 * X => X = 20 hari."
      },
      {
        id: "mat_29",
        questionText: "[AKM Numerasi - Rasio] Pembangunan pilar pondasi jembatan penyeberangan sekolah ditargetkan rampung dikerjakan oleh 15 orang pekerja ahli dalam waktu 40 hari kerja. Apabila komite sekolah menginginkan proyek selesai dipercepat menjadi 30 hari saja, berapa orang tambahan pekerja ahli yang wajib diikutkan?",
        options: [
          "A. 5 pekerja",
          "B. 10 pekerja",
          "C. 15 pekerja",
          "D. 20 pekerja"
        ],
        correctAnswer: "A",
        explanation: "Perbandingan berbalik nilai: 40 hari x 15 orang = 30 hari x P2 => 600 = 30 * P2 => P2 = 20 orang pekerja. Tambahan pekerja yang dibutuhkan = 20 - 15 = 5 pekerja."
      },
      {
        id: "mat_30",
        questionText: "[AKM Numerasi - Aljabar] Perhatikan bentuk rumus ringkasan matematis aljabar berikut: 3x² - 5x + 12y - 8. Pernyataan yang menggambarkan secara rinci elemen aljabarnya yang BENAR dan tepat adalah...",
        options: [
          "A. Variabelnya adalah x² dan y, koefisien x adalah 5.",
          "B. Konstanta dari bentuk aljabar tersebut adalah 8.",
          "C. Suku konstan bernilai -8 dan koefisien dari variabel x pangkat satu bernilai -5.",
          "D. Aljabar di atas memiliki total 3 buah suku dengan konstanta positif 12."
        ],
        correctAnswer: "C",
        explanation: "Suku penambah aljabar di atas: 3x², -5x, 12y, dan -8. Variabelnya x², x, y. Koefisien x adalah -5, koefisien y adalah 12. Konstanta (suku konstan) bernilai -8."
      },
      {
        id: "mat_31",
        questionText: "[AKM Numerasi - Aljabar] Selesaikan hasil draf dari operasi matematika aljabar linear dua variabel berikut: 4(2x - 3y) + 3(x + 5y)!",
        options: [
          "A. 11x + 3y",
          "B. 11x - 3y",
          "C. 11x + 8y",
          "D. 11x - 12y"
        ],
        correctAnswer: "A",
        explanation: "Selesaikan perkalian distributif:\n4(2x - 3y) + 3(x + 5y)\n= 8x - 12y + 3x + 15y\n= (8x + 3x) + (-12y + 15y) = 11x + 3y."
      },
      {
        id: "mat_32",
        questionText: "[AKM Numerasi - Aljabar] Diberikan bentuk aljabar dua variabel: -2x(3x - 4y) + 5x². Hasil akhir sederhananya setelah diselesaikan operasinya secara tertib adalah...",
        options: [
          "A. -x² - 8xy",
          "B. -x² + 4xy",
          "C. 11x² + 8xy",
          "D. -x² + 8xy"
        ],
        correctAnswer: "D",
        explanation: "Kalikan distributif: -2x(3x - 4y) = -6x² + 8xy. Jumlahkan dengan 5x² sisa: -6x² + 8xy + 5x² = -x² + 8xy."
      },
      {
        id: "mat_33",
        questionText: "[AKM Numerasi - Rasio] Chef dapur asrama sekolah ingin menyajikan sup kaldu ayam sehat. Berdasar resep standar, untuk porsi 8 orang dibutuhkan takaran kaldu ayam sebanyak 1.200 mL. Jika ia ingin memasak sup tersebut dalam porsi besar melayani 20 orang siswa, berapa volume kaldu ayam yang harus disediakan agar cita rasanya tetap konsisten?",
        options: [
          "A. 1.800 mL",
          "B. 2.400 mL",
          "C. 3.000 mL",
          "D. 3.200 mL"
        ],
        correctAnswer: "C",
        explanation: "Gunakan konsep perbandingan senilai: \n8 porsi -> 1.200 mL \n20 porsi -> X mL\n8/1.200 = 20/X => 8 * X = 24.000 => X = 3.000 mL (atau 3 liter)."
      },
      {
        id: "mat_34",
        questionText: "[AKM Numerasi - Rasio] Alika pergi ke gerai valuta asing menukarkan uang tabungan saku senilai Rp4.500.000 dan memperoleh sebanyak 450 SGD (Singapura Dollar). Jika Alika ingin kembali menukarkan uang tabungan miliknya senilai Rp1.500.000, berapakah SGD sisa tambahan yang ia peroleh?",
        options: [
          "A. 100 SGD",
          "B. 120 SGD",
          "C. 150 SGD",
          "D. 200 SGD"
        ],
        correctAnswer: "C",
        explanation: "Gunakan perbandingan senilai:\n4.500.000 / 450 = Rp10.000 per 1 SGD.\nUang tambahan Rp1.500.000 / 10.000 = 150 SGD."
      },
      {
        id: "mat_35",
        questionText: "[AKM Numerasi - Rasio] Mobil dinas patroli kepolisian wilayah Serang sanggup menempuh jarak perjalanan sejauh 60 km di jalan tol dengan memerlukan 5 liter bensin pertalite. Bila tangki bensin mobil diisi sebanyak 12 liter pertalite, berapakah jarak maksimum lintasan yang bisa ditempuh mobil patroli tersebut?",
        options: [
          "A. 120 km",
          "B. 144 km",
          "C. 150 km",
          "D. 180 km"
        ],
        correctAnswer: "B",
        explanation: "Perbandingan senilai: \n5 liter -> 60 km\n12 liter -> X km\nX = (12 * 60) / 5 = 720 / 5 = 144 km."
      },
      {
        id: "mat_36",
        questionText: "[Uraian - Geometri Segitiga] Di sebuah segitiga siku-siku ABC, sudut C merupakan sudut siku-siku (besar sudut 90 derajat). Bila besar sudut A adalah (3y + 5) derajat dan besar sudut B adalah (2y + 10) derajat, berapakah besar sudut A segitiga siku-siku tersebut yang sebenarnya?",
        options: [
          "A. 40 derajat",
          "B. 45 derajat",
          "C. 50 derajat",
          "D. 600 derajat"
        ],
        correctAnswer: "C",
        explanation: "Jumlah sudut segitiga = 180°. Oleh karena sudut C = 90°, maka:\nSudut A + B = 90°\n(3y + 5) + (2y + 10) = 90\n5y + 15 = 90 => 5y = 75 => y = 15.\nBesar sudut A = 3y + 5 = 3(15) + 5 = 50°."
      },
      {
        id: "mat_37",
        questionText: "[Uraian - Geometri Lingkaran] Tiang lengkungan atap aula berbentuk busur lingkaran ditumpu dari titik pusat O. Titik pendukung A, B, dan C berada tepat di keliling lingkaran. Diketahui besar sudut pusat BOC yang dibentuk lengkungan adalah 110 derajat. Berapakah besar sudut keliling BAC yang menyangga struktur dalam keliling lengkung atap tersebut?",
        options: [
          "A. 55 derajat",
          "B. 70 derajat",
          "C. 90 derajat",
          "D. 220 derajat"
        ],
        correctAnswer: "A",
        explanation: "Sudut keliling yang menghadap busur yang sama dengan sudut pusat besarnya setengah dari sudut pusat. Sudut BAC = 1/2 * Sudut BOC = 1/2 * 110° = 55°."
      },
      {
        id: "mat_38",
        questionText: "[Uraian - Geometri Lingkaran] Sebuah papan loyang pizza melingkar besar memiliki jari-jari sepanjang 14 cm. Pizza tersebut diiris rata menjadi beberapa potong pizza berbentuk juring dengan sudut pusat masing-masing irisan sebesar 45 derajat. Berapakah luas permukaan per satu potong pizza tersebut? (Gunakan π = 22/7)",
        options: [
          "A. 77 cm²",
          "B. 154 cm²",
          "C. 308 cm²",
          "D. 616 cm²"
        ],
        correctAnswer: "A",
        explanation: "Luas Juring = (Sudut Pusat / 360) * Luas Lingkaran = (45 / 360) * π * r * r = (1/8) * (22/7) * 14 * 14 = (1/8) * 616 = 77 cm²."
      },
      {
        id: "mat_39",
        questionText: "[Uraian - Statistika] Hasil praktikum mengukur berat jenis magnesium dari kelompok laboratorium dilaporkan dalam data genap terurut sbb (dalam gram): 12, 15, 11, 14, 18, 17, 13, dan 16 gram. Berapakah nilai tengah (median) dari hasil data timbangan magnesium siswa?",
        options: [
          "A. 14,0 gram",
          "B. 14,5 gram",
          "C. 15,0 gram",
          "D. 15,5 gram"
        ],
        correctAnswer: "B",
        explanation: "Urutkan data: 11, 12, 13, 14, 15, 16, 17, 18. Karena n = 8 (genap), median dihitung dari rata-rata data ke-4 dan data ke-5: Median = (14 + 15) / 2 = 14,5 gram."
      },
      {
        id: "mat_40",
        questionText: "[Uraian - Statistika] Hasil rekap nilai kuis statistika kilat dari 10 orang siswa kelas VII-E dilaporkan sbb: 60, 70, 75, 80, 80, 85, 90, 90, 95, dan 100. Berapakah siswa yang memperoleh nilai kuis di bawah nilai RATA-RATA?",
        options: [
          "A. 3 siswa",
          "B. 4 siswa",
          "C. 5 siswa",
          "D. 6 siswa"
        ],
        correctAnswer: "C",
        explanation: "Kalkulasi rata-rata (mean): (60+70+75+80+80+85+90+90+95+100)/10 = 825/10 = 82,5. \nNilai kuis yang berada di bawah nilai rata-rata 82,5 adalah: 60, 70, 75, 80, dan 80 (total ada 5 siswa)."
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
