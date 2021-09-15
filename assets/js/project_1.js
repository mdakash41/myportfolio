const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1: 1,
        name_of_person1: "Login Page",
        designation_of_person1: "Login Page for This Application",

        image_of_person1: "assets/images/projectimage/1/khujun (1).png",
        message_reference1: "You need to log in first if you are not a login user.",


        slnumber2: 2,
        name_of_person2: "Verification Page",
        designation_of_person2: "OTP Verification Page",

        image_of_person2: "assets/images/projectimage/1/khujun (2).png",
        message_reference2: "An OTP is generated for a phone number. For now you can put any four digit to pass this.",


    },

    {
        slnumber1: 3,
        name_of_person1: "User Home Page",
        designation_of_person1: "This is the landing page where user can search the service he wants.",
        image_of_person1: "assets/images/projectimage/1/khujun (3).png",
        message_reference1: "All the category will be listed here. This categoryes are helpful for the user",


        slnumber2: 4,
        name_of_person2: "Search Page",
        designation_of_person2: "To find out the category from a very long list.",
        image_of_person2: "assets/images/projectimage/1/khujun (4).png",
        message_reference2: "When the list is too long user can face problem to find the specific service. Here user can manually search what kind of service he need.",

    },

    {
        slnumber1: 1,
        name_of_person1: "Service Page",
        designation_of_person1: "In this page user can open their own new service.",
        image_of_person1: "assets/images/projectimage/1/khujun (5).png",
        message_reference1: "whenever a person wants to be found himself in the map he need to register here first. If he register here and start a service than after the team approved other user can found him on the service provider list.",


        slnumber2: 1,
        name_of_person2: "New Service",
        designation_of_person2: "This is the form one need to filup when he wants to start a service.",
        image_of_person2: "assets/images/projectimage/1/khujun (6).png",
        message_reference2: "To register a service the account holder must open a service through this page.",

    },

    {
        slnumber1: 1,
        name_of_person1: "Location Pick",
        designation_of_person1: "To mark service location here user must pick the service location.",
        image_of_person1: "assets/images/projectimage/1/khujun (7).png",
        message_reference1: "When a user want to register a service he need to select the exact locaiton. Here I have used to google maps to pick the lcoation. By default it will pick user current location.",


        slnumber2: 1,
        name_of_person2: "Service Created",
        designation_of_person2: "When user successfully register a service this confirmation will pop up.",
        image_of_person2: "assets/images/projectimage/1/khujun (8).png",
        message_reference2: "This notification is to confirm user that yuor service has created.",

    },

    {
        slnumber1: 1,
        name_of_person1: "My Services",
        designation_of_person1: "This page list all the registered service of a user.",
        image_of_person1: "assets/images/projectimage/1/khujun (9).png",
        message_reference1: "From this page user can see the details of all the service he already registered.",


        slnumber2: 1,
        name_of_person2: "Deleting a Service",
        designation_of_person2: "To delete a Service user need to just swap the service tile",

        image_of_person2: "assets/images/projectimage/1/khujun (10).png",
        message_reference2: "Whenever user want to remove a service except from the details page user can also swap the list tile to delte the page.",

    },

    {
        slnumber1: 1,
        name_of_person1: "Setting page",
        designation_of_person1: "From this page user can change the language and also update the image of user.",
        image_of_person1: "assets/images/projectimage/1/khujun (19).png",
        message_reference1: "This is the setting page of user where user can update the self name and image. One can also change the language of the application",


        slnumber2: 1,
        name_of_person2: "User Information",
        designation_of_person2: "Users name and image update page",
        image_of_person2: "assets/images/projectimage/1/khujun (11).png",
        message_reference2: "This page is used to input the user name and also to update the image. User can update image from his drive or he can direct captuture the page.   ",

    },

    {
        slnumber1: 1,
        name_of_person1: "Sub Category Page in Bangla",
        designation_of_person1: "This is the subcategory page of the main category",
        image_of_person1: "assets/images/projectimage/1/khujun (20).png",
        message_reference1: "This page is for to be more specific. This page needs your locaiton info otherwise it will not load",

        slnumber2: 1,
        name_of_person2: "Sub Category Page in English",
        designation_of_person2: "This is the subcategory page of the main category",
        image_of_person2: "assets/images/projectimage/1/khujun (12).png",
        message_reference2: "This page is for to be more specific.  This page needs your locaiton info otherwise it will not load",

    },
    {
        slnumber1: 1,
        name_of_person1: "Service Near your Locaion",
        designation_of_person1: "This page shows the result for your search based on location.",
        image_of_person1: "assets/images/projectimage/1/khujun (13).png",
        message_reference1: "Whenever you search anything this page will load the nearest result for your search. ",


        slnumber2: 1,
        name_of_person2: "Service Details Page",
        designation_of_person2: "This page contains details of that particular subject.",
        image_of_person2: "assets/images/projectimage/1/khujun (14).png",
        message_reference2: "All the information of particular service can be found from this page. One can also call or navigate to the location using goole Maps.",

    },
    {
        slnumber1: 1,
        name_of_person1: "Apps asking for permission to open google map",
        designation_of_person1: "When get direction button pressed App trying to open the location in Google maps.",
        image_of_person1: "assets/images/projectimage/1/khujun (16).png",
        message_reference1: "Using this application user can also loactate the service location through the google maps.",


        slnumber2: 1,
        name_of_person2: "Service Review and comment page.",
        designation_of_person2: "This form is to give a rating and comment about user service.",
        image_of_person2: "assets/images/projectimage/1/khujun (15).png",
        message_reference2: "People can give rating and comment on a service so that other people can find this helpful. This can be also helpful to detect the good and bad service.",


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
