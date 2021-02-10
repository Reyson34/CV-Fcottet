import './App.css';
import Navbar from "./Navbar/Navbar.jsx"
import CuriculumVitae from "./Body/CuriculumVitae.jsx"
import Footer from "./Navbar/Footer.jsx"


function App() {
  return (
    <div className="App">
      <body style={{ backgroundColor: "grey" }}>
        <div class="container white" >
          <Navbar />
          <CuriculumVitae />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
