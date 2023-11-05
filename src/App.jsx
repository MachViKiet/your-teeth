import './App.css'

import DefaultLayout from '~/layouts/DefaultLayout'
import { Routes, Route } from 'react-router-dom'
import { route } from '~/routes/routes'
import React from 'react'

function App() {
  const publicPath = route.publicPath
  return (
    <>
      {/* <Route path='/Dashboard' element={<Dashboard/>} /> */}
      {/* <Routes>
        <Route path='/your-teeth/Dashboard' element={<Dashboard/>} />
        <Route path='/your-teeth' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/LogIn' element={<LogIn/>} />
      </Routes> */}
      <Routes>
        {publicPath.map((route, index) => {
          let contents = route.content
          let path = route.path
          let Layout = route?.layout ? route.layout : DefaultLayout
          return (
            <React.Fragment key={index} >
              <Route
                path={path}
                element={
                  <Layout>
                    {contents.map((content, index) => {
                      let progs = content?.progs ? content.progs : 'empty'
                      let Component = content?.component
                        ? content.component
                        : content
                      return <Component key={index} progs={progs} />
                    })}
                  </Layout>
                }
              />
            </React.Fragment>
          )
        })}
      </Routes>
    </>
  )
}

export default App
