import MainBio from './components/pages/MainBio'
import PortfolioGrid from './components/pages/portfolioGrid';
import Footer from './components/pages/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div style={{width: "100vw"}} className="d-flex flex-column justify-content-between min-vh-100">
      <PortfolioContainer/>


      <Footer />
    </div>
  );
}

export default App;
