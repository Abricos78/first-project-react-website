import instance from "./Instance"


let usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data)
        )
    },
    followUser(userId) {
        return (
            instance.post(`follow/${userId}`)
            .then( response => response.data)
        )
    },
    unfollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`)
            .then( response => response.data) 
        )
    }
}



export default usersAPI