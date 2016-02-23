import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, useRouterHistory } from 'react-router'; //eslint-disable-line no-unused-vars
import { createHistory } from 'history';

import { Todo } from './todo-list/Todo';
import { Shop } from './shop/Shop';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/react-redux'
});

const ACTIVE = 'active';
class RouterOutlet extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/todo" className="nav-link" activeClass={ACTIVE}>todo app</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link" activeClass={ACTIVE}>shop app</Link>
                    </li>
                </ul>
                <span>{ this.props.children }</span>
            </div>
        );
    }
}

render((
    <Router history={ browserHistory }>
        <Route path="/" component={ RouterOutlet }>
            <Route path="todo" component={ Todo } />
            <Route path="shop" component={ Shop } />
            <Route path="*" component={ Todo } />
        </Route>
    </Router>
), document.getElementById('root'));
