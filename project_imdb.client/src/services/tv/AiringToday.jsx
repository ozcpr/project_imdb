import { endpoints } from '../../utils/config';
import GetItemsTv from '../common/GetItemTv';


const AiringToday = () => {
    return <GetItemsTv endpoint={endpoints.airing_today} />;
};

export default AiringToday;