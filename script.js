const calculate = document.getElementsByClassName( 'calcButton' )

function calculateBMI() {
    const name = document.getElementById( 'name' ).value 
    let height = document.getElementById( 'height' ).value
    let weight = document.getElementById( 'weight' ).value
    const result = document.getElementById( 'result' )

    // Fazendo tratamento dos dados
    height = height.toString().replace(',', '.') 
    weight = weight.toString().replace(',', '.')
    height = parseFloat(height)
    weight = parseFloat(weight)
    
    const bmiValue = (weight / ((height * height))).toFixed(1)

    let classification = ''

    if(name !== '' && height !== '' && weight !== ''){
        if(bmiValue < 18.5) {
            classification = 'Magreza'
        }
        else if(bmiValue > 18.5 && bmiValue < 24.9) {
            classification = 'Normal'
        }
        else if(bmiValue > 25.0 && bmiValue < 29.9 ) {
            classification = 'Sobrepeso'
        }
        else if(bmiValue > 30.0 && bmiValue < 39.9) {
            classification = 'Obesidade'
        }
        else if(bmiValue > 40) {
            classification = 'Obesidade grave'
        }
    

        result.textContent = `${name}, seu IMC é ${bmiValue} e você está com a seguinte classificação: ${classification}.`
    }
    else {
        result.textContent = 'Preencha todos os campos!'
    }
}

