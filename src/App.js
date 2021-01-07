import React from "react";
import "./App.css";
// import FirstComponent from "./components/FirstComponent";
// import SecondComponent from "./components/SecondComponent";
// import NamedComponent from "./components/NamedComponent";

// import Tweet from "./components/Tweet";

// import Person from "./components/Person";

// import Pokedex from "./components/Pokedex";

// import ColorGrid from "./components/ColorGrid";

// import ToDoList from "./components/ToDoList";

// import LinkApp from "./components/LinkApp";

// import Jokes from "./components/Jokes";
//  import Gif from "./components/Gif";

// import TicTacToe from "./components/TicTacToe";

//  import HangMan from "./components/HangMan";

//  import Jeopardy from "./components/Jeopardy";

// import Radio from "./components/Radio";

// import BasicMenu from './components/BasicMenu';

// import Tooltip from './components/Tooltip';

// import Timer from './components/Timer';

// import Slider from './components/Slider';

// import BirthdayReminder from './components/BirthdayReminder';

// import Tours from './components/Tours';

// import Reviews from './components/Reviews';

// import Accordion from './components/Accordion';
// import accordionData from './components/Accordion/data';

import FoodMenu from './components/FoodMenu';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <FirstComponent />
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

        <FoodMenu />

      </div>
    );
  }
}

export default App;
