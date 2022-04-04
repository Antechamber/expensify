import React from 'react'

export const LoginPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username"></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginPage