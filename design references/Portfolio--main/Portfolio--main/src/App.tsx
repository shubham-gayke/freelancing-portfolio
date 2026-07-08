import { Background } from "./components/Background"
import { Navbar } from "./components/Navbar"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { HeroSection } from "./components/HeroSection"
import { SkillsSection } from "./components/SkillsSection"
import { CloudSkillsSection } from "./components/CloudSkillsSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { CertificationsSection } from "./components/CertificationsSection"
import { EducationCommunitySection } from "./components/EducationCommunitySection"
import { CodingProfilesSection } from "./components/CodingProfilesSection"

function App() {
  return (
    <>
      <Background />
      <ThemeSwitcher />
      <Navbar />
      <main className="min-h-screen pt-20 pb-10 flex flex-col items-center">
        <HeroSection />
        <SkillsSection />
        <CloudSkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationCommunitySection />
        <CodingProfilesSection />
      </main>
    </>
  )
}

export default App
