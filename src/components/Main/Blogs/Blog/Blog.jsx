
const Blog = ({blogs}) => {
    console.log(blogs);
    const {id,  blog_title, blog_cover_image} =blogs;
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={blog_cover_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;