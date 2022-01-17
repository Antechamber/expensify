import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const newExpense = {
        description: 'Cat food',
        note: 'Sarissa eats cat food',
        amount: 3.14,
        createdAt: 101010
    }
    const action = addExpense(newExpense)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...newExpense,
            id: expect.any(String)
        }
    })
})

test('Should generate ADD_EXPENSE action object (default values)', () => {
    const action = addExpense()
    expect(action).toMatchObject({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})