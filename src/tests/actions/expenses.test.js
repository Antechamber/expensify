import { get, getDatabase, onValue, ref, set, child } from 'firebase/database'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])
const db = getDatabase()

beforeEach((done) => {
  set(ref(db), null)
    .then(() => {
      expenses.forEach((expense) => {
        const expenseData = {
          ...expense,
          id: null
        }
        set(ref(db, `expenses/${expense.id}`), expenseData)
      })
    })
    .then(() => done())
})

afterAll((done) => {
  set(ref(db), null)
    .then(() => done())
})

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

test('Should set up setExpenses object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('Should fetch expenses from firebase db', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})

test('Should remove expense from firebase db', (done) => {
  const store = createMockStore({})
  const id = expenses[1].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    expect(store.getActions()[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })

    get(child(ref(db), `expenses/${id}`)).then((snapshot) => {
      expect(snapshot.val()).toEqual(null)
      done()
    })
  })
})