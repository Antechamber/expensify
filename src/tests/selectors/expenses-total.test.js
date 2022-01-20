import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('Should correctly add total of one expense', () => {
    const total = selectExpensesTotal([expenses[1]])
    expect(total).toBe(9000)
})

test('Should correctly total multiple expenses', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(12799)
})