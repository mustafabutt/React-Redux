import { HomeComp } from './homeComp';
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {getSiteMap} from '../actions/actions'

const mapStateToProps = (state) =>

  ({
    siteMapeData:state
  })

const mapDispatchToProps = dispatch =>
  ({
    getSiteMapData() {
      dispatch(
        getSiteMap()
      )
    }
  });
export  const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeComp))





