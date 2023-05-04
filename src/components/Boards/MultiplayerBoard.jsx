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
};
export default MultiplayerBoard;
