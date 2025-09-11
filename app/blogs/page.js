import "../global/css/blogs.css";
import Image from "next/image";

export default async function Blogs() {
  // Use relative fetch (works in dev + Vercel)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/blogs`, { cache: "no-store" });
  
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs = await res.json();

  return (
    <main className="p-6">
      <section className="container">
        <h2 className="section-title">Featured Posts</h2>
        <div className="featured-posts">
          {blogs.slice(0, 12).map((blog) => (
            <a key={blog.id} href={`/blogs/${blog.id}`} className="block p-4 rounded-lg">
              <div className="post-card">
                <div className="post-image">
                  <img
                    src={blog.img}
                    alt="Blog post"
                    width={1170}
                    height={800}
                    className="rounded-lg"
                  />
                </div>
                <div className="post-content">
                  <span className="post-category">{blog.title}</span>
                  <h3 className="post-title">{blog.content}</h3>
                  <p className="post-excerpt">
                    {blog.content}
                  </p>
                  <div className="post-meta flex items-center gap-2 mt-3">
                    <img
                      src={blog.img}
                      alt="Author"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div>John Doe</div>
                      <div>{blog.created_date}</div>
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
