import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => (
  <div>
    <header>
      <h1>Expensify</h1>
      <ul>
        {[['Dashboard', '/dashboard'], ['Add an expense', '/create']].map((page, i) => (
          <li key={i}>
            <NavLink to={page[1]} end>{page[0]}</NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </header>
    <Outlet />
  </div>
)

export default Layout