import {connect} from "react-redux";
import SideBar from "./SideBar";

let mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friendsData
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;