
import {Component} from "react";
import Authenticate from 'react-openidconnect';
import  '../../styles/loginStyles.css';

export class NotFoundComp extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.history.push('/');
    }

    render(){

        return(
            <div className=" row ">

            </div>
                );
    }
}

