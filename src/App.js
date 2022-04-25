//import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
//import React from 'react';


import React from "react";


import { connect } from "react-redux";
import Searchtext from './components/Searchtext';



/*function App() {
  return (
    <Maps></Maps>
  );
}

export default App;*/



class App extends React.Component {

  render() {
    return (
      <div className='ventana'>
        <div className='mapsWindows'>
          <div className='mapaLeft'>
            <Searchtext />

            <Maps Zoom={5}></Maps>

          </div>
          <div className='mapaRight'>
          <Searchtext />
            <Maps Zoom={10}></Maps>

          </div>


        </div>
        
        
      </div>
    );
  }


}
export default App;

/*const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
