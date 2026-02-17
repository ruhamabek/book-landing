import About from "./components/About";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Hero from "./components/Hero";
import Include from "./components/Include";
import Navbar from "./components/Header";
import Review from "./components/Review";

 
export default function Home() {
  return (
     <main>
           <Navbar />
           <Hero/>
           <About />
           <Include />
           <ForWho />
           <Review />
           <Footer />
     </main>
  );
}
