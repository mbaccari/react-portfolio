import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div style={{width: "100vw"}} className="d-flex flex-column justify-content-between min-vh-100 bg-secondary">
      <PortfolioContainer/>


      <Footer />
    </div>
  );
}

export default App;
