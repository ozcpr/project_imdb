import { endpoints } from '../../utils/config';
import GetItems from '../common/GetItem'


const PopularMovies = () => {
    return <GetItems endpoint={endpoints.popular} />
}

export default PopularMovies;