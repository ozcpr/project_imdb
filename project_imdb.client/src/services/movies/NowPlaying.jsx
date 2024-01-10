import { endpoints } from '../../utils/config';
import GetItems from '../common/GetItem';



const NowPlaying = () => {
    return <GetItems endpoint={endpoints.now_playing} />

}

export default NowPlaying;