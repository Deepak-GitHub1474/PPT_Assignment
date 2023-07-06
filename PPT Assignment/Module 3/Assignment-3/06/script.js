let hamberger = document.querySelector(".hamberger")
let navUl = document.querySelector(".nav-ul")

hamberger.onclick = ()=>{
	if (hamberger.classList.contains("fa-bars") ) {
		hamberger.classList.remove("fa-bars")
		hamberger.classList.add("fa-circle-xmark")
		navUl.style.visibility = "visible"
		
	} else{
		hamberger.classList.add("fa-bars")
		hamberger.classList.remove("fa-circle-xmark")
		navUl.style.visibility = "hidden"
	}
}