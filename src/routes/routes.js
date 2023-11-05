import HomeLayout from '~/layouts/HomeLayout/HomeLayout'
import Slider from '~/page/Home/Slider/Slider'
import LogInForm from '~/page/Auth/LogIn/LogInForm'
import RegisterForm from '~/page/Auth/RegisterForm/RegisterForm'
import AuthLayout from '~/layouts/AuthLayout/AuthLayout'
import Paperbase from '~/page/Dashboard/Paperbase'

const publicPath = [
  {
    // Trang chủ
    path: '/your-teeth/',
    content: [
      Slider
    ],
    layout: HomeLayout
  },
  {
    // Trang chủ
    path: '/your-teeth/login/',
    content: [
      LogInForm
    ],
    layout: AuthLayout
  },
  {
    // Trang chủ
    path: '/your-teeth/register/',
    content: [
      RegisterForm
    ],
    layout: AuthLayout
  },
  {
    // Trang chủ
    path: '/your-teeth/:id/dashboard/',
    content: [
      Paperbase
    ]
  }
]

const privatePath = []

export const route = {
  publicPath,
  privatePath
}
