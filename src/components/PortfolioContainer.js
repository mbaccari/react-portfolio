import React, { useState } from 'react';
import NavTabs from './NavTabs';
import MainBio from './pages/MainBio';
import { Portfolio } from './pages/PortfolioCard/PortfolioCard';
import ContactUs from './pages/email';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <MainBio />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    else  {
        return <ContactUs />;
      };
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column justify-content-center ">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="d-flex justify-content-center">
        {renderPage()}
      </div>
      
    </div>
  );
}