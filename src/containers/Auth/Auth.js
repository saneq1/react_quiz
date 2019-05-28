import React, { Component } from 'react'
import  classes  from './Auth.module.css';
import Button from '../../components/UI/Botton/Botton'
import Input from '../../components/UI/input/input'

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {

  state ={
    isFormValue:false,
    formControls: {
      email: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage:'ВВедите корректный пароль',
        valid: false,
        tauched:false,
          validation:{
            required: true,
            minLength:6
          }
      },
      password: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage:'ВВедите корректный email',
        valid: false,
        tauched:false,
          validation:{
            required: true,
            email: true
          }
      }
    }
  }

  loginHandler=()=>{

  }

registerHandler=()=>{

}

submitHandler=(event)=> {
  event.preventDefault()
}

validateControl(value, validation) {
  if (!validation){
    return true
  }
  let isValid = true
  if (validation.required) {
    isValid = value.trim() !=='' && isValid
  }
  if (validation.email) {
    isValid = validateEmail(value) && isValid
  }
  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid 
  }
  
  return isValid
}

onChangeHandler=(event,controlName)=>{
  

  const formControls = {...this.state.formControls}
  
  const control = {...formControls[controlName]}

 control.value = event.target.value
 control.touched = true
 control.valid = this.validateControl(control.value, control.validation)

 formControls[controlName] = control

let isFormValid = true

Object.keys(formControls).forEach(name => {
  isFormValid =formControls[name].valid && isFormValid
})

 this.setState({
   formControls, isFormValid
 })
}


renderInputs() {
  return Object.keys(this.state.formControls).map((controlName, index)=> {
    const control = this.state.formControls[controlName]
    return (
      <Input
      key={controlName + index}
      type={control.type}
      value={control.value}
      valid={control.valid}
      touched={control.touched}
      label={control.label}
      errorMessage={control.errorMessage}
      shouldValidate={!!control.validation}
      onChange={event=>this.onChangeHandler(event, controlName)}
      />
    )
  })
  
}

  render() {
    return (
      <div className={classes.Auth}>
        <div>
         <h1>Авторизация</h1> 
         <form onSubmit={this.submitHandler} className={classes.Authform}>

            {this.renderInputs()}

             <Button type='success' 
             onClick={this.loginHandler}
             disabled={!this.state.isFormValid}
             >Войти</Button>

             <Button type='primary' 
             onClick={this.registerHandler
             }
             disabled={!this.state.isFormValid}
             >Зарегистрироваться</Button>


         </form>
        </div>
        
      </div>
    )
  }
}
