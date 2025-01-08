import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Blogs/Bookmarks/Bookmarks";

const Main = () => {
    return (
        <div>
            <div className="container mx-auto space-x-2 flex justify-between items-center py-12">
            <div className="w-2/3">
            <Blogs></Blogs>
            </div>
            <div className="w-1/3">
           <Bookmarks></Bookmarks>
           </div>

            </div>


        </div>
    );
};

export default Main;