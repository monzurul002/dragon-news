import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div>
      <div className="flex gap-1 bg-gray-200">
        <p className="px-5 py-1 bg-red-600 inline text-white font-semibold">
          Latest{" "}
        </p>
        <p>
          {" "}
          <marquee behavior="" direction="">
            {" "}
            <Link to="/news">Unity plea ahead of huge Eid celebrations </Link>
          </marquee>{" "}
        </p>
      </div>
    </div>
  );
};

export default LatestNews;
