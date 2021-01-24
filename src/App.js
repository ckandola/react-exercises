// https://dev.to/andyrewlee/how-to-dynamically-render-components-in-react-4n7g

import React from "react";
import "./App.css";
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams
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
// import accordionData from './components/Accordion/data';

import FoodMenuProject from "./components/FoodMenu/FoodMenuProject";

// import RouterBasic from "./components/RouterBasic";

// import RouterNested from "./components/RouterBasic/RouterNested";

const App = () => {

  const componentMapping = {
    "FirstComponent": FirstComponent,
    "SecondComponent": SecondComponent,
    "NamedComponent": NamedComponent,
    "Tweet": Tweet,
    "Person": Person,
    "Pokedex": Pokedex,
    "ColorGrid": ColorGrid,
    "ToDoList": ToDoList,
    "Jokes": Jokes,
    "Gif": Gif,
    "TicTacToe": TicTacToe,
    "HangMan": HangMan,
    "Radio": Radio,
    "BasicMenu": BasicMenu,
    "Tooltip": Tooltip,
    "Timer": Timer,
    "BirthdayReminder": BirthdayReminder,
    "Tours": Tours,
    "Reviews": Reviews,
    "Accordion": Accordion,
    "FoodMenuProject": FoodMenuProject
  }

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

  return (
    <div className="main">
      <main>
        <section>
          <div className="title-main">
            <h2>My Projects</h2>
            <div className="underline-main"></div>
          </div>
          
          <div>
            <Router>
              <div className="button-container">
              {componentNames.map(componentName => {
                return (
                  <Link key={componentName} 
                    className="button-project" 
                    style={{
                      color: 'white', 
                      textDecoration: 'none', 
                      border: '2px solid darkslateblue',
                    }}
                    to={`/${componentName}`} >
                    {componentName}
                  </Link>
                  // <button 
                  //   key={componentName} 
                  //   className="button-project" 
                  // >{componentName}</button>
                );
              })}
              

              <Switch>
                <Route path="/FirstComponent">
                  <FirstComponent />
                </Route>
              </Switch>
              <Switch>
                <Route path="/SecondComponent">
                  {/* looks like this doesn't throw an error...could be made dynamically */}
                  <SecondComponent />
                </Route>
              </Switch>
              </div>
            </Router>
          </div>

        </section>
      </main>
      {/*
      <SecondComponent />
      <NamedComponent style={style} name="CK" /> */}

      {/* <Tweet
        username="chickensrock"
        name="ed"
        date="6/05/99"
        message="Gravy!"
      />
      <Tweet
        username="Mucho Dinero"
        name="eddy"
        date="7/02/99"
        message="Jawbreakers, Ed!"
      />
      <Tweet
        username="my_kingdom_for_suncreen"
        name="edd"
        date="7/05/99"
        message="Messy, messy, messy!"
      /> */}

      {/* <Person
        name="AgeEight"
        age="8"
        hobbies={["running, schooling, eating"]}
      />
      <Person
        name="TooLongOfAName"
        age="20"
        hobbies={["thinking, pondering, querying, imagining"]}
      />
      <Person name="Bob" age="30" hobbies={["building, fixing it"]} /> */}

      {/* <Pokedex /> */}

      {/* <ColorGrid /> */}

      {/* <ToDoList /> */}

      {/* <LinkApp />... */}

      {/* <Jokes /> */}
      {/* <Gif /> */}

      {/* <TicTacToe /> */}

      {/* <HangMan /> */}
    
      {/* <Jeopardy /> */}

      {/* <Radio name="radio-group" id="radio1" order="1" label="Credit card"/>
      <Radio name="radio-group" id="radio2" order="2" label="Paypal"/>
      <Radio name="radio-group" id="radio3" order="3" label="Check"/> */}

      {/* <BasicMenu /> */}

      {/* <Tooltip text={"I'm ready"} textPosition='bottom'>{'Read me'}</Tooltip> */}

      {/* <Timer/> */}

      {/* <Slider initial={1} max={2} onChange={value => console.log(value)}/> */}

      {/* <BirthdayReminder/>*/}

      {/* <Tours /> */}

      {/* <Reviews /> */}
      
      {/* <div className="accordion-main">
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
      </div> */}

        {/* <FoodMenuProject />*/}

        {/* <RouterBasic /> */}
        
        {/* <RouterNested /> */}

      </div>
    );
};

export default App;
