import React from 'react'


const Content = (props: any) => {
  return (
<main className="px-3 xl:w-[1200px] xl:mx-auto xl:px-0">
  <section className="content py-5">
    <div className="category inline-block overflow-hidden">
      <h4 className="bg-[#f26629] py-1 px-5 uppercase text-white font-semibold rounded-md">Điện Thoại</h4>
    </div>
    <div className="list-products grid gap-8 mt-5 grid-cols-2 
  xl:grid-cols-5 
  lg:grid-cols-4 
  md:grid-cols-3">
      {props.getAllProducts.map( (product: any) => (
                <div className="product group shadow-2xl text-center rounded-xl p-4 hover:scale-110 ease-in-out duration-500">
                <div className="product__img">
                  <img className="mx-auto" src={product.img} />
                </div>
                <div className="product__name">
                  <h4 className="font-bold text-base py-2 group-hover:text-[#f26629] ease-in duration-300">{product.name}</h4>
                </div>
                <div className="product__price mb-3">
                  <strong className="text-base text-[#fd475a]">{product.price} ₫</strong>
                </div>
                <div className="product__btn">
                  <button data-id="${id}" className="buy-btn mx-3 inline-block bg-[#f26629] px-5 py-2 uppercase text-white font-semibold rounded-lg hover:bg-[#30a2e1] ease-in duration-300">Mua
                    Ngay</button>
                </div>
     </div>
      ))}
      {/* End product */}
    </div>
    {/* End list-product */}
  </section>
</main>

  )
}

export default Content