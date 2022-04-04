import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


type Props = {}

const Header = (props: Props) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const data = JSON.parse(localStorage.getItem('user') as string);
      setUsers(data);
    }
  }, [])
  const handlerLogout = () => {
    localStorage.removeItem('user');
    setUsers(undefined);
  }
  return (
<div>
    <div className="
    xl:w-[1200px] xl:mx-auto xl:flex xl:justify-between xl:py-3
    lg:px-3 lg:mx-auto lg:flex lg:justify-between lg:py-3
    mx-auto flex justify-between p-3
    ">
    <div className="icon-nav-mobile
    lg:hidden 
    xl:hidden 
    block mt-4 text-gray-400 hover:text-[#f26629] ease-in-out duration-300 relative
    ">
      <label htmlFor="nav-mobile-input" className="icon-bar">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
    </div>
    <div className="header-left flex">
      <div className="logo">
        <Link to="/"><img src="https://i.postimg.cc/qtfvxTB5/logo.png" /></Link>
      </div>
    </div>
    <div className="search 
      xl:pt-[7px] xl:relative xl:block
      lg:pt-[7px] lg:relative lg:block
      hidden
       ">
      <input type="text" placeholder="Bạn cần tìm gì..." className="border-[1px] border-gray-400 indent-[5px] p-2 pr-10 w-[500px] rounded-[20px] focus:outline-none focus:border-[#f26629] hover:border-[#f26629] ease-in-out duration-300" />
      <button className="absolute text-gray-500 p-2 pr-[20px] top-2 right-0 rounded-r-[20px] hover:bg-[#f26629] hover:text-white ease-in-out duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <div className="header-right flex gap-5 mt-4">
      <div className="in-up lg:block xl:block md:hidden hidden relative h-7 w-7 group">
        <span className="text-gray-400 group-hover:text-[#f26629] ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div className="in-up--sub absolute top-12 bg-white shadow-xl z-20 p-3 rounded-lg invisible ease-linear duration-300 w-60 xl:left-[-15px] lg:right-[-96px]  group-hover:visible
        before:absolute before:-top-2 xl:before:left-5 before:lg:left-[120px]
        before:w-5 before:h-5 before:bg-white before:rounded before:rotate-45 before:-z-10  before:shadow-xl">
        {localStorage.getItem("user") ? (
  <div>
    {users && (
      <div className="flex items-center pb-3 w-full">
            <div className="flex-shrink-0 h-10 w-10">
                        <img src={users.user.avatar} className="user-img h-10 w-10 rounded-full" />
                      </div><div className="ml-4">
                          <div className="text-sm text-gray-500">
                            Xin chào !
                          </div>
                          <div>
                            <span className="user-name text-sm font-medium text-gray-900">{users.user.name}</span>
                          </div>
                        </div>
          </div>
    )}
  <ul>
    <li className="rounded-lg hover:bg-[#f26629] hover:text-white"><Link className="inline-block p-2" to="/admin"><span className="text-black font-semibold">Trang quản trị</span></Link></li>
    <li className="logout rounded-lg hover:bg-[#f26629] cursor-pointer" onClick={handlerLogout}><span className="inline-block p-2 font-semibold">Đăng xuất</span></li>
  </ul>
</div>
      ) : (
<ul>
            <li className="rounded-lg hover:bg-[#f26629] hover:text-white"><Link className="inline-block p-2" to="/signin"><span className="text-black font-semibold">Đăng nhập</span></Link></li>
            <li className="rounded-lg hover:bg-[#f26629] hover:text-white"><Link className="inline-block p-2" to="/signup"><span className="text-black font-semibold">Đăng ký</span></Link></li>
          </ul>

      )}
      </div>
      </div>

    <div className="check-order lg:block xl:block hidden">
        <Link to="#" className="text-gray-400 hover:text-[#f26629] ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart" className="text-gray-400 hover:text-[#f26629] ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header