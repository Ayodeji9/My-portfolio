let btn1 = document.querySelector('.btn1')
let arrowR = document.getElementById('arrowR')
let image = document.getElementById('image')
let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let headline = document.getElementById('headline')
let headline1 = document.getElementById('headline1')
let headline2 = document.getElementById('headline2')
let headline3 = document.getElementById('headline3')
let description  = document.getElementById('description')
let description1  = document.getElementById('description1')
let description2  = document.getElementById('description2')
let description3  = document.getElementById('description3')
let content = document.getElementById('content')
let content1 = document.getElementById('content1')
let content2 = document.getElementById('content2')
let content3 = document.getElementById('content3')
let div = document.querySelector('.div')
let div2 = document.querySelector('.div2')
let div5 = document.querySelector('.div5')
let btn = document.getElementById('btn')


btn1.addEventListener('mouseenter',()=>{
    arrowR.classList.toggle('fa-arrow-down')
})
btn1.addEventListener('mouseleave',()=>{
    arrowR.classList.toggle('fa-arrow-down')
})

let url = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=74e1e77fd1454570bc8a3a9b3228e114'





fetch(`${url}`)
 .then(response => response.json())
 .then(data => {
    console.log(data);
    headline.textContent = data.articles[0].title
    document.getElementById('image').src = data.articles[0].urlToImage
    description.textContent = data.articles[0].description
    // content.textContent = data.articles[0].url
    document.getElementById('image1').src = data.articles[1].urlToImage
    headline1.textContent = data.articles[1].title
    description1.textContent = data.articles[1].content
    // content1.textContent = data.articles[1].url
    document.getElementById('image2').src = data.articles[7].urlToImage
    headline2.textContent = data.articles[7].title
    description2.textContent = data.articles[7].description
    // content2.textContent = data.articles[7].url
    document.getElementById('image3').src = data.articles[15].urlToImage
    headline3.textContent = data.articles[15].title
    description3.textContent = data.articles[15].description
    content3.setAttribute('href',data.articles[15].url)
    content2.setAttribute('href',data.articles[7].url)
    content1.setAttribute('href',data.articles[1].url)
    content.setAttribute('href',data.articles[0].url)
    // console.log(content3.getAttribute('href'));
 });



