import React from "react";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import * as axios from "axios";
import Profile from "./Profile";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileInfo(response.data)
            });
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
};

export const ProfileContainer = connect(mapStateToProps,
    {setProfileInfo})(ProfileClassContainer);