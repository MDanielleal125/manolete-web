import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import MenuSection from "./components/MenuSection";
import Domicilios from "./components/Domicilios";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <MenuSection />
        <Domicilios />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
