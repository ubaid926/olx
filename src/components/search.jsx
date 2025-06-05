
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

function AppSearch() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      border: "#d8dfe0 solid 1px",
      // padding: "10px 0px 10px 0px",
      borderRadius: "4px", height: "48px", fontSize: "1.2rem",
      width: "45%",
      letterSpacing: "normal",
      lineHeight: "1.5",
      color: "black",
    }}>
      <input type="text" placeholder='Find Cars, Mobile Phones and more...' style={{ height: "inherit", border: "none", width: "93%", padding: "10px 10px 10px 10px" }} /><IoSearchOutline style={{ fontSize: "30px", backgroundColor: "black", color: "white", padding: "4px", height: "inherit", width: "40px" }}/>
    </div>
  )
}
export default (AppSearch)
