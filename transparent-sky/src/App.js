import { useState } from "react"

import './App.css';
import Header from './components/Header.js'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Live from "./components/Live";
import Products from "./components/Products";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function App() {

  const name = 'Brad';
  const x = false;

  //date stored here for now until deployed on the server
  //////////////////////////
  const [tasks, setTasks] = useState(
      [
          {
              "id": 1,
              "text": "Doctors Appointment",
              "day": "Feb 5th at 2:30pm",
              "reminder": true
            },
            {
              "id": 2,
              "text": "Meeting at School",
              "day": "Feb 6th at 1:30pm",
              "reminder": true
            },
            {
              "id": 3,
              "text": "Food Shopping",
              "day": "Feb 7th at 3:30pm",
              "reminder": true
            }
      ]
  )

  const [emails, setEmails] = useState(
    [
      {
        "email address": "kateysomething@gmail.com",
        "title": "Head of sales",
        "affiliation": "Google",
        "phone number": "702-575-3455",
        "message" : "I'm inquiring about blah"
      }
    ]
  )

  //////////////////////////

  //Delete task
  const deleteTask = (id) => {
    console.log("delete ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  //Add task
  const addTask = (task) => {
    console.log(task);
  }

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/:page' element={<Navbar />} />

          {/* <Route exact path='/' element={<Navbar />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/live' element={<Live />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/products' element={<Products />} />
          {/* <Particle /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
