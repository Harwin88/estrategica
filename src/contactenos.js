
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }else{
        alert('hola'+ values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
    <Row>
      <Col span="16"><Form onSubmit={this.handleSubmit}>
      <Row>
      <Col span="9">
      </Col>
       <Col span="12">
       <br />
          <br />
             <br />
       <h1>Complete el formulario a continuación y háganos saber acerca de sus productos o necesidades de servicios.</h1>
      </Col>
       <Col span="3">
      </Col>
      </Row>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'el valor ingresado no coresponde a E-mail!',
            }, {
              required: true, message: 'este campo es requerido E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
       
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nombre Completo&nbsp;
              <Tooltip title="Cual es tunombre completo?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Por favor Ingrese su nombre completo!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Mensaje"
        >
          {getFieldDecorator('Mensaje', {
            rules: [{ required: true, message: 'Ingrese un mensaje describiendo sus requerimientos, no es necesario estenderse mucho!' }],
          })(
            <AutoComplete
              //dataSource={}
              //onChange={}
              placeholder="Mensaje"
            >
             <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
            </AutoComplete>
          )}
        </FormItem>
       
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
      </Col>
      <Col span="8">
    
      </Col>
     
      </Row>,
  <Row>
      <Col span="4"></Col>
      <Col span="16">
      <br/><br/>
       <h1 class="tituloicon">Comunicate de forma directa usando:</h1>
      <br/>
      <br/>
      <span/><div>
        <Row><Col span="5"><a class="tituloicon" href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="facebook" /><Row>facebook</Row></a></Col>
        <Col span="5"><a class="tituloicon" href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="twitter" /> <Row>twitter</Row></a></Col>
        <Col span="5"><a class="tituloicon" href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="linkedin" /> <Row>linkedin</Row></a></Col>
        <Col span="5"><a class="tituloicon" href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="instagram" /> <Row>instagram</Row></a></Col>
        <Col span="4"><a class="tituloicon" href="#" target="_blank" rel="noopener noreferrer"><Icon  style={{ fontSize: '56px', color: '#08c' }} theme="outlined"  type="wechat" /> <Row>Whatsapp</Row></a></Col>
        </Row>
      </div>
       </Col>
      <Col span="4"></Col>
      </Row>

    );
  }
}

export default RegistrationForm;


