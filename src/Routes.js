import React from 'react'
import { Switch, Route } from 'react-router-dom';


function Routes(props) {
    const nav = props.nav;

    const routeItems = nav.navItems.map( obj=> {
        return (
            <Route key={ obj.title } path={ obj.path } component={ obj.title } />
        );
    })

    return (
        <Switch>
            { routeItems }
        </Switch>
    );
}

export default Routes;