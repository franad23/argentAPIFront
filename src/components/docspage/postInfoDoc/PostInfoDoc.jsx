import "./postinfodoc.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import backendurl from "../../helpers/backendurl.js";
import { useEffect, useState } from "react";

function PostInfoDoc(props) {
  const [currentOption, SetCurrentOption] = useState("post");

  useEffect(() => {
    SetCurrentOption(props.handleCurrentOption);
  }, [props.handleCurrentOption]);

  const postTextFetch = `
  fetch('${backendurl}/api/postrequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': '<TU_APIKEY_AQUI>',
    },
    body: JSON.stringify({
      "userobject": {
          // TU OBJETO A ENVIA EN EL POST AQUÍ
      }
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })`;

const postTextAxios = `
  import axios from 'axios';
  try {
    const response = await axios.post(${backendurl}/api/postrequest, {
      "userobject": {
          // TU OBJETO A ENVIA EN EL POST AQUÍ
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'TU_API_KEY_AQUI', // REEMPLAZA CON TU APIKEY
      },
    });
  
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  `;

const getTextFetch = `
  fetch('${backendurl}/api/getrequest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': '<TU_APIKEY_AQUI>',
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })
  `;

const getTextAxios = `
  import axios from 'axios';
  try {
    const response = await axios.get(${backendurl}/api/getrequest, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'TU_API_KEY_AQUI', // REEMPLAZA CON TU APIKEY
      },
    });
  
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  `;

const deleteTextFetch = `
  fetch('${backendurl}/api/deleterequest/:id', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': '<TU_APIKEY_AQUI>',
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })
  `;

const deleteTextAxios = `
  import axios from 'axios';
  try {
    const response = await axios.delete(${backendurl}/api/deleterequest/:id, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'TU_API_KEY_AQUI', // REEMPLAZA CON TU APIKEY
      },
    });
  
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  `;

const putTextFetch = `
  fetch('${backendurl}/api/putrequest/:id', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
      'apiKey': '<TU_APIKEY_AQUI>',
    },
    body: JSON.stringify({
      "userobject": {
          // TU OBJETO A ACTUALIZAR AQUÍ
      }
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
    })`;

const putTextAxios = `
  import axios from 'axios';
  try {
    const response = await axios.put(${backendurl}/api/putrequest/:id, {
      "userobject": {
          // TU OBJETO A ACTUALIZAR AQUÍ
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'TU_API_KEY_AQUI', // REEMPLAZA CON TU APIKEY
      },
    });
  
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  `;


  return (
    <div className="mainContainerPostInfoDoc">
      <div className="postInfoFetchAxios">
        <h4>Usando Fetch:</h4>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          className="codeContainerPOST"
        >
          {(() => {
            switch (currentOption) {
              case "post":
                return postTextFetch;
              case "get":
                return getTextFetch;
              case "delete":
                return deleteTextFetch;
              case "put":
                return putTextFetch;
            }
          })()}
        </SyntaxHighlighter>
      </div>
      <div className="postInfoFetchAxios">
        <h4>Usando Axios en React:</h4>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          className="codeContainerPOST"
        >
          {(() => {
            switch (currentOption) {
              case "post":
                return postTextAxios;
              case "get":
                return getTextAxios;
              case "delete":
                return deleteTextAxios;
              case "put":
                return putTextAxios;
            }
          })()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default PostInfoDoc;
