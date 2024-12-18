import { Button } from "primereact/button";
import React from "react";
import { login } from "../services/Auth";
import UserWidget from "../context/UserWidget";
import { NavLink } from "react-router";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <div className="bg-primary-500 text-white ">
        <div className="container  flex justify-between items-center">
          <h1 className="text-3xl  p-5">Witaj w ZUS</h1>

          <div className="flex gap-5">
            {/* <a href="/playlists" onClick={() => history.pushState('/playlists')}>Playlist</a> */}
            {/* <a href="/playlists">Playlist</a> */}
            {/* <NavLink to="/music" end>Search</NavLink> */}
            <NavLink to="/playlists">Playlist</NavLink>
            <NavLink to="/music">Music</NavLink>
          </div>

          <UserWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
