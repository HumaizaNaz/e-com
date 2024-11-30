import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div  > 
<Navbar/>
<Hero/>
<Cards/>
<Testimonial/>
<Footer/>
   </div>
  );
}
