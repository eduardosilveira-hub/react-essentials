import { useState,  useEffect } from "react"

const useFetch = (uri) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const stopController = new AbortController();

        setTimeout(() => {
            fetch(uri, { signal: stopController.signal })
            .then(res => { 
                if(!res.ok){
                    throw Error("Could not fetch data from resource");
                }
                return res.json() 
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log("fetch stopped")
                } else{
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        }, 1000);

        return () => stopController.abort();

    }, [uri]);

    return { data, isLoading, error }
}

export default useFetch;