import React from "react";
import { Home } from "./views/Home";
import { NoMatch } from "./views/NoMatch";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Route exact path="/" component={Home} />
                </Route>
                {/* <Route exact path="/About" component={About} />
                <Route exact path="/About" component={Home} />
                <Route exact path="/Topics" component={TopicList} />
                <Route path="/Topics/:topicId" component={TopicDetail} /> */}
                <Route component={NoMatch} />
            </Switch>
        </React.Fragment>
    );
};
