
import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import GetInTouch from '../components/GetInTouch'
import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'
import FAQSection from '../components/faqs'

const Home = () => {
        // 👇 ADD THIS
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#3a5a40] via-[#588157] to-[#a3b18a]">
      
            <Hero/>
            <WhyChoose/>
            <ContactSection/>
            <FAQSection/>
            <GetInTouch/>
        </div>
    )
}

export default Home