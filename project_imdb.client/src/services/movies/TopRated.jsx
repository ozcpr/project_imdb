import { endpoints } from '../../utils/config';
import GetItems from '../common/GetItem'


const TopRatedMovies = () => {
    return <GetItems endpoint={endpoints.top_rated} />;
};

export default TopRatedMovies;