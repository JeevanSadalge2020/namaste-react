import { SWIGGY_API_URL } from "./utils/constants.js";
import staticData from "./data.json";

async function getData() {
  const url = SWIGGY_API_URL;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("hello");
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    return staticData; // If API fails for any reason, then just show static data
  }
}

export default getData;
