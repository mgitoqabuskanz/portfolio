import AboutSection from './components/AboutSection'
import ContactSection from './components/contact/ContactSection'
import DockSection from './components/DockSection'
import ExperienceSection from './components/ExperienceSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import NavbarSection from './components/NavbarSection'
import ProjectSection from './components/ProjectSection'
import ResumeSection from './components/ResumeSection'
import './index.css'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

function App() {
  return (
    <>
      <NavbarSection />
      <DockSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App
