import React from "react";

import { Row, Col } from "antd";
import classes from "./Footer.module.css";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import google from "../../assets/images/google.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.image}>
        <a href="https://twitter.com/">
          <img src={twitter} />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} />
        </a>
        <a href="https://www.google.com/">
          <img src={google} />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} />
        </a>
      </div>
      <div className={classes.link}>
        <Row>
          <Col span={14}>
            <a>Contact</a>
          </Col>
          <Col span={6}>
            <a>Careers</a>
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <a>About Us</a>
          </Col>
          <Col span={6}>
            <a>Change Country</a>
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <a>Term & Conditions</a>
          </Col>
          <Col span={6}>
            <a>FAQ</a>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
