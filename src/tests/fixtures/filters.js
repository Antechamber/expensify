import moment from "moment"

const modifiedFilters = {
    startDate: moment(0).subtract(10, 'days'),
    endDate: moment(0).add(1, 'days'),
    text: 's',
    sortBy: 'amount'
}

const defaultFilters = {
    startDate: undefined,
    endDate: undefined,
    text: '',
    sortBy: 'date'
}

export { modifiedFilters, defaultFilters }