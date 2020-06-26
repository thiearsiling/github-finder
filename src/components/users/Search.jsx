import React, { useState } from "react";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Por favor, insiar o termo a ser pesquisado", "light");
    } else {
      console.log(text);
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Procurar usuário"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Buscar"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Limpar
        </button>
      )}
    </div>
  );
};

export default Search;
