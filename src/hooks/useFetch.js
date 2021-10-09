/* Making Own Custom Hook
the below part was used twice times each two components.
so I made this part as a hook*/


import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    }, [url]);
    // 만약 fetch()를 useEffect 없이 사용한다면 어떻게 될까? 

    
    return data;
}