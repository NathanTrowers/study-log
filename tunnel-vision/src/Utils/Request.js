import axios from 'axios';

export const get = async endpoint => {
    try { 
        const response = await axios.get(`http://localhost:3000${endpoint}`, {withCredentials: true});

        return response;
    } catch (error) {
        throw error;
    } 
}

export const post = async (endpoint, data = {}) => {
    try { 
        const response = await axios.post(
            `http://localhost:3000${endpoint}`, 
            data,
            {withCredentials: true}
        );

        return response;
    } catch (error) {
        throw error;
    }
}
