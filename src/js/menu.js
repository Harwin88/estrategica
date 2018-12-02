import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Contactenos  from './contactenos.js';
import Porta  from './portafolio.js';
import { Popover, Affix, Menu, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
  const content =(
      <div>
        <a href="https://www.facebook.com/EstrategicaMyP/" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="facebook" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="twitter" /></a>
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


class Menudos extends React.Component {
  
  state = {
    current: 'mail',
    loading:true,
  }

eventorecoClick = (e) => {
    
    console.log('click ', e);

  if(e.key == 'Nosotros')
  {
       const aaaa = document.getElementById("menudos");
         aaaa.scrollIntoView({
         behavior: "smooth"});

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
        if(e.key == "Servicios")
        {
           const aaa = document.getElementById("menudos");
         aaa.scrollIntoView({
         behavior: "smooth"});

    ReactDOM.render(
        <Row> 
            <Col span={2}></Col>
            <Col id='colfondo' span={20}>
            <img src="/img/Pagina/serv-00.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-01.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-02.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-03.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-04.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-05.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-06.png" alt="Smiley face" height="100%" width="100%"/>
            <img src="/img/Pagina/serv-07.png" alt="Smiley face" height="100%" width="100%"/>
            </Col>
             <Col span={2}></Col>
        </Row>,   
    document.getElementById('titulos')); 

        }
    else
       {
          if(e.key == "Portafolio")
          {
            {{ReactDOM.render(<Porta />, document.getElementById("titulos"));}}
          
             const aaa = document.getElementById("menudos");
             aaa.scrollIntoView({
             behavior: "smooth"});
           

}else
    {
     if(e.key == "contac")
     {
      {{ReactDOM.render(<Contactenos />, document.getElementById("titulos"))}}
     
         const aaa = document.getElementById("menudos");
         aaa.scrollIntoView({
         behavior: "smooth"});
    }
   
}
}
    

    this.setState({
      current: e.key,
    });
  }
}
     
  
  render() {

    return (
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
      <Row>
     <Col span={10}>
     </Col>
      <Col span={14}>
<Menu
           onClick={this.eventorecoClick}
        mode="horizontal" >
        <Menu.Item key="Nosotros">
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="home" />Nosotros.
        </Menu.Item>
        <Menu.Item key="Servicios" >
          <Icon style={{ fontSize: '26px', color: '#08c' }} type="robot" />Servicios.
        </Menu.Item>
        <Menu.Item key="Portafolio" >
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
        </Menu></Col></Row></Affix>
      
     );
  }
}


export default Menudos;