import { connect } from "react-redux"
import Update from "../components/Update"

export default connect(state => {
    const targetContent = {}
    for(let content of state.contents) {
        if(content.id === state.selected_content_id) {
            targetContent.title = content.title
            targetContent.desc = content.desc
            targetContent.id = content.id
            break
        }
    }
    return {
        title: targetContent.title,
        desc: targetContent.desc,
        id: targetContent.id
    }
}, dispatch => {
    return{
        onSubmit: (id, title, desc) => {
            dispatch({type: 'UPDATE_PROCESS', id, title, desc})
        }
    }
})(Update)