const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "57620790-6f9600de6d512c8080995278e";
const page = 1;
export async function getImages(search) {
  try {
    const res = await fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${API_KEY}`,
      );
      if (res.status !== 200) {
          throw new Error("error");
      }
      const data = await res.json();
      return data
  } catch (err) {
    console.log(err);
  }
}