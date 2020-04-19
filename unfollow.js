// copy from here 
var i=1;
var j=0;
// stop here and paste in console window and enter

//2. copy from here
function myLoop () { 
    var a= document.getElementsByClassName("qbutton_small");
    try{
        var c=document.getElementsByClassName("infiniteInfoBox");
        c[0].click(); 
        console.log("new page");
    } catch(e){
        console.log(" failed to load new page, trying again...");
    }
    try {
        var d=document.getElementsByClassName("qbutton");
        if (d[0].innerText=="Remove follower") {
            d[0].click(); 
            console.log("Deactivated account unfollowed");
        }
        
    } catch (error) {
        console.log(" continuing");
    }
    if(a[i].innerText=="Unfollow"){
        a[i].click();
        j++;
        console.log("Unfollowed "+j +"active people");  
    }  
    window.scrollTo(0,document.body.scrollHeight);  // for scrolling everytime
    setTimeout(function () {        //  call a 3s setTimeout when the loop is called
        i++;                        // Counter
        console.log(i);             //  increment the counter
        if (i < a.length) {               
            myLoop();               //   again which will trigger another
        }                        
    }, 500)                         // delay b/w each unfollow in milliseconds( increase or decrease depending ur internet speed)
    console.log(" task in progress !! if page crashed.. run  again");
}
// stop here and paste and enter

//3. copy till end and paste and  hit enter
myloop();           //rerun this line if page crashes oe script stops suddenly.