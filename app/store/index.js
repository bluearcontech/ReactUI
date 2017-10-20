// Create store with reducer, initial state.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers'

export default (initial_state = {}) => {
//  Create Redux store with initial state
    const store = createStore(
        reducers,
        initial_state,
        composeWithDevTools(
            applyMiddleware(
                thunk
            )
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers') // eslint-disable-line global-require
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
