import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<ExpenseDashboardPage />} />
        <Route path="create" element={<AddExpensePage />} />
        <Route path="edit/:id" element={<EditExpensePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
