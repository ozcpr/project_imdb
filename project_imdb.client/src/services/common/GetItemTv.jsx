import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { headers, baseUrl } from '../../utils/config';

function GetItemsTv({ endpoint }) {
    const [data, setData] = useState();

    useEffect(() => {
        getItemsTv();

        async function getItemsTv() {
            try {
                const response = await fetch(`${baseUrl}/${endpoint}?language=en-US&page=1`, {
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error('Error fetching TV show data:', error);
            }
        }
    }, [endpoint]);

    const contents = data === undefined ? (
        <p>
            <em>Loading... Please refresh once the ASP.NET backend has started. See
                <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.
            </em>
        </p>
    ) : (
        <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Overview</th>
                    <th>Poster</th>
                    <th>Popularity</th>
                    <th>Vote Average</th>
                    <th>Vote Count</th>
                </tr>
            </thead>
            <tbody>
                {data.map(show => (
                    <tr key={show.id}>
                        <td>{show.id}</td>
                        <td>{show.name}</td>
                        <td>{show.overview}</td>
                        <td>
                            <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={show.name} />
                        </td>
                        <td>{show.popularity}</td>
                        <td>{show.vote_average}</td>
                        <td>{show.vote_count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            <h1 id="tableLabel">{endpoint}</h1>
            <p>Fetching TV show data from the server...</p>
            {contents}
        </div>
    );
}

GetItemsTv.propTypes = {
    endpoint: PropTypes.string.isRequired,
};

export default GetItemsTv;
