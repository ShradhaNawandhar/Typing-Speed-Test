const senetence = ["Seen from the sky, the river looked like a huge snake.", "How many hours a day do you spend in your office?", "	Tom's speech was excellent.", "Don’t worry, be happy!", "Never do that again or I won't be your friend", "Alone in the big city, I began to get homesick."];

//Get all the elements w.r.t. ids
const msg = document.getElementById("msg")
const Text = document.getElementById("TextArea")
const instruction = document.getElementById("instruction")
const btn = document.getElementById("btn")

Text.disabled = true;//This is to diable the text area in begining.

let StartTime, EndTime;

const BeginTest = () => {
    let randomNum = Math.floor(Math.random() * senetence.length);//random function is used to generate random number and  we multiply it with length of the array we get our result in aur range
    msg.innerText = senetence[randomNum];
    //To get the time we use date object
    let date = new Date();
    StartTime = date.getTime();
    instruction.innerText = "Write the below sentence in text field.";//Give instruction
    btn.innerText = "Done";//Change button from start to done
}

const EndTest = () => {
    let date = new Date();
    EndTime = date.getTime();
    let totalTime = (EndTime - StartTime) / 1000;//here we find total time nd now here we r dividing it by 1000 so as to recieve answer in seconds instead of mili seconds as getTime function returns time in miliseconds
    console.log(totalTime)

    let totalString = Text.value;
    let wordCount = wordCounter(totalString);
    let speed=Math.round((wordCount/totalTime)*60)//we multiplied into 60 as one min has 60 seconds
    
    //To check correct and error words
    let Errorword= CompareWords(msg.innerText,totalString); 
    
    let finalMsg=`You typed total at speed ${speed} words per miniute.`;
    instruction.innerText="Thankyou for taking the test. If you want to retake the test click on Start button again";
    msg.innerHTML=finalMsg+"<br>"+Errorword;     
    btn.innerText = "Start";
}

function wordCounter(str) {
    let response = str.split(" ").length;
    return response;
}


function CompareWords(orgStr,TypedStr){
    let Word1 = orgStr.split(" ");
    let Word2 = TypedStr.split(" ");
    let count=0;
    //forEach calls the function for each array element
    Word1.forEach(function(item,index){
        if(item==Word2[index])
            count=count+1;        
    });
    return `${count} words correct of ${Word1.length} and the total no. of errors are ${Word1.length-count}`;
}


btn.addEventListener('click', function () {
    //On pressing the start button text area must be activated else it should be disabled
    if (this.innerText == "Start") {
        Text.disabled = false;
        Text.value="";
        BeginTest();
    }
    else if (this.innerText = "Done") {
        Text.disabled = true;
        EndTest();
    }

})
