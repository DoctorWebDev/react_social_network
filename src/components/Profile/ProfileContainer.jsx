import React from "react";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithUrlDataProfileContainer = withRouter(ProfileClassContainer)

export const ProfileContainer = connect(mapStateToProps,
    {setProfileInfo})(WithUrlDataProfileContainer);