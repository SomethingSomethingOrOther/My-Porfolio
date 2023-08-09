import './App.css';
import {Header,About,Contact,ProjectsList,Footer} from "./imports"

function App() {
  return (
    <div className="App">
          <header>
              <Header />
              <ProjectsList />
              <Contact />
              <About />
              <Footer />
          </header>
    </div>
  );
}

export default App;
