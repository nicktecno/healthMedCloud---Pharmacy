import axios from "axios";

export const getLocation = () => {
  const url = process.env.NEXT_PUBLIC_REACT_APP_PLATAZ_URL;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const { data: response } = await axios.post(`${url}/get-location`, {
        latitude: JSON.stringify(latitude),
        longitude: JSON.stringify(longitude),
      });

      localStorage.setItem(
        `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`,
        JSON.stringify(response.data)
      );
    });
  } else {
  }

  return;
};
