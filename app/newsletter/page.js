export default function Newsletter() {
  return (
    <div>
        <section className="newsletter">
            <div className="container">
                <h2>Subscribe to our Newsletter</h2>
                <p>Get the latest articles, news, and updates delivered directly to your inbox.</p>
                <form className="newsletter-form">
                    <input className="newsletter-input" type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
    </div>
  );
}