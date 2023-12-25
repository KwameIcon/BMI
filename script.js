document.addEventListener('DOMContentLoaded', () =>{
    // BMI calculation function
    function calculateBMI(weight, height){
        // convert height to meters
        let heightInMeters = height/100;

        // calculate bmi
        let bmi = weight / (heightInMeters * heightInMeters);
        // to 2 decimal places
        bmi.toFixed(2);
        // return the value
        return bmi
    }
    window.prompt('Enter the weight');
    window.prompt('Enter the height');


    // // referencing the html elements
    // const messageField = document.querySelector('.message');
    // const inputCard = document.querySelector('.inputCard');
    // const weightInputField = document.querySelector('.weightInputField');
    // const heightInputField = document.querySelector('.heightInputField');
    // const submitResults = document.querySelector('.submitResults');
    // const outputContainer = document.querySelector('.outputContainer');
    // const bmi = document.querySelector('.text');

    // // creating variables to store the user's weight and height
    // let userWeight;
    // let userHeight;

    // submitResults.addEventListener('click', (event) =>{
    //     event.preventDefault();
    //     if(weightInputField.value === '' || heightInputField.value === ''){
    //         alert('Fill all fields you Idiot');
    //     }else if(typeof(weightInputField.value === Number || typeof(heightInputField.value === Number))){
    //         userWeight = weightInputField.value;
    //         userHeight = heightInputField.value;
    //         weightInputField.value ='';
    //         heightInputField.value = '';

    //         inputCard.classList.add('hidden');
    //         outputContainer.classList.add('show');
    //     }
        
    // })
    // bmi.textContent = calculateBMI(userWeight, userHeight);
    // document.querySelector('.backHome').addEventListener('click', () =>{
    //     inputCard.classList.remove('hidden');
    //     outputContainer.classList.remove('hidden');            
    //     outputContainer.classList.remove('show'); 
    // })

    
})