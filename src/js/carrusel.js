import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


import { Carousel, Popover, Affix, Menu,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col} from 'antd';


class Menudos extends React.Component {
  state = {
    current: 'mail',
    loading:true,
  }
  render() {

    return (
  
    <Carousel   autoplay >
    <div id='imgFondo' >
    <Row>
   <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="video-camera"  /><h6   class="tituloicon">Edicion de video</h6>
    </Col>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="tags"  /><h6   class="tituloicon">Vende mas consigue nuevos clientes</h6>
    </Col>
     <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="skin"  /><h6   class="tituloicon">Construcion de marca</h6>
  </Col>
  </Row>
    </div>
    <div ><Row>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="android"  twoToneColor="#52c41a"   /><h6   class="tituloicon">Android(React js, Java)</h6>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="apple"  twoToneColor="#24292e"  /><h6   class="tituloicon">Ios(React js, Objetive-C or  Swift)</h6>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#2b6ecd' }} type="windows"  twoToneColor="#2b6ecd"  /><h6   class="tituloicon">.Net mvc, C#, Sql server, Xamarin</h6>
    </Col>
  </Row></div>
    <div ><Row>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#fc7026' }} type="gitlab"  twoToneColor="#fc7026" /><h6   class="tituloicon">Gitlab</h6>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="github" twoToneColor="#24292e" /><h6   class="tituloicon">Github</h6>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="hdd"  /><h6   class="tituloicon">Sql server, Mysql, Oracle</h6>
    </Col>
  </Row></div>
    <div ><Row>  
     <Col span={8}>
    <Icon spin  style={{ fontSize: '46px', color: '#24292e' }} type="cloud" twoToneColor="#24292e"  /><h6   class="tituloicon">Aws, Microsoft Azure, Google</h6>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="code"  twoToneColor="#24292e"   /><h6   class="tituloicon">npm, Qnx, Linux</h6>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#40a9ff' }} type="lock"  twoToneColor="#24292e"  /><h6   class="tituloicon">Seguridad</h6>
    </Col>
   
  </Row></div>
    <div ><Row>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="api"  /><h6  class="tituloicon">Integracion</h6>
    </Col>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#fc7026' }} type="rest"  /><h6  class="tituloicon">Lanzamiento de productos</h6>
    </Col>
     <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="shop"  /><h6  class="tituloicon">Ecommerces </h6>
    </Col>
  </Row></div>
  </Carousel>
 );
  }
}

export default Menudos;