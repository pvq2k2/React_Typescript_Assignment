import React, { useState } from 'react'
import { Layout, Breadcrumb, Table, Button, Space, message, Popconfirm, notification } from 'antd';
import { CategoryType } from '../../../types/category';
import { Link } from 'react-router-dom';

type CategoryManagerProps = {
  categorys: CategoryType[];
  onRemove: (slug: string) => void;
}
type Slug = {
  slug: string;
}
const CategoryManager = (props: CategoryManagerProps) => {
  const [slug, setSlug] = useState<Slug>();
  // console.log(id);
  function confirm(e: any) {
    // console.log(e);
    const openNotification = () => {
      notification.success({
        message: `Xóa thành công !`,
        // description:
        //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    // message.success('Click on Yes');
    openNotification()
    props.onRemove(slug);
  }
  
  function cancel(e: any) {
    console.log(e);
    message.error('Click on No');
  }
  const columns = [
    {
      key: 'key',
      title: 'STT',
      dataIndex: 'key',
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    { 
        key: 'slug',
        title: 'Slug',
        dataIndex: 'slug',
    },
    {
      key: 'icon',
      title: 'Icon',
      dataIndex: 'icon',
      render: (icon: string) => (
        <div>{icon}</div>
      )
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'slug',
      render: (slug: Slug) => (
        <Space size="middle">
        <Button type="primary" style={{ background: '#FFCC00', color: '#000000', border: 'none'}}><Link to={`/admin/category/${slug}/edit`}>Edit</Link></Button>
        <Popconfirm
        title="Bạn có muốn xóa danh mục này không ?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Có"
        cancelText="Không"
        >
        <Button type="primary" danger onClick={() => setSlug(slug)}>Remove</Button>
        </Popconfirm>
        {/* <Button type="primary" danger onClick={() => props.onRemove(_id)}>Remove</Button> */}
        </Space>
      )
    },
  ]
  const dataSource = props.categorys.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      _id: item._id,
      icon: item.icon,
      slug: item.slug
    }
  })

  return (
    <Layout style={{ background: '#fff' }}>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item><Link to="/admin/dashboard">Pages</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Categorys Manager</Breadcrumb.Item>
  </Breadcrumb>
<header className="bg-white shadow">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
    <h1 className="text-3xl font-bold text-gray-900">
    Categorys Manager
    </h1>
    <Link to="/admin/category/add" className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Category
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

export default CategoryManager