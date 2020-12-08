import { connect } from 'react-redux'
import Read from '../components/Read'

export default connect(
    state => {
        const targetContent = {
            title: '',
            desc: ''
        }

        if(state.mode === 'WELCOME') {
            targetContent.title = state.welcome_content.title
            targetContent.desc = state.welcome_content.desc
        } else {
            for(let content of state.contents) {
                if(content.id === state.selected_content_id) {
                    targetContent.title = content.title
                    targetContent.desc = content.desc
                    break
                }
            }
        }
        
        return {
            ...targetContent
        }
    }
)(Read)