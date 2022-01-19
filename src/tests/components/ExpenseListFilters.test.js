/**
 * @jest-environment jsdom
 */
import React from "react"
import { ExpenseListFilters } from "../../components/ExpenseListFilters"
import { defaultFilters, modifiedFilters } from "../fixtures/filters"
import { render, fireEvent, getByRole, screen } from '@testing-library/react'

let sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    setTextFilter,
    asFragment,
    rerender

beforeEach(() => {
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn();
    ({ asFragment, rerender } = render(
        <ExpenseListFilters
            filters={defaultFilters}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
        />
    ))
})

test('Should render ExpenseListFilters correctly with default filter values', () => {
    expect(asFragment()).toMatchSnapshot()
})

test('Should render ExpenseListFilters with changed filter values', () => {
    rerender(<ExpenseListFilters filters={modifiedFilters} />)
    expect(asFragment()).toMatchSnapshot()
})

test('Should handle text change', () => {
    // console.log(screen.getByLabelText('Filter'))
    fireEvent.change(screen.getByLabelText('Filter'), { target: { value: 'test' } })
    // expect(screen.getByLabelText('Filter').screen).toBe('test')
})
