import { useFetch } from "../assets/hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <label htmlFor={id}>{label}: </label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige {title}</option>

        {(!data.departments &&
          data.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))) ||
          data.departments.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
