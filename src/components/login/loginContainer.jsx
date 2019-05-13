import { LoginComp  } from './loginComp';
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'

const mapStateToProps = (state) =>
    ({
        // HackerNews:state
    })

const mapDispatchToProps = dispatch =>
    ({
        getHackerNewsData() {
            // dispatch(
            //     getHackerNewsData()
            // )
        }
    });
export  const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComp))





