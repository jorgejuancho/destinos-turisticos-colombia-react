import React, { useState } from "react";
import SelectList from "./SelectList";
import AtraccionTuristica from "./AtraccionTuristica";
import Loader from "./Loader";

const SelectsAnidados = () => {
  const [region, setRegion] = useState("");
  const [departamento, setDepartamento] = useState("");

  return (
    <div>
      <SelectList
        title="region"
        url={`https://api-colombia.com/api/v1/Region`}
        handleChange={(e) => {
          setRegion(e.target.value);
        }}
      />
      {region && (
        <SelectList
          title="departamento"
          url={`https://api-colombia.com/api/v1/Region/${region}/departments`}
          handleChange={(e) => {
            setDepartamento(e.target.value);
          }}
        />
      )}

      {departamento && (
        <AtraccionTuristica
          title="atracciones"
          url={`https://api-colombia.com/api/v1/Department/${departamento}/touristicattractions`}
        />
      )}
    </div>
  );
};

export default SelectsAnidados;
