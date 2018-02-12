export const fetchItems = async () => {
    try {
      const response = await fetch("https://gist.githubusercontent.com/luisf11/c1427b229d4623435ed44b890f5d849a/raw/7a547b6dcb7f3cf6107cd01271143619d3f37142/items.json");
      const data = await response.json();
      console.log(data)
      return data;
    } catch (e) {
      console.log(e);
    }
  };