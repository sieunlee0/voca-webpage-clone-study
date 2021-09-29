import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, [day]);
}