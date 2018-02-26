import axios from 'axios';

export const fetchData = async() => {

  // const Api = "http://luisf11.com:3031/item";
  const Api = "http://localhost:3031/item";

  const item = {
    item: 'macbook'
  };
  // const Api = "https://gist.githubusercontent.com/luisf11/c1427b229d4623435ed44b890f5d849a/raw/" +
  //     "7a547b6dcb7f3cf6107cd01271143619d3f37142/items.json";
  try {
    const response = await axios.post(Api, item, {
      mode: 'cors',
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      }
    });
    const data = await response.data;
    console.log("data from api",data)
    return data;
  } catch (e) {
    console.error(e);

  }
};