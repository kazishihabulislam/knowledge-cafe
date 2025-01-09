import { useState } from "react";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Blogs/Bookmarks/Bookmarks";

const Main = () => {
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] = useState([])
    const handleBookmarks = blog => {
       const newBookmarks = [...bookmarks, blog]
       setBookmarks(newBookmarks);
    };
    const handleMarkAs = time =>{
       const newTime = readingTime + time;
       setReadingTime(newTime);
    }
    return (
        <div>
            <div className="container mx-auto space-x-4 flex justify-between py-12">
            <div className="w-9/12">
            <Blogs handleBookmarks={handleBookmarks} handleMarkAs={handleMarkAs}></Blogs>
            </div>
            <div className="w-2/6" >
           <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
           </div>
            </div>


        </div>
    );
};

export default Main;