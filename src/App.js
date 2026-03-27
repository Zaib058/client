import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";
import './App.css';
import Prospectus from "./pages/Prospectus";
import GalleryEvents from "./pages/GalleryEvents";
import Admissions from "./pages/Admission";
import Charter from "./pages/Charter"
import About from "./pages/About";
import HomePage from "./pages/Home";
import { Provider } from "react-redux";
import mystore from "./redux/store";
import StudentHome from "./Screens/Student/Home";
import FacultyHome from "./Screens/Faculty/Home";
import AdminHome from "./Screens/Admin/Home";
import Login from './components/Login'
import MessageDetail from "./pages/MessageDetail";

function App() {
  return (
    <Provider store={mystore}>
    <Router basename="/client">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery_events" element={<GalleryEvents />} />
            <Route path="/prospectus" element={<Prospectus/>}/>
            <Route path="/admissions" element={<Admissions/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/charter" element={<Charter/>}/>
            <Route path="/message/:id" element={<MessageDetail />} />
        </Route>

         <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/faculty" element={<FacultyHome />} />
          <Route path="/admin" element={<AdminHome />} /> 
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
