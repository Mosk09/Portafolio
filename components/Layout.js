import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Leo Mosconi Porfolio</h1>
          <p> 2021- {new Date().getFullYear()}</p>
          <p>All rights Reserverd</p>
        </div>
      </footer>
    </>
  );
}
