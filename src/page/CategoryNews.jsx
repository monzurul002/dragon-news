import { useLoaderData } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <div className="flex justify-between items-center mr-3">
        <h2 className="font-semibold py-2">Dragon News Home</h2>
        <p className="font-semibold text-gray-700">
          {news.length} news founded
        </p>
      </div>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
