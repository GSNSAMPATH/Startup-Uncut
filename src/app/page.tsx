import Hero from "@/app/components/Home/Hero";
import AboutPage from "./components/Home/about";
import Timeline from "./components/Home/TimeLine";
import LogoGrid from "./components/Home/LogoGrid";
import StorySection from "./components/Home/StorySection";
import StartupCommunity from "./components/Home/StartupCommunity";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Timeline />
      <LogoGrid />
      <StorySection />
      <StartupCommunity />
      {/* <VideoSection />  */}
    </>
  );
}
