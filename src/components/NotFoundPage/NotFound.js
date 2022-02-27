import { Row, Col } from "antd";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Row style={{ height: "700px", backgroundColor: "rgb(230, 230, 230)" }}>
      <Col span={13}>
        <div className={styles.title}>Oops! That page couldn't be found.</div>
        <div className={styles.content}>The requested URL was not found on this server.</div>
      </Col>
      <Col span={7} >
        <img src="background.png" style={{ height: "700px", width: "700px" }}></img>
      </Col>
    </Row>
  )
}

export default NotFound;

