import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const RouterNested = () => {
    
    const About = () => {
        return <h2>About What Exactly?</h2>;
    }
    
    const Home = () => {
        return <h2>Home Sweet Home</h2>;
    }
    
    const Topic = () => {
        let {topicId} = useParams();
        return <h3>Requested topic ID: {topicId}</h3>
    }
    
    const Topics = () => {
        let match = useRouteMatch();

        return (
            <div>
                <h2>Topics</h2>

                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                {/* The Topics page has its own <Switch> with more routes that build
                    on the /topics URL path. Now to add an index page */}
            
                <Switch>
                    <Route path={`${match.url}/:topicId`}>
                        <Topic />
                    </Route>
                    <Route path={match.patch}>
                        <h3>Please select a topic.</h3>
                    </Route>
                </Switch>
            </div>
        );
    }

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/router_nested">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/router_nested">
                        <Home />
                    </Route>
                </Switch>
                
            </div>
        </Router>
    );
};

export default RouterNested;
