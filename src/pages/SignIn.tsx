import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/header'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
    <Header />
<div className="xl:w-[1200px] xl:mx-auto mt-10 shadow-inner rounded-lg mx-3">
  <div className="content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 shadow-lg">
    <section className="hidden xl:flex lg:flex bg-[#e7f6fb] justify-center rounded-l-lg">
      <img className="p-5 w-8/12 
  xl:px-0 xl:py-20 xl:w-6/12
  lg:p-20 lg:w-11/12" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png" />
    </section>
    <section>
      <div className="min-h-full flex items-center justify-center p-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">Đăng nhập</h2>
          </div>
          <form className="mt-8 space-y-6" id="form-signin" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="input-email" className="py-2">Email</label>
                <input id="input-email" name="input-email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="input-password" className="py-2">Mật khẩu</label>
                <input id="input-password" name="input-password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#f26629] ease-in-out duration-300 focus:ring-[#f26629] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Nhớ mật khẩu </label>
              </div>
              <div className="text-sm">
                <Link to="#" className="font-medium text-[#f26629] ease-in-out duration-300 hover:text-[#30a2e1]"> Quên mật khẩu? </Link>
              </div>
            </div>
            <div>
              <button type="submit" className="group w-full relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f26629] hover:bg-[#30a2e1] ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Đăng nhập
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-gray-600">
              Bạn chưa có tài khoản? 
              <Link to="/signup" className="font-medium ease-in-out duration-300 text-[#f26629] hover:text-[#30a2e1]"> Đăng ký </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</div>
<Footer />
    </div>

  )
}

export default SignIn