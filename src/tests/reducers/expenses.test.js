import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense by invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1000'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  }
  const state = expensesReducer([expenses[0], expenses[1]], action)
  expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
  const updates = {
    description: `${expenses[2].description}123abc`,
    note: `${expenses[2].notes}123abc`,
    amount: expenses[2].amount + 5,
    createdAt: moment(expenses[2].createdAt).add(4, 'days')
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state[2]).toEqual({
    id: expenses[2].id,
    ...updates
  })
})

test('Should not edit expense if id not found', () => {
  const updates = {
    description: `${expenses[2].description}123abc`,
    notes: `${expenses[2].notes}123abc`,
    amount: expenses[2].amount + 5,
    createdAt: moment(expenses[2].createdAt).add(4, 'days')
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1000',
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should set expenses', () => {
  const newState = [expenses[1]]
  const state = expensesReducer(expenses, {
    type: 'SET_EXPENSES',
    expenses: newState
  })
  expect(state).toEqual(newState)
})
