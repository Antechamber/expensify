import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().startOf('day')
    })
})

test('Should set sortBy to "amount"', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toEqual('amount')
})

test('Should set sortBy to "date"', () => {
    const originalState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().startOf('day')
    }
    const state = filtersReducer(originalState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toEqual('date')
})

test('Should set startDate', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: 123456
    })
    expect(state.startDate).toBe(123456)
})

test('Should set endDate', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: 123456
    })
    expect(state.endDate).toBe(123456)
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_FILTER_TEXT',
        filterText: 'something'
    })
    expect(state.text).toBe('something')
})
