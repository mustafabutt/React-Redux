import { AppHomeComp } from './appComp';
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {logIn,getSiteMap} from '../../actions/actions'


const mapStateToProps = (state) =>

  ({
    userData:state.data
  })

const mapDispatchToProps = dispatch =>
  ({
    callLogin(token,hostName) {
      dispatch(
          logIn(token,hostName)
      )
    },
    getSiteMapData() {
      dispatch(
          getSiteMap()
      )
    }
  });
export const AppHomeComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(AppHomeComp))





