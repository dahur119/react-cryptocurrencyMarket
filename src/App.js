import React from "react";
import { Routes, Route } from "react-router-dom";
import {Layout, Typography, Space} from 'antd'
import './style/app.css'


import {Navbar,Exchanges,HomePage, Cryptocurrency,CryptoDetails, News} from './components'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="main">
        <Layout>

        <div className="routes">
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/cryptocurrency" element={<Cryptocurrency/>}/>
          <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
         </div>


        </Layout>
    

        
    


   
   
      <div className="footer"  >
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          CryptoVerse <br/>
          All right 
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
          
           

        </Space>
        </div>


      </div>

      
    </div>
  );
}

export default App;
