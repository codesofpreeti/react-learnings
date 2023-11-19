// import { useState } from 'react'

import './App.css'
// import Counter from './components/Counter'
import Card from './components/Card'

function App() {

  return (
    <>
    {/*<Counter/>*/}
    <h1 className='bg-green-400 text-black p-4 rounded mb-4'>tailwind css</h1>
    <Card userName="Preeti" />
    <Card btnText="check me out"/>
    </>
  )
}

export default App
