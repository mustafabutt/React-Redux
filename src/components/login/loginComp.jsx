
import {Component} from "react";
import Authenticate from 'react-openidconnect';
import  '../../styles/loginStyles.css';

export class LoginComp extends Component{
    constructor(props){
        super(props);
        this.state = {
          loader : false
        }

        this.login = this.login.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.userLoaded = this.userLoaded.bind(this);
        this.userUnLoaded = this.userUnLoaded.bind(this);
    }
    componentDidMount(){
        (this.props).getHackerNewsData();
    }
    componentWillReceiveProps(nextProps){

    }
    login() {
      this.props.history.push('/home');
    };

    userLoaded() {
      debugger
    }

    userUnLoaded() {
      debugger
    }
    showLoader (event) {
      event.preventDefault();

      this.setState({loader:true})
    }

    NotAuthenticated() {

      return <button  type="button" className="btn btn-success buttonStyle" onClick={this.showLoader} >Go</button>
    }


    render(){

      let OidcSettings = {
       
      }

        return(
            <div className=" row ">
              {/*<Link to="/home"><button  type="button" className="btn btn-default buttonStyle" onClick={this.login} >Go*/}
              {/*</button></Link>*/}
              {!this.state.loader ?
              <Authenticate  OidcSettings={OidcSettings} showLoader = {this.showLoader} userLoaded={this.userLoaded} userunLoaded={this.userUnLoaded} renderNotAuthenticated={this.NotAuthenticated}>

              </Authenticate>
                : null}

              {this.state.loader ?
                <div className="modal-backdrop slide-up" >
                  <h1 className="loaderPosition"><div className="spinner-border positionClass"></div></h1>

                </div>
                : null}
            </div>
                );
    }
}

