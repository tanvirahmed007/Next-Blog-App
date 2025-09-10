
import Footer from "./footer/footer";
import "./global/css/footer.css";
import "./globals.css";
import Navbar from "./navbar/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <body
        className="main-body"
      >
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
