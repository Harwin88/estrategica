import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import { Menu, Affix, Icon, Carousel, Popover, Row, Col, Form, input, Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';


class Footer extends Component {
  render() {
    return (<div className="App">
      <Menu
           onClick={this.eventorecoClick}
        mode="horizontal" >
        <Menu.Item key="home">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="home" />Inicio.
        </Menu.Item>
        <Menu.Item key="noso" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="robot" />Tecnología y Servicios.
        </Menu.Item>
        <Menu.Item key="productos" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="pie-chart" />Clientes.
        </Menu.Item>
        <Menu.Item key="contac">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="sound" />Escribenos.
        </Menu.Item>
      
          <Menu.Item key="whastap">
                    <Icon style={{ fontSize: '26px', color: '#08c' }}  style={{ fontSize: '16px', color: '#08c' }} theme="outlined"  type="wechat" />Whatsapp.
        </Menu.Item>
      </Menu>
      </div>
    );
  }
  
}


export default Footer;


