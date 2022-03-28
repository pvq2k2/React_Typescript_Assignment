import React from 'react'
import { Layout, Breadcrumb } from 'antd';

type Props = {}

const ProductManager = (props: Props) => {
  return (
    <Layout style={{ background: '#fff' }}>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item>Pages</Breadcrumb.Item>
    <Breadcrumb.Item>Products Management</Breadcrumb.Item>
  </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    </div>
    </Layout>
  )
}

export default ProductManager