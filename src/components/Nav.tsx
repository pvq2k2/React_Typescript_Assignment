import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { listCategory } from '../api/category'
import { CategoryType } from '../types/category'

type Props = {}

const Nav = (props: Props) => {
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCategory();
      setCategorys(data);
    }
    getCategorys();
  }, [])
  return (
<nav className="lg:px-3">
  <div className="
xl:w-[1200px] xl:block mt-2 mx-auto text-center bg-white shadow-lg shadow-gray-500/5 rounded-lg
lg:block
hidden
">
    <ul>
      {categorys.map((category, index) => (
              <li key={index + 1} className="inline-block"><NavLink to={`/categorys/${category.slug}`} className="inline-block py-[10px] px-10 text-black hover:bg-[#30a2e1] hover:rounded-lg hover:text-black ease-in-out duration-300">
              <img width={30} className="mx-auto" src={`data:image/svg+xml;utf8,${category.icon}`} />
              <span>{category.name}</span></NavLink></li>
      ))}
    </ul>
  </div>
</nav>

  )
}

export default Nav