import './App.css'

import DefaultLayout from '~/layouts/DefaultLayout'
import { Routes, Route } from 'react-router-dom'

import { route } from '~/routes/routes'
import { route as AdminRoutes } from '~/routes/AdminRoutes'
import { route as StaffRoutes } from '~/routes/StaffRoutes'
import { route as DentistRoutes } from '~/routes/DentistRoutes'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { userControl as UserAPI } from '~/apis/User/User'
import { PrivateRoute } from '~/components/PrivateRoute/PrivateRoute'

function App() {

  const [login, setLogin] = useState(false)
  const [userInf, setUserInf] = useState({})
  const [role, setRole] = useState('')
  const Navigate = useNavigate()

  const control = {
    user : userInf,
    isLogin : login,
    role: role,
    login : (newData) => HandleLogIn(newData),
    logout: () => HandleLogOut()
  }

  const HandleLogIn = (newData) => {
    localStorage.setItem('accessToken', newData.id)
    setLogin(true)
    setUserInf(newData)
    setRole(newData.role)
  }

  const HandleLogOut = () => {
    localStorage.removeItem('accessToken')
    setLogin(false)
    setUserInf({}),
    setRole('')
  }

  useEffect(() => {
    const id = localStorage.getItem('accessToken')
    const newUser = id && UserAPI.getUser(id).data
    if (newUser) {
      setUserInf(newUser)
      setLogin(true)
      setRole(newUser.role)
    }
    // else {
    //   Navigate('/your-teeth/')
    // }
  }, [Navigate])

  const publicPath = route.publicPath

  return (
    <>
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
                      return <Component key={index} progs={progs} control = { control } />
                    })}
                  </Layout>
                }
              />
            </React.Fragment>
          )
        })}

        {AdminRoutes.AdminPath.map((route, index) => {
          let contents = route.content
          let path = route.path
          let Layout = route?.layout ? route.layout : DefaultLayout
          return (
            <React.Fragment key={index} >
              <Route
                path={path}
                element={
                  <PrivateRoute>
                    <Layout categories = {AdminRoutes.AdminCategory} userInf = { userInf } control = { control } >
                      {contents.map((content, index) => {
                        let progs = content?.progs ? content.progs : 'empty'
                        let Component = content?.component
                          ? content.component
                          : content
                        return <Component key={index} progs={progs} control = { control } />
                      })}
                    </Layout>
                  </PrivateRoute>
                }
              />
            </React.Fragment>
          )
        })}

        {StaffRoutes.StaffPath.map((route, index) => {
          let contents = route.content
          let path = route.path
          let Layout = route?.layout ? route.layout : DefaultLayout
          return (
            <React.Fragment key={index} >
              <Route
                path={path}
                element={
                  <PrivateRoute>
                    <Layout categories = {StaffRoutes.StaffCategory} userInf = { userInf } control = { control } >
                      {contents.map((content, index) => {
                        let progs = content?.progs ? content.progs : 'empty'
                        let Component = content?.component
                          ? content.component
                          : content
                        return <Component key={index} progs={progs} control = { control } />
                      })}
                    </Layout>
                  </PrivateRoute>
                }
              />
            </React.Fragment>
          )
        })}

        {DentistRoutes.DentistPath.map((route, index) => {
          let contents = route.content
          let path = route.path
          let Layout = route?.layout ? route.layout : DefaultLayout
          return (
            <React.Fragment key={index} >
              <Route
                path={path}
                element={
                  <PrivateRoute>
                    <Layout categories = { DentistRoutes.DentistCategory } userInf = { userInf } control = { control } >
                      {contents.map((content, index) => {
                        let progs = content?.progs ? content.progs : 'empty'
                        let Component = content?.component
                          ? content.component
                          : content
                        return <Component key={index} progs={progs} control = { control } />
                      })}
                    </Layout>
                  </PrivateRoute>
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
