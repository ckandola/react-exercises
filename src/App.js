// https://dev.to/andyrewlee/how-to-dynamically-render-components-in-react-4n7g

import React, {useState} from "react";
import "./App.css";
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import NamedComponent from "./components/NamedComponent";

import Tweet from "./components/Tweet";

import Person from "./components/Person";

import Pokedex from "./components/Pokedex";

import ColorGrid from "./components/ColorGrid";

import ToDoList from "./components/ToDoList";

// import LinkApp from "./components/LinkApp";

import Jokes from "./components/Jokes";
import Gif from "./components/Gif";

import TicTacToe from "./components/TicTacToe";

 import HangMan from "./components/HangMan";

//  import Jeopardy from "./components/Jeopardy";

import Radio from "./components/Radio";

import BasicMenu from './components/BasicMenu';

import Tooltip from './components/Tooltip';

import Timer from './components/Timer';

// import Slider from './components/Slider';

import BirthdayReminder from './components/BirthdayReminder';

import Tours from './components/Tours';

import Reviews from './components/Reviews';

import Accordion from './components/Accordion';
import accordionData from './components/Accordion/data';

import FoodMenuProject from "./components/FoodMenu/FoodMenuProject";

// import RouterBasic from "./components/RouterBasic";

// import RouterNested from "./components/RouterBasic/RouterNested";

const App = () => {

  const componentNames = [
    'FirstComponent',
    'SecondComponent',
    'NamedComponent',
    'Tweet',
    'Person',
    'Pokedex',
    'ColorGrid',
    'ToDoList',
    'Jokes',
    'Gif',
    'TicTacToe',
    'HangMan',
    'Radio',
    'BasicMenu',
    'Tooltip',
    'Timer',
    'BirthdayReminder',
    'Tours',
    'Reviews',
    'Accordion',
    'FoodMenuProject'
  ]

  const [currentProject, setCurrentProject] = useState();

  return (
    <div className="main">
      <main>
        <section>
          <div className="title-main">
            <h2>My Projects {currentProject ? `- ${currentProject}` : ''}</h2>
            <div className="underline-main"></div>
          </div>
          
          <div>
            <Router>
              <div>
                <div className="button-container">
                  {componentNames.map(componentName => {
                    return (
                      <Link 
                        key={componentName} 
                        className="button-project" 
                        style={{
                          color: 'white', 
                          textDecoration: 'none', 
                          border: '2px solid darkslateblue',
                          minWidth: 'fit-content'
                        }}
                        onClick={() => setCurrentProject(componentName)}
                        to={`/${componentName}`} >
                        {componentName === currentProject ? `${componentName.toUpperCase()}*` : componentName}
                      </Link>
                    );
                  })}
                </div>
                
                <Switch>
                  <Route path="/FirstComponent">
                    <FirstComponent />
                  </Route>
                  <Route path="/SecondComponent">
                    <SecondComponent />
                  </Route>
                  <Route path="/NamedComponent">
                    <NamedComponent name="ckandola"/>
                  </Route>
                  <Route path="/Tweet">
                    <Tweet 
                      username="chickensrock"
                      name="ed"
                      date="6/05/99"
                      message="Gravy!"/>
                      <Tweet
                      username="Mucho-Dinero"
                      name="eddy"
                      date="7/02/99"
                      message="If elected, inflation will be a thing of the gas!"
                    />
                    <Tweet
                      username="my_kingdom_for_sunscreen"
                      name="edd"
                      date="7/05/99"
                      message="Messy, messy, messy!"
                    />
                  </Route>
                  <Route path="/Person">
                    <Person
                      name="AgeEight"
                      age="8"
                      hobbies={["running", "schooling", "eating"]}
                    />
                    <Person
                      name="TooLongOfAName"
                      age="20"
                      hobbies={["thinking", "pondering", "querying", "imagining"]}
                    />
                    <Person name="Bob" age="30" hobbies={["building", "fixing it"]} />
                  </Route>
                  <Route path="/Pokedex">
                    <Pokedex />
                  </Route>
                  <Route path="/ColorGrid">
                    <ColorGrid />
                  </Route>
                  <Route path="/ToDoList">
                    <ToDoList />
                  </Route>
                  <Route path="/Jokes">
                    <Jokes />
                  </Route>
                  <Route path="/Gif">
                    <Gif />
                  </Route>
                  <Route path="/TicTacToe">
                    <TicTacToe />
                  </Route>
                  <Route path="/HangMan">
                    <HangMan />
                  </Route>
                  {/* <Route path="/Jeopardy">
                    <Jeopardy />
                  </Route> */}
                  <Route path="/Radio">
                    <Radio name="radio-group" id="radio1" order="1" label="Credit card"/>
                    <Radio name="radio-group" id="radio2" order="2" label="Paypal"/>
                    <Radio name="radio-group" id="radio3" order="3" label="Check"/>
                  </Route>
                  <Route path="/BasicMenu">
                    <BasicMenu />
                  </Route>
                  <Route path="/Tooltip">
                    <Tooltip text={"I'm ready"} textPosition='bottom'>{'Read me'}</Tooltip>
                  </Route>
                  <Route path="/Timer">
                    <Timer />
                  </Route>
                  {/* <Route path="/Slider">
                    <Slider />
                  </Route> */}
                  <Route path="/BirthdayReminder">
                    <BirthdayReminder />
                  </Route>
                  <Route path="/Tours">
                    <Tours />
                  </Route>
                  <Route path="/Reviews">
                    <Reviews />
                  </Route>
                  <Route path="/Accordion">
                  <div className="accordion-main">
                    <div className="accordion-container">
                      <h3>Login Questions</h3>
                      <section className="info">
                        {accordionData.map(accordion => {
                          return (
                            <Accordion key={accordion.id} question={accordion.title} answer={accordion.info} />
                          );
                        })}
                      </section>
                    </div>
                  </div>
                  </Route>
                  <Route path="/FoodMenuProject">
                    <FoodMenuProject />
                  </Route>
                </Switch>

              </div>
            </Router>
          </div>

        </section>
      </main>


        {/* <RouterBasic /> */}
        
        {/* <RouterNested /> */}

      </div>
    );
};

export default App;
