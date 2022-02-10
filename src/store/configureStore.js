import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

// this variable is required because of the devtools extension. Normally, 
// applyMiddleware(thunk) would just be a secind argument to createStore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  //store creation
  const store = createStore(
    // combine all of the reducers into one so that dispatching has access to all of them
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}