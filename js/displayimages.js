window.onload = function ScriptOnLoad() {
    
    function testImage(iteration, folder, parentContainer, childClassSet) {
            let tester=new Image();
            // console.log(tester)
            tester.result = null;
            tester.src=`./img/${folder}/${iteration}.jpg`;
            tester.addEventListener('error', (event) => {
                console.log('image not found for ' + `${iteration}` + ' at ' + `${folder}`)
            });
            tester.addEventListener('load', (event) => {
                // console.log(tester.src, iteration);
                const outerItemContainer = document.createElement('div')
                outerItemContainer.setAttribute('class', childClassSet);
                
                const textNumberContainer = document.createElement('div');
                outerItemContainer.appendChild(textNumberContainer);
        
                const textNumber = document.createElement('p');
                textNumber.innerHTML = iteration;
                textNumberContainer.appendChild(textNumber);
        
                const imgElement = document.createElement('img');
                imgElement.setAttribute('src', tester.src);
                outerItemContainer.appendChild(imgElement);
        
                const newContainer = document.getElementById(parentContainer);
                newContainer.appendChild(outerItemContainer);
                // console.log(outerItemContainer);
            });
            
        }
        
        for (let iteration = 1; iteration < 41; iteration++) {
            testImage(iteration, 'new-tickets', 'new-container', 'new-table-item');
            testImage(iteration, 'regular-tickets', 'regular-container', 'regular-table-item');
        }  
        
}




// function testImage(URL, iteration) {
//     let tester=new Image();
//     console.log(tester)
//     tester.result = null;
//     tester.src=URL;
//     tester.addEventListener('load', (event) => {
//         console.log(URL, iteration);
//         const outerItemContainer = document.createElement('div')
//         outerItemContainer.setAttribute('class', 'new-table-item');
        
//         const textNumberContainer = document.createElement('div');
//         outerItemContainer.appendChild(textNumberContainer);

//         const textNumber = document.createElement('p');
//         textNumber.innerHTML = iteration;
//         textNumberContainer.appendChild(textNumber);

//         const imgElement = document.createElement('img');
//         imgElement.setAttribute('src', URL);
//         outerItemContainer.appendChild(imgElement);

//         const newContainer = document.getElementById('new-container');
//         newContainer.appendChild(outerItemContainer);
//         console.log(outerItemContainer);
//     });
//     tester.addEventListener('error', (event) => {
//         console.log('image not found on iteration ' + iteration)
//     });
    
// }

// for (let fileNumber = 1; fileNumber < 41; fileNumber++) {
//     testImage(`./img/new-tickets/${fileNumber}.jpg`, fileNumber);
// }