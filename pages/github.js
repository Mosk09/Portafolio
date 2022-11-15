import Layout from "../components/Layout";

export default function Github({ user }) {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-bdy text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.blog}
              target="_black"
              className="btn btn-outline-secondary my-2"
            >
              Mi Blog
            </a>
            <a
              href={user.html_url}
              target="_black"
              className="btn btn-outline-secondary "
            >
              Vamos a Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Mosk09");
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
