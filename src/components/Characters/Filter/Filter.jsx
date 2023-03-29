import React from "react";

const Filter = filters => {

  const handleSelectChange = e => {
    if (e.target.name === "Species") {
      filters.setSpecies(e.target.value);
    }

    if (e.target.name === "Status") {
      filters.setStatus(e.target.value);
    }

    if (e.target.name === "Gender") {
      filters.setGender(e.target.value);
    }
  }

  const handleSelectAll = () => {
    filters.setSpecies("");
    filters.setStatus("");
    filters.setGender("");
  }

  return (
    <div className="form">
      <select name="Species" className='form__select' onChange={handleSelectChange}>
        <option value="" selected>Especie</option>
        {filters.species.map((item, key) => {
          return (
            <option key={key} value={item}>{item}</option>
          )
        })}
      </select>
  
      <select name="Status" className='form__select' onChange={handleSelectChange}>
        <option value="" selected>Estado</option>
          {filters.status.map((item, key) => {
            return (
              <option key={key} value={item}>{item}</option>
            )
          })}
      </select>
  
      <select name="Gender" className='form__select' onChange={handleSelectChange}>
        <option value="" selected>Genero</option>
          {filters.gender.map((item, key) => {
            return (
              <option key={key} value={item}>{item}</option>
            )
          })}
      </select>
  
      <button className="form__button" onClick={handleSelectAll}>Todos</button>
    </div>
  );
}

export default Filter;