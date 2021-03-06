//Setup Arrays that will hold the x,y,z of each element.
var x = new Array();
var y = new Array();
var z = new Array();
 
//Get the list of items.
var items = $('li');
 
//Animate the items.
function animate()
{
    
    //Step through each item.
    for(i = items.length - 1; i >= 0; i--){
        
        
        //variables for movement.         
        var xVar = 50 + x[i]            // x value
        var yVar = 50 + y[i] * z[i]++;  // y value, move towards bottom of screen
        var zVar = 10 * z[i]++;         // z value, text get larger.
        
        
        //Check to see if text position is still on the screen.
        // the #'s are %.   100 is far right or bottom, 0 is top or left.
        // for z value it's the font size in %.
        if (!xVar | xVar < 0 | xVar > 90|
            yVar < 0 | yVar > 90 |
            zVar < 0 | zVar > 1500)
        {
            //if it's off the screen randomly pick a starting place.
            x[i]= Math.random() * 2 - 1;
            y[i] = Math.random() * 2 - 1;
            z[i] = 2;
            
        }
        else
        {
            //if it's still on the screen apply the appropiate styles.
            $(items[i]).css("height",'20px');
            $(items[i]).css("position", "relative"); // make sure we can move the text around.
            $(items[i]).css("top", xVar+"%");  // y value
            $(items[i]).css("left", yVar+"%"); // x value
            
            $(items[i]).css("fontSize", zVar+"%"); // font size (illusion of perspective.)
            $(items[i]).css("opacity",(zVar)/3000); // fade in from the distance.
        }
    }
 
    setTimeout(animate, 9);
}
 
animate();