let testText="The quick brown fox jumps over the Lazy dog";
let startTime,endTime;

function startTest(){
    document.getElementById('inputText').value=testText;

    //reset results and timer
    document.getElementById('output').innerHTML='';
    startTime=new Date().getTime();

    //change button text and functionality
    var button=document.getElementById('btn');
    button.innerHTML="End test";
    button.onclick=endTest;
}

function endTest(){
    endTime=new Date().getTime();

    //disable user input
    document.getElementById('userInput').readOnly=true;
    
    //calculate time elapsed and words per minute(WPM)
    var timeElapsed=(endTime-startTime)/1000; //in seconds
    var userTypedText=document.getElementById('userInput').value;

    //split the text using regex to count words correctly
    var typeWords=userTypedText.split(/\s+/).filter(function(word){
        return word !=="";
    }).length;

    var wpm=0;

    if(timeElapsed !==0 && !isNaN(typeWords)){
        wpm=Math.round((typeWords/timeElapsed)*60);
    }

    //display the results
    var outputDiv=document.getElementById('output');
    outputDiv.innerHTML="<h2>Typing test results:</h2>"+
    "<p>Words typed:"+typeWords+"</p>"+"<p>Time elapsed:"+timeElapsed.toFixed(2)+"seconds</p>"+
    "<p>words per minute (WPM): "+wpm+"</p>";

    //reset the button
    var button=document.getElementById("btn");
    button.innerHTML="Start test";
    button.onclick=startTest;
    

}