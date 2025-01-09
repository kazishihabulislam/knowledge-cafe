import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="">
        <div className="bg-[#6047EC] opacity-50 mb-3 rounded-md">
            <h2 className="text-xl font-medium text-blue-50 p-4 text-center">Spent time on read : {readingTime} min</h2>
        </div>
      <div className=" bg-[#1111110D] rounded-md p-6">
        <h3 className="text-2xl font-semibold text-center pb-4">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        <div className="grid grid-cols-1 gap-2">
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
 bookmarks: PropTypes.object.isRequired,
 readingTime: PropTypes.func.isRequired
};
export default Bookmarks;
