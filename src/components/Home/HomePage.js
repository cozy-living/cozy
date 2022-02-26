/* 
   TODO: implement the home component. 
   Home should render some static pictures when a new user first browsers our website, 
   and display dashboards and different navbar options for logged in residents and admins.
*/

import { Row, Col, message } from "antd";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Row style={{height: "700px"}}>
    <Col span={13}>
      <div className={styles.title}>Welcome to Cozy Resident Portal</div>
      <div className={styles.content}>Better Living!</div>
      <div className={styles.content}>Smarter Living!</div>
      <button className={styles.button}>Explore More</button>
    </Col>
    <Col span={7} >
      <img src="Background.png" style={{height: "700px", width: "695px"}}></img>
    </Col>
  </Row>
  )
}

export default HomePage;
