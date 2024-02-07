import useFetch from "../utils/useFetch";

import Loading from '../components/Loading';

const SwornMember = ({ url }) => {
    const { data, error } = useFetch(url);
    let member = data;
    if (error) return 'Oh no!';
    return (
        <div className="member">
            <div className="name">
                <h4>name: </h4>
                <p>{member && member.name}</p>
            </div>
            <div className="died">
                <h4><span className="emoji">💀</span>: </h4>
                {member && member.died ? (
                    <p>{member && member.died}</p>
                ) : (
                    <p>alive! <span className="xtiny">...for now</span></p>
                )}
            </div>
        </div>
    );
};

export default SwornMember;