import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = ({...rest}) => {
  return (
    <MDBCol style={{display:"flex",justifyContent:"center"}} {...rest}>
      <form style={{flex: "0 0 59%"}}>
        <input style={{borderRadius: "5px", height: "36px", width: "80%", display: "inline-block" }} className="form-control form-control-sm ml-3 " type="text" placeholder="Search" aria-label="Search" />
        <MDBIcon style={{position: "relative", right: "39px", backgroundColor: "gray", padding: "10px 12px", borderRadius: "0px 6px 6px 0px"}} icon="search" />
      </form>
    </MDBCol>
  );
}

export default SearchPage;