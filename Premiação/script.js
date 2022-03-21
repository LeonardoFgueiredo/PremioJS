function distribuir() {
    var pontos1 = parseInt(document.getElementById("valorPrimeiro").value);
    var pontos2 = parseInt(document.getElementById("valorSegundo").value);
    var pontos3 = parseInt(document.getElementById("valorTerceiro").value);
    var premio  = parseInt(document.getElementById("valorPremio").value);

    var pontosTotal = pontos1 + pontos2 + pontos3;

    var distribuicao1 = (pontos1 * premio) / pontosTotal;
    var distribuicao2 = (pontos2 * premio) / pontosTotal;
    var distribuicao3 = (pontos3 * premio) / pontosTotal;

    //Imprimir resultados formatados no Alert
    alert(
        "Primeiro Recebe -> : R$ " +
          distribuicao1.toFixed(2) +
          "\n" +
          "Segundo Recebe  -> : R$ " +
          distribuicao2.toFixed(2) +
          "\n" +
          "Terceiro Recebe -> : R$ " +
          distribuicao3.toFixed(2) +
          "\n"
        );
    }