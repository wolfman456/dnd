import { useState, useEffect } from 'react';

function useApiCall(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(url.toString())
        fetch(`https://www.dnd5eapi.co${url}`,{
            method: 'GET',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                console.log("succeeded");
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setLoading(false);
                console.log('oops url : ' + url);
            });
    }, [url]);

    return { data, loading, error };
}

export default useApiCall;
