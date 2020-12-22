import React from "react";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileApi.getProfileData(userId).then(data => {
                this.props.setProfileInfo(data)
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