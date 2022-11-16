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
                <Link className="nav-link" href="/LinkedIn">
                  LinkedIn
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" href="/github">
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
