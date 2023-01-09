function velocidadeMultado(velocidade)
{
    var velocidade = document.getElementById('inputvelocidadeMultado').value ;
    if(velocidade > 80)
    {
        alert('Multado');
    }
    else
    {
        alert('Não Multado')
    }
}
function calculoNota()
{
    var nome = document.getElementById("txtEx2nome").value ;
    var nota1 = document.getElementById("numberEx2nota01").value ;
    var nota2 = document.getElementById("numberEx2nota02").value ;

    var media = (nota1 + nota2)/2;

    if(media >=60);
    {
        alert(nome + 'você foi aprovado, sua media foi:' + media);
    }
    else
    {
        alert(nome + 'você esta de recuperação, sua media foi:' + media);

        MudarEstado('NotaRecuperação');
        MudarEstado('NoraRecuperaçãoBotão');
        MudarEstado('DivBotãoMedia');
    }
}
function CalculoRecuperação()
{
    var nome = document.getElementById("txtRx2nome").value;
    var notaRecuperação = document.getElementById('numberEx2NotaRecuperação').value;
    if(notaRecuperação >=50);
    {
        alert(nome + "voçê foi aprovado");
    }
    else
    {
        alert(nome + "Voçê foi reprovado");
    }
}
function MudarEstado(elemento){
    var display = document.getElementById(elemento).style.display;
    if(display == "none");
    {
        documento.getElementById(elemento).style.display = 'block';
    }
    else
    {
        documento.getElementById(elemento).style.display = 'none';
    }
}