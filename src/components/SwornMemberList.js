import SwornMember from './SwornMember';

const SwornMemberList = ({ list }) => {
    let memberList = list;
    if (!memberList.length) return 'This house has no sworn members';
    memberList.forEach(item => console.log(item))
    return (
        <div className='member-list'>
            {memberList && memberList.map(url => <SwornMember url={url}/>)}
        </div>
    );
};

export default SwornMemberList;