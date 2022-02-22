// TODO: define RESTful APIs to fetch data from backend

const domain = "http://18.216.82.23:8080"

export const login = (credential, asHost) => {
	const url = `${domain}/authenticate/${asHost ? "admin" : "resident"}`

	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credential),
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to log in")
		}
		return response.json();
	})
}


export const register = (credential) => {
	const url = `${domain}/register`
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credential),
	}).then((response) => {
		if (response.status !== 200) {
			console.log(response.status)
			throw Error("Failed to register")
		}
		return response.json()
	})
}

export const addEvent = (userId, requestBody) => {

	const url = `${domain}/${userId}/events`

	return fetch(url, {
		method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
		body: JSON.stringify(requestBody),
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to add event")
		}
		return response.json()
	})
}

export const deleteEvent = (userId, eventId) => {

	const url = `${domain}/${userId}/events/${eventId}`

	return fetch(url, {
		method: "DELETE",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to delete event")
		}
	})
}

export const listEvents = () => {
	const url = `${domain}/events`
	return fetch(url, {
		method: "GET"
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list events")
		}
		return response.json()
	})
}

export const editEvent = (userId, eventId, requestBody) => {
	const url = `${domain}/events/${eventId}`
	return fetch(url, {
		method: "PUT",
		body: requestBody,
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to edit event")
		}
	})
}


export const addPost = (userId, requestBody) => {

	const url = `${domain}/${userId}/posts`

	return fetch(url, {
		method: "POST",
		body: requestBody,
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to add post")
		}
		return response
	})
}


export const editPost = (userId, postId, requestBody) => {

	const url = `${domain}/${userId}/posts/${postId}`

	return fetch(url, {
		method: "POST",
		body: requestBody,
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to edit post")
		}
	})
}


export const deletePost = (userId, postId) => {

	const url = `${domain}/${userId}/events/${postId}`

	return fetch(url, {
		method: "DELETE",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to delete post")
		}
	})
}


export const listPostByUser = (userId) => {
	const url = `${domain}/${userId}/posts`

	return fetch(url, {
		method: "GET",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list post by user")
		}
		return response.json()
	})
}

export const listPosts = () => {
	const url = `${domain}/posts`
	return fetch(url, {
		method: "GET",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list posts")
		}
		return response.json()
	})
}


export const addComment = (postId, requestBody) => {
	const url = `${domain}/${postId}/comments`

	return fetch(url, {
		method: "POST",
		requestBody: requestBody
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to add comment")
		}
		return response.json()
	})
}


export const listComments = (postId) => {
	const url = `${domain}/${postId}/comments`
	return fetch(url, {
		method: "GET"
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list comments")
		}
		return response.json()
	})
}

export const addReservation = (userId, requestBody) => {
	const url = `${domain}/${userId}/reservations`
	return fetch(url, {
		method: "POST",
		headers: {
            "Content-Type": "application/json",
        },
		body: JSON.stringify(requestBody),
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to add reservation")
		}
		return response.json()
	})
}

export const deleteReservation = (userId, reservationId) => {
	const url = `${domain}/${userId}/reservations/${reservationId}`

	return fetch(url, {
		method: "DELETE",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to delete reservation")
		}
	})
}

export const listReservations = () => {
	const url = `${domain}/reservations`
	return fetch(url, {
		method: "GET"
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list reservations")
		}
		return response.json()
	})
}

export const listReservationsByUser = (userId) => {
	const url = `${domain}/${userId}/reservations`

	return fetch(url, {
		method: "GET",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to list reservations by user")
		}
		return response.json()
	})
}


export const getAccount = (userId) => {
	const url = `${domain}/${userId}/account`
	return fetch(url, {
		method: "GET",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to get account")
		}
		return response.json()
	})
}

export const payBalance = (userId, balance) => {
	const url = `${domain}/${userId}/account/${balance}`
	return fetch(url, {
		method: "PUT",
	}).then((response) => {
		if (response.status !== 200) {
			throw Error("Fail to set balance")
		}
		return response.json()
	})
}
