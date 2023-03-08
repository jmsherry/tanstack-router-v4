import { CARS_ENDPOINT } from "../settings";

export const fetchCars = async () => {
  // try {
  return fetch(CARS_ENDPOINT).then((resp) => resp.json());
  // const resp = await fetch(CARS_ENDPOINT.slice(0, -3));
  console.log(resp);
  if (!resp.ok) throw new Error(await resp.json());
  return await resp.json();
  // } catch (err) {
  //   console.log('ernt into error', err);
  //   return new Error(err.message);
  // }
};

export const fetchCar = async (id) => {
  const resp = await fetch(`${CARS_ENDPOINT}${id}`);
  if (!resp.ok) throw new Error(await resp.json());
  return await resp.json();
};

export const addCar = async (data) => {
  const resp = await fetch(CARS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!resp.ok) throw new Error(await resp.json());
  return resp.json();
};

export const updateCar = async ({ id, data }) => {
  const resp = await fetch(`${CARS_ENDPOINT}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!resp.ok) throw new Error(await resp.json());
  return resp.json();
};

export const deleteCar = async (id) => {
  const resp = await fetch(`${CARS_ENDPOINT}${id}`, {
    method: "DELETE",
  });
  if (!resp.ok) throw new Error(await resp.json());
};
