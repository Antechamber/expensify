import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) :
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))

    }
    <br />
  </div>
)

// mapStateToProps configures which properties of the state are available to the wrapped component via props
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// connect wraps a connection to the store around ExpenseList
export default connect(mapStateToProps)(ExpenseList)
