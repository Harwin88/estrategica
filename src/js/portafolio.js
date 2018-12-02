
import React from 'react';
 import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Affix, Menu, Alert, Icon, Carousel, Popover, Row, Col, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';

class Contact extends React.Component {

constructor(args){
  super(args)
  this.state ={
    name:'',
    Motivo:'',
    Empresa:'',
    Correo:'',
    Mensaje:''
  }

}

onChange(e)
{
  this.setState({
    [e.target.name]:e.target.value
  })
}

  render() {

    return (
  
<Row>
  <Col span={24}>
<div class="container">
<div class="row">
<div class="col-md-4"></div>
<div class="col-md-4"><hr></hr></div>
<div class="col-md-4"></div>
</div>
 <div class="row">
    <div class="col-md-4">
      
    </div>
    <div class="col-md-4">
      <h1>Algunos de nuestros clientes</h1>
    </div>
    <div class="col-md-4">
      
    </div>
  </div>
<div class="row">
      <div class="col-lg-4"> 
          <img src="/img/portafolio/01.png" alt="Hola " class="img-thumbnail" />
      </div>
      <div class="col-lg-4">  
          <img src="/img/portafolio/02.png" alt="" class="img-thumbnail" />
      </div>
      <div class="col-lg-4">  
          <img src="/img/portafolio/03.png" alt="" class="img-thumbnail" />
      </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <hr></hr>
    </div>
<div class="row">
    <div class="col-lg-4"> 
      <img src="/img/portafolio/04.png" alt="" class="img-thumbnail" />
    </div>
    <div class="col-lg-4">  
      <img src="/img/portafolio/05.png" alt="" class="img-thumbnail" />
    </div>
    <div class="col-lg-4">  
      <img src="/img/portafolio/06.png" alt="" class="img-thumbnail" />
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
      <hr></hr>
    </div></div>
<div class="row">
     <div class="col-lg-4"> 
        <img src="/img/portafolio/07.png" alt="" class="img-thumbnail" />
    </div>
    <div class="col-lg-4">  
       <img src="/img/portafolio/08.png" alt="" class="img-thumbnail" />
    </div>
    <div class="col-lg-4">  
       <img src="/img/portafolio/09.png" alt="" class="img-thumbnail" />
    </div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/10.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/11.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/12.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/13.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/14.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/15.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/16.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/17.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/18.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/19.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/20.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/21.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/22.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/23.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/24.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/25.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/26.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/27.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/28.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/29.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/30.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/31.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/32.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/33.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/34.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/35.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/36.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/37.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/38.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/39.png" alt="" class="img-thumbnail" />
</div>
</div>
<div class="row">
<div class="col-lg-12">
<hr></hr>
</div>
</div>
<div class="row">
 <div class="col-lg-4"> 
<img src="/img/portafolio/40.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4">  
<img src="/img/portafolio/41.png" alt="" class="img-thumbnail" />
</div>
<div class="col-lg-4"> 
<img src="/img/portafolio/42.png" alt="" class="img-thumbnail" />
</div>
</div>
</div>
<div class="row">
<div class="col-md-4"></div>
<div class="col-md-4"><hr></hr></div>
<div class="col-md-4"></div>
</div></div>
</Col></Row>
    );
  }
}

export default Contact;
