
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

import { Menu, Icon, Carousel, Popover, Row, Col} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


     const content =(

      <div>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="facebook" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="twitter" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="linkedin" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="instagram" /></a>
      </div>
    );

      

class App extends React.Component {
  state = {
    current: 'mail',
    loading:true,
  }

  handleClick = (e) => {
    console.log('click ', e);
    alert(e.key);
    this.setState({
      current: e.key,
    });
  }

     
  
  render() {

    return (
      <Menu
          onClick={this.handleClick}
        selectedKeys={[this.state.current]} 
        mode="horizontal" >
        <Menu.Item key="mail">
          <Icon style={{ fontSize: '16px', color: '#08c' }} type="mail" />info@estrategicamyp.comy
        </Menu.Item>
        <Menu.Item key="app">
          <Icon style={{ fontSize: '16px', color: '#08c' }} type="appstore" />+573116574609
        </Menu.Item>
     
         <Menu.Item key="socialMedial">
           <Popover content={content} title= "Social Medial">
           <Icon style={{ fontSize: '16px', color: '#08c' }} type="wechat" />Contato directo desde nustras redes sociales.
          </Popover>
     </Menu.Item>
      </Menu>   
    );
  }
}


class Menudos extends React.Component {
  state = {
    current: 'mail',
    loading:true,
  }

  eventorecoClick = (e) => {
    console.log('click ', e);
    if(e.key == 'home')
    {
     document.getElementById("elemntotitulo").innerHTML='Tecnología y Servicios';
     document.getElementById("contenidoPagina").innerHTML='<h2>Hola esto es el contenido de la pagina</h2>';
    }else
    {
      if(e.key == "noso")
      {
        document.getElementById("elemntotitulo").innerHTML='Conoce Estrategica';
        document.getElementById("contenidoPagina").innerHTML='<h2>Hola esto es el contenido de la pagina</h2>';
   
      }else
       {
        if(e.key == "Portafolio")
         {
           document.getElementById("elemntotitulo").innerHTML='Portafolio';
           document.getElementById("contenidoPagina").innerHTML='<h2>Hola esto es el contenido de la pagina</h2>';
   
         }else
           {
              document.getElementById("elemntotitulo").innerHTML='Contáctenos';
              document.getElementById("contenidoPagina").innerHTML='<h2>Hola esto es el contenido de la pagina</h2>';
   
           }
       
       }
    }


    this.setState({
      current: e.key,
    });
  }

     
  
  render() {

    return (
<Menu
           onClick={this.eventorecoClick}
        mode="horizontal" >
        <Menu.Item key="home">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="home" />Inicio
        </Menu.Item>
        <Menu.Item key="noso" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="smile" />Tecnología y Servicios
        </Menu.Item>
        <Menu.Item key="productos" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="laptop" />Nuestros Productos
        </Menu.Item>
        <Menu.Item key="contac">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="message" />Escribenos
        </Menu.Item>
         <Menu.Item key="socialMedial">
           <Popover content={content} title= "Social Medial">
           <Icon style={{ fontSize: '26px', color: '#08c' }} type="share-alt" />Siguenos en:.
          </Popover>
        </Menu.Item>
          <Menu.Item key="whastap">
                    <Icon style={{ fontSize: '26px', color: '#08c' }}  style={{ fontSize: '16px', color: '#08c' }} theme="outlined"  type="wechat" />Whatsapp
        </Menu.Item>
      </Menu> );
  }
}


ReactDOM.render(
<Row id='ronwpr'>
  <Col span={8}>
   <div id='nosotros'>
     
   </div>
  </Col>
   <Col span={8}>
   <div id='nosotros'>
      <h1  id='elemntotitulo' class="titulo">Sobre Nosotros</h1>
   </div>
  </Col>
   <Col span={8}>
   <div class="titulo"  id='nosotros'>
     
   </div>
  </Col>
  </Row>,
document.getElementById('titulos'));

ReactDOM.render(
  <Carousel autoplay fade>
    <div  id='hea-1'><h3 class="titulo" >Hola es Un placer tenerte en nuestra pagina</h3></div>
    <div   id='hea-2'><h3 class="titulo" >Trabajamos con las mejores tecnologias </h3></div>
    <div   id='hea-3'><h3 class="titulo" >siempre contaras con los mejores profecionales a su disposicion</h3></div>
    <div   id='hea-4'><h3 class="titulo" >Somos la mejor opcion</h3></div>
    <div   id='hea-5'><h3 class="titulo" >Somos la mejor opcion</h3></div>
  </Carousel>,
document.getElementById('carruzel'));

ReactDOM.render(
  <Carousel vertical autoplay>
    <div>
    <Row>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#24292e' }} type="cloud" twoToneColor="#24292e" />
    </Col>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#52c41a' }} type="code"  twoToneColor="#24292e"  />
    </Col>
     <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#40a9ff' }} type="lock"  twoToneColor="#24292e" />
    </Col>
  </Row>
    </div>
    <div><Row>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#52c41a' }} type="android"  twoToneColor="#52c41a"  />
    </Col>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#24292e' }} type="apple"  twoToneColor="#24292e" />
    </Col>
     <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#138ce000' }} type="windows"  twoToneColor="#24292e" />
    </Col>
  </Row></div>
    <div><Row>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#fc7026' }} type="gitlab"  twoToneColor="#fc7026"/>
    </Col>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#24292e' }} type="github" twoToneColor="#24292e"/>
    </Col>
     <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="hdd" />
    </Col>
  </Row></div>
    <div><Row>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#24292e' }} type="video-camera"  twoToneColor="#24292e"/>
    </Col>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="tags" />
    </Col>
     <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="skin" />
    </Col>
  </Row></div>
    <div><Row>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="api" />
    </Col>
    <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="rest" />
    </Col>
     <Col span="8">
    <Icon style={{ fontSize: '56px', color: '#08c' }} type="shop" />
    </Col>
  </Row></div>
  </Carousel>,
document.getElementById('contenidoPagina'));

ReactDOM.render(
<Row>
<Col span="24">
<div id="contenidoImg"></div>
</Col>
</Row>,
document.getElementById('nosotrosestra'));

ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Menudos />, document.getElementById('menudos'));


          