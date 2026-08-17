const generateString = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''
    const length = 30

    for (let i = 0; i < length; i++) {
    randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    console.log(Date.now() + ': ' + randomString)

    setTimeout(generateString, 5000)
}

    generateString()