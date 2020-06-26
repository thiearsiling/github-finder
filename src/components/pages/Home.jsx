import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { Users } from "../users/Users";
import Search from "../users/Search";

export const Home = () => {
  const [state, setState] = useState({
    users: [],
    loading: false,
  });

  useEffect(() => {
    if (!state.users.length) {
      getUsers();
    }
  });

  const getUsers = async () => {
    const res = await Axios.get("https://api.github.com/users");
    setState({
      users: res.data,
      loading: false,
    });
  };

  const searchUser = async () => {};

  return (
    <Fragment>
      <Search searchUser={searchUser} />
      <Users loading={state.loading} users={state.users} />
    </Fragment>
  );
};
