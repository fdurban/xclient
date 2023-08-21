import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">

      {/* sidebar */}
      <Sidebar/>

      {/* feed */}
      <Feed/>
      {/* widgets */}

    </div>
  )
}

export default App