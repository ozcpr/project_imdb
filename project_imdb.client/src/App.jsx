import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        populateMovieData();
    }, []);

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
                            <td>{movie.vote_count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );

    return (
        <div>
            <h1 id="tabelLabel">Top Movies</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );


    async function populateMovieData() {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200', {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzk2YmFjOWU2MGMxMTRkMWQwNzg4ZDUyMDg1Mjc5YSIsInN1YiI6IjY1OTllMDZlYzk5NWVlMDFmZWI0ZmFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQeZz4X41M1awI7VvpUGWn4Kg5T9I6USFP7QZ4gOjho',
                    'accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setData(data.results);
        } catch (error) {
            console.error('Error fetching movie data:', error);
            // Handle the error as needed
        }
    }

}

export default App;