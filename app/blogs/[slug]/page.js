import "../../global/css/blogs.css";

export default async function BlogDetails({params}) {
    const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });
    const blogs = await res.json();
    const { slug } = params;
    console.log(params);

    // Fetch blog details using the slug if needed
  return (
    <main className="p-6">
      
      {blogs.find(blog => blog.id == slug) ? (
        <div className="featured-posts">
            {blogs.filter(blog => blog.id == slug).map((blog) => (
                <div key={blog.id} className="post-card-single">
                    <div className="post-image-single">
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog post" />
                    </div>
                    <div className="post-content-single">
                        <span className="post-category-single">{blog.title}</span>
                        <h3 className="post-title-single">{blog.content}</h3>
                        <p className="post-excerpt-single">Exploring the latest trends and technologies that are shaping the future of web development.</p>
                        <div className="post-meta-single">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" alt="Author" />
                            <div>
                                <div>John Doe</div>
                                <div>Aug 15, 2023 · 5 min read</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <p className="mb-4">Blog post not found</p>
      )}
    </main>
  );
}