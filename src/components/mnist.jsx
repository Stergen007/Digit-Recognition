import { Layout } from "antd";
import MnistContent from "./mnist-content";
import MnistHeader from "./mnist-header";

const Mnist = () => (
  <div>
    <Layout>
      <MnistHeader />
      <MnistContent />
    </Layout>
  </div>
);

export default Mnist;
