import { useEffect, useState } from 'react'
// import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { add, list, remove, update } from './api/product';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/admin/products/ProductManager';
import { ProductType } from './types/product';
import { Popconfirm, Modal, notification } from 'antd';
import ProductAdd from './pages/admin/products/ProductAdd';
import ProductEdit from './pages/admin/products/ProductEdit';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRouter from './components/PrivateRouter';
import CategoryManager from './pages/admin/category/CategoryManager';
import { CategoryType } from './types/category';
import { addCategory, listCategory, removeCategory, updateCategory } from './api/category';
import CategoryAdd from './pages/admin/category/CategoryAdd';
import CategoryEdit from './pages/admin/category/CategoryEdit';
import DetailCategory from './pages/DetailCategory';
import SliderManager from './pages/admin/sliders/SliderManager';
import { SliderType } from './types/slider';
import { addSlider, listSlider, removeSlider, updateSlider } from './api/slider';
import SliderAdd from './pages/admin/sliders/SliderAdd';
import SliderEdit from './pages/admin/sliders/SliderEdit';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
     const getProducts = async () => {
       const { data } = await list();
       setProducts(data);
     }
     getProducts();
  }, []);
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
     const getCategorys = async () => {
       const { data } = await listCategory();
       setCategorys(data);
     }
     getCategorys();
  }, []);
  const [sliders, setSliders] = useState<SliderType[]>([]);
  useEffect(() => {
     const getSliders = async () => {
       const { data } = await listSlider();
       setSliders(data);
     }
     getSliders();
  }, []);
  //Category
  const onHandleRemoveCategory = (slug: string) => {
    removeCategory(slug)
    setCategorys(categorys.filter(item => item.slug !== slug));
  }
  const onHandleAddCategory = async (category: CategoryType) => {
    const { data } = await addCategory(category);
    setCategorys([...categorys, data]);
  }
  const onHandleUpdateCategory = async (category: CategoryType) => {
    const { data } = await updateCategory(category);
    setCategorys(categorys.map(item => item.slug == data.slug ? data : item));
  }
  // Product
  const removeItem = (id: number | string) => {
      remove(id)
      setProducts(products.filter(item => item._id !== id));
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }
  // Sliders
  const onHandleRemoveSlider = (id: number | string) => {
    removeSlider(id)
    setSliders(sliders.filter(item => item._id !== id));
  }
  const onHandleAddSlider = async (slider: SliderType) => {
    const { data } = await addSlider(slider);
    setSliders([...sliders, data]);
  }
  const onHandleUpdateSlider = async (slider: SliderType) => {
    const { data } = await updateSlider(slider);
    setSliders(sliders.map(item => item._id == data._id ? data : item));
  }
  return (
    <div className="App bg-[#f4f4f4] min-h-full">
      <Routes>
        <Route path="/" element={<Home product={products} slider={sliders}/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categorys/:slug" element={<DetailCategory />} />
        <Route path="/admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
          <Route index element={<PrivateRouter><Dashboard /></PrivateRouter>} />
          <Route path="dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>} />
          <Route path='products'>
            <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} />
            <Route path='add' element={<PrivateRouter><ProductAdd onAdd={onHandleAdd}/></PrivateRouter>} />
            <Route path=':id/edit' element={<PrivateRouter><ProductEdit onUpdate={onHandleUpdate}/></PrivateRouter>} />
          </Route>
          <Route path='category'>
            <Route index element={<PrivateRouter><CategoryManager categorys={categorys} onRemove={onHandleRemoveCategory}/></PrivateRouter>} />
            <Route path='add' element={<PrivateRouter><CategoryAdd onAdd={onHandleAddCategory}/></PrivateRouter>} />
            <Route path=":slug/edit" element={<PrivateRouter><CategoryEdit onUpdate={onHandleUpdateCategory}/></PrivateRouter>} />
          </Route>
          <Route path="slider">
            <Route index element={<PrivateRouter><SliderManager sliders={sliders} onRemove={onHandleRemoveSlider}/></PrivateRouter>} />
            <Route path="add" element={<PrivateRouter><SliderAdd onAdd={onHandleAddSlider}/></PrivateRouter>} />
            <Route path=":id/edit" element={<PrivateRouter><SliderEdit onUpdate={onHandleUpdateSlider}/></PrivateRouter>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
