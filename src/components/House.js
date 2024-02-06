const House = ({ houseInfo }) => {
    console.log(houseInfo.swornMembers)
    return (
        <div className="house">
            <h2>{houseInfo.name}</h2>
            
        </div>
    );
};

export default House;