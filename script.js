

    const calcularPreco = () => {

        let precoAlcool = document.getElementById('alcool').value;
        let precoGasolina = document.getElementById('gasolina').value;

    if( precoAlcool != '') {

        if( precoGasolina != '') {

    let resultado = precoAlcool / precoGasolina

    if( resultado >= 0.7 ) {

    // alert('Melhor gasolina')
    document.getElementById('resultado').innerHTML = 'Melhor gasolina'

    }else{

        // alert('Melhor alcool')
        document.getElementById('resultado').innerHTML = 'Melhor alcool'

    }


        }else{

            alert('Preencha o preço da Gasolina');
        }

    }else {

        alert("Preecnha o preço do Alcool");
    }

 }