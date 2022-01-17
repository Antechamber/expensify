import {
    setEndDate,
    setStartDate,
    sortByAmount,
    sortByDate,
    setTextFilter
} from '../../actions/filters'
import moment from 'moment'

// setTextFilter
test('Should generate a SET_FILTER_TEXT action object', () => {
    const action = setTextFilter('Cat seed')
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        filterText: 'Cat seed'
    })
})

test('Should generate a SET_FILTER_TEXT action object (default value)', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        filterText: ''
    })
})

// sortByAmount
test('Should generate a SORT_BY_AMOUNT action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

// sortByDate
test('Should generate a SORT_BY_DATE action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

// setStartDate
test('Should generate a SET_START_DATE action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

// setStartDate
test('Should generate a SET_END_DATE action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
