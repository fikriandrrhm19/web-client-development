import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext'; 
import MainLayout from '@/components/layouts/MainLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins' 
});

const themeInitializerScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export const metadata = {
  title: {
    template: '%s | Fikri Andra Irham',
    default: 'Fikri Andra Irham - Tech Enthusiast & Problem Solver',
  },
  description: 'Personal portfolio of Fikri Andra Irham, a tech enthusiast specializing in Linux System Management, Web Development, and Technical Documentation. Explore projects in IoT, App Development, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning 
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </head>
      <body>
        <ThemeProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}