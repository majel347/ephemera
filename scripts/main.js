//--------------------------------------------------------------

//OPEN NOISE DIV FUNCTION
let openBtn = document.getElementById("openBtn");
let noiseContainer = document.getElementById("noise");
let noiseBox = document.getElementById("video");
let vidBtn = document.getElementById("vidBtn");

noiseBox.src
//CLOSING + OPENING  NOISE BOX
const closeBtn = document.getElementById("closeBtn");
const closeIt = () => { 
    noiseContainer.style.display = "none";
    closeBtn.style.display = "none";
} 
 closeBtn.addEventListener("click", closeIt);


 let openIt = () => {  
    noiseContainer.style.display = 'block'; 
    closeBtn.style.display = 'inline';
    noiseBox.play(); 
};
  
 //--------------------------------------------------------------



//Images
 
    let imgs = [];
    imgs.push ({
        origin: 'czech republic',
        name: 'akimbo',
        link: "assets/cz/cz_akimbo.png",
        video: null,
    });
    imgs.push ({
        origin: 'czech republic',
        name: 'baby tub',
        link: "assets/cz/cz_babytub.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'bow',
        link: "assets/cz/cz_bow.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'ribbon bride',
        link: "assets/cz/cz_bride.png",
        video: null,
    });
   
 imgs.push ({
    origin: 'czech republic',
     name: 'math',
        link: "assets/cz/cz_math.png",
        video: null,
    });
   
    imgs.push ({
        origin: 'czech republic',
         name: 'bear',
            link: "assets/cz/cz_bear.png",
            video: null,
        });
    imgs.push ({
        origin: 'czech republic',
         name: 'preteen',
            link: "assets/cz/cz_preteen.png",
            video: null,
        });
        imgs.push ({
            origin: 'czech republic',
             name: 'teen',
                link: "assets/cz/cz_teen.png",
                video: null,
            });
    imgs.push ({
        origin: 'czech republic',
        name: 'farm break',
        link: "assets/cz/cz_farmbreak.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'flower hats',
        link: "assets/cz/cz_flowerhats.png",
        video:null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'garden tub',
        link: "assets/cz/cz_gardentub.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'handsome friends',
        link: "assets/cz/cz_handsome.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'ice cream cart',
        link: "assets/cz/cz_icecream.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'jawa riders',
        link: "assets/cz/cz_jawa.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'laughing',
        link: "assets/cz/cz_laughing.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'motorcycle race',
        link: "assets/cz/cz_motorace.png",
        video: null,
    });

 imgs.push ({
  origin: 'czech republic',
  name: 'horses',
  link: "assets/cz/cz_horses.png",
   video: null,
 });

    imgs.push ({
        origin: 'czech republic',
        name: 'foot race',
        link: "assets/cz/cz_run.png",
        video: null,
    
    });
    imgs.push ({
        origin: 'czech republic',
        name: 'spa',
        link: "assets/cz/cz_spa.png",
        video: null,
    });

    imgs.push ({
        origin: 'czech republic',
        name: 'triplets',
        link: "assets/cz/cz_tripletbride.png",
        video: null,
    });


    imgs.push ({
        origin: 'czech republic',
        name: 'fashionable toddlers',
        link: "assets/cz/cz_toddlers.png",
        video: null,
    });

 imgs.push ({
 origin: 'czech republic',
 name: 'gun',
 link: "assets/cz/cz_gun.png",
  video:null,
  });

 imgs.push ({
   origin: 'czech republic',
     name: 'class',
       link: "assets/cz/cz_class.png",
    video:null,
  });

 
  
//find the html location
let container = document.getElementById('arrayCtr');

//--------------------------------------------------------------

//for each loop will go through each item in the array

imgs.forEach(function(d){
  let newImg = document.createElement('img');
  newImg.src = d.link; 
  newImg.style.left = Math.random() * 45  + '%';
newImg.style.top = Math.random() * 50  + '%';

//ALL IMAGES
//for each click  add zoom effect on click

    newImg.addEventListener('click',function() {
     
    if(newImg.classList.contains('imgZoom')) 
    { 
        newImg.classList.remove("imgZoom"); 
    } 
    else { 
        newImg.classList.add("imgZoom"); 
    }  
});
//for each click to add zIndex adjustment
     
newImg.addEventListener('click',function() {
    if (newImg.style.zIndex < 120) 
    { 
        newImg.style.zIndex = 120;  
    } 
    else { 
        newImg.style.zIndex = 1; 
    }      
});
    container.appendChild(newImg);    
});

 

 //VIDEO STUFF

   /**click function for the image of the image **/
   /** WET CODE ALERT */
 

var videosList = [
    "assets/cz/cz_deer_video.mov",
    "assets/cz/cz_hoopboy_video.mov",
    "assets/cz/cz_pier_video.mov",
    "assets/cz/cz_walking_video.mov",
];

window.onload = function() {
    // for videos
      var vid = document.createElement('source');
      vid.src = videosList[0]; // playing first video in the array by default
      document.getElementById('video').appendChild(vid)};  

clickFn = function(e){
        var video = document.getElementById('video');
        video.src = videosList[parseInt(e.srcElement.id,4)];
        
        noiseContainer.style.display = 'block'; 
        closeBtn.style.display = 'inline';
        video.getElementById.video.play();
   } ;
 
var videoImgs = [
    "assets/cz/cz_deer_x.png", 
    "assets/cz/cz_hoopboy_x.png", 
    "assets/cz/cz_pier_x.png", 
    "assets/cz/cz_walking_x.png" ];

 
var allPics=videoImgs.length;

     
var i = 0;

for (; i < allPics; i++) {
  var a = document.createElement('a');
  // a.href = 'example.html';
  var img = document.createElement('img');
  img.src = videoImgs[i];
  img.id = i; // for the reference of clicked image
  a.appendChild(img);
  document.getElementById('arrayCtr').appendChild(a);
  img.style.left = Math.random() * 45  + '%';
  img.style.top = Math.random() * 45  + '%' ; 
  
 
  a.addEventListener("click", clickFn, false); 
    };     
 
    

 
 //--------------------------------------------------------------

 //REMIX FUNCTION

const restartBtn = document.getElementById("restartBtn");
const newArray = ()=> {
     location.reload();
     }
restartBtn.addEventListener ("click", newArray);
 
console.log ("hello world??");