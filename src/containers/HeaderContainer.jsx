import { connect } from "react-redux";
import Header from "./../components/Header";


export default connect(null, dispatch => {
    return {
        onClick: () => {
            dispatch({type: 'WELCOME'})
        }
    }
})(Header);