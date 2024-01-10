import { endpoints } from '../../utils/config';
import GetItemsTv from '../common/GetItemTv'


const PopularTv = () => {
    return <GetItemsTv endpoint={endpoints.popularTv} />;
};

export default PopularTv;