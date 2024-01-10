import { endpoints } from '../../utils/config';
import GetItems from '../common/GetItem'


const UpcomingMovies = () => {
    return <GetItems endpoint={endpoints.upcoming} />
}

export default UpcomingMovies;
