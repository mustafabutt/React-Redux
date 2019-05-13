
import { connect }    from 'react-redux'

import {DropDownComp} from "./dropDownComp";

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
export  const DropDownComponent = connect(mapStateToProps, mapDispatchToProps)(DropDownComp)





