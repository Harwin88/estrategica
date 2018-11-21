
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/index.css';
import './css/carrusel.css';
import PiePagina from './js/footer.js';
import Menudos from './js/menu.js';
import Carouselsuperio from './js/carrusel.js';
import timeRelatedForm  from './js/contactenos.js';
import { Menu, Affix, Alert, Icon, Carousel, Popover, Row, Col, Form, input, Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

const WrappedTimeRelatedForm = Form.create()(timeRelatedForm);

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const FormItem = Form.Item;
const Option = Select.Option;


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


ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Menudos />, document.getElementById('menudos'));
ReactDOM.render(<PiePagina />, document.getElementById('piepagina'));
ReactDOM.render(<Carouselsuperio />, document.getElementById('carruzellogoestrategica'));


          