import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./pages/Home";

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
            <Footer></Footer>
        </Layout>
    </div>
  )
}
