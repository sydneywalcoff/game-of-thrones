import SwornMember from './SwornMember';

const SwornMemberList = ({ list }) => {
    let memberList = list;
    memberList.forEach(item => console.log(item))
    return (
        <div className='member-list'>
            {!memberList.length && <div className='no-members'>This house has no sworn members</div>}
            {memberList && memberList.map(url => <SwornMember url={url}/>)}
        </div>
    );
};

export default SwornMemberList;