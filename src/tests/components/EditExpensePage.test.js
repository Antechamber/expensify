import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from '../fixtures/expenses'

let wrapper, editExpense, removeExpense, navigate, expense

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    navigate = jest.fn()
    expense = expenses[2]
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            expense={expense}
            navigate={navigate}
        />
    )
})

test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense', () => {
    const updates = {
        ...expense,
        amount: 9999
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(updates)
    expect(navigate).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, updates)
})

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(navigate).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expense.id)
})