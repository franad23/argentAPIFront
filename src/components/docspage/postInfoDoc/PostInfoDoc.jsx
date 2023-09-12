import "./postinfodoc.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import backendurl from "../../helpers/backendurl.js";


function PostInfoDoc() {
  const postTextFetch = `
  fetch('${backendurl}/api/postrequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': <TU_APIKEY_AQUI>,
    },
    body: JSON.stringify({
      "userobject": {
        "PrimerPOST":{
          <TU_OBJETO_A_ENVIAR_AQUI>
        }
    }}),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })`

  const postTextAxios = `
  import axios from 'axios';
  try {
    const response = await axios.post(${backendurl}/api/postrequest, {
      "userobject": {
        "PrimerPOST": {
          // TU OBJETO A ENVIAR EN EL POST AQUÍ
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'TU_API_KEY_AQUI', // Reemplaza con tu API key
      },
    });
  
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  `

  return (
    <div className="mainContainerPostInfoDoc">
      <div className="postInfoFetchAxios">
        <h4>Usando Fetch:</h4>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          className="codeContainerPOST"
        >
          {postTextFetch}
        </SyntaxHighlighter>
      </div>
      <div className="postInfoFetchAxios">
        <h4>Usando Axios en React:</h4>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          className="codeContainerPOST"
        >
          {postTextFetch}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default PostInfoDoc;
