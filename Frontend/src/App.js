import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Advert from "./Page/Advert/Advert";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Page/Admin/Admin";
import Arsa from "./Page/Advert/Arsa/Arsa";
import KiralıkArsa from "./Page/Advert/Arsa/KiralıkArsa/KiralıkArsa";
import SatilikArsa from "./Page/Advert/Arsa/SatilikArsa/SatilikArsa";
import KiralikEv from "./Page/Advert/Ev/KiralıkEv/KiralikEv";
import SatilikEv from "./Page/Advert/Ev/SatilikEv/SatilikEv";
import SatilikBungolov from "./Page/Advert/Bungolov/SatilikBungolov/SatilikBungolov";
import KiralikBungolov from "./Page/Advert/Bungolov/KiralikBungolov/KiralikBungolov";
import Bungolov from "./Page/Advert/Bungolov/Bungolov";
import Ev from "./Page/Advert/Ev/Ev";
import ArsaEdit from "./Components/ArsaItems/ArsaEdit";
import { kiralikArsaFecth, kiralıkArsaEdit, satilikArsaEdit, satilikArsaFecth } from "./Data/arsaApi";
import EvEdit from "./Components/EvItems/EvEdit";
import { kiralikEvEdit, kiralikEvFecth, satilikEvEdit, satilikEvFecth } from "./Data/evApi";
import BungalovEdit from "./Components/BungalovItems/BungalovEdit";
import { kiralikBungalovEdit, kiralikBungalovFecth, satilikBungalovEdit, satilikBungalovFecth } from "./Data/bungalovApi";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/advert' element={<Advert />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/advert/arsa' element={<Arsa />} />
        <Route path='/advert/arsa/kiralik' element={<KiralıkArsa />} />
        <Route path='/advert/arsa/kiralik/:id' element={<ArsaEdit fecth={kiralikArsaFecth} go={"/advert"} editApi={kiralıkArsaEdit} />} />
        <Route path='/advert/arsa/satilik' element={<SatilikArsa />} />
        <Route path='/advert/arsa/satilik/:id' element={<ArsaEdit fecth={satilikArsaFecth} go={"/advert"} editApi={satilikArsaEdit} />} />
        <Route path='/advert/ev' element={<Ev />} />
        <Route path='/advert/ev/satilik' element={<SatilikEv />} />
        <Route path='/advert/ev/satilik/:id' element={<EvEdit fecth={satilikEvFecth} go={"/advert"} editApi={satilikEvEdit} />} />
        <Route path='/advert/ev/kiralik' element={<KiralikEv />} />
        <Route path='/advert/ev/kiralik/:id' element={<EvEdit fecth={kiralikEvFecth} go={"/advert"} editApi={kiralikEvEdit} />} />
        <Route path='/advert/bungalov' element={<Bungolov />} />
        <Route path='/advert/bungalov/satilik' element={<SatilikBungolov />} />
        <Route path='/advert/bungalov/satilik/:id' element={<BungalovEdit fecth={satilikBungalovFecth} go={"/advert"} editApi={satilikBungalovEdit} />} />
        <Route path='/advert/bungalov/kiralik' element={<KiralikBungolov />} />
        <Route path='/advert/bungalov/kiralik/:id' element={<BungalovEdit fecth={kiralikBungalovFecth} go={"/advert"} editApi={kiralikBungalovEdit} />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
