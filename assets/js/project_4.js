const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1: 1,
        name_of_person1: "Installation Page",
        designation_of_person1: "",

        image_of_person1: "assets/images/projectimage/4/1 (1).jpg",
        message_reference1: "To use this software you need to install it first",


        slnumber2: 2,
        name_of_person2: "Installation Finished Page",
        designation_of_person2: "",

        image_of_person2: "assets/images/projectimage/4/1 (2).jpg",
        message_reference2: "This software is successfully installed",


    },

    {
        slnumber1: 3,
        name_of_person1: "Login Page",
        designation_of_person1: "This is the login page of this sofware.",
        image_of_person1: "assets/images/projectimage/4/1 (3).jpg",
        message_reference1: "As this software contains important information so I have added the login page so that only authorized user can view the data of this software.",


        slnumber2: 4,
        name_of_person2: "Home page",
        designation_of_person2: "This is the Landing page of this software",
        image_of_person2: "assets/images/projectimage/4/1 (4).jpg",
        message_reference2: "From this page user can move to other pages for their specific reason. I have made each part of this software very clean so that user can find out the information very easily.",

    },

    {
        slnumber1: 1,
        name_of_person1: "New Order",
        designation_of_person1: "",
        image_of_person1: "assets/images/projectimage/4/1 (5).jpg",
        message_reference1: "When a new order is available one must input all the information from this page. Note that only registered customer and registered product that is available can ordered by the system.",


        slnumber2: 1,
        name_of_person2: "Order Detials page",
        designation_of_person2: "",
        image_of_person2: "assets/images/projectimage/4/1 (6).jpg",
        message_reference2: "From this page The author can see al the order list which is ordered when and when the product is delivered. From this page auther also can see the porduct details and customer detials. And if the product is deliverd he mark a order status as delivered.",

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
