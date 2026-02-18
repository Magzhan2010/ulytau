import Benefit from "./components/benefite";
import CityExplorer from "./components/CityExplorer";
import Geography from "./components/Geology";
import Hero from "./components/hero";

import IndustrialTimeline from "./components/IndustrialTimeline";
import SacredPlaces from "./components/SacredPlaces";
import Stats from "./components/stats";


function App() {
  return (
    <main className="antialiased">
      <Hero />
      <Stats />
      <Geography />
      <IndustrialTimeline />
      <Benefit />
      <SacredPlaces />
      <CityExplorer /> 
      <footer className="py-12 bg-black text-center text-white/30 text-xs uppercase tracking-[0.4em]">
        Улытауская область • Географический Проект • 2026
        <br />
        Zhenis Magzhan
      </footer>
    </main>
  );
}

export default App;
