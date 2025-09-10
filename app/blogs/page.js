export default async function Blogs() {
  // Use relative fetch (works both dev and prod)
  const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });
  const blogs = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      <ul className="space-y-4">
        {blogs.slice(0, 10).map((blog) => (
          <a key={blog.id} href={`/blogs/${blog.id}`} className="block p-4 rounded-lg">
            <li key={blog.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
          </a>
        ))}
      </ul>
    </main>
  );
}
