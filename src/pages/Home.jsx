import Header from "../components/sections/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Category from "../components/sections/Category/Category";
import Footer from "../components/sections/Footer/Footer";
import TrandingSection from "../components/sections/TrandingSection/TrandingSection";
import SliderSection from "../components/sections/SliderSection/SliderSection";
import InfoSection from "../components/sections/InfoSection/InfoSection";
function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Category></Category>
            <TrandingSection></TrandingSection>
            <SliderSection></SliderSection>
            <InfoSection></InfoSection>
            <Footer></Footer>
        </div>
    );
}

export default Home;
