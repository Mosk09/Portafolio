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
                  Desarrollador entusíasta con experiencia en bases de dates,
                  frontend y back-end. Conocedor de los procesos de
                  codificación. prueba y depuración. Equipado con un conjunto de
                  habilidades diversa y prometedor. Competente en una variedad
                  de tecnologlas mencionadas mas arriba. Capaz de
                  autogestionarse de manera efectiva durante proyectos
                  independientes. así como colaborar en un entorno de equipo.
                </p>
                <a href="/CV Leo Mosconi.pdf" download="CV Leonardo Mosconi">
                  Descarga CV
                </a>
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
              {skills.map(({ skill, percentage, image }, i) => (
                <div key={i}>
                  <div>
                    <img
                      src={image}
                      key={i}
                      style={{
                        margin: "3px",
                        width: "60px",
                        height: "60px",
                        backgroundColor: "transparent",
                      }}
                      alt={skill}
                    />
                    <span> {skill}</span>
                  </div>
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
                <h1 className="text-center text-light">PROYECTOS</h1>
              </div>
              {experiences.map(({ title, sub,img, src, github }, i) => (
             
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100 d-inline-block">
                    <div className="">
                      {src?<iframe width="400" height="265" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>:<img className="card-img-top" src={`/${img}`} alt="" />
                      }                     
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
