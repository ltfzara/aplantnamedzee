import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CurrentSeason from "./components/CurrentSeason";
import Garden from "./components/Garden";
import TinyObservations from "./components/TinyObservations";
import Bookshelf from "./components/Bookshelf";
import Tea from "./components/Tea";
import CoCreation from "./components/CoCreation";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import {
  currentSeason,
  tea,
  gardenCommunities,
  coCreationIdeas,
} from "./data/updates";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#2A3D22]">
      <Navbar />

      <Hero />

      <About />

      <CurrentSeason />

      <Garden />

      <TinyObservations />

      <Bookshelf />

      <Tea />

      <CoCreation />

      <Quote />

      <Footer />
    </main>
  );
}