import instance from './Instance'


let profileAPI = {
    getUserProfile() {
        return (
            instance.get('profile/' + userId)
            .then(response => response.data)
        )
    }
} 

export default profileAPI

