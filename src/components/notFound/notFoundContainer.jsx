import { NotFoundComp  } from './notFoundComp';
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
export  const NotFoundComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(NotFoundComp))





