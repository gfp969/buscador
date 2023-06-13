import { useState } from 'react';
import BarraBusqueda from './components/BarraBusqueda';

const people = [
  {
    id: "p001",
    title: "Judy Moreno"
  },
  {
    id: "p002",
    title: "Carlos Opsina"
  },
  {
    id: "p003",
    title: "Andres Tellez"
  },
  {
    id: "p004",
    title: "Kelly Demoya"
  },
  {
    id: "p005",
    title: "Jaisy"
  }
]

const calendar = [
  {
    id: "c001",
    title: "Clase seguimiento desarrollo frontend"
  },
  {
    id: "c002",
    title: "Tutoria frontend"
  },
  {
    id: "c003",
    title: "Reunion monitoria atenea"
  }
]

const email = [
  {
    id: "e001",
    title: "Asistencia clase"
  },
  {
    id: "e002",
    title: "solicitud asesoria monitor"
  },
  {
    id: "e003",
    title: "Agendamiento taller final"
  }
]

function App() {
  const [data, setData] = useState([...people, ...calendar, ...email]);
  const [selection, setSelection] = useState(null);
  const [option, setOption] = useState('all');
  const [cont, setCont] = useState(1);

  function handleClick(e) {
    const key = e.target.name;

    switch (key) {
      case 'all':
        setData([...people, ...calendar, ...email]);
        setOption('all');
        break;

      case 'people':
        setData([...people]);
        setOption('people');
        break;

      case 'calendar':
        setData([...calendar]);
        setOption('calendar');
        break;

      case 'email':
        setData([...email]);
        setOption('email');
        break;

      default:
        break;
    }
  }

  function handleItemsSeleccionados(item){
    setSelection(item);
  }

  return (
    <div>
      <div style={{ width: "200", height: "800" }}>
        <h1></h1>
      </div>

      <BarraBusqueda items={data} itemsSeleccionados={handleItemsSeleccionados} />

      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid">
          <div className="input-group">
            <button className="btn btn-success" onClick={handleClick} name="all">Todas</button>
            <button className="btn btn-success" onClick={handleClick} name="people">Personas</button>
            <button className="btn btn-success" onClick={handleClick} name="calendar">Calendario</button>
            <button className="btn btn-success" onClick={handleClick} name="email">Asunto correo</button>
            <button className="btn btn-success" onClick={() => { setCont(cont + 1) }}>{cont}</button>
          </div>
        </form>
      </nav>
      {selection?<div> tu seleccionaste: {selection.title} </div>:""}
    </div>
  );
}

export default App;