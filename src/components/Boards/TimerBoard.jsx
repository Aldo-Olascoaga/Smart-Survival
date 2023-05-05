import React, { useState, useEffect } from 'react';
import './Board.css';

const TimerBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const uri =
        'https://q2edtlk17d.execute-api.us-east-1.amazonaws.com/progreso/reloj';
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
            <th>ID Progreso</th>
            <th>Fecha de inicio</th>
            <th>Fecha de terminación</th>
            <th>Niveles completados</th>
            <th>Usuario</th>
            <th>Preguntas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((progress) => (
            <tr key={progress.modoRelojID}>
              <td>{progress.modoRelojID}</td>
              <td>
                {new Date(progress._createdDate).toLocaleDateString('es-MX', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </td>
              <td>
                {new Date(progress._finishDate).toLocaleDateString('es-MX', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </td>

              <td>{progress.niveles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimerBoard;
