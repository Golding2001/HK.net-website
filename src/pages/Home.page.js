import React from 'react';
import SpinnerComponent from '../components/ui/Spinner.component';

const HomePage = () => {
    return (
        <div className="container">
          <div className="row">
          <div className=".col-12 text-center">
            <h2>Hill and Knowlton</h2>
            <h5>Where Communication Shapes Success</h5>
          </div>
          </div>



           <SpinnerComponent /> 
        </div>
    );
};

export default HomePage;