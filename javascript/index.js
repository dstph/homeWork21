let inputRandom = document.querySelector('#random');
let inputCategory = document.querySelector('#category');
let inputSearch = document.querySelector('#search');
let form = document.querySelector('form');
let categorySelector = document.querySelector('.categoryselector');
let inputCategorySelector = document.querySelectorAll('input[name="category"]');
let getJoke = document.querySelector('.getJoke');
let searchValue = document.querySelector('.searchValue');
let joke = document.querySelector('.joke')


fetch('https://api.chucknorris.io/jokes/categories')
	.then(
		response => response.json()
	)
	.then(
		data => {
			categorySelector.innerHTML = data.map(elem => `<label class="jokeClass"><input name="test" class="jokeClassInput" type="radio" value="${elem}">${elem}</label>`).join('');
		}
	)
	.then(
		()=>{
			return jokeClassInput = document.querySelectorAll('.jokeClassInput')
		}
	)
	.then(
		data => {
			for(let i=0 ; i<data.length; i++){
				data[i].addEventListener("click", chooseSecond);
			}
		}
	)

for(let i=0 ; i<inputCategorySelector.length; i++){
	inputCategorySelector[i].addEventListener("click", (choose));
}

function choose(){
	document.querySelector(".active").classList.remove("active");
	this.classList.add("active");
	if(inputCategory.classList.contains('active')){
		categorySelector.style.display = "flex";
	}  else{
		categorySelector.style.display = "none"
	}
}
function chooseSecond(){
	if(document.querySelector(".activeJoke")){
		document.querySelector(".activeJoke").classList.remove("activeJoke");
	}
	this.classList.add("activeJoke");
	if(document.querySelector(".blackLetters")){
		document.querySelector(".blackLetters").classList.remove("blackLetters");
	}
	this.parentNode.classList.add("blackLetters");
}
getJoke.addEventListener("click",writeJoke);

function writeJoke(evt){
	evt.preventDefault();
	let json;
	if(inputRandom.checked){
		json = 'https://api.chucknorris.io/jokes/random';
	} else if(inputCategory.checked){
		let checkedCategory = document.querySelector('input[name="test"]:checked').value;
		json = `https://api.chucknorris.io/jokes/random?category=${checkedCategory}`
		
	} else if(inputSearch.checked){
		let value = searchValue.value;
		json = `https://api.chucknorris.io/jokes/search?query=${value}`;
		console.log(json);
	}
	fetch(json)
		.then(
			(data)=>data.json()
		)
		.then((data) => {
    		joke.innerHTML = `<div class="jokeBody">
								<div class="id">${data.id}</div>
								<div class="jokeText">${data.value}</div>
							</div>`
  });

}

function flexOrNone(){
if(inputCategory.classList.contains('active')){
		categorySelector.style.display = "flex";
	}  else{
		categorySelector.style.display = "none"
	}
}