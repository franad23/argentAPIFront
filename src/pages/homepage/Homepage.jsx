import "./homepage.css";
import { Select } from "antd";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import apiIcon from "../../assets/images/apiIcon.png";
import { Link } from "react-router-dom";
import backendurl from "../../components/helpers/backendurl.js";

//Components
import NavbarHomePage from "../../components/homepage/navbar/NavbarHomePage";
import ButtonHelper from "../../components/helpers/ButtonHelper/ButtonHelper";
import worlCupIcon from "../../assets/images/worldcupicon.png";
import CreateApiKey from "../../components/helpers/CreateApiKey/CreateApiKey";
import InputHelper from "../../components/helpers/InputHelper/InputHelper";
import Footer from "../../components/homepage/footer/Footer";

//API
import { PostRequest, GetRequest } from "../../api/requestUser";

function Homepage() {
  const [year, setYear] = useState(1978);
  const handleChange = (value) => {
    setYear(value);
  };
  const [dataFetch, setDataFetch] = useState(null);
  const [userApiKey, setUserApiKey] = useState(null);
  const [userTextFirstPOST, setUserTextFirstPOST] = useState(null);
  const [userFirstGet, setUserFirstGet] = useState(null);

  const textReqPracticeFetch = `
  fetch('${backendurl}/api/wordcupdata/${year}')
    .then(response => response.json()) 
    .then(data => console.log(data))`;

  const postText = `
  fetch('${backendurl}/api/postrequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': ${userApiKey ? userApiKey : "Ingresa tu ApiKey"},
    },
    body: JSON.stringify({
      "userobject": {
        "PrimerPOST":${
          userTextFirstPOST ? userTextFirstPOST : "Ingresa tu texto"
        }
    }}),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })`;

  const handlebtnFetch = () => {
    fetch(`${backendurl}/api/wordcupdata/${year}`)
      .then((response) => response.json())
      .then((data) => setDataFetch(JSON.stringify(data, null, 2)));
  };

  const handlebtnPOST = async () => {
    try {
      const res = await PostRequest(
        {
          userobject: {
            PrimerPOST: userTextFirstPOST,
          },
        },
        userApiKey
      );
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handlebtnGET = async () => {
    try {
      const res = await GetRequest(userApiKey);
      setUserFirstGet(JSON.stringify(res, null, 2));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="mainContainerHomepage">
      <div>
        <Toaster />
      </div>
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
              <img
                className="iconWorldCup"
                src={worlCupIcon}
                alt="worldCupIcon"
              />
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
                      btnName="Enviar Fetch"
                      toHandleOnClickBtnHelper={handlebtnFetch}
                    />
                  </div>
                  <div>
                    <SyntaxHighlighter
                      language="json"
                      style={dark}
                      className="codeContainerFetch"
                    >
                      {dataFetch
                        ? dataFetch
                        : "Selecciona el año y luego presiona en 'Enviar Fetch'."}
                      {dataFetch}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="worldCupsContainer">
              <h3>Peticiones POST y GET </h3>
              <img src={apiIcon} alt="apiIcon" className="iconWorldCup" />
            </div>
            <div className="postReqContainer">
              <div className="createApiKeyContainer">
                <h4>Primero, crea tu ApiKey:</h4>
                <CreateApiKey />
              </div>
              <div className="requestPracticeFetch">
                <div className="inputsPostGetReqContainer">
                  <div className="inputPostGet">
                    <h4>Apikey:</h4>
                    <InputHelper
                      inputHelperType="text"
                      inputHelperPlaceholder="Agrega aqui tu ApiKey"
                      toHandleInputHelperChange={(data) => setUserApiKey(data)}
                    />
                  </div>
                  <div className="inputPostGet">
                    <h4>Texto:</h4>
                    <InputHelper
                      inputHelperType="text"
                      inputHelperPlaceholder="Ingresa un texto para hacer tu primer POST"
                      toHandleInputHelperChange={(data) =>
                        setUserTextFirstPOST(data)
                      }
                    />
                  </div>
                </div>
                <div className="bodyRequestPracticeFetch">
                  <SyntaxHighlighter
                    language="javascript"
                    style={dark}
                    className="codeContainer"
                  >
                    {postText
                      ? postText
                      : "Selecciona el año y luego presiona en 'Correr Fetch'."}
                    {postText}
                  </SyntaxHighlighter>
                  <div className="btnFetchContainer">
                    <ButtonHelper
                      btnName="Enviar POST"
                      toHandleOnClickBtnHelper={handlebtnPOST}
                    />
                  </div>
                </div>
                <hr />
                <h4>Ahora, Trae los datos que enviaste!</h4>
                <div className="inputsPostGetReqContainer">
                  <div className="inputPostGet">
                    <h4>Apikey:</h4>
                    <InputHelper
                      inputHelperType="text"
                      inputHelperPlaceholder="Agrega aqui tu ApiKey"
                      toHandleInputHelperChange={(data) => setUserApiKey(data)}
                    />
                  </div>
                </div>
                <div className="bodyRequestPracticeFetch">
                  <SyntaxHighlighter
                    language="json"
                    style={dark}
                    className="codeContainerFetch"
                  >
                    {userFirstGet
                      ? userFirstGet
                      : "Ingresa tu ApiKey y hace tu primer GET!"}
                  </SyntaxHighlighter>
                  <div className="btnFetchContainer">
                    <ButtonHelper
                      btnName="Enviar GET"
                      toHandleOnClickBtnHelper={handlebtnGET}
                    />
                  </div>
                </div>
              </div>
              <div className="toDocsContainer">
                <hr />
                <h3>
                  Ahora explora todas las posibilidades en{" "}
                  <Link to="/docs">documentacion</Link>.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
