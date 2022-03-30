import React, { useState } from 'react'
import { Layout, Breadcrumb, Table, Button, Space, Modal } from 'antd';
import { ProductType } from '../../../types/product';
import { Link } from 'react-router-dom';

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number | string) => void;
}
const ProductManager = (props: ProductManagerProps) => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: '_id',
      render: (_id: string | number) => (
        <Space size="middle">
        <Button type="primary" style={{ background: '#FFCC00', color: '#000000', border: 'none'}}><Link to={`/admin/products/${_id}/edit`}>Edit</Link></Button>
        <Button type="primary" danger onClick={() => props.onRemove(_id)}>Remove</Button>
        </Space>
      )
    },
  ]
  const dataSource = props.products.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      price: item.price,
      _id: item._id
    }
  })

  return (
    <Layout style={{ background: '#fff' }}>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item><Link to="/admin/dashboard">Pages</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Products Manager</Breadcrumb.Item>
  </Breadcrumb>
<header className="bg-white shadow">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
    <h1 className="text-3xl font-bold text-gray-900">
    Products Manager
    </h1>
    <Link to="/admin/products/add" className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Product
      </button>
    </Link>
  </div>
</header>

    <div className="site-layout-background bg-white shadow" style={{ padding: 24, minHeight: 360 }}>
    <Table columns={columns} dataSource={dataSource} />
                      
    </div>
    </Layout>
  )
}

export default ProductManager