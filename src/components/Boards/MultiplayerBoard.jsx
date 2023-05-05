import React, { useState, useEffect } from 'react';
import './Board.css';

const MultiplayerBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const uri =
        'https://q2edtlk17d.execute-api.us-east-1.amazonaws.com/progreso/multi';
      const response = await fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);
  //console.log(data);

  return (
    <div className='board-container'>
      <table>
        <thead>
          <tr>
            <th>Modo Reloj ID</th>
            <th>Fecha de creación</th>
            <th>Niveles</th>
            <th>Usuario ID</th>
            <th>Preguntas</th>
            <th>Fecha de finalización</th>
            <th>Puzzles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.modoRelojID}>
              <td>{item.modoRelojID}</td>
              <td>{new Date(item._createdDate).toLocaleString()}</td>
              <td>{item.niveles}</td>
              <td>{item.User_userID}</td>
              <td>{item.preguntas}</td>
              <td>
                {item._finishDate
                  ? new Date(item._finishDate).toLocaleString()
                  : 'N/A'}
              </td>
              <td>
                {item.puzzles.length > 0
                  ? `${item.puzzles[0].aciertos}/${item.puzzles[0].fallos}`
                  : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  /*
  return (
    <div className='board-container'>
      <table>
        <thead>
          <tr>
            <th># Sesión</th>
            <th>Fecha de inicio</th>
            <th>Fecha de terminación</th>
            <th>Usuario #1</th>
            <th>Puntaje Usuario #1</th>
            <th>Usuario #2</th>
            <th>Puntaje Usuario #2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((session) => (
            <tr key={session.sesionID}>
              <td>{session.sesionID}</td>
              <td>
                {new Date(session._startDate).toLocaleDateString(
                  'es-MX',
                  {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  } || 'N/A'
                )}
              </td>
              <td>
                {' '}
                {new Date(session._finishDate).toLocaleDateString(
                  'es-MX',
                  {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  } || 'N/A'
                )}
              </td>
              <td>{session.User_User1}</td>
              <td>{session.puntajeUser1}</td>
              <td>{session.User_User2 || 'N/A'}</td>
              <td>{session.puntajeUser2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  */
};
export default MultiplayerBoard;
