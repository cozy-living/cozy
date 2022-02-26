import { Col, Row } from "antd";
import PaymentBoard from "../components/Home/PaymentBoard"

const Payment = () => {
    return (
      <Row style={{height: "700px"}}>
        <Col span={13}>
          <PaymentBoard />
        </Col>
        <Col span={7} >
          <img src="Background.png" style={{height: "700px", width: "700px"}}></img>
        </Col>
      </Row>
    );
  };
  
  export default Payment;