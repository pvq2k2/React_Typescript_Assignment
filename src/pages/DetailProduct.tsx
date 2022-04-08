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
    const [quantitys, setQuantitys] = useState<Number>();
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
    }, [])
    
    // const upQuantity = () => {
    //   setQuantitys(quantitys++);
    //   // quantitys = quantitys + 1;
      
    // }
    // const downQuantity = () => {
    //   let dQuantity = quantitys == 1 ? quantitys = 1 : quantitys--;
    //   setQuantitys(dQuantity);
      
    // }
    // const inputQuantity = (e: any) => {
    //   // console.log(e.target.value);
    //   setQuantitys(e.target.value);
    //   console.log(quantitys);
      
    // }
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

                <div className="product w-full shadow-2xl rounded-xl p-4 bg-white">
                <div className="product__name">
                  <h4 className="font-bold text-center text-2xl py-3 pl-4 group-hover:text-[#f26629] ease-in duration-300">{products.name}</h4>
                </div>
                <div className="flex justify-center gap-20">
                <div className="product__img">
                  <img className="w-[200px]" src={products.img} />
                </div>
                <div className="pl-5">
                <div className="product__price mb-3">
                  <strong className="text-2xl text-[#fd475a]">{products.price} ₫</strong>
                </div>
                <button id="btn-add-to-cart" className="mt-6 w-full bg-[#f26629] border border-transparent rounded-md py-3 px-8 flex items-center ease-in duration-300 justify-center text-base font-medium text-white hover:bg-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
          </div>
        </div>
     </div>
     )}
  </section>
</main>
    <Footer />
    </div>



  )
}

export default DetailProduct