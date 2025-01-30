import axios from 'axios';
import { mockQuizData } from '../mockData';

console.log(mockQuizData);

// Fetched the data from MockData which coming from Provide API 'https://api.jsonserve.com/Uw5CrX'
export const fetchQuizData = async () => {
    return new Promise((resolve) => {
        console.log(mockQuizData.questions);
        setTimeout(() => {
            resolve(mockQuizData);
        }, 1000); // 1 sec a delay
    });
};


// I tried to get the data from api but it 's not working, it giving be data on html format.
// I use Postman to check API there its working and giving me the data on Json format.

// I just copy and paste the data from browser by using API.

// export const fetchQuizData = async () => {
//     try {
//         const response = await axios.get(https://api.jsonserve.com/Uw5CrX, {
//             withCredentials: true, // Include cookies in the request
//         });
//         console.log('API Response:', response); // Log the full response
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching quiz data:', error);
//         throw error;
//     }
// };