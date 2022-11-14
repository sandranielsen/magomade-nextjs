import NavbarOne from "./Navbar";
import NavbarTwo from "./NavbarSecondary";
import Footer from "./Footer";

export default function Layout({ children, navbarType }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      { /* Navigation type switch */ }
      {navbarType == 1 && <NavbarOne />}
      {navbarType == 2 && <NavbarTwo />}
      <main>{children}</main>
      <Footer />
    </div>
  );
}


