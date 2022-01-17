import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import { ProgressPlugin } from 'webpack'

export const EditExpensePage = (props) => {
    const { id } = useParams()
    const expense = useSelector((state) => {
        return state.expenses.find((expense) => expense.id === id)
    })
    const navigate = useNavigate()
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    props.editExpense(id, expense)
                    navigate('/')
                }}
            />
            <button onClick={() => {
                ProgressPlugin.removeExpense(id)
                navigate('/')
            }} >Remove</button>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id }))
})


export default connect(undefined, mapDispatchToProps)(EditExpensePage)
