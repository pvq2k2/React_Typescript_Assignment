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
    <Breadcrumb.Item>Pages</Breadcrumb.Item>
    <Breadcrumb.Item>Products Management</Breadcrumb.Item>
  </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Button type="primary" style={{ marginBottom: 20}}><Link to={`/admin/products/add`}>Add Product</Link></Button>
    <Table columns={columns} dataSource={dataSource} />
                      
    </div>
    </Layout>
  )
}

export default ProductManager