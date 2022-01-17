import moment from "moment"

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().startOf('day')
}
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.filterText
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}