import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { Form, Input, Button, Checkbox } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    price: number
}
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

type Props = {}

const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
  const onFinish: SubmitHandler<TypeInputs> = data => {
    console.log(data);
      props.onAdd(data);
  }
  return (
    <Layout style={{ background: '#fff' }}>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item>Pages</Breadcrumb.Item>
    <Breadcrumb.Item>Products Management</Breadcrumb.Item>
    <Breadcrumb.Item>Products Add</Breadcrumb.Item>
  </Breadcrumb>
    <div className="site-layout-background" 
    style={{ 
        padding: 24, 
        minHeight: 360, 
        display: 'inline-block', 
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)' 
    }}>
    <div
    style={{  
        display: 'inline-block', 
        position: 'relative',
        left: '80%',
        transform: 'translateX(-50%)' 
    }}>
        
    </div>
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout= "vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Tên sản phẩm" {...register('name')}/>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input your price!' }]}
      >
        <Input placeholder="Giá sản phẩm" {...register('price')}/>
      </Form.Item>

      <Form.Item style={{ marginBottom: 20 }}>
        <Button type="primary" htmlType="submit" style={{ float: 'left'}}>
          Submit
        </Button>
        <Button type="primary" style={{ float: 'right'}}>
          <Link to="/admin/products">Close</Link>
        </Button>
      </Form.Item>
    </Form>            
    </div>
    </Layout>
  )
}

export default ProductAdd