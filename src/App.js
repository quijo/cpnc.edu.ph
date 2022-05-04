
import { Routes, Route  } from "react-router-dom";
import MainNavbar from './components/mainNavbar/MainNavbar'
import SocialIcons from './components/socialNavbar/SocialIcons'
import Home from './pages/home/Home'
import Admission from './pages/admission/Admission'
import Academic from './pages/academic/Academic'
import Registar from './pages/registrar/Registrar'

function App() {
  return (
    <>
   
<SocialIcons/>
<MainNavbar />

<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/adminission" element={<Admission />}/>
  <Route path="/academic" element={<Academic />}/>
  <Route path="/registar" element={<Registar/>}/>
{/* <Route path='/library' element={()=>{
  window.location.href = "https://vnbc-gnec.kari.opalsinfo.net/bin/home" }}/> */}

</Routes>
    
     
 
    </>
  );
}

export default App;
