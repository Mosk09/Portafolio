import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Porfolio
          </Link>
          <div
            className="d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto d-flex flex-row ">
              <li className="nav-item px-2">
                <a className="nav-link" href="https://www.linkedin.com/in/leo-mosconi-09ab27230/">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="https://github.com/Mosk09">
                  Github
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
