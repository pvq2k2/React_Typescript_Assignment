import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { readOneCategory } from '../api/category'
import Footer from '../components/Footer'
import Header from '../components/header'
import Nav from '../components/Nav'
import { CategoryType } from '../types/category'
import { ProductType } from '../types/product'

type Props = {}

const DetailCategory = (props: Props) => {
    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    const { slug } = useParams();
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readOneCategory(slug);   
            setCategorys(data.category);
            setProducts(data.products);
        }
        getCategory();
    }, [slug])
  return (
    <div>
    <Header />
    <Nav />
    <main className="px-3 xl:w-[1200px] xl:mx-auto xl:px-0">
  <section className="content py-5">
    <div className="category inline-block overflow-hidden">
      <h4 className="bg-[#f26629] py-1 px-5 uppercase text-white font-semibold rounded-md">{categorys.name}</h4>
    </div>
    <div className="list-products grid gap-8 mt-5 grid-cols-2 
  xl:grid-cols-5 
  lg:grid-cols-4 
  md:grid-cols-3">
      {products.map( (item: any, index: number) => (
        <NavLink to={`products/${item.slug}`}>
                <div className="product group shadow-2xl text-center rounded-xl p-4 hover:scale-110 ease-in-out duration-500" key={index + 1}>
                <div className="product__img">
                  <img className="mx-auto" src={item.img} />
                </div>
                <div className="product__name">
                  <h4 className="font-bold text-base py-2 group-hover:text-[#f26629] ease-in duration-300">{item.name}</h4>
                </div>
                <div className="product__price mb-3">
                  <strong className="text-base text-[#fd475a]">{item.price} ₫</strong>
                </div>
     </div>
     </NavLink>
      ))}
    </div>
  </section>
</main>
    <Footer />
    </div>
  )
}

export default DetailCategory