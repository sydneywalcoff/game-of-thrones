import useFetch from "../utils/useFetch";

const SwornMember = ({ url }) => {
    const { data, loading, error } = useFetch(url);
    console.log(data)
    return (
        <div>member</div>
    );
};

export default SwornMember;