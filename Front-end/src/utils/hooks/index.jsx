import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../context';

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (!url) return
        setLoading(true); 

        const fetchData = async () => {

            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data); 
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            } 
        }
        fetchData();
    }, [url])

    return { isLoading, data, error }
}

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}