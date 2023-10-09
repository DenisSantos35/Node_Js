// O node faz a execução de cima para baixo garantindo que cada linha seja executado conforme for chamado

function a(){
    console.log("Execuntando a()")
}

function b(){
    console.log("Execuntando b()")
}

function c(){
    console.log("Execuntando c()")
    a()
    b()
}

//b()
//c()
//a()

c()
