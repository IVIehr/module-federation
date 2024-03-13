import React, { Fragment } from 'react'

import { Route, Router, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default ({history}) => {
    return (
        <Fragment>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/pricing'} component={Pricing}/>
                        <Route path={'/'} component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </Fragment>
    )
}