/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu1')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu1')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home-img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 50    }); 

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
// sr.reveal( ".button", { delay: 100 } );
sr.reveal( ".home-img", { delay: 100 } );
sr.reveal( ".home-social-icon", { interval: 100 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 100 } );
sr.reveal( ".about-text", { delay: 100 } );

// Scross main skills mainskills
sr.reveal( ".mainskills", { interval: 50 } );
sr.reveal( ".mskill-img", { delay: 50 } );
sr.reveal( ".mskill-text", { delay: 50 } );
/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 50 } );



sr.reveal(".contact-input", { interval: 100 });


    
document.querySelector("#resume-button-1").addEventListener("click",()=>{
    window.open("./pdfs/Divyam_Resume.pdf")
})


var typing=new Typed(".text", {
    strings: ["", "FULL-STACK", "WEB", "DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 40  ,
    loop: true,
});

let project_NykaaClone = document.getElementById("project_Nykaa-Clone");
let project_MyntraClone = document.getElementById("project_Myntra-Clone");

let project_NykaaClone_Arr = ["./images/projects/Nykaa_Project/Nykaa_Home"];
let project_MyntraClone_Arr = ["./images/projects/Myntra_Project/Myntra_Home"];

project_NykaaClone.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_NykaaClone_Arr.length-1){
            count++;
            project_NykaaClone.src=project_NykaaClone_Arr[count];
        }else{            
            count=0;
            project_NykaaClone.src=project_NykaaClone_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },8000);
})
project_MyntraClone.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<project_MyntraClone_Arr.length-1){
            count++;
            project_MyntraClone.src=project_MyntraClone_Arr[count];
        }else{            
            count=0;
            project_MyntraClone.src=project_MyntraClone_Arr[count];
        }
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },5000);
})