import Image from "next/image";
import "./global/css/home.css";
import Blogs from "./blogs/page";
import Category from "./category/page";
import "./global/css/category.css";
import "./global/css/newsletter.css";
import Newsletter from "./newsletter/page";
import "./global/css/common.css";




export default function Home() {
  return (
    // <!-- Hero Section -->
    <div>
      <section className="hero">
        <div className="container">
            <h1>Discover stories, thinking, and expertise</h1>
            <p>BlogSpace is a place to read, write, and connect with the world's best ideas and voices.</p>
            <div className="search-bar">
                <input type="text" placeholder="Search for articles..." />
                <button>Search</button>
            </div>
        </div>
      </section>

      <Blogs />
      <Category />
      <Newsletter />
      
    </div>

    
  );
}
