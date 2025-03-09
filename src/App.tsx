import AboutSection from './components/about/AboutSection'
import ContactSection from './components/contact/ContactSection'
import DockSection from './components/dock/DockSection'
import ExperienceSection from './components/experience/ExperienceSection'
import FooterSection from './components/footer/FooterSection'
import HeroSection from './components/hero/HeroSection'
import NavbarSection from './components/navbar/NavbarSection'
import ProjectSection from './components/project/ProjectSection'
import ResumeSection from './components/resume/ResumeSection'
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
