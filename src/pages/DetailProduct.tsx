import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { listCategory } from '../api/category';
import { readOneProduct } from "../api/product";
import Footer from '../components/Footer';
import Header from '../components/header';
import Nav from '../components/Nav';

type Props = {}

const DetailProduct = (props: Props) => {
    const { slug } = useParams();
    const [products, setProducts] = useState();
    const [categorys, setCategorys] = useState();
    useEffect(() => {
        const getProduct =  async () => {
            const { data } = await readOneProduct(slug);
            setProducts(data);
        }
        getProduct();
    }, [])
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCategory();
            // console.log(data[0]);
            // console.log(data[0]._id);
            // console.log(products.category);

            for (let i = 0; i < data.length; i++) {
            if (products) {
                if (products.category === data[i]._id) {
                    setCategorys(data[i]);
                }
            }

            }
                // if (data[i]._id === products._id){
                //     setCategorys(data[i]);
                // }
            
            
        }
        getCategory();
    }, [categorys])
  return (
    <div>
    <Header />
    <Nav />
    <main className="px-3 xl:w-[1200px] xl:mx-auto xl:px-0">
  <section className="content py-5">
    {/* <div className="category inline-block overflow-hidden">
      <h4 className="bg-[#f26629] py-1 px-5 uppercase text-white font-semibold rounded-md">{categorys.name}</h4>
    </div> */}
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    {categorys && (
        <Breadcrumb.Item><Link to={`/categorys/${categorys.slug}`}>{categorys.name}</Link></Breadcrumb.Item>
    )}
    <Breadcrumb.Item>{products && products.name}</Breadcrumb.Item>
  </Breadcrumb>
  {products &&  (
                <div className="product w-full shadow-2xl text-center rounded-xl p-4 bg-white">
                <div className="product__img">
                  <img className="mx-auto" src={products.img} />
                </div>
                <div className="product__name">
                  <h4 className="font-bold text-base py-2 group-hover:text-[#f26629] ease-in duration-300">{products.name}</h4>
                </div>
                <div className="product__price mb-3">
                  <strong className="text-base text-[#fd475a]">{products.price} ₫</strong>
                </div>
                <section aria-labelledby="options-heading" className="mt-5">
              <form>
                {/* Quantity */}
                <div>
                  <h4 className="text-sm text-gray-900 font-medium">Số lượng</h4>
                  <div className="flex items-center mt-2">
                    <button id="down-quantity" className="cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input id="input-quantity" type="text" role="spinbutton" aria-valuenow={1} defaultValue={1} className="border w-14 h-8 text-base font-normal box-border text-center cursor-text outline-none" />
                    <button id="up-quantity" className="cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button id="btn-add-to-cart" className="mt-6 w-full bg-[#f26629] border border-transparent rounded-md py-3 px-8 flex items-center ease-in duration-300 justify-center text-base font-medium text-white hover:bg-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
              </form>
            </section>
     </div>
     )}
  </section>
</main>
    <Footer />
    </div>



  )
}

export default DetailProduct