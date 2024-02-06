import useFetch from '../utils/useFetch';

const HouseList = () => {
    const { data:houseList, loading, error } = useFetch('https://anapioficeandfire.com/api/houses');
    console.log(data, loading, error)

    return (
        <div>
            {houseList && houseList.map(house => ())}
        </div>
    );
};

export default HouseList;