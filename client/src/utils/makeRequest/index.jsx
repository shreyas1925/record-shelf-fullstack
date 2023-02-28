
// const makeRequest = async (path, options) => {
//     try{
//         options.headers = {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Bearer QWlzaHdhcnlhIE4='
//         };
//         const result = await fetch(`${BACKEND_URL}${path}`,options);
//         const {data} = await result.json();
//         return data
//     } catch(err){
//         return err;
//     }
// };

// export default makeRequest;

import axios from 'axios';
const BACKEND_URL = 'http://localhost:8080/';
const makeRequest = async (apiEndPoint, dynamicConfig, navigate) => {
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndPoint.url,
            method: apiEndPoint.method,
            headers: {
                authorization: 'Bearer QWlzaHdhcnlhIE4=',
            },
            ...dynamicConfig,
        };
        const { data } = await axios(requestDetails);
        return data;
    } catch (error) {
        const errorCode = error.response?.status;
        if (errorCode) {
            navigate(`/error/${errorCode}`);
        } else {
            navigate('/error');
        }
    }
};
  
export default makeRequest;