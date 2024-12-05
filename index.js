

function submitData(userName, userEmail){
    let configObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    return fetch('http://localhost:3000/users', configObject)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let id = document.createTextNode(data.id);
        document.querySelector('body').appendChild(id)
    })
    .catch(function(error) {
        let message = document.createTextNode(error.message);
        document.querySelector('body').appendChild(message);
    })
}

submitData()