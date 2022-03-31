import React, { useEffect, useState } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/product';
import axios from 'axios';

type ProductEditProps = {
    onUpdate: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    price: number,
    img: string
}
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


const ProductEdit = (props: ProductEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm<TypeInputs>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
      setProducts(data);
    }
    getProduct();
  }, [])
  const [img, setImg] = useState();
  useEffect(() => {
    return () => {
      img && URL.revokeObjectURL(img.preview);
    }
  }, [img])
  const handlePreviewImage = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImg(file)
  }
  const onSubmit: SubmitHandler<TypeInputs> = async ( data ) => {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "imgproduct";
    const file = data.img[0];

    if (typeof(file) == "object") {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    const response = await axios.post(CLOUDINARY_API, formData, {
        headers: {
            "Content-Type": "application/form-data",
        },
    });
    data.img = response.data.url; 
  }
  const openNotification = () => {
    notification.success({
      message: `Sửa sản phẩm thành công !`,
    });
  };
      props.onUpdate(data);
      openNotification();
      setTimeout(() => {
        navigate("/admin/products");
      }, 2000)
  }
  
  return (
<div>
  <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item><Link to="/admin/dashboard">Pages</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/admin/products">Products Manager</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Products Edit</Breadcrumb.Item>
  </Breadcrumb>
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 className="text-3xl font-bold text-gray-900">
        Product Edit
      </h1>
      <Link to="/admin/products" className="sm:ml-3">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Close
        </button>
      </Link>
    </div>
  </header>
  <div className="m-auto max-w-7xl pb-32 mt-5">
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" id="form-edit-product" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input type="text" {...register('name')} id="name-edit-product" className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Name..." defaultValue="${data.title}" />
              </div>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1">
                <input type="number" {...register('price')} id="price-edit-product" className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Price..." defaultValue="${data.price}" />
              </div>
            </div>
            <div className="flex justify-between">
              {products && (
                              <div>
                              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Current photo
                              </label>
                              <div className="mt-1">
                                <img src={products.img} className="w-[80%] rounded-[10px]" />
                              </div>
                            </div>
              )}
              {img && (
                        <div>
                          <label htmlFor="imgpreview" className="block text-sm font-medium text-gray-700">
                                Image Preview
                              </label>
                              <div className="mt-1">
                                <img src={img.preview} className="w-[80%] rounded-[10px]"/>
                              </div>
                            </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <input {...register('img')} onChange={handlePreviewImage} id="file-upload" type="file" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg className="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    
  )
}

export default ProductEdit

