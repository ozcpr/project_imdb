import { endpoints } from '../../utils/config';
import GetItemsTv from '../common/GetItemTv';


const OnTheAir = () => {
    return <GetItemsTv endpoint={endpoints.on_the_air} />;
};

export default OnTheAir;