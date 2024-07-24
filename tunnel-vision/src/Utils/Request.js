import axios from 'axios';

const spiritLibraryBaseURL = 'http://localhost:3002';

export const purge = async (endpoint, data = {}) => {
    try { 
        const response = await axios.delete(
            `${spiritLibraryBaseURL}${endpoint}`, 
            {
                data,
                withCredentials: true
            }
        );

        return response;
    } catch (error) {
        console.log(error);
    } 
}

export const get = async endpoint => {
    try { 
        const response = await axios.get(`${spiritLibraryBaseURL}${endpoint}`, {withCredentials: true});

        return response;
    } catch (error) {
        console.log(error);
    } 
}

export const patch = async (endpoint, data = {}) => {
    try { 
        const response = await axios.patch(
            `${spiritLibraryBaseURL}${endpoint}`, 
            data,
            {withCredentials: true}
        );

        return response;
    } catch (error) {
        console.log(error);
    } 
}

export const post = async (endpoint, data = {}) => {
    try { 
        const response = await axios.post(
            `${spiritLibraryBaseURL}${endpoint}`, 
            data,
            {withCredentials: true}
        );

        return response;
    } catch (error) {
        throw error;
    }
}
