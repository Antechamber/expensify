import database from '../firebase/firebase'
import { ref, push, get, child, set, update } from 'firebase/database'

// add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }

    return push(ref(database, 'expenses'), expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return set(ref(database, `expenses/${id}`), null)
      .then(() => dispatch(removeExpense({ id })))
  }
}

// edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return update(ref(database, `expenses/${id}`), updates)
      .then(() => dispatch(editExpense(id, updates)))
  }
}

// get expenses from firebase and put them in local redux store
export const setExpenses = (expenses = []) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    return get(child(ref(database), 'expenses'))
      .then((snapshot) => {
        const expenses = []
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            })
          })
        }
        dispatch(setExpenses(expenses))
      })
  }
}
