import { connect } from "react-redux";
import Create from "../components/Create";

export default connect(null, dispatch => {
    return {
        onSubmit: (title, desc) => {
            dispatch({type: 'CREATE_PROCESS', title, desc})
        }
    }
})(Create)