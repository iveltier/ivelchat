// ../hooks/useLocalStorage.js
// this is a custom hook for uploading and updating the localStorage in the Browser
// used for persistent saving of e.g. chat messages or settings
// it works just like useState(), but also saves the value in localStorage
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
	// first initialization of localStorage
	// only used in first render
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// looks for raw data for the key
			const item = window.localStorage.getItem(key);
			// localStorage only safes strings => if the key isnt empty it gets parsed to an JS object, else it returns the initialValue
			// the app starts at the last saved session
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(`Error loading ${key} from localStorage:`, error);
			return initialValue;
		}
	});

	// updates the value on every change

	const setValue = (value) => {
		try {
			const valueToStore =
				// checks, if the users hands over a function => if true then use the function with the existing value (updater function like useState())

				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			// setItem() gets the value into localStorage
			// sets the new value with the key in localStorage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(`Error saving ${key} to localStorage:`, error);
		}
	};

	return [storedValue, setValue];
}
