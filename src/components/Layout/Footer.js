import React from "react";

import { Row, Col, Space } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import classes from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.image}>
        <Space>
          <a href="https://twitter.com/">
            <TwitterOutlined />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookOutlined />
          </a>
          <a href="https://www.google.com/">
            <GooglePlusOutlined />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramOutlined />
          </a>
          <a href="https://github.com/cozy-living">
            <GithubOutlined />
          </a>
        </Space>
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
        {/*<p style={ {textAlign: 'center', color: 'white'} }>Cozy ©2022   Created by a team of aspiring software engineers</p>*/}
      </div>
    </div>
  );
};
export default Footer;
