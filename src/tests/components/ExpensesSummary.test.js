/**
 * @jest-environment jsdom
 */
import React from "react"
import { render } from "@testing-library/react"
import { ExpensesSummary } from "../../components/ExpensesSummary"

let asFragment, rerender, expensesTotal, expensesCount

beforeEach(() => {
    expensesCount = 0
    expensesTotal = 0;
    ({ asFragment, rerender } = render(
        <ExpensesSummary
            expensesTotal={expensesTotal}
            expensesCount={expensesCount}
        />
    ))
})

test('Expect ExpensesSummary component to render correctly with no expenses', () => {
    expect(asFragment()).toMatchSnapshot()
})

test('Expect ExpensesSummary component to render correctly with one expenses', () => {
    expensesCount = 1
    expensesTotal = 4
    rerender(<ExpensesSummary
        expensesTotal={expensesTotal}
        expensesCount={expensesCount}
    />)
    expect(asFragment()).toMatchSnapshot()
})

test('Expect ExpensesSummary component to render correctly with multiple expenses', () => {
    expensesCount = 5
    expensesTotal = 100
    rerender(<ExpensesSummary
        expensesTotal={expensesTotal}
        expensesCount={expensesCount}
    />)
    expect(asFragment()).toMatchSnapshot()
})