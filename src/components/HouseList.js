import useFetch from '../utils/useFetch';

import House from './House';
import Loading from './Loading';

const HouseList = () => {
    const { data, loading, error } = useFetch('https://anapioficeandfire.com/api/houses');
    data?.sort((a,b)=> b.swornMembers.length - a.swornMembers.length);
    let houseList = data;

    if(loading) return <Loading/>

    return (
        <div className='house-list'>
            {houseList && houseList.map(house => <House houseInfo={house} />)}
        </div>
    );
};

export default HouseList;