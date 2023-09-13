import "./docspage.css";
import { useState } from "react";

//Components
import NavbarHomePage from "../../components/homepage/navbar/NavbarHomePage";
import Footer from "../../components/homepage/footer/Footer";
import NavbarOptionsDoc from "../../components/docspage/NavbarOptions/NavbarOptionsDoc";
import CreateApiKey from "../../components/helpers/CreateApiKey/CreateApiKey";
import PostInfoDoc from "../../components/docspage/postInfoDoc/PostInfoDoc";

function DocsPage() {
  const [currentOption, SetCurrentOption] = useState("post");
  return (
    <div className="mainContainerDocsPage">
      <NavbarHomePage />
        <NavbarOptionsDoc
          toHandleOptionDocs={(data) => SetCurrentOption(data)}
        />
        <div className="optionsInfoDocsContainer">
          <div className="optionsInfoDocs">
            <div className="createApiKeyContainerDocs">
              <h4>Si todavia no lo hiciste:</h4>
              <CreateApiKey/>
            </div>
            <div className="infoRequestContainerMain">
              <div className="infoRequestContainer">
                <PostInfoDoc
                  handleCurrentOption={currentOption}
                />
              </div>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  );
}

export default DocsPage;
