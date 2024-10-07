const app = require('./config/express')();
const port = app.get('port');

// Routes
app.get('/result/iterativo/:m/:n', function(request, response) {


    let resultado = 1

    let m = parseInt(request.params.m)
    let n = parseInt(request.params.n)

    for(let i = m; i <= n; i++){
        resultado *= (i + (1 / i));
    }

    response.send({
        resultado: parseFloat(resultado).toFixed(4)
    });
});

app.get('/result/recursivo/:m/:n', function(request, response) {

    let m = parseInt(request.params.m)
    let n = parseInt(request.params.n)

    let resultado = calcResult(m, n, 1)

    response.send({
        resultado: parseFloat(resultado).toFixed(4)
    });
});

function calcResult(i, n, aux){
    aux *= i + (1 / i)
    return (i == n) ? aux : calcResult(i + 1, n, aux)
}

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
});
