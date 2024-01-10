/*import NowPlaying from './services/movies/NowPlaying';*/
/*import PopularMovies from './services/movies/Popular';*/
import TopRatedMovies from './services/movies/TopRated';
/*import UpcomingMovies from './services/movies/Upcoming';*/
import TopRatedTv from './services/tv/TopRatedTv';
import AiringToday from './services/tv/AiringToday';
import PopularTv from './services/tv/PopularTv';
import OnTheAir from './services/tv/OnTheAir';

function App() {
    return (
        <div>
            <h1>Movie Services</h1>
            <TopRatedMovies />
{/*            <UpcomingMovies />
            <PopularMovies />
            <NowPlaying />*/}
            <h1>TV Services</h1>
            <AiringToday />
            <OnTheAir />
            <PopularTv />
            <TopRatedTv />
        </div>
    );
}

export default App;
