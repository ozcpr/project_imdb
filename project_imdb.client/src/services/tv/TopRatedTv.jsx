import { endpoints } from '../../utils/config';
import GetItemsTv from '../common/GetItemTv';


const TopRatedTv = () => {
    return <GetItemsTv endpoint={endpoints.top_ratedTv} />;
};

export default TopRatedTv;