const toggleTag = document.querySelector("a.toggle-nav");
//const headerTag = document.querySelector("header");
const containerTag = document.querySelector(".container");
//const imgTag = document.querySelector("img");



//when i click toggleTag toggle class of open on the main tag
//and if its open, toggle say closed
//and if its closed toggle say close
toggleTag.addEventListener("click", function(){
	//headerTag.classList.toggle("open");
	//imgTag.classList.toggle("open");
	containerTag.classList.toggle("open");
	


  
	if(containerTag.classList.contains("open")){
		toggleTag.innerHTML = `<img src="img/close.svg">`;
			}else{
		toggleTag.innerHTML = `<img src="img/menu.svg">`;
	}
  
})