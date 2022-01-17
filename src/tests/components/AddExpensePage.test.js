import React from "react"
import { shallow } from "enzyme"
import { AddExpensePage } from "../../components/AddExpensePage"
import expenses from '../fixtures/expenses'

let addExpense, navigate, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    navigate = jest.fn()
    wrapper = shallow(<AddExpensePage
        addExpense={addExpense}
        navigate={navigate}
    />)
})

test('Should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(navigate).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})