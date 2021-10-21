import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Home from './containers/home/Home';
import "./app.css";
import List from "./containers/list/List";
import Create from './containers/create/Create';
import Update from "./containers/update/Update"
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/list' component={List} />
                        <Route exact path='/create' component={Create} />
                        <Route path="/update/:id" component={Update} />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
