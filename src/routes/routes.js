import HomeLayout from '~/layouts/HomeLayout/HomeLayout'
import Slider from '~/page/Home/Slider/Slider'
import LogInForm from '~/page/Auth/LogIn/LogInForm'
import RegisterForm from '~/page/Auth/RegisterForm/RegisterForm'
import AuthLayout from '~/layouts/AuthLayout/AuthLayout'


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
    // Trang đăng nhập
    path: '/your-teeth/login/',
    content: [
      LogInForm
    ],
    layout: AuthLayout
  },
  {
    // Trang đăng kí
    path: '/your-teeth/register/',
    content: [
      RegisterForm
    ],
    layout: AuthLayout
  }
]

const privatePath = []

export const route = {
  publicPath,
  privatePath
}
