import Layout from "../components/Layout";
import { skills, experiences } from "../profile";

export default function Index() {
  return (
    <Layout>
      {/* heder cart */}

      <header className="row">
        <div className=".col-md-12 py-3 px-3">
          <div className="card card-body  bg-secondary">
            <div className="row justify-content-center ">
              <div className="col-md-4">
                <img src="perfil.jpg" alt="" className="img-fluid"></img>
              </div>
              <div className="col-md-8">
                <h1>Leo Mosconi</h1>
                <h3>FullStack Developer</h3>
                <p>
                  ¿Quién soy? Desarrollador Full Stack con experiencia en la
                  creación de páginas web e implementación de librerías nuevas.
                  ¿Por qué yo? Deportista profesional que hace años vengo
                  estudiando el mundo tecnológico. creo que el futuro es muy
                  cambiante lo cual decidí meterme de lleno con el desarrollo
                  informático, con mi espíritu competitivo y de esfuerzo
                  constante que me dio el deporte puedo decir que siempre voy
                  para adelante y me gustan los retos. siempre dispuesto a
                  aprender y mejorar todo lo que se pueda para un mejor
                  rendimiento en lo laboral. .
                </p>
                 <a href="/CV Nuevo.pdf" download="CV Leonardo Mosconi">Descarga CV</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* section 2 */}
      <div className="row py-2 px-3">
        <div className="col-md-4   ">
          <div className="card bg-ligth h-100">
            <div className="card-body ">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, i) => (
                <div key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8  px-3 ">
          <div className="card bg-ligth h-100 d-inline-block">
            <div className="card-body ">
              <h1>Experiencia</h1>
              <ul>
                {experiences.map(({ title, date, description }, i) => (
                  <div key={i}>
                    <li>
                      <h3>{title}</h3>
                      <h5>Fecha: {date}</h5>
                      <p>{description}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* porfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Porfolio</h1>
              </div>
              {experiences.map(({ title, sub, img, github }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100 d-inline-block">
                    <div className="overflow">
                      <img className=" card-img-top" src={`/${img}`} alt="" />
                    </div>
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>{sub}</p>
                      <a href={github}>Github</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
