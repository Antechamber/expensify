import { getDatabase, onValue, ref } from 'firebase/database'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])
const db = getDatabase()

// removeExpense
test('Should generate REMOVE_EXPENSE action object', () => {
  const action = removeExpense({ id: '123456abcd' })
  expect(action).toMatchObject({
    type: 'REMOVE_EXPENSE',
    id: '123456abcd'
  })
})

// editExpense
test('Should generate EDIT_EXPENSE action object', () => {
  const updates = {
    some: 'fake',
    data: 46798765431546
  }
  const action = editExpense('123abc', updates)
  expect(action).toMatchObject({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates
  })
})

// addExpense
test('Should generate ADD_EXPENSE action object', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[2],
      id: expect.any(String)
    }
  })
})

test('Should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'New Mac',
    amount: 50000,
    note: '',
    createdAt: 10000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
      expect(snapshot.val()).toEqual({
        ...expenseData
      })
      done()
    }, { onlyOnce: true })

  })
})

test('Should add expense with default values to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {}

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    })

    onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
      expect(snapshot.val()).toEqual({
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      })
      done()
    }, { onlyOnce: true })

  })
})