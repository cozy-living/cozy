import { Col, Row } from "antd";
import PaymentBoard from "./PaymentBoard"

const Payment = () => {
    return (
      <Row style={{height: "700px", backgroundColor: "rgb(230, 230, 230)"}}>
        <Col span={13}>
          <PaymentBoard />
        </Col>
        <Col span={7} >
          <img src="Background.png" style={{height: "700px", width: "695px"}}></img>
        </Col>
      </Row>
    );
  };
  
export default Payment;