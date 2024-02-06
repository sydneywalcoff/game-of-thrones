import useFetch from '../utils/useFetch';

import House from './House';
import Loading from './Loading';

const HouseList = () => {
    const { data, loading } = useFetch('https://anapioficeandfire.com/api/houses');
    let houseList = data?.sort((a,b) => b.swornMembers.length - a.swornMembers.length);

    if(loading) return <Loading/>

    return (
        <div className='house-list'>
            { houseList && houseList.map(house => <House houseInfo={house} />) }
        </div>
    );
};

export default HouseList;