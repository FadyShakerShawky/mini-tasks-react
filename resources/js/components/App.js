import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './containers/footer/Footer';
import Header from './containers/Header';
import Home from './containers/home/Home';
import "./app.css";
import List from "./containers/list/List";
import Create from './containers/create/Create';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <main>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/list' component={List} />
                        <Route exact path='/create' component={Create} />
                    </main>
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
