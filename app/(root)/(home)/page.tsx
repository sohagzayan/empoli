import { LiveStatusBar, WebsiteReviews } from '@/components/common';
import BottomNav from '@/components/shared/Nav/BottomNav';
import Footer from '@/components/shared/footer/Footer';
import HeroSection from './components/HeroSection';
import SuccessHighlights from './components/SuccessHighlights';
import OurMission from './components/OurMission';
import BenefitsForJobSeekersAndRecruiters from './components/BenefitsForJobSeekersRecruiters';
import MeetRecruiterCloud from './components/MeetRecruiterCloud';

export default function HomePage() {
  return (
    <main className="bg-themeDark">
      <HeroSection />
      <LiveStatusBar />
      <SuccessHighlights />
      <OurMission />
      <BenefitsForJobSeekersAndRecruiters />
      <MeetRecruiterCloud />
      <WebsiteReviews />
      <Footer />
      <BottomNav />
    </main>
  );
}
