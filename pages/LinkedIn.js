import Layout from "../components/layout";

export default function LinkedIn() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-bdy text-center">
            <a href="https://www.linkedin.com/in/leo-mosconi-09ab27230/">
              <h1 className="text-center">LinkedIn</h1>
            </a>
            <img src="/LinkedIn.png"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}
