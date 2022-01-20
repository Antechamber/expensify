import 'react-dates/initialize'
import React, { useState } from "react"
import { connect } from "react-redux"
import { DateRangePicker } from "react-dates"
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters'

export const ExpenseListFilters = (props) => {
    // useState
    const [calendarFocused, setCalendarFocus] = useState(null)

    // event handlers
    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    }
    const onFocusChange = (calendarFocused) => {
        setCalendarFocus(calendarFocused)
    }
    const onTextChange = (e) => {
        props.setTextFilter(e.target.value)
    }
    const onSortChange = (e) => {
        e.target.value === 'date' ? props.sortByDate() : props.sortByAmount()
    }

    return (
        <div>
            <label htmlFor="textFilter">Filter</label>
            <input
                id="textFilter"
                type="text"
                value={props.filters.text}
                onChange={onTextChange}
                autoComplete='off'
            />
            <select
                value={props.filters.sortBy}
                onChange={onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
                startDateId="Expense_Dashboard_Page_Filter_Start_Date" // PropTypes.string.isRequired,
                endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
                endDateId="Expense_Dashboard_Page_Filter_End_Date" // PropTypes.string.isRequired,
                onDatesChange={onDatesChange} // PropTypes.func.isRequired,
                focusedInput={calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={onFocusChange} // PropTypes.func.isRequired,
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)