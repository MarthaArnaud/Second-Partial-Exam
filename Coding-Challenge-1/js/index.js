function fetchMeals(searchMeal){
    console.log(searchMeal);
    let url= 'https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}'
    let settings={
        method: 'GET'
    };
    console.log(url);
    fetch(url,settings)
    .then(response=>{
        if(response.ok){
            console.log("ok");
        }
        else{
            throw new Error("not found");
        }
    
        
    })
    .then(responseJSON=>{
    
        displayMeals(responseJSON);
        console.log(responseJSON);
    })
    .catch(err=>{
        console.log(err);
    })
}

function displayMeals(data){
    let results= document.querySelector('.js-search-results')
    results.innerHTML=" ";

    for(let i=0;i<data.meals.length;i++){

        results.innerHTML+=`
        <div>
        <h1>{$data.meals.strMeal} </h1>
        <h2> {data.meals.strArea}</h2>
        <p> {data.meals.strInstructions}</p>
        <img src="{data.meals.strMealThumb}"/>`
;
    }
    
}


function watchForm(){
    let mealForm= document.querySelector('.js-search-form');
    mealForm.addEventListener('click',(event)=>{
        event.preventDefault();
        let searchMeal = document.getElementById('query').value;
        console.log(searchMeal);
        fetchMeals(searchMeal);
    })
    
}

function init(){
    watchForm();
}

init();