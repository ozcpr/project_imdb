import { useEffect, useState } from 'react';
import { headers, baseUrl } from '../../utils/config';
import PropTypes from 'prop-types';

function GetItems({ endpoint }) {
    const [data, setData] = useState();

    useEffect(() => {
        getItems();

        async function getItems() {
            try {
                const response = await fetch(`${baseUrl}/${endpoint}?language=en-US&page=1`, {
                    headers: headers
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        }
    }, [endpoint]);

    const contents = data === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Rating</th>
                        <th>Date</th>
                        <th>Vote Count</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(movie =>
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.overview}</td>
                            <td><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /></td>
                            <td>{movie.vote_average}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.genre_ids[1]}  {movie.genre_ids[0]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );

    return (
        <div>
            <h1 id="tabelLabel">{endpoint}</h1>
            <p>fetching data from the server auuu</p>
            {contents}
        </div>
    );

}
GetItems.propTypes = {
    endpoint: PropTypes.string.isRequired,
};

export default GetItems;
