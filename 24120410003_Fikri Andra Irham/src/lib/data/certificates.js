export const certificateCategories = [
  { id: 'all', name: 'All' },
  { id: 'networking', name: 'Networking' },
  { id: 'programming', name: 'Programming' },
  { id: 'linux-security', name: 'Linux & Security' },
];

export const certificates = [
  {
    id: 'cert-1',
    category: 'networking',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    issueDate: '2024/03/25',
    endDate: '2027/03/25',
    credentialId: '2403NA4603',
    description: 'Covers basic configuration of MikroTik RouterOS, IP networking, routing, and firewall.',
    certificateUrl: 'https://mikrotik.com/training/certificates/b294603c6f3250f81d39',
    image: '/images/certificates/mtcna.jpeg'
  },
  {
    id: 'cert-2',
    category: 'linux-security',
    title: 'Linux System Administration',
    issuer: 'ADINUSA',
    issueDate: '2024/02/11',
    endDate: '2026-02',
    credentialId: 'C01001-00000-33356',
    description: 'Covered Python syntax, flow control, data structures, OOP basics, and problem-solving techniques.',
    certificateUrl: 'https://www.adinusa.id/certificate/C01001-00000-33356',
    image: '/images/certificates/linux-admin.png'
  },
  {
    id: 'cert-3',
    category: 'programming',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    issueDate: '2023-01-07',
    endDate: '2026-01-07',
    credentialId: '07Z6G3Q5MXQR',
    description: 'Covered HTML & CSS fundamentals including semantic elements, styling, layouting with Flexbox, and responsive design.',
    certificateUrl: 'https://www.dicoding.com/certificates/07Z6G3Q5MXQR',
    image: '/images/certificates/web-dev.png'
  },
  {
    id: 'cert-4',
    category: 'networking',
    title: 'Jaringan Komputer Dasar',
    issuer: 'ID-Networkers',
    issueDate: '2023-06-03',
    endDate: '2026-06',
    credentialId: 'IDN-1685754694-180-9513',
    description: 'Covered fundamental concepts of computer networking: network types, topologies, IP addressing & essential protocols.',
    certificateUrl: 'https://lms.idn.id/cert-verification',
    image: '/images/certificates/jaringan-komputer.png'
  },
  {
    id: 'cert-5',
    category: 'linux-security',
    title: 'Linux Dasar',
    issuer: 'ID-Networkers',
    issueDate: '2023-01-15',
    endDate: '2026-01',
    credentialId: 'IDN-1673777941-186-9513',
    description: 'Fundamental Linux skills including command line, file management, and basic system operations.',
    certificateUrl: 'https://lms.idn.id/cert-verification',
    image: '/images/certificates/linux-dasar.png'
  },
  {
    id: 'cert-6',
    category: 'linux-security',
    title: 'Cyber Security Training (CompTIA Linux+ & Security+)',
    issuer: 'IDF & Boer Technology',
    issueDate: '2021-12-01',
    description: 'Completed training on foundational Linux administration and cybersecurity concepts based on CompTIA modules.',
    image: '/images/certificates/cyber-security.png'
  },
  {
    id: 'cert-7',
    category: 'programming',
    title: 'PCAP: Programming Essentials in Python',
    issuer: 'Python Institute',
    issueDate: '2021-05-01',
    description: 'Covered Python syntax, flow control, data structures, OOP basics, and problem-solving techniques.',
    credentialId: '327187c4-c402-4345-9fc5-cb58ff3d9b03',
    certificateUrl: 'https://www.netacad.com/certificates?issuanceId=327187c4-c402-4345-9fc5-cb58ff3d9b03',
    image: '/images/certificates/pcap-python.png'
  },
];