import { StrictMode } from 'react'
import './App.css'

// import Layout from './component/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

function App() {
  return (
    <>
      {/* <Test></Test> */}
      {/* <Layout></Layout> */}
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </StrictMode>
    </>
  )
}

export default App
