import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = (props) => {
    const formattedExpenseTotal = numeral(props.expensesTotal / 100).format('$0,0.00')
    const pluralizer = props.expensesCount === 1 ? '' : 's'
    return (
        <div>
            <h3>
                {`Viewing ${props.expensesCount} expense${pluralizer} totalling ${formattedExpenseTotal}`}
            </h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)