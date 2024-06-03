import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./pages/Home";
import FooterComponent from "./components/Footer/FooterComponent";

export default function Root() {
  return (
    <div className="app">
        <Layout>
            <Header>
                <MainHeader/>
            </Header>
            <Content>
              <Home/>
            </Content>
            <Footer style={{backgroundColor: "#003242"}}>
              <FooterComponent/>
            </Footer>
        </Layout>
    </div>
  )
}
