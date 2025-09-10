
import "../global/css/blogs.css";

export default async function Blogs() {
  // Use relative fetch (works both dev and prod)
  const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });
  const blogs = await res.json();

  return (
    <main className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      <ul className="space-y-4">
        {blogs.slice(0, 10).map((blog) => (
          <a key={blog.id} href={`/blogs/${blog.id}`} className="block p-4 rounded-lg">
            <li key={blog.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
          </a>
        ))}
      </ul> */}

      
        <section className="container">
            <h2 className="section-title">Featured Posts</h2>
            <div className="featured-posts">
                {blogs.slice(0, 12).map((blog) => (
                    <a key={blog.id} href={`/blogs/${blog.id}`} className="block p-4 rounded-lg">
                        <div className="post-card">
                            <div className="post-image">
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog post" />
                            </div>
                            <div className="post-content">
                                <span className="post-category">{blog.title}</span>
                                <h3 className="post-title">{blog.content}</h3>
                                <p className="post-excerpt">Exploring the latest trends and technologies that are shaping the future of web development.</p>
                                <div className="post-meta">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" alt="Author" />
                                    <div>
                                        <div>John Doe</div>
                                        <div>Aug 15, 2023 · 5 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                
            
                    </a>
                ))}
            </div>  
        </section>
    </main>
  );
}
