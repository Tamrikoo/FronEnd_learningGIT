var pointCoord = [
    [ 50, 50 ], [ 200, 300 ], [ 900, 130 ], [ 500, 800 ]
];


var personage = {};
function setPersonage () {
    personage = document.createElement ('img')
    personage.src = "http://i.imgur.com/uohQTdJ.gif"
    personage.className = "personage"
    document.body.appendChild (personage)
    personage.coord = pointCoord [0]
    personage.nextPoint = 1
    personage.velocity = 5
    personage.interval = setInterval (mc_personage, 100)
     
     personage.onclick=function(event){
     var images=[
    'http://www.bridgwaterhalfmarathon.co.uk/images/animatedrabbit.gif',
    'http://i.imgur.com/uohQTdJ.gif',
    'http://www.playcast.ru/uploads/2015/04/17/13203755.gif', 
    'http://liubavyshka.ru/_ph/145/1/590468805.jpg?1530647734' ,
    'https://seo-mayak.com/wp-content/uploads/2013/10/animaciya-dlya-saita2.1.gif',
    'http://gifimage.net/wp-content/uploads/2018/06/the-flash-animated-gif-4.gif'
     ]
     var imageIndex = Math.round ( Math.random () * 5 )
    personage.src=images[imageIndex]
       }
}


function mc_personage ( event ) {
	 var dimX = pointCoord [ personage.nextPoint ][0] - 
   						personage.coord [0]
	 var dimY = pointCoord [ personage.nextPoint ][1] - 
   						personage.coord [1]           
   // достигли очередной точки маршрута
	 if ( dimX === 0 && dimY === 0 ) {
   		personage.nextPoint = 
      		personage.nextPoint < pointCoord.length-1 ?
          	personage.nextPoint + 1 : 0
	 }
   personage.style.transform = dimX < 0 ? 
   							"rotateY(180deg)" : "rotateY(0deg)"
	 personage.coord [0] += dimX !== 0 ? 
   				Math.sign(dimX) * personage.velocity : 0
	 personage.coord [1] += dimY !== 0 ? 
   				Math.sign(dimY) * personage.velocity : 0
	 personage.style.left = personage.coord [0] + 'px'
	 personage.style.top = personage.coord [1] + 'px'
	 
}

function manual (event){
  var text=document.createElement("div")
  document.body.appendChild (text)
  text.innerHTML="Нажмите на человечка"
  text.style.color="rgb(220, 245, 2)"
}