export const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'app', name: 'App' },
  { id: 'iot', name: 'IoT' },
  { id: 'network', name: 'Network' },
];

export const projects = [
  {
    id: 'project-1',
    category: 'app',
    title: 'Personal Portfolio Website',
    date: '2025-06-01',
    dateDisplay: 'Jun 1 - 20, 2025',
    description: 'Dynamic online portfolio designed to showcase projects and skills. Features responsive UI, dark mode, and a custom design built from scratch.',
    techStacks: ['Next.js', 'React', 'Tailwind CSS', 'Figma'],
    projectUrl: 'https://fai.my.id',
    githubUrl: 'https://github.com/fikriandrrhm19/my-portfolio',
    image: '/images/projects/personal-portfolio.png'
  },
  {
    id: 'project-2',
    category: 'app',
    title: 'PokéTrove',
    issuer: 'Cakrawala University',
    date: '2025-04-13',
    dateDisplay: 'Apr 13 - 20, 2025',
    description: 'A responsive web app for exploring Pokémon data via PokéAPI. Features include dark/light mode, real-time search, filtering, and pagination for an intuitive user experience.',
    techStacks: ['React', 'Tailwind CSS', 'Vite', 'PokéAPI', 'JavaScript'],
    projectUrl: 'https://ptrove.fyz.my.id/',
    githubUrl: 'https://github.com/fikriandrrhm19/poketrove',
    image: '/images/projects/poketrove.png'
  },
  {
    id: 'project-3',
    category: 'network',
    title: 'DNS Filtration',
    issuer: 'PT Infinys System Indonesia',
    date: '2023-09-13',
    dateDisplay: 'Sep 13, 2023 - Nov 27, 2023',
    description: 'Designed and implemented a DNS filtration system using PowerDNS and Lua scripting. Enhanced network security by blocking harmful sites and optimizing DNS request filtering.',
    techStacks: ['PowerDNS Recursor', 'Lua', 'Linux Server', 'DNS Filter List', 'CRUD Operations'],
    videoUrl: 'https://portfolio.s3-id-jkt-1.kilatstorage.id/dns-filtration-demo.mp4',
    pptUrl: 'https://portfolio.s3-id-jkt-1.kilatstorage.id/Fikri%20Andra%20Irham-Proyek%20PKL.pdf',
    image: '/images/projects/dns-filtration.png'
  },
  {
    id: 'project-4',
    category: 'app',
    title: 'MyPrayer Application',
    issuer: 'SMK Negeri 1 Cimahi',
    date: '2023-03-07',
    dateDisplay: 'Mar 7, 2023 - May 7, 2023',
    description: 'Developed a religious Android application with six key features for Muslim worship. Contributed to UI/UX design, Kotlin implementation, and thorough testing for usability and performance.',
    techStacks: ['Kotlin', 'Android Studio', 'XML', 'Jetpack Components', 'Android Emulator'],
    videoUrl: 'https://portfolio.s3-id-jkt-1.kilatstorage.id/myprayer-app-demo.mp4',
    pptUrl: 'https://portfolio.s3-id-jkt-1.kilatstorage.id/Fikri%20Andra%20Irham-Kelompok%205-Project%202.pdf',
    image: '/images/projects/myprayer-app.png'
  },
  {
    id: 'project-5',
    category: 'iot',
    title: 'Smart Lock',
    issuer: 'SMK Negeri 1 Cimahi',
    date: '2022-08-22',
    dateDisplay: 'Aug 23, 2022 - Sep 20, 2022',
    description: 'Developed a smart home security system using NodeMCU ESP8266 and RFID. Involved in design, prototyping, and testing to ensure secure, automated door access.',
    techStacks: ['NodeMCU ESP8266', 'RFID Module', 'Solenoid Lock', 'Arduino IDE', 'C/C++'],
    pptUrl: 'https://portfolio.s3-id-jkt-1.kilatstorage.id/Fikri%20Andra%20Irham-Kelompok%207-Project%201.pdf',
    image: '/images/projects/smart-lock.png'
  },
];