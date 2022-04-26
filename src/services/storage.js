import axios from "axios";

const baseUrl = "http://localhost:3000/items";

const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const getOne = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const create = async (newObject) => {
  const { data } = await axios.post(baseUrl, newObject);
  return data;
};

const update = async (id, newObject) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, newObject);
  return data;
};

const remove = async (id) => {
  const { data } = await axios.delete(`${baseUrl}/${id}`);
  return data;
};

const updateQuantity = async (id, newQuantity) => {
  const object = await getOne(id);
  const newObject = {
    ...object,
    quantity: newQuantity,
  };

  return await update(id, newObject);
};

export default { getAll, getOne, create, remove, update, updateQuantity };
