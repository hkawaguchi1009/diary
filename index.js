// Future Diary

/*
Exchange a diary with my self. Allow a user to type a diary, store data (possibly, somewhere online like a server). After 14 diary stored, start to release their diary. 
Inputs are going to be date, text input, and also images. (Skip images for this milestone) 
*/

/*
To do;
Show error message if there is no input
Adjust CSS like a picture I submitted.
Adjust GET and POST method to exchange the diary
Check how many diaries are stored
If the diaries are more than 14, start to show one of them which is randomly chosen
Adjust the result page because it might be super agly
Adjust the color, span, and text messages.
*/


var date = document.getElementById("date");
var title = document.getElementById("title");
var contents = document.getElementById("contents");
                
/*document.getElementById("send").addEventListener('click', function() {
    if (date.value == null){
        document.getElementById("dateErr").style.visibility = "visible"
        event.preventDefault();
    }
    if (title.value.length<0){
        document.getElementById("titleErr").style.visibility = "visible"
        event.preventDefault();
    }
    if (contents.value.length<0){
        document.getElementById("contentsErr").style.visiblity = "visible"
        event.preventDefault();
    }
})
*/
