import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleBookmarks, handleMarkAs }) => {
  const {
    id,
    user_id,
    profile_image,
    username,
    hashtag,
    blog_id,
    cover_image,
    description,
    header,
    name,
    posted_date,
    title,
    reading_time,
    type,
  } = blog;
  return (
    <div className="mb-12">
      <div>
        <img
          className="rounded-lg w-full h-2/5 object-cover"
          src={cover_image}
          alt={`Cover Picture of the title ${title}`}
        />
      </div>
      <div className="py-3">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center space-x-4">
            <div className="avatar">
              <div className="ring-primary offline ring-offset-base-100 w-14 rounded-full ring">
                <img
                  className="rounded-full object-cover w-full"
                  src={profile_image}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-base">{type}</p>
              <p className="text-xs">{posted_date}</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-medium">{reading_time} min read</span>
            <button
              className="text-2xl px-2"
              onClick={() => handleBookmarks(blog)}
            >
              <CiBookmark></CiBookmark>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 px-3">{title}</h2>
      <p className="py-2">
        {
          // eslint-disable-next-line react/prop-types
          blog.hashtag.map((has, idx) => (
            <span className="px-2 font-medium" key={idx}>
              <a href="">{has}</a>
            </span>
          ))
        }
      </p>
      <button
        onClick={() => handleMarkAs(reading_time)}
        className="text-xl text-purple-700 underline font-semibold px-3"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAs: PropTypes.func.isRequired,
};
export default Blog;
