import { Breadcrumb, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { readOneCategory } from '../../../api/category';
type CategoryEditProps = {
    onUpdate: (category: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    icon: string
}


const CategoryEdit = (props: CategoryEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm<TypeInputs>();
    const { slug } = useParams();
    const navigate = useNavigate();
    const [categorys, setCategorys] = useState();
    const [icons , setIcon] = useState();
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readOneCategory(slug);
            // console.log(data);
            reset(data.category);
            setCategorys(data.category);
        }
        getCategory();
    }, [])
    const handlePreviewIcon = (e : any) => {
      console.log(e.target.value);
      setIcon(e.target.value);
      console.log(icons);
    }
    const onSubmit: SubmitHandler<TypeInputs> = async ( data ) => {
        const openNotification = () => {
          notification.success({
            message: `Thêm danh mục thành công !`,
          });
        };
        props.onUpdate(data);
        // console.log(data);
        openNotification();
        setTimeout(() => {
          navigate("/admin/category");
        }, 2000)
    }
  return (
    <div>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item><Link to="/admin/dashboard">Pages</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/admin/category">Categorys Manager</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Category Edit</Breadcrumb.Item>
  </Breadcrumb>
<div>
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 className="text-3xl font-bold text-gray-900">
        Category Edit
      </h1>
      <Link to="/admin/category" className="sm:ml-3">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Close
        </button>
      </Link>
    </div>
  </header>
  <div className="m-auto max-w-7xl pb-36 mt-5">
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" id="form-add-product" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input type="text" {...register('name')} id="name-add-product" className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Name..." />
              </div>
            </div>
            <div className="flex justify-between">
                {categorys && (
                  <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Current Icon
                      </label>
                    <div className="mt-1">
                      <img width={50} src={`data:image/svg+xml;utf8,${categorys.icon}`}></img>
                      {/* <img src={categorys.img} className="w-[80%] rounded-[10px]" /> */}
                    </div>
                  </div>
                )}
            {icons && (
                        <div>
                          <label htmlFor="imgpreview" className="block text-sm font-medium text-gray-700">
                              Icon Preview
                              </label>
                              <div className="mt-1">
                              <img width={50} src={`data:image/svg+xml;utf8,${icons}`}></img>

                                {/* <img src={img.preview} className="w-[80%] rounded-[10px]"/> */}
                              </div>
                            </div>
            )}
            
              </div>
            <div>
            <label htmlFor="icon" className="block text-sm font-medium text-gray-700"> Icon </label>
            <div className="mt-1">
                <textarea id="icon" rows={3} className="pt-2 pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Icon" {...register('icon')} defaultValue={""} onChange={handlePreviewIcon} />
            </div>
            </div>

          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
  </div>
  )
}

export default CategoryEdit