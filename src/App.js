// Importo el contexto:
import GlobalUserContext from "./Context/UserContext";
// Importo las rutas
import Rutas from "./Routes/Rutas";

export default function App() {
  return (
    <>
      {/* Llamo al componente del contexto: */}
      <GlobalUserContext>
        {/*  LLamo a las rutas (que contiene toda mi app) */}
        <Rutas />
      </GlobalUserContext>
    </>
  );
}
