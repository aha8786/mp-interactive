import HeroSection from "@/components/home/HeroSection";
import BentoSection from "@/components/home/BentoSection";
import TrendSection from "@/components/home/TrendSection";
import ProcessSection from "@/components/home/ProcessSection";
// import PortfolioSection from "@/components/home/PortfolioSection"; // 포트폴리오 준비 후 활성화
// import TestimonialsSection from "@/components/home/TestimonialsSection"; // 고객 후기 준비 후 활성화
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoSection />
<TrendSection />
      <ProcessSection />
      {/* <PortfolioSection /> */}
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </>
  );
}
