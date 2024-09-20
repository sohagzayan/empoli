import { WebsiteReviews } from '@/components/common'
import { BenefitsForJobSeekersAndRecruiters, MeetRecruiterCloud, OurMission, SuccessHighlights } from '@/components/containers/home-page'
import FeaturedJobs from '@/components/containers/home-page/featured-jobs/FeaturedJobs'
import HeroSection from '@/components/containers/home-page/hero-section/HeroSection'
import MillionsOfJobs from '@/components/containers/home-page/millions-of-jobs/MillionsOfJobs'
import PopularJobCategories from '@/components/containers/home-page/popular-job-categories/PopularJobCategories'
import ReadLatestStory from '@/components/containers/home-page/read-latest-article/ReadLatestArticle'
import FAQ from '@/components/shared/FAQ/FAQ'
import BottomNav from '@/components/shared/Nav/BottomNav'
import CustomersTestimonials from '@/components/shared/customers-testimonials/CustomersTestimonials'
import Footer from '@/components/shared/footer/Footer'
import Recruiting from '@/components/shared/recruiting/Recruiting'

export default function HomePage() {
  return (
    <main className='bg-themeDark '>
      {/* <Marquee /> */}
      <HeroSection />
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
