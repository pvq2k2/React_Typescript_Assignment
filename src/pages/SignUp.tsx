import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/header'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div>
        <Header />
        <div className="xl:w-[1200px] xl:mx-auto mt-10 shadow-inner rounded-lg mx-3">
  <div className="content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 shadow-lg">
    <section className="hidden xl:flex lg:flex bg-[#e7f6fb] justify-center rounded-l-lg">
      <img className="p-5 w-8/12 
  xl:px-0 xl:py-40 xl:w-6/12
  lg:px-20 lg:py-36 lg:w-11/12" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png" />
    </section>
    <section>
      <div className="min-h-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">Đăng Ký</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Chú ý các nội dung có dấu * bạn cần phải nhập
            </p>
          </div>
          <form className="mt-8 space-y-6" id="form-signup" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="pb-4">
                <label htmlFor="input-username" className="py-2">Họ tên</label>
                <input id="input-username" name="input-username" type="text" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Họ tên*" />
              </div>
              <div className="pb-4">
                <label htmlFor="input-password" className="py-2">Mật khẩu</label>
                <input id="input-password" name="input-password" type="password" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Mật khẩu*" />
              </div>
              <div className="pb-4">
                <label htmlFor="input-email" className="py-2">Email</label>
                <input id="input-email" name="input-email" type="email" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Email*" />
              </div>
              <div className="mb-4">
                <label htmlFor="input-avatar" className="py-2">Ảnh đại điện</label>
                <input id="input-avatar" name="input-avatar" type="file" required className="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Ảnh đại diện" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f26629] hover:bg-[#30a2e1] ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Đăng ký
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-gray-600">
              Bạn đã có tài khoản? 
              <Link to="/signin" className="font-medium ease-in-out duration-300 text-[#f26629] hover:text-[#30a2e1]"> Đăng nhập </Link>
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

export default SignUp