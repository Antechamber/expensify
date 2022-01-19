import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.navigate('/')
    }
    removeExpense = () => {
        this.props.removeExpense(this.props.expense.id)
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
    // get id out of url params
    const { id } = useParams()
    // useSelector has access to the state in the redux store.
    // using it here to find expense in store that matches the id above
    // then mapping that to props (hooks unavailable in mapStateToProps)
    const expense = useSelector((state) => {
        return state.expenses.find((expense) => expense.id === id)
    })
    const navigate = useNavigate()
    return (
        <EditExpensePage
            {...props}
            expense={expense}
            navigate={navigate}
        />
    )
}
// mapping the dispatch method to props of component.
// this abstracts the usage to testing is easier/disconnected from redux
const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id }))
})


export default connect(undefined, mapDispatchToProps)(EditExpensePageWrapped)
