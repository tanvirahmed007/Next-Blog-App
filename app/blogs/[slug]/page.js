export default function BlogDetails({params}) {
    const { slug } = params;
    
    // Fetch blog details using the slug if needed
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Detail</h1>
      <p className="mb-4">Details for blog post with ID: {slug}</p>
    </main>
  );
}