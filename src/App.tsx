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
  return (
    <div className="App bg-[#f4f4f4]">
      <Routes>
        <Route path="/" element={<Home product={products}/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
        </Route>
      </Routes>
    </div>
  )
}

export default App
