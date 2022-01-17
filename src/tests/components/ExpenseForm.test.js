import React from 'react'
import ExpenseForm from '../../components/ExpenseForm'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render ExpenseForm component', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm component with transaction data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set "description" state on "change" event', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'Hello'
    wrapper.find('input[name="description"]').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('Should set "note" state on "change" event', () => {
    const wrapper = shallow(<ExpenseForm />)
    const note = 'Some note'
    wrapper.find('textarea').simulate('change', {
        target: { value: note }
    })
    expect(wrapper.state('note')).toBe(note)
    expect(wrapper).toMatchSnapshot()
})

test('Should set "amount" state if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '19.65'
    wrapper.find('input[name="amount"]').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should not set "amount" to the given invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'Two dolla'
    wrapper.find('input[name="amount"]').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm
        onSubmit={onSubmitSpy}
        expense={expenses[0]}
    />)
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    })
    expect(wrapper.state('error')).toBeUndefined()
    expect(wrapper).toMatchSnapshot()
})

test('Should set createdAt state on date change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const now = moment()
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const expectedFocus = !wrapper.state('calendarIsFocused')
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
        focused: !wrapper.state('calendarIsFocused')
    })
    // expect that the calendarIsFocused state value is changed by onFocusChange
    expect(wrapper.state('calendarIsFocused')).toBe(expectedFocus)
})
