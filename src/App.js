import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

function App() {

  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. <strong>Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp</strong> me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
        <Testimonio
          nombre="Marcos Pool"
          pais="Mexico"
          imagen="marcos"
          cargo="Ingeniero en Datos"
          empresa="Universidad del Caribe"
          testimonio="FreeCodeCamp me ayudo a aprender a programar y a desarrollar mis habilidades en el desarrollo web, me ayudo a conseguir mi primer trabajo como desarrollador web y ahora como ingeniero en datos. FreeCodeCamp me ayudo a cambiar mi vida y a tener un mejor futuro."
        />
      </div>
    </div>
  );
}

export default App;
