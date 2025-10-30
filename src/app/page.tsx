import Hero from "@/app/components/Hero";
import AboutPage from "./components/about";
import Timeline from "./components/TimeLine";
import LogoGrid from "./components/LogoGrid";
import StorySection from "./components/StorySection";
import StartupCommunity from "./components/StartupCommunity";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Timeline />
      <LogoGrid />
      <StorySection />
      <StartupCommunity />
    </>
  );
}
