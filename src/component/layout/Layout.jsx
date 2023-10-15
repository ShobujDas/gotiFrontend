import { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main>
      {children}
      </main>
        
      <Footer />
    </>
  );
}

export default Layout;
