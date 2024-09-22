import { LiveStatusBar, TopBanner, WebsiteReviews } from '@/components/common'
import { BenefitsForJobSeekersAndRecruiters, MeetRecruiterCloud, OurMission, SuccessHighlights } from '@/components/containers/home-page'
import HeroSection from '@/components/containers/home-page/hero-section/HeroSection'
import BottomNav from '@/components/shared/Nav/BottomNav'
import Footer from '@/components/shared/footer/Footer'

export default function HomePage() {
  return (
    <main className='bg-themeDark '>
      {/* <Marquee /> */}
      {/* <TopBanner /> */}
      <HeroSection />
      <LiveStatusBar />
      <SuccessHighlights />
      <OurMission />
      <BenefitsForJobSeekersAndRecruiters />
      <MeetRecruiterCloud />
      <WebsiteReviews />
      {/* <PopularJobCategories /> */}
      {/* <FeaturedJobs /> */}
      {/* <MillionsOfJobs /> */}
      {/* <CustomersTestimonials /> */}
      {/* <FAQ /> */}
      {/* <ReadLatestStory /> */}
      {/* <Recruiting /> */}
      <Footer />
      <BottomNav />
    </main>
  )
}
