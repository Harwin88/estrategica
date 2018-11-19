import React, { Component } from 'react';

import Button from 'antd/lib/button';
import { Menu, Affix, Icon, Carousel, Popover, Row, Col, Form, input, Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';


class Footer extends Component {
  render() {
    return (
      <Row>
       <Row>
     <Col span="24">
     <Carousel  autoplay >
     <div id="menusColor">
     <Row>
    <Col span={4}>
   <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
   </Col>
    <Col span={4}>
   <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
  </Col>
     <Col span={4}>
    <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
    </Col>
    <Col span={4}>
   <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
   </Col>
    <Col span={4}>
   <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
  </Col>
     <Col span={4}>
    <img src="/img/iconos/IconosLenguajes/html.jpg" height="30%" width="30%"/>
    </Col>
  </Row>
 
  <Row>
    <Col span={8}>
    <Icon spin  style={{ fontSize: '46px', color: '#24292e' }} type="cloud" twoToneColor="#24292e"  />
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="code"  twoToneColor="#24292e"   /><h3 >npm, Qnx, Linux</h3>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#40a9ff' }} type="lock"  twoToneColor="#24292e"  /><h3 >Seguridad</h3>
    </Col>
  </Row>
  </div>
 </Carousel>
  </Col>
 </Row>
 
      <Col span="8"></Col>
      <Col span="8"> 
       <ul>
       <li>
        <Icon style={{ fontSize: '15px'}} theme="outlined"  type="mail" /> - contacto@estrategicamyp.com
        </li>
        <li>
        <Icon style={{ fontSize: '15px' }} theme="outlined"  type="facebook" /> - /EstrategicaMyP
       </li>
       <li>
       <Icon style={{ fontSize: '15px' }} theme="outlined"  type="phone" /> - 311 719 6705 - 301 310 1801
       </li>
       <li>
         <Icon style={{ fontSize: '15px' }} theme="outlined"  type="copyright" /> - Estrategica 2018. Todos los derechos reservados.
       </li>
       </ul>
       </Col>
      <Col span="8"></Col>
      </Row>
   
      
    );
  }
  
}


export default Footer;


