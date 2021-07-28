import React, {useState} from "react";
import "./App.css";
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import FirstComponents from "./components/FirstComponents";

import TweetContainer from "./components/Tweet";

import Pokedex from "./components/Pokedex";

import ColorGrid from "./components/ColorGrid";

import ToDoList from "./components/ToDoList";

import NewJokes from "./components/Jokes/NewJokes";

import TicTacToe from "./components/TicTacToe";

import HangMan from "./components/HangMan";

import RadioGroup from "./components/Radio/RadioGroup";

import BasicMenu from './components/BasicMenu';

import Tooltip from './components/Tooltip';

import Timer from './components/Timer';

import BirthdayReminder from './components/BirthdayReminder';

import Tours from './components/Tours';

import Reviews from './components/Reviews';

import Accordion from './components/Accordion';

import FoodMenuProject from "./components/FoodMenuProject";

// import RouterBasic from "./components/RouterBasic";

// import RouterNested from "./components/RouterBasic/RouterNested";

import ResumeTabs from './components/ResumeTabs';

import Carousel from './components/Carousel';

import LoremIpsum from './components/LoremIpsum';

import ColorGenerator from './components/ColorGenerator';

import GroceryBud from './components/GroceryBud';

import NavBar from './components/NavBar';

import Sidebar from './components/Sidebar';

import Modal from './components/Modal';
import Home from './components/Modal/Home';

import StripeMenu from './components/StripeMenu';

import Cart from './components/Cart';

import CocktailMain from './components/Cocktail';

const App = () => {

  const componentNames = [
    'First Components',
    'Tweet',
    'Pokedex',
    'ColorGrid',
    'ToDoList',
    'Jokes',
    'TicTacToe',
    'HangMan',
    'RadioGroup',
    'BasicMenu',
    'Tooltip',
    'Timer',
    'BirthdayReminder',
    'Tours',
    'Reviews',
    'Accordion',
    'FoodMenuProject',
    'Resume Tabs',
    'Carousel',
    'LoremIpsum',
    'ColorGenerator',
    'GroceryBud',
    'NavBar',
    'Sidebar',
    'Modal',
    'StripeMenu',
    'Cart',
    'Cocktail'
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
                  <Route path="/First Components">
                    <FirstComponents name="ckandola" />
                  </Route>
                  <Route path="/Tweet">
                    <TweetContainer />
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
                    <NewJokes />
                  </Route>
                  <Route path="/TicTacToe">
                    <TicTacToe />
                  </Route>
                  <Route path="/HangMan">
                    <HangMan />
                  </Route>
                  <Route path="/RadioGroup">
                    <RadioGroup labels={["Credit card", "Paypal", "Check"]} 
                      onSubmit={selection => console.log(`Selected ${selection}`)} 
                      submitDesc={"see selection in console"}/>
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
                    <Accordion title={'Login Questions'} />
                  </Route>
                  <Route path="/FoodMenuProject">
                    <FoodMenuProject />
                  </Route>
                  <Route path="/Resume Tabs">
                    <ResumeTabs />
                  </Route>
                  <Route path="/Carousel">
                    <Carousel />
                  </Route>
                  <Route path="/LoremIpsum">
                    <LoremIpsum />
                  </Route>
                  <Route path="/ColorGenerator">
                    <ColorGenerator />
                  </Route>
                  <Route path="/GroceryBud">
                    <GroceryBud />
                  </Route>
                  <Route path="/NavBar">
                    <NavBar />
                  </Route>
                  <Route path="/Sidebar">
                    <Sidebar />
                  </Route>
                  <Route path="/Modal">
                    <Home />
                    <Modal />
                  </Route>
                  <Route path="/StripeMenu">
                    <StripeMenu />
                  </Route>
                  <Route path="/Cart">
                    <Cart />
                  </Route>
                  <Route path="/Cocktail">
                    <CocktailMain />
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
