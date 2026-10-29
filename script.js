
function showWelcome() {
    alert("Greetings from Lesotho, let the mountains and culture, and scenery draw you in.");
}

const galleryPhoto= [
    {
        src:"phothos/Afriski Les..jpg", caption: "Afriski Lesotho", alt: "Explore Afriski Lesotho" 
    },

    {
        src:"phothos/Qiloane.jpg", caption: "Qiloane mountain in Lesotho", alt: "Qiloane inspiration for the Basotho hat "
    },

    {
        src:"phothos/Sain Pass.jpg", caption: "Sani Pass", alt:"Mountain scenery at sain pass"
    },

    {
        src:"phothos/Litolobonya.jpg", caption: "Litolobonya Cultural Activity", alt: "Lesotho cultural activities"
    },

    {
        src:"phothos/Maletssunyane 2.jpg", caption: "Maletsunyane falls", alt: "Maletsunyane falls in Lesotho"
    },

    {
        src:"phothos/Cultural village.jpg.png", caption: "Cultural village", alt: "Traditional Basotho Cultural Village showing huts and local heritagee in Lesotho"

    },

    {
        src:"phothos/Katse_Dam (1).jpg", caption: "Katse Dam", alt: "Katse dam in Lesotho surrounded be mountains an holding water for the LHWP"

    },

    
    {
        src:"phothos/mountains.jpg.jpg", caption: "Lesotho Mountains", alt:"Beautiful Lesotho Mountains with towering peaks and scenic highlands landscape"

    }
];

let currentPhoto = 0;
function displayPhoto() {
    const image= document. getElementById("galleryPhoto");
const caption= document. getElementById("photoCaption");

image.src = galleryPhoto[currentPhoto].src; 
image.alt= galleryPhoto[currentPhoto].alt; 
caption.textContent=galleryPhoto[currentPhoto].caption;
}

function nextPhoto() {
    currentPhoto = (currentPhoto + 1 ) % galleryPhoto.length; 
    displayPhoto();
}

function previousPhoto() {
    currentPhoto= (currentPhoto - 1 + galleryPhoto.length ) % galleryPhoto . length;
    displayPhoto();
}

const contactForm= document.getElementById ("contactForm");
if (contactForm){
    contactForm.addEventListener ("submit", function(event){
        event.preventDefault();
        console.log("submitted");
        const name= document.getElementById ("Name").value .trim();
        if(name===""){
            valid=false;
            console.log("name check ran");
            document.getElementById("Name").classList.add("is-invalid");
            document.getElementById("Name").nextElementSibling.textContent="Please enter your full name.";
        }
        console.log("valid is" ,valid==true)
        if(! contactForm.checkValidity()) {
            contactForm.reportValidity(); 
            return;
        }
        alert("Thank you! your enquiry has been successfully submitted");
        contactForm.reset();
    });
};

