import { useState } from 'react'
import { Button, DatePicker, Card, Space } from 'antd'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <h1>Vite + React + Ant Design</h1>
      <div className="card">
        <Space direction="vertical" size="large">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Card title="Ant Design Components" style={{ width: 300 }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <DatePicker placeholder="Select date" />
            </Space>
          </Card>
        </Space>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
