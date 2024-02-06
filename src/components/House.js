import SwornMemberList from "./SwornMemberList";

const House = ({ houseInfo }) => {
    return (
        <div className="house">
            <h2>{houseInfo.name}</h2>
            <SwornMemberList list={houseInfo.swornMembers}/>
        </div>
    );
};

export default House;