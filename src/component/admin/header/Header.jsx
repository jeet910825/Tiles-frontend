import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("login");
  };
  const [search, setSearch] = useState("");
  const handleOnChangeSearch = ({target}) => {
    setSearch(target.value)
  };
  
  return (
    <div className="admin-header">
      <h1 className="admin-title">Admin</h1>
      <div className="search-Item">
        <input
          type="text"
          onChange={handleOnChangeSearch}
          className="search-input"
          style={{padding:"10px"}}
        ></input>
        <button className="search-button" title=" " onClick={()=>{props.handleSearch(search)} }>
          <SearchIcon />
        </button>
      </div>
      <div className="admin-button">
        <Button
          variant="contained"
          color="primary"
          size="small"
          className="btn"
          onClick={() => {
            navigate("create");
          }}
        >
          Add product
        </Button>
        <Button
          className="btn"
          variant="outlined"
          color="error"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
