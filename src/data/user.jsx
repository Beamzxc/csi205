const users = [
    { user: 'user', pass: 'pass', role: 'user', token: 'user'},
    { user: 'admin', pass: 'admin', role: 'admin', token: 'admin'},
    { user: 'guest', pass: 'guest', role: 'guest', token: 'guest'},
]

export function verifyUser(username, password) {
    const userFound = users.find((u) => {
        return u.user === username && u.pass === password
    })

    return userFound ? { role: userFound.role, token: userFound.token } : null
}