import './App.css';
import { Navbar} from './components'
import {About,Header,Footer,Location,Services,Book, Gallery} from './container'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Book />
        <Footer />
      </div>
    </div>
  );
}

export default App;
