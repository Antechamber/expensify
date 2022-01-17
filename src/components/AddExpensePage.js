import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import { useNavigate } from 'react-router-dom'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.navigate('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// since hooks are invalid inside class component, I'm wrapping AddExpensePage
// in functional component to use useNavigate. 
// converted from frunctional to class based so that ExpenseForm would not have onSubmit defined in line.
// in line functions in functional components are recalculated every rerender. Should try to avoid in line declarations when possible
const WrappedAddExpensePage = (props) => {
    const navigate = useNavigate()
    return <AddExpensePage navigate={navigate} {...props} />
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(WrappedAddExpensePage)
