import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2>All Category</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
