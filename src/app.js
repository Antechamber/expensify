import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 15000,
    note: 'Used a lot of water this month I guess..'
}))

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 6000,
    note: 'Cookin with gas, dawg',
    createdAt: 1000
}))

store.dispatch(addExpense({
    description: 'Rent',
    amount: 100000,
    note: 'Cookin with gas, dawg'
}))


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
