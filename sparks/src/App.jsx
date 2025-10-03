import React from 'react';
// DEV NOTE: The local import for the logo is commented out to prevent build errors in this environment.
// To use your local logo, uncomment the line below and make sure the path is correct.
import logoSrc from './assets/logo2.png';

// Placeholder for the logo until the local import is used.
//const logoSrc = 'https://placehold.co/100x100/060c8a/FFFFFF?text=Sparks';


// --- Helper Components & Data ---

// Icon components (using inline SVGs for simplicity)
const UserCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

const BarChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
);

const TvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const BiometricIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12a3 3 0 0 0-3 3"/>
        <path d="M12 12a3 3 0 0 1 3 3"/>
        <path d="M12 12a3 3 0 0 0-3-3"/>
        <path d="M12 12a3 3 0 0 1 3-3"/>
        <path d="M12 12a3 3 0 0 0 0 6"/>
        <path d="M12 12a3 3 0 0 1 0-6"/>
        <path d="M4.5 9.5a8 8 0 0 1 15 0"/>
        <path d="M4.5 14.5a8 8 0 0 0 15 0"/>
    </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L14.39 8.39L21 9.61L16.42 14.58L17.61 21L12 17.77L6.39 21L7.58 14.58L3 9.61L9.61 8.39L12 2z"/></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);


// --- Data Arrays ---
const whyChooseUsFeatures = [
  { icon: <UserCheckIcon />, title: "Experienced Teachers", description: "Learn from dedicated professionals passionate about education." },
  { icon: <BarChartIcon />, title: "Weekly Tests & Reports", description: "Track your progress with regular assessments and detailed feedback." },
  { icon: <TvIcon />, title: "Smart Classrooms", description: "Engage with lessons through modern digital learning tools." },
  { icon: <UsersIcon />, title: "Supportive Environment", description: "A comfortable and encouraging atmosphere for all students." },
  { icon: <BiometricIcon />, title: "Biometric Attendance", description: "A secure and efficient automated attendance system." },
  { icon: <CameraIcon />, title: "CCTV Surveillance", description: "Ensuring a safe and secure learning environment for everyone." },
];

const specialFeatures = [
    { icon: <SparklesIcon />, title: "Focused Learning", description: "Individual attention to help every student achieve their potential." },
    { icon: <SparklesIcon />, title: "Strong Foundation", description: "Building core concepts for guaranteed future success." },
];

const educators = [
    { name: "Swati Bhosale", role: "BE Civil", college: "Jain College, Belgavi" },
    { name: "Om Patil", role: "BE Mechanical", college: "Mumbai University" }
];

const techStack = [
    { name: 'React', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', href: 'https://react.dev/' },
    { name: 'Vite', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawMRR6TPYio8G64o8gNaGmZcgO3RTMepoPA&s', href: 'https://vitejs.dev/' },
    { name: 'Tailwind CSS', imgUrl: 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp', href: 'https://tailwindcss.com/' },
    { name: 'Git', imgUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', href: 'https://git-scm.com/' },
    { name: 'GitHub', imgUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', href: 'https://github.com/' },
    { name: 'Node.js', imgUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-nodejs-2-226035.png', href: 'https://nodejs.org/' }
];


// --- Main App Component ---
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [featureModalContent, setFeatureModalContent] = React.useState(null);
  const [educatorModalContent, setEducatorModalContent] = React.useState(null);
  const [logoModalOpen, setLogoModalOpen] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Educators', href: '#educators' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };
  
  return (
    <div id="app-wrapper">
      <style>{`
        /* --- Global Styles & Variables --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Lato:wght@400;700&display=swap');
        
        :root {
            --custom-blue: #060c8a;
            --custom-gold: #f2c318;
            --custom-blue-dark: #040c6a;
            --custom-gold-light: #fffbeb;
        }

        .light-theme {
            --bg-primary: #f0f7ff;
            --bg-secondary: #ffffff;
            --bg-tertiary: #f3f4f6;
            --text-primary: #111827;
            --text-secondary: #4b5563;
            --text-tertiary: #6b7280;
            --border-color: #e5e7eb;
            --header-bg: rgba(240, 247, 255, 0.8);
            --modal-bg: #ffffff;
            --menu-button-bg: #f3f4f6;
            --menu-button-hover-bg: #e5e7eb;
        }

        .dark-theme {
            --bg-primary: #111827;
            --bg-secondary: #1f2937;
            --bg-tertiary: #374151;
            --text-primary: #f9fafb;
            --text-secondary: #d1d5db;
            --text-tertiary: #9ca3af;
            --border-color: #374151;
            --header-bg: rgba(17, 24, 39, 0.8);
            --modal-bg: #1f2937;
            --menu-button-bg: #374151;
            --menu-button-hover-bg: #4b5563;
        }


        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body, #app-wrapper {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            font-family: 'Lato', sans-serif;
            overflow-x: hidden;
            transition: background-color 0.3s, color 0.3s;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
            color: var(--text-primary);
        }

        .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        
        .gradient-text {
            background: linear-gradient(45deg, #060c8a, #071870);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        
        .dark-theme .gradient-text {
             background: linear-gradient(45deg, #a7b2ff, #cad0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        /* --- Header --- */
        .header {
            background-color: var(--header-bg);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 50;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
        }

        .logo-img {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 9999px;
            object-fit: cover;
        }
        
        .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .menu-button, .theme-toggle-button { 
            position: relative; 
            z-index: 50; 
            background: var(--menu-button-bg); 
            border: 1px solid var(--border-color); 
            cursor: pointer; 
            border-radius: 9999px;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s, box-shadow 0.3s;
        }
        .menu-button:hover, .theme-toggle-button:hover {
            background-color: var(--menu-button-hover-bg);
            box-shadow: 0 0 0 4px rgba(0,0,0,0.05);
        }
        .hamburger svg, .theme-toggle-button svg { 
            height: 1.8rem; 
            width: 1.8rem; 
            color: var(--text-primary);
        }
        .hamburger line { 
            stroke: var(--text-primary);
            transition: all 0.3s ease-in-out; 
            transform-origin: center; 
        }
        .hamburger.is-open line {
            stroke: var(--text-primary);
        }
        .hamburger.is-open .line1 { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.is-open .line2 { opacity: 0; }
        .hamburger.is-open .line3 { transform: rotate(-45deg) translate(7px, -7px); }

        /* --- Sidebar Overlay --- */
        .sidebar-overlay {
            position: fixed;
            top: 0; right: 0; bottom: 0; left: 0;
            background: var(--header-bg);
            backdrop-filter: blur(10px);
            z-index: 40;
            opacity: 0;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            pointer-events: none;
        }
        .sidebar-overlay.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
        }
        .sidebar-nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
        }
        .sidebar-nav a {
            position: relative;
            color: var(--text-primary);
            font-size: 1.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-decoration: none;
            padding: 0.5rem 1rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            overflow: hidden;
        }
        .sidebar-overlay.open .sidebar-nav a {
             opacity: 1;
             transform: translateY(0);
        }
        .sidebar-overlay.open .sidebar-nav a:nth-child(1) { transition-delay: 0.2s; }
        .sidebar-overlay.open .sidebar-nav a:nth-child(2) { transition-delay: 0.25s; }
        .sidebar-overlay.open .sidebar-nav a:nth-child(3) { transition-delay: 0.3s; }
        .sidebar-overlay.open .sidebar-nav a:nth-child(4) { transition-delay: 0.35s; }
        .sidebar-overlay.open .sidebar-nav a:nth-child(5) { transition-delay: 0.4s; }

        .sidebar-nav a::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--custom-gold-light);
            transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            z-index: -1;
        }
        .dark-theme .sidebar-nav a::before {
            background: rgba(242, 195, 24, 0.1);
        }
        .sidebar-nav a:hover::before {
            left: 0;
        }
         .sidebar-nav a:hover {
            color: var(--custom-blue);
        }
        .dark-theme .sidebar-nav a:hover {
            color: var(--custom-gold);
        }
        .sidebar-nav a:active { 
            transform: scale(0.95);
        }

        /* --- Hero Section --- */
        #home {
            background-color: var(--bg-secondary);
            padding-top: 8rem;
            padding-bottom: 5rem;
            position: relative;
            overflow: hidden;
        }
        .hero-pattern {
            position: absolute;
            top:0; right:0; bottom:0; left:0;
            opacity: 0.1;
            background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23071870" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        }
        .dark-theme .hero-pattern {
             background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        }
        .hero-content {
            text-align: center;
            position: relative;
            z-index: 10;
        }
        .hero-content h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 1rem; }
        .hero-content .subtitle { font-size: 1.25rem; font-weight: 300; margin-bottom: 0.5rem; color: var(--custom-blue); }
        .dark-theme .hero-content .subtitle { color: var(--custom-gold); }
        .hero-content .description { font-size: 1rem; color: var(--text-secondary); margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto; }
        .hero-buttons-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .hero-button {
            display: inline-block;
            background-color: var(--custom-blue);
            color: white;
            font-weight: 700;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-size: 1.125rem;
            text-decoration: none;
            transition: all 0.3s;
            border: 2px solid var(--custom-blue);
        }
        .hero-button:hover { 
            background-color: var(--custom-blue-dark); 
            border-color: var(--custom-blue-dark);
            transform: scale(1.05); 
        }
        .hero-button-outline {
            background-color: transparent;
            color: var(--custom-blue);
        }
        .dark-theme .hero-button-outline {
             color: var(--custom-gold);
             border-color: var(--custom-gold);
        }
        .hero-button-outline:hover {
            background-color: var(--custom-blue);
            color: white;
        }
         .dark-theme .hero-button-outline:hover {
            background-color: var(--custom-gold);
            color: var(--bg-primary);
        }


        /* --- Why Choose Us Section --- */
        #why-us { padding: 5rem 0; background-color: var(--bg-secondary); }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-header h2 { font-size: 2.25rem; font-weight: 700; }
        .section-header p { color: var(--text-secondary); margin-top: 1rem; max-width: 42rem; margin-left: auto; margin-right: auto; }
        
        .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .feature-card {
            background-color: var(--bg-primary);
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 2px solid transparent;
        }
        .feature-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            transform: translateY(-0.25rem);
            border-color: var(--custom-gold);
        }
        .feature-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .feature-card-header svg { height: 2rem; width: 2rem; color: var(--custom-gold); }
        .feature-card-header h3 { font-size: 1.25rem; font-weight: 600; color: var(--text-primary); }
        .feature-card p { color: var(--text-secondary); }

        /* --- Special Features Section --- */
        #special-features { padding: 5rem 0; background-color: var(--bg-tertiary); }
        .special-features-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; max-width: 56rem; margin: 0 auto; }
        .special-feature-card {
            background-color: var(--bg-secondary);
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            flex: 1;
            min-width: 280px;
            text-align: center;
            transition: transform 0.3s;
        }
        .special-feature-card:hover { transform: scale(1.05); }
        .special-feature-icon-wrapper {
            margin: 0 auto 1rem;
            background-color: var(--custom-gold-light);
            height: 4rem;
            width: 4rem;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .dark-theme .special-feature-icon-wrapper {
             background-color: rgba(242, 195, 24, 0.1);
        }
        .special-feature-icon-wrapper svg { height: 2rem; width: 2rem; color: var(--custom-gold); }
        .special-feature-card h3 { font-size: 1.5rem; font-weight: 700; color: var(--custom-blue); margin-bottom: 0.5rem; }
        .dark-theme .special-feature-card h3 { color: var(--custom-gold); }
        .special-feature-card p { color: var(--text-secondary); }

        /* --- Educators Section --- */
        #educators { padding: 5rem 0; background-color: var(--bg-secondary); }
        .educators-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 2.5rem; }
        .educator-circle {
            width: 12rem;
            height: 12rem;
            border-radius: 9999px;
            background-color: var(--bg-tertiary);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: 3px solid transparent;
        }
        .educator-circle::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border: 3px solid var(--custom-gold);
            border-radius: 9999px;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.3s ease;
        }
        .educator-circle:hover::after {
            opacity: 1;
            transform: scale(1);
        }
        .educator-circle h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); }
        .educator-circle .role { color: var(--custom-blue); font-weight: 500; font-size: 0.875rem; }
        .dark-theme .educator-circle .role { color: var(--custom-gold); }
        
        /* --- Tech Stack Section --- */
        #tech-stack { padding: 5rem 0; background-color: var(--bg-tertiary); }
        .tech-stack-card {
            background: var(--bg-secondary);
            border-radius: 1rem;
            padding: 2rem 0;
            max-width: 56rem;
            margin: 0 auto;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .marquee-container {
            display: flex;
            width: fit-content;
        }
        .marquee-content {
            display: flex;
            align-items: center;
            animation: marquee-scroll 40s linear infinite;
        }
        .tech-stack-card:hover .marquee-content {
            animation-play-state: paused;
        }
        @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .tech-logo-link {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 2rem;
            flex-shrink: 0;
        }
        .tech-logo-img {
            height: 3.5rem;
            max-width: 8rem;
            object-fit: contain;
            transition: transform 0.3s ease;
            filter: var(--logo-filter, none);
        }
        .dark-theme .tech-logo-img {
            filter: invert(1);
        }
        .tech-logo-link:hover .tech-logo-img {
            transform: scale(1.1);
        }
        .tech-tooltip {
            position: absolute;
            bottom: 110%;
            left: 50%;
            background-color: var(--bg-tertiary);
            color: var(--text-primary);
            padding: 0.375rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
            white-space: nowrap;
            transform: translateX(-50%) translateY(5px);
        }
        .tech-logo-link:hover .tech-tooltip {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        /* --- Contact Section --- */
        #contact { padding: 5rem 0; background-color: var(--bg-secondary); }
        .contact-card { max-width: 56rem; margin: 0 auto; background-color: var(--bg-tertiary); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .contact-info-container { display: flex; flex-direction: column; justify-content: space-around; align-items: center; gap: 2rem; }
        .contact-info-item { display: flex; align-items: center; gap: 1rem; }
        .contact-info-item a {
            text-decoration: none;
            color: inherit;
            transition: color 0.3s;
        }
        .contact-info-item a:hover {
            color: var(--custom-blue);
        }
        .dark-theme .contact-info-item a:hover {
            color: var(--custom-gold);
        }
        .contact-info-item svg { height: 1.5rem; width: 1.5rem; color: var(--text-primary); }
        .contact-info-item h4 { font-weight: 600; font-size: 1.125rem; }
        .contact-info-item p { color: var(--text-secondary); }
        .contact-card .closing-text { margin-top: 2rem; text-align: center; font-size: 1.25rem; font-weight: 300; }
        
        /* --- Footer --- */
        .footer { background-color: var(--custom-blue); color: #fff; padding: 2rem 0; }
        .dark-theme .footer { background-color: #111827; border-top: 1px solid var(--border-color); }
        .footer-container { 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            gap: 1.5rem; 
            text-align: center;
        }
        .footer-credits {
            font-size: 0.875rem;
        }
        .social-icons {
            display: flex;
            gap: 1.5rem;
        }
        .tooltip-container { position: relative; }
        .tooltip-container .social-icon-link svg { 
            height: 1.5rem; 
            width: 1.5rem; 
            color: white; 
            transition: color 0.3s, transform 0.3s; 
        }
        .tooltip-container .social-icon-link:hover svg { 
            color: var(--custom-gold); 
            transform: scale(1.2);
        }
        .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 0.5rem;
            background-color: var(--bg-tertiary);
            color: var(--text-primary);
            padding: 0.375rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
            white-space: nowrap;
        }
        .tooltip-container:hover .tooltip { opacity: 1; }

        /* --- Modal --- */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            padding: 1rem;
            animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-content, .logo-modal-content {
            background-color: var(--modal-bg);
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            padding: 2rem;
            max-width: 32rem;
            width: 100%;
            position: relative;
            animation: scaleIn 0.3s ease-out forwards;
        }
        .logo-modal-content {
             max-width: 90vw;
             max-height: 90vh;
             display: flex;
             flex-direction: column;
             align-items: center;
        }
        .logo-modal-img {
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
            margin-top: 1rem;
        }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-close-button {
            position: absolute;
            top: 1rem; right: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text-tertiary);
        }
        .modal-close-button:hover { color: var(--text-primary); }
        .modal-close-button svg { height: 1.5rem; width: 1.5rem; }
        .modal-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .modal-header svg { height: 2rem; width: 2rem; color: var(--custom-gold); }
        .modal-header h3 { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); }
        .modal-content p { color: var(--text-secondary); }

        /* --- Responsive Styles --- */
        @media (min-width: 768px) {
            .hero-content h1 { font-size: 3.75rem; }
            .hero-content .subtitle { font-size: 1.5rem; }
            .hero-content .description { font-size: 1.125rem; }

            .features-grid { grid-template-columns: repeat(2, 1fr); }
            
            .educators-container { gap: 4rem; }

            .contact-info-container { flex-direction: row; text-align: left; }

            .footer-container { 
                flex-direction: row; 
                justify-content: space-between;
                gap: 1rem; 
            }
        }

        @media (min-width: 1024px) {
            .features-grid { grid-template-columns: repeat(3, 1fr); }
        }

      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-container" onClick={() => setLogoModalOpen(true)}>
            <img src={logoSrc} alt="Sparks Academy Logo" className="logo-img" />
            <span className="logo-text">Sparks Academy</span>
          </div>
          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-button">
                 <svg className={`hamburger ${mobileMenuOpen ? 'is-open' : ''}`} fill="none" viewBox="0 0 24 24">
                    <line className="line1" x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
                    <line className="line2" x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                    <line className="line3" x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
                </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                    {link.name}
                </a>
            ))}
        </nav>
      </div>
      
      <main>
        {/* Hero Section */}
        <section id="home">
            <div className="hero-pattern"></div>
            <div className="container hero-content">
                <h1 className="gradient-text">A Great Place To Learn</h1>
                <p className="subtitle">Igniting Minds.. Building Futures..</p>
                <p className="description">Admissions open for classes 5th to 10th. First in Sadalga with modern facilities.</p>
                <div className="hero-buttons-container">
                    <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hero-button">
                    Enroll Now
                    </a>
                    <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="hero-button hero-button-outline">
                    Explore
                    </a>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us">
          <div className="container">
            <div className="section-header">
              <h2 className="gradient-text">Why Choose Sparks Academy?</h2>
              <p>We provide a comprehensive and enriching learning experience designed for success.</p>
            </div>
            <div className="features-grid">
              {whyChooseUsFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card"
                  onClick={() => setFeatureModalContent(feature)}
                >
                  <div className="feature-card-header">
                    {feature.icon}
                    <h3>{feature.title}</h3>
                  </div>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Features Section */}
         <section id="special-features">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Our Special Features</h2>
                </div>
                <div className="special-features-container">
                    {specialFeatures.map((feature, index) => (
                        <div key={index} className="special-feature-card">
                            <div className="special-feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Educators Section */}
        <section id="educators">
          <div className="container">
            <div className="section-header">
              <h2 className="gradient-text">Meet Our Educators</h2>
              <p>Our team of experienced and passionate teachers.</p>
            </div>
            <div className="educators-container">
              {educators.map((educator, index) => (
                  <div key={index} className="educator-circle" onClick={() => setEducatorModalContent(educator)}>
                      <h3>{educator.name}</h3>
                      <p className="role">{educator.role}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section */}
        <section id="tech-stack">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Built with Modern Tech-Stack</h2>
                    <h4>Crafted with the cool and modern tech that powers your favorite apps and websites.</h4>
                </div>
                <div className="tech-stack-card">
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <a href={tech.href} key={index} className="tech-logo-link" target="_blank" rel="noopener noreferrer">
                                    <img src={tech.imgUrl} alt={tech.name} className="tech-logo-img" />
                                    <span className="tech-tooltip">{tech.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h2 className="gradient-text">Get In Touch</h2>
              <p>We're here to help you start your learning journey.</p>
            </div>
            <div className="contact-card">
                <div className="contact-info-container">
                    <div className="contact-info-item">
                        <MapPinIcon />
                        <div>
                            <h4>Our Location</h4>
                            <p><a href="https://www.google.com/maps/place/Sadalga,+Karnataka+591239/@16.5525363,74.5131178,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc0e65a54736dd1:0xd272356298dc9441!8m2!3d16.5533172!4d74.5316807!16zL20vMGY2NHFm?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Near Rani Chennamma Circle, Sadalga 591239</a></p>
                        </div>
                    </div>
                     <div className="contact-info-item">
                        <PhoneIcon />
                        <div>
                            <h4>Call Us</h4>
                            <p>9082621124</p>
                            <p>8310339218</p>
                        </div>
                    </div>
                </div>
                <p className="closing-text">Hurry Up! Admissions are filling fast.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
            <div className="footer-credits">
                <p>&copy; {new Date().getFullYear()} Sparks Academy. All Rights Reserved.</p>
                <p>Developed by ThunderGod-54</p>
            </div>
            <div className="social-icons">
                <div className="tooltip-container">
                    <a href="https://github.com/ThunderGod-54" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Connect on GitHub">
                      <GitHubIcon />
                    </a>
                    <div className="tooltip">Connect on GitHub</div>
                </div>
                <div className="tooltip-container">
                    <a href="https://www.linkedin.com/in/rishabh-r-kinnal-101955369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Connect on LinkedIn">
                      <LinkedInIcon />
                    </a>
                    <div className="tooltip">Connect on LinkedIn</div>
                </div>
            </div>
        </div>
      </footer>

      {/* Feature Modal */}
      {featureModalContent && (
        <div className="modal-overlay" onClick={() => setFeatureModalContent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setFeatureModalContent(null)} className="modal-close-button" aria-label="Close modal"><CloseIcon /></button>
                <div className="modal-header">
                    {featureModalContent.icon}
                    <h3>{featureModalContent.title}</h3>
                </div>
                <p>{featureModalContent.description}</p>
            </div>
        </div>
      )}

      {/* Educator Modal */}
      {educatorModalContent && (
        <div className="modal-overlay" onClick={() => setEducatorModalContent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setEducatorModalContent(null)} className="modal-close-button" aria-label="Close modal"><CloseIcon /></button>
                <div className="modal-header">
                    <UserCheckIcon/>
                    <h3>{educatorModalContent.name}</h3>
                </div>
                <p><strong>Qualification:</strong> {educatorModalContent.role}</p>
                <p><strong>College:</strong> {educatorModalContent.college}</p>
            </div>
        </div>
      )}

      {/* Logo Modal */}
      {logoModalOpen && (
        <div className="modal-overlay" onClick={() => setLogoModalOpen(false)}>
            <div className="logo-modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setLogoModalOpen(false)} className="modal-close-button" aria-label="Close modal"><CloseIcon /></button>
                <div className="modal-header">
                    <h3>Sparks Academy Logo</h3>
                </div>
                <img src={logoSrc} alt="Sparks Academy Logo" className="logo-modal-img" />
            </div>
        </div>
      )}
    </div>
  );
}

