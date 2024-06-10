const fs = require('fs')
const path = require('path')


exports.getUser = (email) => {
    const bufferData = fs.readFileSync(path.join(__dirname, "..", "data", "users.json"))
    const jsonData = JSON.parse(bufferData);

    const filteredData = jsonData.filter((user) => {
        return user.email == email
    })

    if (filteredData.length > 0) {
        return filteredData[0]
    }

    return null;
}