let searchBox = document.getElementById("input")
let searchBtn = document.getElementById("btn");
let userInfo = document.getElementById("userInfo");
let userImg = document.getElementById("user-image");
let userName = document.getElementById("name");
let portfolio = document.getElementById("portfolio");
let userLocation = document.getElementById("location");
let repo = document.getElementById("repo");
let followers = document.getElementById("followers");
let bio = document.getElementById("bio");

let API = "https://api.github.com/users";

async function getData(userData){
    let response = await fetch(`${API}/${userData}`);
    if(response.status == 404){
        console.log("User not found");
    }
    else{
        let data = await response.json();
        userImg.src = data.avatar_url;
        userName.innerHTML = `Name: ${data.name}`;
        portfolio.innerHTML = `${data.portfolio}`;
        userLocation.innerHTML = `Location: ${data.location}`;
        repo.innerHTML = `Repos: ${data.public_repos}`
        followers.innerHTML = `Followers: ${data.followers}`
        bio.innerHTML = `Bio: ${data.bio}`
        userInfo.style.visibility = "visible"
    }
};

searchBtn.addEventListener("click", ()=>{
    getData(searchBox.value);
});