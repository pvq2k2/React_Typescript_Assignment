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
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
     const getProducts = async () => {
       const { data } = await list();
       setProducts(data);
     }
     getProducts();
  }, []);
  const removeItem = (id: number | string) => {
    const openNotification = () => {
      notification.success({
        message: `Xóa thành công !`,
        // description:
        //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    const confirm = window.confirm('Are you sure you want to remove this item?');
    if (confirm) {
      remove(id)
      setProducts(products.filter(item => item._id !== id));
      openNotification()
    }
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
        </Route>
      </Routes>
    </div>
  )
}

export default App
