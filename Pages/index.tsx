/* Import Components */
import LandingServicesBanner from '../Components/HomePage/LandingServicesBanner'
import LogosMarquee from '../Components/HomePage/LogosMarquee'
import ServicesCards from '../Components/HomePage/ServicesCards'
import OurWorks from '../Components/HomePage/OurWorks'
import OurValue from '../Components/HomePage/OurValue'
import OurTeam from '../Components/HomePage/OurTeam'
import Contact from '../Components/Contact'
import Blogs from '../Components/HomePage/Blog'

export default function Home() {
  return (
    <div className="py-12">
      <LandingServicesBanner />
      <LogosMarquee />
      <ServicesCards />
      <OurWorks />
      <OurValue />
      <OurTeam />
      <Contact />
      <Blogs />
    </div>
  )
}
