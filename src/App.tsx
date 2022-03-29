import { useEffect, useState } from 'react'
// import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { add, list, remove, update } from './api/product';
import Dashboard from './pages/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';
import { ProductType } from './types/product';
import { Popconfirm, Modal, notification } from 'antd';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
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
    const openNotification = () => {
      notification.success({
        message: `Thêm thành công !`,
        // description:
        //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    const { data } = await add(product);
    setProducts([...products, data]);
    openNotification()
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd}/>} />
            <Route path=':id/edit' element={<ProductEdit onAdd={onHandleAdd}/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
