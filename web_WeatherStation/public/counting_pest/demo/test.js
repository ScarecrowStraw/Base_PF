var data
fetch('http://127.0.0.1:5000/getAllUser')
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        console.log(posts)
        data = posts;
    });
console.log(data);