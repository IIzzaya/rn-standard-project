export function receiveHelloFromServer(response) {
    return {
        type: "Receive Hello",
        response
    }
}

export function requestHelloFromServer(message) {
    return {
        type: "Request Hello",
        message
    }
}