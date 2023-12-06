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
        name: 'deer',
        link: "assets/cz/cz_deer_x.png",
        video: "assets/cz/cz_deer_video.mov",
    });
    imgs.push ({
        origin: 'czech republic',
        name: 'boy with hoop',
        link: "assets/cz/cz_hoopboy_x.png",
        video: "assets/cz/cz_hoopboy_video.mov",
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
        name: 'on the pier',
        link: "assets/cz/cz_pier_x.png",
        video: "assets/cz/cz_pier_video.mov"
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
        name: 'walking friends',
        link: "assets/cz/cz_walking_x.png",
        video:"assets/cz/cz_walking_video.mov"
    });

    imgs.push ({
        origin: 'italy',
        name: 'arch view',
        link: "assets/italy/italy_venice1_x.png",
        video:"assets/italy/italy_venice_vid1.mp4",
    });

    let noiseImgs = [];
  

//find the html location
let container = document.getElementById('arrayCtr');

//for each loop will go through each item in the array

imgs.forEach(function(d){
  let newImg = document.createElement('img');
   newImg.src = d.link; 
  newImg.style.left = Math.random() * 40  + '%';
    newImg.style.top = Math.random() * 40  + '%';

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
        newImg.style.zIndex = 3; 
    }      
});
    container.appendChild(newImg);    


//ANIMATION IMAGES ONLY
//for each image loop to roll over with border for video images

 
newImg.addEventListener('mouseover',function() {
    if(d.video.assets) 
        { 
            newImg.classList.add("hoverstate"); 
        } 
        else { 
            newImg.classList.add("hoverstate"); 
        }  
    });
    
    newImg.addEventListener('mouseout',function() {
        if(d.video.assets) 
            { 
                newImg.classList.contains("hoverstate"); 
            } 
            else { 
                newImg.classList.remove("hoverstate"); 
            }  
        });
//OPEN NOISE DIV FUNCTION
let openBtn = document.getElementById("openBtn");
let noiseContainer = document.getElementById("noise");
 

//CLOSING + OPENING  NOISE BOX
const closeBtn = document.getElementById("closeBtn");
const closeIt = () => { 
    noiseContainer.style.display = "none";
    closeBtn.style.display = "none";
} 
 closeBtn.addEventListener("click", closeIt);


 let openIt = () => {  
    noiseContainer.style.display = 'block'; 
     closeBtn.style.display = 'inline';};
      
//test button:
openBtn.addEventListener("click", openIt);
 
 
//images as buttons
 
newImg.addEventListener("click",function() {
    if(d.video.assets) { 
      noiseContainer.style.display = 'block';
      noiseContainer.style.zIndex = "100";
     closeBtn.style.display = 'inline';
}  
    });
 
});        
 
 

 //REMIX FUNCTION

const restartBtn = document.getElementById("restartBtn");
const newArray = ()=> {
     location.reload();
     }
restartBtn.addEventListener ("click", newArray);
 
console.log ("hello world??");
 
 
//video play 

clickFn = function(e){
    var video = document.getElementById('video');
    video.src = videosList[parseInt(e.srcElement.id,10)];
    video.play();
}


 
