import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import { Footer } from "@/components/ui/footer-section";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Page() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full fixed top-0 bottom-0 right-0 left-0  bg-gray-50 dark:bg-black -z-50 ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] "></div>
        <div className="hidden md:block absolute bottom-0 left-0 right-0 top-0 dark:bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] bg-[radial-gradient(circle_800px_at_10%_200px,#d5c5ff,transparent)]"></div>

        {/* small devices */}
        <div className="md:hidden dark:hidden absolute bottom-0 left-0 right-0 top-0  bg-[radial-gradient(circle_800px_at_10%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="w-full">
        <NavBar />

        <HeroSection />

        <FeaturesSection />

        <Footer />
      </div>
    </div>
  );
}
