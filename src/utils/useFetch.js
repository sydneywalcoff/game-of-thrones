import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        const runFetch = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        runFetch();
    }, [url])


    return { data, loading, error }
}

export default useFetch;