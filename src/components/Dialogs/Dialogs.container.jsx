import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onUpdateInput: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}
const DialogsContrainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContrainer;
