import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export const metadata = {
  title: "Muhammed Syam | MERN Stack Engineer",
  description: "Portfolio of Muhammed Syam, a MERN Stack Engineer building digital experiences that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <CustomCursor />
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
