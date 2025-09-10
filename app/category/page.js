

export default function Category() {
  return (
    <div>
        <section className="categories">
            <div className="container">
                <h2 className="section-title">Explore Categories</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Technology</h3>
                        <p>125 Articles</p>
                    </div>
                    <div className="category-card">
                        <i className="fas fa-paint-brush"></i>
                        <h3>Design</h3>
                        <p>89 Articles</p>
                    </div>
                    <div className="category-card">
                        <i className="fas fa-chart-line"></i>
                        <h3>Business</h3>
                        <p>67 Articles</p>
                    </div>
                    <div className="category-card">
                        <i className="fas fa-heart"></i>
                        <h3>Health</h3>
                        <p>54 Articles</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}