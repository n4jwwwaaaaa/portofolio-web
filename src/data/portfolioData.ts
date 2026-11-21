export type ProjectCategory = 'all' | 'leadership' | 'creative' | 'informatics';

export interface ProjectItem {
  id: string;
  number: string;
  badgeColor: string;
  badgeTextColor: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  tag: string;
  gradientClass: string;
  darkHeaderText?: boolean;
  iconName: 'award' | 'palette' | 'clipboard' | 'code';
  bannerTitle: string;
  bannerSubtitle: string;
  title: string;
  summary: string;
  tags: string[];
  baseRotation: number;
  role: string;
  timeframe: string;
  highlights: string[];
  deliverables: string[];
  impact: string;
}

export interface ToolItem {
  id: string;
  name: string;
  shortCode: string;
  subtitle: string;
  bgClass: string;
  isPixel?: boolean;
  category: string;
  usageSummary: string;
  outputs: string[];
}

export const PROFILE = {
  name: 'Najwa Santang Wangi',
  shortName: 'Najwa Santang W.',
  brand: 'NAJWA.SW',
  major: 'S1 Teknik Informatika',
  faculty: 'Fakultas Telematika Energi',
  campus: 'Institut Teknologi PLN',
  campusShort: "IT-PLN '26",
  location: 'Bekasi, Indonesia',
  locationFull: 'Bekasi, Jawa Barat',
  focus: 'Tech & PDD',
  email: 'najwasantangwangi@gmail.com',
  whatsappDisplay: '082112528445',
  whatsappUrl: 'https://wa.me/6282112528445',
  linkedinHandle: 'linkedin.com/in/najwasantangw',
  linkedinUrl: 'https://linkedin.com/in/najwasantangw',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB288buAS7HZVU4Aa1koiDCcfL81mKrFqtMBigU5l1L_g3OF8RMxC8B1l6KYVwbwwmTSd15CnWAVKcXA9W_iQjH4aO6F8J4yAtZUVu9BrFlYWGrptYrBV7L5cZlgE-YTJrF-QkrUr1fqWpIonq7ubJYQJF6H64yQD6Fu448NO9so1dGyimvl3Dwz4QaPTr-ru9xzJ0O__o1LMGvn-UZIGrB9rC_hQPO2RTNTizO4Lf8fR5APHx8MvE9',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lkbb-porseni',
    number: '01',
    badgeColor: 'bg-yellow-400',
    badgeTextColor: 'text-slate-900',
    category: 'leadership',
    categoryLabel: 'Leadership & Event',
    tag: '2025 EVENT',
    gradientClass: 'from-blue-600 to-indigo-600',
    iconName: 'award',
    bannerTitle: 'LKBB PORSENI XII',
    bannerSubtitle: 'Manajemen Teknis Lomba Baris-Berbaris Tingkat Jabodetabek',
    title: 'Event Leadership & LKBB',
    summary:
      'Memimpin koordinasi lapangan untuk 20+ pleton peserta LKBB, perumusan juknis penilaian bersama dewan juri, serta pengaturan arus mobilisasi massa dan logistik lapangan secara presisi.',
    tags: ['Leadership', 'Crowd Control', 'Technical Briefing'],
    baseRotation: -2,
    role: 'Penanggung Jawab Lomba LKBB',
    timeframe: 'Februari 2025 · PORSENI & MIPA XII se-Jabodetabek',
    highlights: [
      'Mengoordinasikan jalannya kompetisi baris-berbaris berskala regional se-Jabodetabek dengan 20+ regu peserta.',
      'Menyusun petunjuk teknis (juknis) dan berkoordinasi langsung dengan dewan juri dari instansi militer.',
      'Mengatur rundown acara, alur masuk-keluar lapangan, dan kesiapan logistik agar berjalan tepat waktu.',
    ],
    deliverables: ['Dokumen Juknis Lomba', 'Rundown & Floorplan Lapangan', 'Rekapitulasi Nilai Juri'],
    impact: '20+ Pleton · Zero Delay Rundown · Koordinasi Lintas Instansi',
  },
  {
    id: 'pdd-identity',
    number: '02',
    badgeColor: 'bg-pink-500',
    badgeTextColor: 'text-white',
    category: 'creative',
    categoryLabel: 'Creative & PDD',
    tag: 'DESIGN KIT',
    gradientClass: 'from-pink-500 to-rose-500',
    iconName: 'palette',
    bannerTitle: 'Visual & Publication Identity',
    bannerSubtitle: 'Branding proposal, sertifikat, dan perlengkapan kontingen',
    title: 'PDD & Identity Design',
    summary:
      'Penyusunan modul visual publikasi event akbar sekolah, perancangan proposal resmi penarik sponsor korporasi, serta materi media sosial interaktif selama periode pendaftaran.',
    tags: ['Canva & Layouting', 'Visual Identity', 'Social Media Assets'],
    baseRotation: 2,
    role: 'Tim PDD & Publikasi Desain',
    timeframe: 'Februari 2025 · PORSENI & MIPA XII se-Jabodetabek',
    highlights: [
      'Merancang identitas visual menyeluruh dari proposal sponsorship, ID card panitia, hingga banner panggung utama.',
      'Memproduksi konten feed, story, dan countdown media sosial selama masa registrasi peserta.',
      'Menjaga konsistensi tipografi, palet warna, dan hierarki informasi pada seluruh media cetak dan digital.',
    ],
    deliverables: ['Proposal Sponsorship', 'ID Card & Lanyard Panitia', 'Stage Backdrop & Banner', 'Social Media Feed Kit'],
    impact: 'Full Event Branding Kit · Materi Cetak & Digital Terintegrasi',
  },
  {
    id: 'osis-governance',
    number: '03',
    badgeColor: 'bg-blue-600',
    badgeTextColor: 'text-white',
    category: 'leadership',
    categoryLabel: 'Leadership & Governance',
    tag: 'OSIS 24/25',
    gradientClass: 'from-amber-400 to-yellow-400',
    darkHeaderText: true,
    iconName: 'clipboard',
    bannerTitle: 'SOP Tata Tertib & 7K',
    bannerSubtitle: 'Standardisasi kedisiplinan dan sistem kepengurusan siswa',
    title: 'Governance & Program Kerja OSIS',
    summary:
      'Pelaksanaan pengawasan ketertiban upacara mingguan, rekapitulasi data absensi kedisiplinan siswa berbasis spreadsheet, dan pembinaan berkala bagi anggota Paskibra sekolah.',
    tags: ['SOP Development', 'Data Rekap', 'Evaluasi Program'],
    baseRotation: -1,
    role: 'Kepala Seksi Bidang (Kasekbid) 2',
    timeframe: 'Okt 2024 – Okt 2025 · OSIS SMA Korpri Bekasi',
    highlights: [
      'Memimpin sub-bidang kedisiplinan, Paskibra, Gerakan Disiplin Nasional (GDN), dan program K7 lingkungan sekolah.',
      'Membangun alur pencatatan dan rekapitulasi pelanggaran serta kehadiran upacara menggunakan spreadsheet terstruktur.',
      'Menjalankan rapat evaluasi berkala dan pembinaan karakter bersama tim pengurus OSIS dan pembina sekolah.',
    ],
    deliverables: ['SOP Tata Tertib & 7K', 'Spreadsheet Rekap Kedisiplinan', 'Jadwal Petugas Upacara & Paskibra'],
    impact: '1 Tahun Periode Aktif · 4 Sub-Bidang Terkoordinasi',
  },
  {
    id: 'informatics-logic',
    number: '04',
    badgeColor: 'bg-emerald-500',
    badgeTextColor: 'text-white',
    category: 'informatics',
    categoryLabel: 'Informatics & Tech',
    tag: 'TECH LAB',
    gradientClass: 'from-cyan-600 to-blue-700',
    iconName: 'code',
    bannerTitle: 'Algorithm & Informatics Works',
    bannerSubtitle: 'Eksplorasi logika algoritma C++ dan prototyping website',
    title: 'Informatics & Software Logic',
    summary:
      'Pengerjaan studi kasus algoritma terstruktur di IT-PLN, pemahaman computational logic untuk pemecahan masalah teknis, serta eksplorasi antarmuka digital yang ramah pengguna.',
    tags: ['C++ Dasar', 'Logic & Flowchart', 'UI/UX Thinking'],
    baseRotation: 3,
    role: 'Mahasiswi S1 Teknik Informatika',
    timeframe: '2026 – Sekarang · Institut Teknologi PLN',
    highlights: [
      'Mempelajari fondasi pemrograman terstruktur (C++), percabangan, perulangan, fungsi, dan struktur data dasar.',
      'Merancang diagram alir (flowchart) dan pseudocode sebelum menerjemahkan logika ke dalam kode program.',
      'Menggabungkan ketelitian logika komputasi dengan kepekaan visual PDD untuk merancang antarmuka web interaktif.',
    ],
    deliverables: ['Program Studi Kasus C++', 'Flowchart & Pseudocode', 'UI/UX Wireframe & Prototype'],
    impact: 'Computational Thinking · Jembatan Logika & Desain Visual',
  },
];

export const TOOLS: ToolItem[] = [
  {
    id: 'canva',
    name: 'Canva',
    shortCode: 'Ca',
    subtitle: 'Visual & Feed',
    bgClass: 'bg-gradient-to-tr from-cyan-500 to-blue-600',
    category: 'Desain Grafis & PDD',
    usageSummary:
      'Digunakan sebagai alat utama dalam merancang materi publikasi event, poster kompetisi, sertifikat, ID card panitia, dan layout proposal sponsorship.',
    outputs: ['Poster & Feed Instagram', 'Proposal Sponsorship', 'Banner Panggung & ID Card'],
  },
  {
    id: 'capcut',
    name: 'CapCut',
    shortCode: '✂',
    subtitle: 'Video Editing',
    bgClass: 'bg-slate-900',
    category: 'Produksi Konten Video',
    usageSummary:
      'Menyunting video teaser pengumuman lomba, reel dokumentasi kegiatan OSIS, transisi ritmis, dan aftermovie kepanitiaan PORSENI.',
    outputs: ['Teaser & Reel Event', 'Video Dokumentasi OSIS', 'Aftermovie Kepanitiaan'],
  },
  {
    id: 'word',
    name: 'MS Word',
    shortCode: 'W',
    subtitle: 'Proposal & Juknis',
    bgClass: 'bg-blue-600',
    category: 'Administrasi & Tata Naskah',
    usageSummary:
      'Menyusun dokumen resmi kepanitiaan seperti petunjuk teknis (juknis) lomba, surat menyurat eksternal, LPJ kegiatan, dan SOP tata tertib.',
    outputs: ['Juknis Lomba LKBB', 'Surat Resmi & Undangan', 'Laporan Pertanggungjawaban'],
  },
  {
    id: 'excel',
    name: 'MS Excel',
    shortCode: 'X',
    subtitle: 'Data & Jadwal',
    bgClass: 'bg-emerald-600',
    category: 'Pengolahan Data & Rundown',
    usageSummary:
      'Mengelola rekapitulasi absensi kedisiplinan siswa, perhitungan skor penjurian lomba, daftar peserta pleton, dan matriks rundown acara.',
    outputs: ['Rekap Skor Dewan Juri', 'Database Peserta & Absensi', 'Timeline & Anggaran Event'],
  },
  {
    id: 'ppt',
    name: 'PowerPoint',
    shortCode: 'P',
    subtitle: 'Presentasi',
    bgClass: 'bg-orange-600',
    category: 'Pitching & Briefing',
    usageSummary:
      'Membuat dek presentasi untuk technical meeting peserta lomba, pemaparan program kerja OSIS, serta tugas kuliah Teknik Informatika.',
    outputs: ['Slide Technical Meeting', 'Deck Program Kerja OSIS', 'Presentasi Akademik'],
  },
  {
    id: 'cpp',
    name: 'Informatics',
    shortCode: 'C++',
    subtitle: 'Logic & Coding',
    bgClass: 'bg-indigo-600',
    isPixel: true,
    category: 'Pemrograman & Algoritma',
    usageSummary:
      'Menerapkan logika algoritmik, struktur kontrol, array, dan perancangan flowchart untuk menyelesaikan soal komputasi dasar di IT-PLN.',
    outputs: ['Algoritma Terstruktur C++', 'Flowchart & Pseudocode', 'Dasar UI/UX Web'],
  },
];
