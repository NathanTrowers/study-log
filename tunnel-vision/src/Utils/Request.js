import axios from 'axios';

export const post = async (endpoint, data) => {
   try { 
        const response = await axios({
            method: 'POST',
            url: `http://localhost:3000${endpoint}`,
            data: data
        });

        return response;
    } catch (error) {
        throw error;
    }
}
