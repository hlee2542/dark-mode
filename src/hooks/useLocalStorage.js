import React, {useState} from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const x = window.localStorage.getItem(key);
        return x ? JSON.parse(x) : initialValue;
    });
    const setValue = (newValue) => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }
    return [storedValue, setValue];
};

export default useLocalStorage;