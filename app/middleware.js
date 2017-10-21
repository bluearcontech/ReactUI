// middleware is to inject initial component HTML and initial state into a template 
// to be rendered on the client side
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

module.exports = function (req, res){
	if(process.env.NODE_ENV === 'development') {
		res.send(`
			<!doctype html>
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
					<title>My Universal App</title>
				</head>
				<body>
					<div id='app'></div>
					<script src='/bundle.js'></script>
				</body>
			</html>
		`);
	} else if(process.env.NODE_ENV === 'production') {
		res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My Universal App</title>
					<link rel='stylesheet' href='bundle.css'>
				</head>
				<body>
					<div id='app'>${renderToString(
						<Provider store={createStore(reducers)}>
							<StaticRouter location={req.url} context={{}}>
								<App />
							</StaticRouter>
						</Provider>
					)}</div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
	}
};
