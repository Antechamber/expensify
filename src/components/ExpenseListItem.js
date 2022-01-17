import React from "react";
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from "react-router-dom";
import moment from 'moment'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>{description}</Link>
            <p>{amount}</p>
            <p>{moment(createdAt).format("dddd, MMMM Do YYYY")}</p>
        </div>
    )
}

export default ExpenseListItem