import { useState, useEffect } from 'react';
export default function useFetch() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, [day]);
}