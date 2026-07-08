import { Background } from "./components/Background"
import { Navbar } from "./components/Navbar"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { HeroSection } from "./components/HeroSection"
import { SkillsSection } from "./components/SkillsSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { CertificationsSection } from "./components/CertificationsSection"
import { EducationSection } from "./components/EducationSection"
import { ContactSection } from "./components/ContactSection"

function App() {
  return (
    <>
      <Background />
      <ThemeSwitcher />
      <Navbar />
      <main className="min-h-screen pt-20 pb-10 flex flex-col items-center text-white overflow-hidden">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 px-4 mb-20">
          <EducationSection />
          <ContactSection />
        </div>
      </main>
    </>
  )
}

export default App
