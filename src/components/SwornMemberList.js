import SwornMember from './SwornMember';

const SwornMemberList = ({ list }) => {
    let memberList = list;
    memberList.forEach(item => console.log(item))
    return (
        <div class="sworn-member-list">
            <h3>Sworn Members <span class="emoji">⚔️</span></h3>
            <div className='member-list'>
                {!memberList.length && <div className='no-members'>This house has no sworn members</div>}
                {memberList && memberList.map(url => <SwornMember url={url}/>)}
            </div>
        </div>
    );
};

export default SwornMemberList;