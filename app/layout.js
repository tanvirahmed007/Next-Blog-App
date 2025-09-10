
import Footer from "./footer/footer";
import "./global/css/footer.css";
import "./globals.css";
import Navbar from "./navbar/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className="main-body"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
