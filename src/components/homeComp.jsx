
import {Component} from "react";
import { Link } from 'react-router-dom';
import {DropDownComponent} from './dropdown/dropDownContainer';
import {LoginComponent} from './login/loginContainer';

import  '../styles/homeStyles.css';

export class HomeComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      appName : "",
      userLogin : false
    }

    this.getDropDownValue = this.getDropDownValue.bind(this);
    this.getUserState = this.getUserState.bind(this);
  }
  componentDidMount(){
    (this.props).getSiteMapData();

    window.onpopstate  = () => {
     this.setState({});
    }

  }
  componentWillReceiveProps(nextProps){

  }
  getDropDownValue (value) {
    this.setState({appName:value.label})

  }
  getUserState () {
    this.setState({userLogin:true})
  }
  render(){
    console.log("rcvsss")
    console.log(this.props.siteMapeData)

    // debugger
    return(
      <div id="main">


        <div className="">
          <div className="dropDownClass">
            <DropDownComponent getAppName ={this.getDropDownValue} />
          </div>

          <div className="loginClass">
            {this.state.appName != "" ? <LoginComponent /> : null}
          </div>
        </div>

        {LoadMenu("Aspose")}
      </div>
    );
  }
}
