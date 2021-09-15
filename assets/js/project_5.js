const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1: 1,
        name_of_person1: "Go Game",
        designation_of_person1: "",

        image_of_person1: "assets/images/projectimage/5/2.jpg",
        message_reference1: "This is the board of Go game which contains 8 row and 8 column. Player must choose any cross point",


        slnumber2: 2,
        name_of_person2: "The winning page",
        designation_of_person2: "",

        image_of_person2: "assets/images/projectimage/5/1.jpg",
        message_reference2: "As we can see that the black player already match the cross patter. So in this game this player won the match",


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
