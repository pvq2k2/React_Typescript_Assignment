import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
<footer className="mt-[50px] mx-2 bg-[#f26629] rounded-xl px-5 py-3 text-white xl:w-[1200px] xl:mx-auto">
  <div className="box-footer grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
    <div className="col-content text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div className="link-content">
        <h4 className="text-[15px] font-bold py-[10px] text-white">Hỗ Trợ - Dịch Vụ</h4>
        <ul>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Mua hàng trả góp</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Hướng dẫn đặt hàng và thanh toán</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Chính sách bảo hành</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Câu hỏi thường gặp</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Tra cứu đơn hàng</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Chính sách bảo mật</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Chính sách hủy giao dịch, đổi trả</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Chính sách giải quyết khiếu nại</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Điều khoản mua bán hàng hóa</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Phạm vi, điều khoản gói bảo hành mở rộng</NavLink></li>
        </ul>
      </div>
      {/* End link-content */}
      <div className="link-content">
        <h4 className="text-[15px] font-bold py-[10px] text-white">Thông Tin Liên Hệ</h4>
        <ul>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Bán hàng Online</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Chăm sóc Khách Hàng</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Hỗ Trợ Kỹ thuật</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Hỗ trợ Bảo hành &amp; Sửa chữa</NavLink></li>
          <li><NavLink className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300" to="#">Liên hệ khối văn phòng</NavLink></li>
        </ul>
      </div>
      {/* End link-content */}
      <div className="link-content">
        <h4 className="text-[15px] font-bold py-[10px] text-white">Hệ thống 65 siêu thị trên toàn quốc</h4>
        <ul>
          <li><NavLink to="#" className="text-[#ddd] text-[13px] hover:text-white ease-in-out duration-300">Danh sách 65 siêu thị trên toàn quốc</NavLink></li>
        </ul>
      </div>
      {/* End link-content */}
    </div>
    {/* End col-content */}
    <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div>
        <h4 className="text-[15px] font-bold py-[10px] text-white">Tổng đài</h4>
        <span className="text-center inline-block py-1 px-2 bg-white rounded text-[#f26629] font-bold text-[18px] hover:text-white hover:bg-[#f26629] ease-in-out duration-300">1900.0000</span>
      </div>
      <div className="lg:ml-[-10px]">
        <h4 className="text-[15px] font-bold py-[10px] text-white">Thanh toán miễn phí</h4>
        <ul>
          <li className="flex gap-1 pb-1">
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-visa_o2d0lv.png" />
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-master_roande.png" />
          </li>
          <li className="flex gap-1 pb-1">
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-jcb_i0jky6.png" />
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-samsungpay_nf2vjv.png" />
          </li>
          <li className="flex gap-1 pb-1">
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-atm_fjrs4t.png" />
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/logo-vnpay_w7b9ie.png" />
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-[15px] font-bold py-[10px] text-white">Hình thức vận chuyển</h4>
        <ul>
          <li className="flex gap-1 pb-1">
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/nhattin_myipbf.jpg" />
            <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/vnpost_ajg6tx.jpg" />
          </li>
        </ul>
        <div className="logo-bct pt-5">
          <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-bct_c4urdp.png" />
        </div>
      </div>
    </div>
  </div>
  <div className="info text-center pt-3">
    <p>Copyright by VANQUYETMOBIE. All rights reserved © 2021.</p>
  </div>
</footer>

  )
}

export default Footer