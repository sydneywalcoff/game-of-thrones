import useFetch from '../utils/useFetch';

import House from './House';
import Loading from './Loading';

const HouseList = () => {
    const { data: houseList, loading, error } = useFetch('https://anapioficeandfire.com/api/houses');

    if(loading) return <Loading/>

    return (
        <div className='house-list'>
            {houseList && houseList.map(house => <House houseInfo={house} />)}
        </div>
    );
};

export default HouseList;