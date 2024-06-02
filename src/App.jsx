import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Team from "./components/Team/team";
import Contacts from "./components/Contacts/contacts";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Skills />
      <Team />
      <Contacts />
      
    </div>
  )
}

export default App;
