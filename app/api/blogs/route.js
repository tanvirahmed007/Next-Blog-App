export async function GET() {
  const blogs = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    slug: `blog-post-${i + 1}`,
    content: `This is the content for blog post ${i + 1}.`,
    createdAt: new Date().toISOString(),
  }));

  return Response.json(blogs); // shorthand for JSON response
}
