import friendsReducer from "./friendsReducer"
import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"


let store = {
	_state: {
		messages: {
			dialog: [{
					id: 1,
					content: 'How are you?'
				},
				{
					id: 2,
					content: 'Hi!!!'
				},
				{
					id: 3,
					content: 'I think you aren\'t right. It seems to me he wanted to pay for it.'
				},
			],
			userDialogs: [{
					id: 1,
					name: 'Slava'
				},
				{
					id: 2,
					name: 'Aleksandr'
				},
				{
					id: 3,
					name: 'Dima'
				},
				{
					id: 4,
					name: 'Sveta'
				},
				{
					id: 5,
					name: 'Pavel'
				},
			],
			textareaMessage: ''
		},
		profile: {
			postsContent: [{
					id: 1,
					postContent: 'Hello'
				},
				{
					id: 2,
					postContent: 'Hello, World!'
				},
				{
					id: 3,
					postContent: 'My names Sviatoslav'
				},
			],
			textareaContent: '',
		},
		friends: [{
			id: 1,
			friendName: 'Slava'
		}, {
			id: 1,
			friendName: 'Anna'
		}, {
			id: 1,
			friendName: 'Alex'
		}, {
			id: 1,
			friendName: 'Max'
		}]
	},
	dispatch(action) {

		let newState = {
			profile: profileReducer(this._state.profile, action),
			messages: messagesReducer(this._state.messages, action),
			friends: friendsReducer(this._state.friends, action)
		}
		this._state = newState

		this._callSubscriber()
	},
	_callSubscriber() {},
	getState() {
		let state = this._state
		return state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	}
}

export default store