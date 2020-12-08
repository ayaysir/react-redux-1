import { connect } from "react-redux";
import Control from "../components/Control";


export default connect(
    state => ({
        mode: state.mode,
        selectedId: state.selected_content_id
    }), dispatch => {
    return {
        onClick: (mode) => {
            if(mode === 'DELETE_PROCESS') {
                if(!window.confirm('정말 삭제하시겠습니까?')) {
                    return
                }
            }
            dispatch({type: mode})
        }
    }
})(Control)