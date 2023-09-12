import "./docspage.css";

//Components
import NavbarHomePage from "../../components/homepage/navbar/NavbarHomePage";
import Footer from "../../components/homepage/footer/Footer";
import NavbarOptionsDoc from "../../components/docspage/NavbarOptions/NavbarOptionsDoc";
import CreateApiKey from "../../components/helpers/CreateApiKey/CreateApiKey";
import PostInfoDoc from "../../components/docspage/postInfoDoc/PostInfoDoc";

function DocsPage() {
  return (
    <div className="mainContainerDocsPage">
      <NavbarHomePage />
        <NavbarOptionsDoc/>
        <div className="optionsInfoDocsContainer">
          <div className="optionsInfoDocs">
            <div className="createApiKeyContainerDocs">
              <h4>Si todavia no lo hiciste:</h4>
              <CreateApiKey/>
            </div>
            <div className="infoRequestContainerMain">
              <div className="infoRequestContainer">
                <PostInfoDoc/>
              </div>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  );
}

export default DocsPage;
