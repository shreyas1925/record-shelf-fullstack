// import axios from "axios";


// const makeRequest = async (
//   apiEndPoint,
//   dynamicConfig = {},
// ) => {
//   try{
//       const requestDetails = {
//         baseURL: BACKEND_URL,
//         url: apiEndPoint.url,
//         method: apiEndPoint.method,
//         ...dynamicConfig,
//     };
//     const { data } = await axios(requestDetails);
//     return data;
//   }catch(e)
//   {
//     console.log(e);
//   }
// };

// export default makeRequest;


const BACKEND_URL = "http://localhost:8080/";
const makeRequest = async (path, options) => {
    try{
        options.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer QWlzaHdhcnlhIE4='
        };
        const result = await fetch(`${BACKEND_URL}${path}`,options);
        const {data} = await result.json();
        return data
    } catch(err){
        return err;
    }
};

export default makeRequest;