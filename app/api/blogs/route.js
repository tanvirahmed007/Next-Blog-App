// export async function GET() {
//   const blogs = Array.from({ length: 1000 }, (_, i) => ({
//     id: i + 1,
//     title: `Blog Post ${i + 1}`,
//     slug: `blog-post-${i + 1}`,
//     content: `This is the content for blog post ${i + 1}.`,
//     createdAt: new Date().toISOString(),
//   }));

//   return Response.json(blogs); // shorthand for JSON response
// }


import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // our db.js

export async function GET() {
  try {
    const result = await query("SELECT id,title,content,created_date,category,img FROM public.\"Blogs\";");
    console.log(result.rows);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
