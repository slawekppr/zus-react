import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UsersList } from './UsersList'
import { users } from './users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="text" />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Ala ma kota a <b>kot</b> ma <u>HMR - Hot Module Replacement !!!</u>
        </p>
      </div>
      <UsersList users={users} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
