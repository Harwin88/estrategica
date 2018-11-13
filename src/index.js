
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
          <Icon type="mail" />info@estrategicamyp.comy
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />+573116574609
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Portafolio</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">Constac</a>
        </Menu.Item>
         <Menu.Item key="socialMedial">
           <Popover content={content} title= "Social Medial">
           <Icon type="wechat" />Contato directo desde nustras redes sociales.
          </Popover>
        </Menu.Item>
          <Menu.Item key="whastap">
                    <Icon  style={{ fontSize: '16px', color: '#08c' }} theme="outlined"  type="wechat" />Whatsapp
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
     document.getElementById("elemntotitulo").innerHTML='Técnologias Y servicios';
     document.getElementById("contenidoPagina").innerHTML='<h2>Hola esto es el contenido de la pagina</h2>';
    }else
    {
      if(e.key == "noso")
      {
        document.getElementById("elemntotitulo").innerHTML='Conosenos';
      }else
       {
        if(e.key == "Productos")
         {
           document.getElementById("elemntotitulo").innerHTML='Productos';
         }else
           {
                       document.getElementById("elemntotitulo").innerHTML='Escrivenos nos pondremos en conctato lo antes posible';
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
          <Icon type="home" />Inicio
        </Menu.Item>
        <Menu.Item key="noso" >
          <Icon type="smile" />Sobre Nosotros
        </Menu.Item>
        <Menu.Item key="productos" >
          <Icon type="laptop" />Nuestros Productos
        </Menu.Item>
        <Menu.Item key="contac">
          <Icon type="message" />Escribenos
        </Menu.Item>
         <Menu.Item key="socialMedial">
           <Popover content={content} title= "Social Medial">
           <Icon type="share-alt" />Siguenos en:.
          </Popover>
        </Menu.Item>
          <Menu.Item key="whastap">
                    <Icon  style={{ fontSize: '16px', color: '#08c' }} theme="outlined"  type="wechat" />Whatsapp
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
      <h1  id='elemntotitulo' class="titulo">   Sobre Nosotros</h1>
   </div>
  </Col>
   <Col span={8}>
   <div class="titulo"  id='nosotros'>
     
   </div>
  </Col>
  </Row>,
document.getElementById('titulos'));

ReactDOM.render(
  <Carousel autoplay>
    <div  id='hea-1'><h3 class="titulo" >Hola es Un placer tenerte en nuestra pagina</h3></div>
    <div   id='hea-2'><h3 class="titulo" >Trabajamos con las mejores tecnologias </h3></div>
    <div   id='hea-3'><h3 class="titulo" >siempre contaras con los mejores profecionales a su disposicion</h3></div>
    <div   id='hea-4'><h3 class="titulo" >Somos la mejor opcion</h3></div>
    <div   id='hea-5'><h3 class="titulo" >Somos la mejor opcion</h3></div>
  </Carousel>,
document.getElementById('carruzel'));

ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Menudos />, document.getElementById('menudos'));


          