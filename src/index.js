import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div className="container">
			<Switch>
				<Route path="/posts/new" component={PostsNew} />
				<Route path="/" component={PostsIndex} />
			</Switch>
		</div>
	</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
