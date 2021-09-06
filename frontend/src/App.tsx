import BarChart from 'components/BarChart';
import DataTable from 'components/Datatable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import Navbar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary px-3">Dashboard de Vendas</h1>
        <div className="row px-3 py-1">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
