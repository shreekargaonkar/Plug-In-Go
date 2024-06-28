import React from 'react'
import reactRouterDom from 'react-router-dom'


const login = () => {
  return (
    <div>
        <h1>Login</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
          <button className="home-hero-button1 buttonFilled">
                Login
              </button>
        </div>
        
          
      </form>
    </div>
  )
}

export default login