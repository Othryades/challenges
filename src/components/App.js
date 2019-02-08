import React, {Component, Fragment} from 'react'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import CollectedConsents from './CollectedConsents';
import FormConsent from './FormConsent';
import Layout from './Layout'

export default class extends Component {
    state = {
        collectedConsents: []
    };

    async componentDidMount() {
        const collectedConsents = await (await fetch('http://localhost:3200/collected-consents')).json();
        console.log(collectedConsents);
        this.setState({collectedConsents})
    }

    render() {
        const {collectedConsents} = this.state;
        return <BrowserRouter>
            <Layout collectedConsents={collectedConsents}>
                <Switch>

                    <Route path="/give-consent" render={
                        props => <FormConsent />
                    }/>

                    <Route exact path='/' render={
                        props => <Redirect to="/give-consent" />
                    }/>


                    <Route path="/consents" render={
                        props => <CollectedConsents {...props} collectedConsents={collectedConsents}/>
                    }/>

                    <Route render={
                        () => <h3>404 - Not Found</h3>
                    }/>

                </Switch>
            </Layout>
        </BrowserRouter>
    }
}