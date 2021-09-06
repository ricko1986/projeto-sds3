import DataTable from 'components/Datatable';
import Footer from 'components/Footer';
import Navbar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1 className="text-primary">Olá Mundo !</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
