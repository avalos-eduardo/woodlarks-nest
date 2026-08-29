import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
