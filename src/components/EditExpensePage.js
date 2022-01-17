import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.editExpense(this.props.id, expense)
        this.props.navigate('/')
    }
    removeExpense = (expense) => {
        this.props.removeExpense(this.props.id, expense)
        this.props.navigate('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.editExpense}
                />
                <button onClick={this.removeExpense}>Remove</button>
            </div>
        )
    }


}

const EditExpensePageWrapped = (props) => {
    const { id } = useParams()
    const expense = useSelector((state) => {
        return state.expenses.find((expense) => expense.id === id)
    })
    const navigate = useNavigate()
    return (
        <EditExpensePage
            {...props}
            id={id}
            expense={expense}
            navigate={navigate}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id }))
})


export default connect(undefined, mapDispatchToProps)(EditExpensePageWrapped)
