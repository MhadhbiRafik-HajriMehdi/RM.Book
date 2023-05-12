// const carousel = document.querySelector('.carousel');
// const images = carousel.querySelectorAll('img');
// const interval = 3000;
// let index = 0;


// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// var swiper = new Swiper(".home-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".room-slider", {
//     spaceBetween: 20,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".gallery-slider", {
//     spaceBetween: 10,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 10,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

// let accordions = document.querySelectorAll('.faqs .row .content .box');

// accordions.forEach(acco =>{
//     acco.onclick = () =>{
//         accordions.forEach(subAcco => {subAcco.classList.remove('active')});
//         acco.classList.add('active');
//     }
// })

// $(".btn").on("click",function(){
//     console.log("clicked")
// })





// setInterval(() => {
//   images[index].classList.remove('active');
//   index = (index + 1) % images.length;
//   images[index].classList.add('active');
// }, interval);

var hotels= [
    {
      "name": "Isla Bella Beach Resort & Spa - Florida Keys",
      "country": "USA",
      "price": 301,
      "room": [],
      "location": "sea",
      "photos": [
        "./hotels/1.jpg",
        "./hotels/2.jpg",
        "./hotels/3.jpg",
        "./hotels/4.jpg",
        "./hotels/5.jpg"
      ]
    },
    {
        "name": "The Miami Beach EDITION",
        "country": "USA",
        "price": 99,

"room": [],        "location": "sea",
        "photos": [
          "./hotels/6.jpg",
          "./hotels/7.jpg",
          "./hotels/8.jpg",
          "./hotels/9.jpg",
          "./hotels/10.jpg"
        ]
      },
      {
        "name": "The Tampa EDITION",
        "country": "USA",
        "price": 305,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/11.jpg",
          "./hotels/12.jpg",
          "./hotels/13.jpg",
          "./hotels/14.jpg",
          "./hotels/15.jpg"
        ]
      },
      {
        "name": "Hotel Hive",
        "country": "USA",
        "price": 199,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/16.jpg",
          "./hotels/17.jpg",
          "./hotels/18.jpg",
          "./hotels/19.jpg",
          "./hotels/20.jpg"
        ]
      },
      {
        "name": "Eaton DC",
        "country": "USA",
        "price": 210,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/21.jpg",
          "./hotels/22.jpg",
          "./hotels/23.jpg",
          "./hotels/24.jpg",
          "./hotels/25.jpg"
        ]
      },
      {
        "name": "Omni Shoreham Hotel",
        "country": "USA",
        "price": 310,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/26.jpg",
          "./hotels/27.jpg",
          "./hotels/28.jpg",
          "./hotels/29.jpg",
          "./hotels/30.jpg"
        ]
      },
      {
        "name": "Hasbrouck House, New York",
        "country": "USA",
        "price": 750,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/31.jpg",
          "./hotels/32.jpg",
          "./hotels/33.jpg",
          "./hotels/34.jpg",
          "./hotels/35.jpg"
        ]
      },
      {
        "name": "Brush Creek Ranch, Wyoming",
        "country": "USA",
        "price": 620,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/36.jpg",
          "./hotels/37.jpg",
          "./hotels/38.jpg",
          "./hotels/39.jpg",
          "./hotels/40.jpg"
        ]
      },
      {
        "name": "Twin Farms, Vermont",
        "country": "USA",
        "price": 550,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/41.jpg",
          "./hotels/42.jpg",
          "./hotels/43.jpg",
          "./hotels/44.jpg",
          "./hotels/45.jpg"
        ]
      },
    {
        "name": "Iberostar Selection Kuriat Palace",
        "country": "Tunisia",
        "price": 350,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/46.jpg",
          "./hotels/47.jpg",
          "./hotels/48.jpg",
          "./hotels/49.jpg",
          "./hotels/50.jpg"
        ]
      },
      {
        "name": "LA CIGALE TABARKA HÔTEL",
        "country": "Tunisia",
        "price": 750,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/51.jpg",
          "./hotels/52.jpg",
          "./hotels/53.jpg",
          "./hotels/54.jpg",
          "./hotels/55.jpg"
        ]
      },
      {
        "name": "Hotel Bel Azur Thalasso & Bungalows",
        "country": "Tunisia",
        "price": 200,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/56.jpg",
          "./hotels/57.jpg",
          "./hotels/58.jpg",
          "./hotels/59.jpg",
          "./hotels/60.jpg"
        ]
      },
      {
        "name": "Hotel Carlton",
        "country": "Tunisia",
        "price": 150,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/61.jpg",
          "./hotels/62.jpg",
          "./hotels/63.jpg",
          "./hotels/64.jpg",
          "./hotels/65.jpg"
        ]
      },
      {
        "name": "Marigold Hotel",
        "country": "Tunisia",
        "price": 85,

"room": [],        "location": "Capital city",
        "photos": [
          "./hotels/66.jpg",
          "./hotels/67.jpg",
          "./hotels/68.jpg",
          "./hotels/69.jpg",
          "./hotels/70.jpg"
        ]
      },
      {
        "name": "Palais Bayram",
        "country": "Tunisia",
        "price": 140,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/71.jpg",
          "./hotels/72.jpg",
          "./hotels/73.jpg",
          "./hotels/74.jpg",
          "./hotels/75.jpg"
        ]
      },
      {
        "name": "CHALET ROYAL sinevro",
        "country": "Tunisia",
        "price": 550,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/76.jpg",
          "./hotels/77.jpg",
          "./hotels/78.jpg",
          "./hotels/79.jpg",
          "./hotels/80.jpg"
        ]
      },
      {
        "name": "Giova's House",
        "country": "Tunisia",
        "price": 400,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/81.jpg",
          "./hotels/82.jpg",
          "./hotels/83.jpg",
          "./hotels/84.jpg",
          "./hotels/85.jpg"
        ]
      },
      {
        "name": "Twin Farms, Vermont",
        "country": "Tunisia",
        "price": 290,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/86.jpg",
          "./hotels/87.jpg",
          "./hotels/88.jpg",
          "./hotels/89.jpg",
          "./hotels/90.jpg"
        ]
      },
    {
      "name": "Maison Saint-Vincent By Maisons & co",
      "country": "Canada",
      "price": 150,
      "room": [],
      "location": "sea",
      "photos": [
        "./hotels/91.jpg",
          "./hotels/92.jpg",
          "./hotels/93.jpg",
          "./hotels/94.jpg",
          "./hotels/95.jpg"
      ]
    },
    {
        "name": "Sandman Hotel Montreal",
        "country": "Canada",
        "price": 240,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/96.jpg",
            "./hotels/97.jpg",
            "./hotels/98.jpg",
            "./hotels/99.jpg",
            "./hotels/100.jpg"
        ]
      },
      {
        "name": "Hotel L'Express",
        "country": "Canada",
        "price": 520,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/101.jpg",
            "./hotels/102.jpg",
            "./hotels/103.jpg",
            "./hotels/104.jpg",
            "./hotels/105.jpg"
        ]
      },
      {
        "name": "Hilton Garden Inn Montreal",
        "country": "Canada",
        "price": 450,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/106.jpg",
            "./hotels/107.jpg",
            "./hotels/108.jpg",
            "./hotels/109.jpg",
            "./hotels/110.jpg"
        ]
      },
      {
        "name": "Hotel Faubourg Montreal ",
        "country": "Canada",
        "price": 330,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/111.jpg",
            "./hotels/112.jpg",
            "./hotels/113.jpg",
            "./hotels/114.jpg",
            "./hotels/115.jpg"
        ]
      },
      {
        "name": "Hotel Ruby Foo",
        "country": "Canada",
        "price": 90,

"room": [],        "location": "Capital city",
        "photos": [
          "./hotels/116.jpg",
            "./hotels/117.jpg",
            "./hotels/118.jpg",
            "./hotels/119.jpg",
            "./hotels/120.jpg"
        ]
      },
      {
        "name": "DoubleTree by Hilton",
        "country": "Canada",
        "price": 410,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/121.jpg",
            "./hotels/122.jpg",
            "./hotels/123.jpg",
            "./hotels/124.jpg",
            "./hotels/125.jpg"
        ]
      },
      {
        "name": "Holiday Inn Express",
        "country": "Canada",
        "price": 250,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/127.jpg",
            "./hotels/128.jpg",
            "./hotels/129.jpg",
            "./hotels/126.jpg",
            "./hotels/130.jpg"
        ]
      },
      {
        "name": "Maison Saint-Vincent By Maisons & co",
        "country": "Canada",
        "price": 50,

"room": [],        "location": "countryside",
        "photos": [
          "./hotels/131.jpg",
            "./hotels/132.jpg",
            "./hotels/133.jpg",
            "./hotels/134.jpg",
            "./hotels/135.jpg"
        ]
      },
    {
      "name": "Hotel Le Negresco",
      "country": "France",
      "price": 700,
      "room": [],
      "location": "sea",
      "photos": [
        "./hotels/136.jpg",
        "./hotels/137.jpg",
        "./hotels/138.jpg",
        "./hotels/139.jpg",
        "./hotels/140.jpg"
      ]
    },
    {
        "name": "Boscolo Nice Hotel & Spa",
        "country": "France",
        "price": 401,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/141.jpg",
          "./hotels/142.jpg",
          "./hotels/143.jpg",
          "./hotels/144.jpg",
          "./hotels/145.jpg"
        ]
      },
      {
        "name": "Hotel C",
        "country": "France",
        "price": 260,
        "room": [],
        "location": "sea",
        "photos": [
          "./hotels/146.jpg",
          "./hotels/147.jpg",
          "./hotels/148.jpg",
          "./hotels/149.jpg",
          "./hotels/150.jpg"
        ]
      },
      {
        "name": "Hotel du Collectionneur",
        "country": "France",
        "price": 210,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/151.jpg",
          "./hotels/152.jpg",
          "./hotels/153.jpg",
          "./hotels/154.jpg",
          "./hotels/155.jpg"
        ]
      },
      {
        "name": "Hôtel Paris Bastille Boutet",
        "country": "France",
        "price": 501,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/156.jpg",
          "./hotels/157.jpg",
          "./hotels/158.jpg",
          "./hotels/159.jpg",
          "./hotels/160.jpg"
        ]
      },
      {
        "name": "Paris Marriott Champs Elysees Hotel",
        "country": "France",
        "price": 450,
        "room": [],
        "location": "Capital city",
        "photos": [
          "./hotels/161.jpg",
          "./hotels/162.jpg",
          "./hotels/163.jpg",
          "./hotels/164.jpg",
          "./hotels/165.jpg"
        ]
      },
      {
        "name": "Gite le Grand Renaud",
        "country": "France",
        "price": 310,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/166.jpg",
          "./hotels/167.jpg",
          "./hotels/168.jpg",
          "./hotels/169.jpg",
          "./hotels/170.jpg"
        ]
      },
      {
        "name": "Les chalets de Pré Clos en Vercors",
        "country": "France",
        "price": 190,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/171.jpg",
          "./hotels/172.jpg",
          "./hotels/173.jpg",
          "./hotels/174.jpg",
          "./hotels/175.jpg"
        ]
      },
      {
        "name": "Résidence Le Jarbay",
        "country": "France",
        "price": 210,
        "room": [],
        "location": "countryside",
        "photos": [
          "./hotels/176.jpg",
          "./hotels/177.jpg",
          "./hotels/178.jpg",
          "./hotels/179.jpg",
          "./hotels/180.jpg"
        ]
      }
  ]
let index=0

$(".take-look").on('click',function(){
    $(location).attr("href","#countrySection")
})
$(document).ready(function() {
    var hotelss = [
       [ "./hotels/france.jpg","france"],
       [ "./hotels/canada.jpg","canada"],
       [ "/hotels/126.jpg","america"],
       [ "./hotels/tunisia.jpg","tunisia"],

    ];
    
    hotelss.forEach(ele=>{
        var imageDiv = $('<div class="image"></div>');
        var image = $('<img id="' + ele[1] + '" src="' + ele[0] + '">');
        
        imageDiv.append(image);
        $('.container').append(imageDiv);

    })
});


document.body.addEventListener("click",function(e){
  if(e.target.id==="france"||e.target.id==="canada"||e.target.id==="america"||e.target.id==="tunisia"){
    window.location.href = `${e.target.id}.html`; 
  }
     
})

let america=hotels.filter(ele=>ele["country"]==="USA")
let canada=hotels.filter(ele=>ele["country"]==="Canada")
let tunisia=hotels.filter(ele=>ele["country"]==="Tunisia")
let france=hotels.filter(ele=>ele["country"]==="France")
console.log(america)
console.log(canada)
console.log(tunisia)
console.log(france)

function display(classs,arr){

for(let i=0;i<arr.length;i++){
  let div=document.createElement("div")
  div.classList="item-card"
  let img=document.createElement("img")
  img.setAttribute("src",`${arr[i].photos[0]}`)
  console.log(`${arr[i].photos[0]}`)
  img.classList="item-img"
  let p=document.createElement("p")
  p.appendChild(document.createTextNode(`${arr[i].name}`))
 let span=document.createElement("span")
 span.appendChild(document.createTextNode(`${arr[i].price} DT`))
 let descDiv=document.createElement("div")
 descDiv.classList="descDiv"
 descDiv.append(p)
 descDiv.append(span)
 div.appendChild(img)
 div.appendChild(descDiv)

  $(`.${classs}`).append(div)


}
}
display("america-container",america)
display("france-container",france)
display("canada-container",canada)
display("tunisia-container",tunisia)


