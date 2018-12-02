
import React from 'react';
 import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

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
    <div class="row">
    <div class="col-md-4">
      
    </div>
    <div class="col-md-4">
      <h1>Nos podremos en contacto contigo en la menor brevedad posible.</h1>
    </div>
    <div class="col-md-4">
     
    </div>
 
     <div class="container">
            <form role="form" id="Formulario">
                <div class="form-group">
                    <label class="control-label" htmlfor="Nombre">Nombres</label>
                    <input 
                      value={this.state.name}
                      onChange={this.onChange.bind(this)}
                      type="text"
                      class="form-control"
                      id="Nombre"
                      name="name"
                      placeholder="Introduzca su nombre" 
                      required autofocus />
                </div>            
                <div class="form-group">
                    <label class="control-label" htmlfor="Motivo">Motivo de Contacto</label>
                    <select 
                      value={this.state.Motivo}
                      onChange={this.onChange.bind(this)}
                      name="Motivo" class="form-control">
                        <option value="Consulta General">Consulta General</option>
                        <option value="Realizar Pedido">Realizar Pedido</option>
                        <option value="Informe un problema">Informe un problema</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label" htmlhtmlfor="Empresa">Empresa</label>
                    <input 
                    value={this.state.Empresa}
                      onChange={this.onChange.bind(this)}
                    type="text" class="form-control" id="Empresa" name="Empresa" placeholder="Introduzca el nombre de su empresa" required />
                </div>
                <div class="form-group">
                    <label class="control-label" htmlfor="Correo">Dirección de Correo Electrónico</label>
                    <input 
                    value={this.state.Correo}
                      onChange={this.onChange.bind(this)}
                    type="email" class="form-control" id="Correo" name="Correo" placeholder="Introduzca su correo electrónico" required />
                </div>
                <div class="form-group">
                    <label class="control-label" htmlfor="Mensaje">Mensaje</label>
                    <textarea 
                      value={this.state.Mensaje}
                      onChange={this.onChange.bind(this)}
                     rows="5" cols="30" class="form-control" id="Mensaje" name="Mensaje" placeholder="Introduzca su mensaje" required ></textarea>
                </div>
                <div class="form-group">                
                    <input type="submit" id="sudmigg" class="btn btn-primary" value="Enviar" />
                    <input type="reset" class="btn btn-default" value="Limpiar"/>                
                </div>
                <div id="respuesta"></div>
            </form>
        </div>

           </div>    

    );
  }
}

export default Contact;
