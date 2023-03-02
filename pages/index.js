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
                <a href="/CV.pdf" download="CV">
                  Descarga CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* section 2 */}
      <div className="col-md-12 d-flex-column  text-center">
      <h1>Skills</h1>
        <div className="d-flex justify-content-center" style={{flexWrap:"wrap"}}>
          {skills.map(({ skill, image }, i) => (
            <img
              src={image}
              key={i}
              style={{
                margin: "10px",
                width: "90px",
                height: "90px",
                backgroundColor: "transparent",
              }}
              alt={skill}
            />
          ))}
        </div>
        <div className="col-md-12 my-4">
          <div className="card bg-ligth h-100 d-inline-block">
            <div className="card-body text-start">
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
   
              <div className="col-md-12" id="proyectos">
            <div className="row " style={{flexWrap:"wrap"}}>
                <h1 className="text-center text-light">PROYECTOS</h1>
              </div>
              <div className="d-flex justify-content-center"style={{flexWrap:"wrap"}}>
              {experiences.map(({ title, sub, img, src, github }, i) => (
                  <div className="m-2 text-center" key={i} style={{width:"250px", height:"400"}}>
                    <div className="">       
                        <img style={{width:"250px"}} src={`/${img}`} alt="" />                                             
                    </div>
                 
                      <h3>{title}</h3>
                      {src && <a href={src}>Video </a>}
                      <p>{sub}</p>
                      <a href={github}>Github</a>
                    </div>
            
              ))}
              </div>
            </div> 
    </Layout>
  );
}
