import { useState } from "react";
import "./navbaroptionsdocs.css";

function NavbarOptionsDoc(props) {
  const [currentOption, SetCurrentOption] = useState(null);

  const handleOnClick = (e) => {
    SetCurrentOption(e.target.name);
    props.toHandleOptionDocs(e.target.name);
  }

  return (
    <div className="mainContainerNavbarOptionsDocs">
      <div className="btnNavbarOptionsContainer">
        <button
          name="data"
          className={currentOption === "data" ? "btnNavbarOption btnNavbarOptionActive" : "btnNavbarOption"}
          onClick={handleOnClick}
        >
          DATOS
        </button>
        <button
          name="get"
          className={currentOption === "get" ? "btnNavbarOption btnNavbarOptionActive" : "btnNavbarOption"}
          onClick={handleOnClick}
        >
          GET
        </button>
        <button
          name="post"
          className={currentOption === "post" ? "btnNavbarOption btnNavbarOptionActive" : "btnNavbarOption"}
          onClick={handleOnClick}
        >
          POST
        </button>
        <button
          name="put"
          className={currentOption === "put" ? "btnNavbarOption btnNavbarOptionActive" : "btnNavbarOption"}
          onClick={handleOnClick}
        >
          PUT
        </button>
        <button
          name="delete"
          className={currentOption === "delete" ? "btnNavbarOption btnNavbarOptionActive" : "btnNavbarOption"}
          onClick={handleOnClick}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default NavbarOptionsDoc;
