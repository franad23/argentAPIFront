import "./homepage.css";
import { Select } from "antd";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

//Components
import NavbarHomePage from "../../components/homepage/navbar/NavbarHomePage";
import ButtonHelper from "../../components/helpers/ButtonHelper/ButtonHelper";
import worlCupIcon from "../../assets/images/worldcupicon.png"

function Homepage() {
  const [year, setYear] = useState(1978);
  const handleChange = (value) => {
    setYear(value);
  };
  const [dataFetch, setDataFetch] = useState(null);

  const textReqPracticeFetch = `
  fetch('http://localhost:3000/api/wordcupdata/${year}')
    .then(response => response.json()) 
    .then(data => console.log(data))`;

  const handlebtnFetch = () => {
    fetch(`http://localhost:3000/api/wordcupdata/${year}`)
      .then((response) => response.json())
      .then((data) => setDataFetch(JSON.stringify(data, null, 2)));
  };
  return (
    <div className="mainContainerHomepage">
      <NavbarHomePage />
      <div className="firstInfoContainer">
        <div className="infoContainer">
          <p className="firstInfoText">
            <b>ArgentAPI</b> es una plataforma que simula una Fake API diseñada
            para simplificar tus peticiones. Con un amplio soporte para métodos
            como GET, PUT, DELETE y POST, esta plataforma te brinda una forma
            sencilla y efectiva de practicar programación y desarrollar
            aplicaciones. Además, para enriquecer aún más tus proyectos,
            ArgentAPI ofrece datos por defecto, lo que te permite continuar
            practicando y explorando de manera fácil.
          </p>
          <hr />
          <div className="worldCupInfoContainer">
            <div className="worldCupsContainer">
              <h3>Mundiales de Argentina</h3>
              <img className="iconWorldCup" src={worlCupIcon} alt="worldCupIcon" />
            </div>
            <div className="practiceFetchContainer">
              <div className="requestPracticeFetch">
                <div className="titleRequestPracticeFetch">
                  <h4>Selecciona el año:</h4>
                  <Select
                    defaultValue="1978"
                    style={{
                      width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "1978",
                        label: "1978",
                      },
                      {
                        value: "1986",
                        label: "1986",
                      },
                      {
                        value: "2022",
                        label: "2022",
                      },
                    ]}
                  />
                </div>
                <div className="bodyRequestPracticeFetch">
                  <SyntaxHighlighter
                    language="javascript"
                    style={dark}
                    className="codeContainer"
                  >
                    {textReqPracticeFetch}
                  </SyntaxHighlighter>
                  <div className="btnFetchContainer">
                    <ButtonHelper
                      btnName="Correr Fetch"
                      toHandleOnClickBtnHelper={handlebtnFetch}
                    />
                  </div>
                  <div>
                    <SyntaxHighlighter
                      language="json"
                      style={dark}
                      className="codeContainerFetch"
                    > 
                      {dataFetch ? dataFetch : "Selecciona el año y luego presiona en 'Correr Fetch'." }
                      {dataFetch}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
