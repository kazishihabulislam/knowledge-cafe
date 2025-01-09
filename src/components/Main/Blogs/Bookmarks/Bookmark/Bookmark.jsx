
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <div className="card bg-white rounded-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-lg font-medium p-4">{title}</h2>
          </div>
        </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
    
}
export default Bookmark;