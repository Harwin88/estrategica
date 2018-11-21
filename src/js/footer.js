import React, { Component } from 'react';

import Button from 'antd/lib/button';
import { Menu, Affix, Icon, Carousel, Popover, Row, Col, Form, input, Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';


class Footer extends Component {
  render() {
    return (
      <Row> 
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


