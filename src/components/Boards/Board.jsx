import { useState, useEffect } from 'react';
import './Board.css';

const Board = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const uri =
        'http://smart-survival-api.us-east-1.elasticbeanstalk.com/progreso';
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
            <th>Completado</th>
            <th>ID del usuario</th>
            <th>Nivel ID</th>
            <th>Puzzles Completados</th>
          </tr>
        </thead>
        <tbody>
          {data.map((progress) => (
            <tr key={progress.progresoID}>
              <td>{progress.progresoID}</td>
              <td>
                {new Date(progress._startDate).toLocaleDateString('es-MX', {
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
              <td>{progress.completado === 1 ? 'Sí' : 'No'}</td>
              <td>{progress.User_userID}</td>
              <td>{progress.Nivel_nivelID}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>ID del Puzzle</th>
                      <th>Fecha de inicio</th>
                      <th>Fecha de terminación</th>
                      <th>Aciertos</th>
                      <th>Fallos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {progress.puzzlesCompletados.map((puzzle) => (
                      <tr key={puzzle.puzzle}>
                        <td>{puzzle.puzzle}</td>
                        <td>
                          {new Date(puzzle._startDate).toLocaleDateString(
                            'es-MX',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            }
                          )}
                        </td>
                        <td>
                          {new Date(puzzle._finishDate).toLocaleDateString(
                            'es-MX',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            }
                          )}
                        </td>
                        <td>{puzzle.aciertos}</td>
                        <td>{puzzle.fallos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
