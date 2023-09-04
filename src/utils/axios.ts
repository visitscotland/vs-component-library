/* eslint-disable */
import axios from 'axios';

// Get data from the supplied URL
export async function getData(url: string) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(`Axios error: ${error}`);
    }
}