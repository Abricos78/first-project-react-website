import instance from "./Instance"


let authAPI = {
    authMe() {
        return (
            instance.get('auth/me')
            .then( response => response.data)
        )
    }
}

export default authAPI