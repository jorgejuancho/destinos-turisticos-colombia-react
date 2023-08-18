import { useFetch } from "../assets/hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

function AtraccionTuristica({ title, url }) {
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

  return (
    <>
      {loading && <Loader />}

      {/* {console.log(data)} */}

      {data.map((el) => (
        <div key={el.id}>
          <h3>{el.name}</h3>
          <img src={el.images} alt={el.name} />

          <p>{el.description}</p>
        </div>
      ))}
    </>
  );
}

export default AtraccionTuristica;
