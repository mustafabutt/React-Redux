
import {Component} from "react";
import Select from 'react-select';

import  '../../styles/dropDownStyles.css';


export class DropDownComp extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedOption: null,
      };

      this.getValue = this.getValue.bind(this)
    }
    componentDidMount(){
        (this.props).getHackerNewsData();
    }
    componentWillReceiveProps(nextProps){

    }

    getValue(val) {
      this.setState({ selectedOption:val.label });
    }

    render(){

      const techCompanies = [
        { label: "Containerize.Form", value:1},
        { label: "Containerize.Botpress", value:2},
        { label: "Containerize.Rocket", value:3},
      ];

      return (
        <div >
          <div className="row " >
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select
                options={techCompanies}
                      onChange={this.props.getAppName}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

      );
    }
}
