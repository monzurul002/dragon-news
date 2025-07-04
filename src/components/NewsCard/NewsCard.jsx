const NewsCard = ({ news }) => {
  return (
    <div className=" gap-6 p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className=" h-80 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p className="text-sm text-gray-500">
            {news.details.slice(0, 100)}...
          </p>

          <div className="flex newss-center gap-3 mt-4">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{news.author.name}</p>
              <p className="text-xs text-gray-400">
                {new Date(news.author.published_date).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-between newss-center">
            <span className="badge badge-success">
              {news.rating.badge} ({news.rating.number})
            </span>
            <span className="text-sm text-gray-500">
              {news.total_view} views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
