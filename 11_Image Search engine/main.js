const accessKey = "QBuLvhnVQ5ng_hoiHEb2WAwEDVj4MYMzgBJMmU8VAgE"

const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const showResult = document.getElementById('show-result')
const showMoreBtn = document.getElementById('show-more-btn')


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const API = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`


    const response = await fetch(API);
    const data = await response.json();


    if(page ===1) {
        showResult.innerHTML = "";
    }
   
    const results = data.results;

    results.map( (result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;


        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";


        imageLink.appendChild(image)

        showResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = 'block';
    
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    page = 1
    searchImages()
})

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImages()

})