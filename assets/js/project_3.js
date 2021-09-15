const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1: 1,
        name_of_person1: "Login Page",
        designation_of_person1: "From This page student and teacher both can logged in",

        image_of_person1: "assets/images/projectimage/3/1 (1).jpg",
        message_reference1: "To login into the website student must enter the id and also have to select the student button and for teacher they also need to use their id and mark the teacher radio button.",


        slnumber2: 2,
        name_of_person2: "Landing Page For Teacher.",
        designation_of_person2: "In this page teacher can view and post any new notice for studnet.",

        image_of_person2: "assets/images/projectimage/3/1 (2).jpg",
        message_reference2: "From this page teacher can see any important notification from the admin page. In addition teacher can also make a new post to send any information to the register student.",


    },

    {
        slnumber1: 3,
        name_of_person1: "Landing Page For Student.",
        designation_of_person1: "Student can read all the notification whics are posted by admin and course teacher.",
        image_of_person1: "assets/images/projectimage/3/1 (8).jpg",
        message_reference1: "This page list all the notice from the teacher and admin panel. Note that the list is sorted by most recent post.",


        slnumber2: 4,
        name_of_person2: "Attendance Page.",
        designation_of_person2: "Teache can take the attendance from this page.",
        image_of_person2: "assets/images/projectimage/3/1 (3).jpg",
        message_reference2: "By default the attendance will always take the current date. It's not possible to take attendance of ther day. But if any mistake occure teacher can update the attendance of any student.",

    },

    {
        slnumber1: 1,
        name_of_person1: "Result Page",
        designation_of_person1: "Teache can view and give score to his course student from this page.",
        image_of_person1: "assets/images/projectimage/3/1 (4).jpg",
        message_reference1: "When the course is over teacher can give them final score. This will count as final result.",


        slnumber2: 1,
        name_of_person2: "Post a Notice",
        designation_of_person2: "When teache need to provide any information the can post it from here.",
        image_of_person2: "assets/images/projectimage/3/1 (5).jpg",
        message_reference2: "From this form teaher can send notification to the registared course student.",

    },

    {
        slnumber1: 1,
        name_of_person1: "Subject Page of Student",
        designation_of_person1: "All the registered subject list",
        image_of_person1: "assets/images/projectimage/3/1 (6).jpg",
        message_reference1: "This page contains all the information of the registerd course of a student.",


        slnumber2: 1,
        name_of_person2: "Results and attendance summery",
        designation_of_person2: "Student can see the results and attendance for each particular subject.",
        image_of_person2: "assets/images/projectimage/3/1 (7).jpg",
        message_reference2: "All the courses result that is taken by the student is stored in this page. Student can also see how many days they were absend and how many days they were present in the class",

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
