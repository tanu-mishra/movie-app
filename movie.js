const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

 const main=document.getElementById("main");
 const form=document.getElementById("form");
 const search=document.getElementById("search");

 function getClassByRate(vote){
   if(vote>=7){
     return "green";
   }
   else{
     return "red";
   }

 };

 function showmovies(movies){
  //  console.log(movies);
  main.innerHTML="";
  movies.forEach(movies => {
    const {title,poster_path,vote_average,overview}=movies;
    const moveiEL=document.createElement("div");
    moveiEL.classList.add("movei");
    moveiEL.innerHTML=`<img src="${IMGPATH+poster_path}" alt"${title}">
    <div class="movei_info">
    ${title}
    </div>
    <span class=${getClassByRate(vote_average)}> voteaverage:${vote_average}</span>

<div class="overview">${overview}</div>`;
    main.appendChild(moveiEL);

  });
}
async function getmovies(url){
  const res=await fetch(url);
  const resdata =await res.json();
  showmovies(resdata.results);
}
getmovies(APIURL);

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const searchterm=search.value;
  if(searchterm){
    getmovies(SEARCHAPI+searchterm);
    search.value="";
  }
});