import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<ExpenseDashboardPage />} />
                <Route path="create" element={<AddExpensePage />} />
                <Route path="edit/:id" element={<EditExpensePage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouter
