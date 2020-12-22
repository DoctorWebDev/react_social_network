import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "581b390b-8356-44f9-9c3d-237e78201ff3"
    }
});

export const apiUserData =  {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    }
};

export const profileApi = {
    getProfileData(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
};