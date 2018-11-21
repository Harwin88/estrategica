import React from 'react';
import ReactDOM from 'react-dom';
import timeRelatedForm  from './contactenos.js';
import 'antd/dist/antd.css';

import { Popover, Affix, Menu,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
  const content =(
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="facebook" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="twitter" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="linkedin" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="instagram" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Icon style={{ fontSize:  '56px', color: '#08c' }} theme="outlined"  type="wechat" /></a>
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
             ReactDOM.render(
<Row> 
<Col span={24}>
<div class="container">
<div class="row">
  <div class="col-lg-4"></div>
  <div class="col-lg-4">
      <h1>Portafolio</h1>
     </div>
     <div class="col-lg-4"></div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/10.jpg" alt="Hola " class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/12.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/9.jpg" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row"><div class="col-lg-12"><hr></hr></div></div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/1.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/2.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/3.jpg" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row"><div class="col-lg-12"><hr></hr></div></div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/11.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/4.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/5.jpg" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row"><div class="col-lg-12"><hr></hr></div></div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/6.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/8.jpg" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  

</div>
</div>

</div>
</Col>
</Row>,
document.getElementById('titulos'));
}else
    {
     if(e.key == "contac")
      
    ReactDOM.render(<timeRelatedForm />, document.getElementById('titulos'))
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