import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from '../fixtures/expenses'

let wrapper, editExpense, removeExpense

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
    />)
})

test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
