
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
function App() {
  return (
    <div className="App">
       <Banner bannerText="Sextant" />
       <Exhibit name="I'm an exhibit"></Exhibit>
      <Exhibit name="I'm also an exhibit"></Exhibit>
      <Exhibit name="Don't forget about me, I'm an exhibit tool"></Exhibit>

    </div>
  );
}

export default App;
