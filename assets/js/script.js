// https://superheroapi.com/api/access-token
// 4480921542024253
// https://www.superheroapi.com/api.php/4480921542024253/1

 //Button to perform a function on click
 document.querySelector('#buttonSuperHero').addEventListener('click', () => { //1.click, 2. arrow function empty
    getDataBySuperHeroId('346');
})

// urlRodriVariable
// apiRodriVariable
// dataRodriVariable
// resultadoHTMLRodrigoVariable



function getDataBySuperHeroId(SuperHeroId) {
    console.log('clic llama a la función getDataBySuperHeroId(SuperHeroId)');
    let urlRodriVariable = `https://www.superheroapi.com/api.php/4480921542024253/${SuperHeroId}`;
    const apiRodriVariable = new XMLHttpRequest(); // Esto es AJAX
    apiRodriVariable.open('GET', urlRodriVariable, true);
    apiRodriVariable.send();
    apiRodriVariable.onreadystatechange = function () {
        if(this.status == 200 && this.readyState == 4){ // 200 Succesful. Ayax readyState 0 UNSENT,1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE
            console.log('Data sin formato JSON');
            console.log(this.responseText); // Trae el texto de la api sin formato JSON
            console.log('Data con formato JSON');
            let dataRodriVariable = JSON.parse(this.responseText) // Esto genera un JSON de Array de Objetos
            console.log(dataRodriVariable); // Trae JSON en formato Array de Objetos
            console.log('Data con formato JSON más elemento del Objeto');
            //console.log(dataRodriVariable.powerstats.intelligence);
            // Imprimir resultados en HTML
            let resultadoHTMLRodrigoVariable = document.querySelector('#resultadoHTML');
         
            resultadoHTMLRodrigoVariable.innerHTML = ''; // Limpia el resultado anterior en la página

            document.getElementById("imageSuperHeroId").src = `${dataRodriVariable.image.url}`;
            document.getElementById("cardTiltleId").innerHTML = `${dataRodriVariable.name}`;
            document.getElementById("cardTextId1").innerHTML = `Conexiones: ${dataRodriVariable.connections['group-affiliation']}`;
            document.getElementById("cardTextId2").innerHTML = `Ocupación: ${dataRodriVariable.work.occupation}`;
            
            let combat = parseInt(dataRodriVariable.powerstats.combat)
            let durability = parseInt(dataRodriVariable.powerstats.durability)
            let intelligence = parseInt(dataRodriVariable.powerstats.intelligence)
            let power = parseInt(dataRodriVariable.powerstats.power)
            let speed = parseInt(dataRodriVariable.powerstats.speed)
            let strength = parseInt(dataRodriVariable.powerstats.strength)

            console.log(combat);
            console.log(durability);
            console.log(intelligence);
            console.log(power);
            console.log(speed);
            console.log(strength);


    /// Inicio Chart
    let graphData = {
        
        title: {
            text: `Estadísticas de Poder para ${dataRodriVariable.name}:`
        },
        
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: [
    
                { y: combat, label: "combat" },
                { y: durability, label: "durability" },
                { y: intelligence, label: "intelligence" },
                { y: power, label: "power" },
                { y: speed, label: "speed" },
                { y: strength, label: "strength" }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(graphData);
    
//// Fin Chart 


            } 

        }
    }






  
    

