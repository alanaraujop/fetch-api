
var header = new Headers()

var request = new Request('http://viacep.com.br/ws/23026160/json/ ')

fetch(request).then(res =>{
    res.json().then(result=>{
        console.log("funfou ", result)
    })
}).catch(err => {
    console.log("erro ", err)
})