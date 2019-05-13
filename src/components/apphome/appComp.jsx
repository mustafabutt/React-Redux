
import {Component} from "react";
// import  '../../styles/loginStyles.css';
import _ from "underscore";

export class AppHomeComp extends Component{
  constructor(props){
    super(props);
    this.state ={
        userLogin:false
    }
      if(window.location.href.split("&").length < 2){
          if(localStorage.getItem("userInfo") == null && localStorage.getItem("userInfo") == undefined){
              debugger
              this.props.history.push('/')
          }
      }

  }
  componentWillMount(){
      let tokenArray = window.location.href.split("&");
      if(tokenArray.length>2){
          try{
              localStorage.setItem('tenantName',window.location.href.split("/")[2] );
          }catch(err){
              console.log(err)
          }

          (this.props).callLogin(tokenArray[1].split("=")[1],window.location.href.split("/")[2]);
          (this.props).getSiteMapData();
      }
  }
  componentDidMount(){

      if(localStorage.getItem("userInfo") != null && localStorage.getItem("userInfo") != undefined){

          $("#homeIdSuper").show();
          $("#logOutId").show();
          this.setState({userLogin:true});
          this.props.history.push('/sitemap');
      }
      window.location.href.split("&").length>2 ? this.props.history.push('/sitemap'):null

  }
  componentWillReceiveProps(nextProps){
        debugger
      if(!_.isEmpty(nextProps.userData)){
        try{
            localStorage.setItem("userInfo",JSON.stringify(nextProps.userData));
            $("#homeIdSuper").show();
            $("#logOutId").show();
            this.setState({userLogin:true});
        }catch(err){
            console.log(err)
        }

      }

  }

  render(){
      debugger
    return(
      <div className="row">

          {this.state.userLogin ?  <h1>welcome home</h1> :null}
        {LoadMenu("Aspose")}

      </div>


    );
  }
}
