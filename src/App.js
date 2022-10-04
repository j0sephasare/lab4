import React from 'react';
import './App.css';
import { Content } from './Components/content';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route}from 'react-router-dom';

   {/*
        ^^ imported router 
    */}
class App extends React.Component {
  render() {
    return ( <Router>
      <div className="App">
       {/*
        Blue Navbar  with links to home read and create 
    */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/*
        Router to link to components
    */}
        <Routes>
          <Route path ='/' element={<Content />}></Route>
          <Route path ='/read' element={<Header />}/>
          <Route path ='/create' element={<Footer />}/>
        </Routes>




        {/*  <Header></Header>
    <Content></Content>
    these were used to show the contents in components using the class app that extends the components folder
    <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;
