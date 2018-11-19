
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import PiePagina from './footer.js';
import timeRelatedForm  from './contactenos.js'
import { Menu, Affix, Alert, Icon, Carousel, Popover, Row, Col, Form, input, Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

const WrappedTimeRelatedForm = Form.create()(timeRelatedForm);

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const FormItem = Form.Item;
const Option = Select.Option;

//redes sociales
     const content =(
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="facebook" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="twitter" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="linkedin" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="instagram" /></a>
      </div>
    );

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
//logo y menu superior
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
      
      <Row>&nbsp;&nbsp;
        <Col span={12}>
          <div class="media">
            <img src="/img/logos/LogoEstrategica-15.png" alt="Smiley face" height="50" width="200"/>
            <div class="media-body">
            </div>
           </div>   
          </Col>
          <Col span={2}>
          </Col>
          <Col span={10}>   
              <Row>
               <Col span="15">
               </Col>
               <Col span="9">
                  <Icon style={{ fontSize: '18px', color: '#08c'}} type="user" />
                  <a href="/*">Ingles</a>  &nbsp; &nbsp; <a href="/*">español</a>
                </Col>
              </Row>
          </Col>
      </Row >
     
);
}}

//desiciones menu y titulos.

class Menudos extends React.Component {
  state = {
    current: 'mail',
    loading:true,
  }

  eventorecoClick = (e) => {
    console.log('click ', e);

if(e.key == 'home')
{
  
ReactDOM.render(
<Row> 
<Col span={2}></Col>
<Col id='colfondo' span={20}>
<img src="/img/Pagina/nosotros-0.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/nosotros-1.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/nosotros-02.png" alt="Smiley face" height="100%" width="100%"/>
</Col>
 <Col span={2}></Col>
</Row>,
document.getElementById('titulos'));

   //document.getElementById("elemntotitulo").innerHTML='Tecnología y Servicios';
   //document.getElementById("contenidoPagina").innerHTML='';
}else
{
    if(e.key == "noso")
    {
       ReactDOM.render(
<Row> 
<Col span={2}></Col>
<Col id='colfondo' span={20}>
<img src="/img/Pagina/serv-00.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/serv-01.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/serv-01.png" alt="Smiley face" height="100%" width="100%"/>
</Col>
 <Col span={2}></Col>
</Row>,
document.getElementById('titulos'));
    }
    else
       {
          if(e.key == "Portafolio")
          {
             ReactDOM.render(
<Row> 
<Col span={2}></Col>
<Col id='colfondo' span={20}>
<img src="/img/Pagina/nosotros-0.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/nosotros-1.png" alt="Smiley face" height="100%" width="100%"/>
<img src="/img/Pagina/nosotros-02.png" alt="Smiley face" height="100%" width="100%"/>
</Col>
 <Col span={2}></Col>
</Row>,
document.getElementById('titulos'));
          }else
          {
            if(e.key == "contac")
             ReactDOM.render(
<Row>
<Col span={12}>

//formulario contacto

 {ReactDOM.render(<WrappedTimeRelatedForm />, document.getElementById('formularioConctato'))}

  </Col>
  <Col span={12}>
  <div>
  <h1>Hola esto es un mensaje</h1>
  </div>
  </Col>
  </Row>,
document.getElementById('titulos'));
          }

}
    }


    this.setState({
      current: e.key,
    });
  }

     
  
  render() {

    return (
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
      <Row>
     
      <Col span={22}>
<Menu
           onClick={this.eventorecoClick}
        mode="horizontal" >
        <Menu.Item key="home">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="home" />Inicio.
        </Menu.Item>
        <Menu.Item key="noso" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="robot" />Servicios.
        </Menu.Item>
        <Menu.Item key="productos" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="picture" />PortaFolio.
        </Menu.Item>
        <Menu.Item key="contac">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="smile" />Escribenos.
        </Menu.Item>
         <Menu.Item key="socialMedial">
           <Popover content={content} title= "Social Medial">
           <Icon style={{ fontSize: '26px', color: '#08c' }} type="share-alt" />Redes sociales.
          </Popover>
        </Menu.Item>
          <Menu.Item key="whastap">
                    <Icon style={{ fontSize: '26px', color: '#08c' }}  style={{ fontSize: '16px', color: '#08c' }} theme="outlined"  type="wechat" />Whatsapp.
        </Menu.Item>
      </Menu></Col>
      <Col span={2}></Col> </Row></Affix>
     );
  }
}

//inicio de  home 
ReactDOM.render(
<Row> 
<Col span={2}></Col>
<Col  span={20}>
<div >
<img src="/img/Pagina/nosotros-0.png" alt="Smiley face" height="1200" width="1200"/>
</div>
</Col>
 <Col span={2}></Col>
</Row>,
document.getElementById('titulos'));

/*ReactDOM.render(
  <Carousel autoplay fade>
    <div  id='hea-1'><h3  class="titulo" >Hola es Un placer tenerte en nuestra pagina</h3></div>
    <div   id='hea-2'><h3 class="titulo" >Trabajamos con las mejores tecnologias </h3></div>
    <div   id='hea-3'><h3 class="titulo" >siempre contaras con los mejores profecionales a su disposicion</h3></div>
    <div   id='hea-4'><h3 class="titulo" >Somos la mejor opcion</h3></div>
    <div   id='hea-5'><h3 class="titulo" >Somos la mejor opcion</h3></div>
  </Carousel>,
document.getElementById('carruzel'));*/


ReactDOM.render(
  
  <Carousel  vertical autoplay >
    <div id='imgFondo' class="fondoCarruselGlobal">
    <Row>
    <Col span={8}>
    <Icon spin  style={{ fontSize: '46px', color: '#24292e' }} type="cloud" twoToneColor="#24292e"  /><h3   class="tituloicon">Aws, Microsoft Azure, Google</h3>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="code"  twoToneColor="#24292e"   /><h3   class="tituloicon">npm, Qnx, Linux</h3>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#40a9ff' }} type="lock"  twoToneColor="#24292e"  /><h3   class="tituloicon">Seguridad</h3>
    </Col>
  </Row>
    </div>
    <div class="fondoCarruselGlobal"><Row>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#52c41a' }} type="android"  twoToneColor="#52c41a"   /><h3   class="tituloicon">Android(React js, Java)</h3>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="apple"  twoToneColor="#24292e"  /><h3   class="tituloicon">Ios(React js, Objetive-C or  Swift)</h3>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#2b6ecd' }} type="windows"  twoToneColor="#2b6ecd"  /><h3   class="tituloicon">.Net mvc, C#, Sql server, Xamarin</h3>
    </Col>
  </Row></div>
    <div class="fondoCarruselGlobal"><Row>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#fc7026' }} type="gitlab"  twoToneColor="#fc7026" /><h3   class="tituloicon">Gitlab</h3>
    </Col>
    <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="github" twoToneColor="#24292e" /><h3   class="tituloicon">Github</h3>
    </Col>
     <Col span={8}>
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="hdd"  /><h3   class="tituloicon">Sql server, Mysql, Oracle</h3>
    </Col>
  </Row></div>
    <div class="fondoCarruselGlobal"><Row>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="video-camera"  /><h3   class="tituloicon">Edicion DE VIDEO, ANIMACIONE</h3>
    </Col>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#24292e' }} type="tags"  /><h3   class="tituloicon">MARKETING, SOCIAL MEDIAL, MAIL, SMS, WHATSAPP</h3>
    </Col>
     <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="skin"  /><h3   class="tituloicon">CONSTRUCION DE MARCA</h3>
    </Col>
  </Row></div>
    <div class="fondoCarruselGlobal"><Row>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="api"  /><h3   class="tituloicon">INTEGRACION REST/SOAP </h3>
    </Col>
    <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#fc7026' }} type="rest"  /><h3   class="tituloicon">EVENTOS Y LANZAMIENTO DE PRODUCTOS</h3>
    </Col>
     <Col span="8">
    <Icon spin style={{ fontSize: '46px', color: '#08c' }} type="shop"  /><h3   class="tituloicon">ECOMMERS </h3>
    </Col>
  </Row></div>
  </Carousel>,
document.getElementById('carruzel'));


/*
*contenedores de contenido general.
*
*
*
*/
ReactDOM.render(
<Row>
<Col span="24">
<div id="contenidoImg"></div>
</Col>
</Row>,
document.getElementById('nosotrosestra'));

ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Menudos />, document.getElementById('menudos'));
ReactDOM.render(<PiePagina />, document.getElementById('piepagina'));


          