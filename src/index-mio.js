// import { Welcome } from './components/Welcome.js';
//imports de Tarea 1
//import { Tarjeta, BlogPost } from './tarea/Tarea1.js'

//ReactDOM.render(<Tarjeta imagen="https://avatars.githubusercontent.com/u/85878283?v=4" nombre="Gonzalo Cabrera" titulo="Full Stack Web Developer" />, document.getElementById('react-app'));

// Tarea 1
/* 
ReactDOM.render(<BlogPost 
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
        La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
        Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}  
    autor={{
        nombre: "Gonzalo Cabrera",
        titulo: "FullStack Web Dev",
        imagen: "https://avatars.githubusercontent.com/u/85878283?v=4"
    }}/>, 
    document.getElementById('react-app')); */

// :::: TAREA 2
import { MatchNombre, PasswordInput } from './tarea/Tarea2.js'

ReactDOM.render(
    (
        <>
            <MatchNombre nombre="Gonzalo" />
            <PasswordInput minLenght="6" />
        </>
), document.getElementById('react-app'));



// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
