import Hero from "@/components/Hero"
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer"
import Content from "@/components/Content"

function Landing() {
    return(
            <>
        <div className="scroll-smooth font-poppins">
            <Hero/>
            <Content/>
            <FAQSection/>
            <Footer/>
        </div>
        </>
    );
}

export default Landing;