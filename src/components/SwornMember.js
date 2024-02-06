import useFetch from "../utils/useFetch";

import Loading from '../components/Loading';

const SwornMember = ({ url }) => {
    const { data, loading } = useFetch(url);
    let member = data;
    if(loading) return <Loading />;
    return (
        <div className="member">
            <div>{member && member.name}</div>
            <div>{member && member.died}</div>
        </div>
    );
};

export default SwornMember;