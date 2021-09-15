const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1: 1,
        name_of_person1: "Register Page",
        designation_of_person1: "",

        image_of_person1: "assets/images/projectimage/2/1.jpg",
        message_reference1: "New user can register here.",


        slnumber2: 2,
        name_of_person2: "Login Page",
        designation_of_person2: "",

        image_of_person2: "assets/images/projectimage/2/2.jpg",
        message_reference2: "For login user just need to insert phone number nad passwort",


    },

    {
        slnumber1: 3,
        name_of_person1: "Home Page",
        designation_of_person1: "",
        image_of_person1: "assets/images/projectimage/2/3.jpg",
        message_reference1: "This is the main home page where user can serach many location to find the nearest service.",


        slnumber2: 4,
        name_of_person2: "Profile page",
        designation_of_person2: "",
        image_of_person2: "assets/images/projectimage/2/4.jpg",
        message_reference2: "If user wants to update his information he can edit this pate.",

    },

    {
        slnumber1: 1,
        name_of_person1: "New service Page",
        designation_of_person1: "",
        image_of_person1: "assets/images/projectimage/2/5.jpg",
        message_reference1: "to Add a new servive or to view all the existing service user need to visit this page.",


        slnumber2: 1,
        name_of_person2: "Service Register Page.",
        designation_of_person2: "",
        image_of_person2: "assets/images/projectimage/2/6.jpg",
        message_reference2: "This is the main page to updaed the address or locaiton of the service.",

    }
];
AOS.init();
const fillData = () => {
    let output = "";

    references.forEach(
        ({ slnumber1, image_of_person1, name_of_person1, designation_of_person1, message_reference1, absbox_for_linkedin1, slnumber2, image_of_person2, name_of_person2, designation_of_person2, message_reference2, absbox_for_linkedin2 }) =>

        (output += `
        
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image_of_person1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image_of_person1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name_of_person1} </a> 
                    <div> ${designation_of_person1} </div> <div class="rConferences">  
                        <div class="referenceY">${message_reference1}</div>
                    </div>
        
                    
                    
                   
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image_of_person2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name_of_person2} </a> 
                            <div> ${designation_of_person2} </div> <div class="rConferences">
                                <div class="referenceY">${message_reference2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image_of_person2}" class="rImg1"></td>
                    </tr> 
            
            
            `)
    );


    referenceTable.innerHTML = output;









}





document.addEventListener("DOMContentLoaded", fillData);
