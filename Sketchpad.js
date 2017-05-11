$(document).ready(function () {
    //function to create the original 16x16 grid
    function createGrid(size) {
        for (var i = 0; i < size; i++) {
            var newRow = $('<div class ="row"></div>');
            $('#container').append(newRow);
        }
        
        for (var j = 0; j < size; j++) {
            var newColumn = $('<div class ="column"></div>');
            $('.row').append(newColumn);
        } 
    }
    
    //get size of the grid
    var oldSize = 16;
    createGrid(oldSize);
    
    //get size of each 'pixel'
    var oldPixel = $('.column').outerHeight();
    
    //function to create a new grid based on the old grid dimension
    function newGrid (newSize) {
            $('.row').remove();
            createGrid(newSize);
            $('.column').outerHeight(oldSize*oldPixel/newSize);
            $('.column').outerWidth(oldSize*oldPixel/newSize);
    }
    
    //function to clear all the pixel colors on grid
    function clearGrid () {
            $('.column').css('background-color', '#f2f2f2');
            $('div').off();
    }
   
    //create 'sketch' effect by changing pixel color
    $('div').on('mouseenter', '.column', function() {
        $(this).css('background-color', '#c6e2ff');
    })
    
    //click clear button to create a new grid
    $('#sizeButton').on('click', function() {
        var newColumn = prompt("Pick a number between 1 and 64 :D");
        if (newColumn === null) {
            return; 
        }
        else if (newColumn === "") {
            return;
        }
        else {
            newGrid(newColumn);
        }
    })
    
    //change pixel color to solid color
    $('#solidButton').on('click', function() {
        clearGrid();
        $('div').on('mouseenter', '.column', function(event) {
            event.stopPropagation();
            $(this).css('background-color', '#c6e2ff');
        })
    })
    
     
    //change pixel color to rainbow color
    $('#rainbowButton').on('click', function() {
        clearGrid();
        $('div').on('mouseenter', '.column', function(event) {
            event.stopPropagation();
            var randomColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
            console.log(randomColor);
            $(this).css('background-color', randomColor);
        })
    })
    
    var opacity = 0.1;
    //change pixel color to grey-scale, and after 10 passes the pixel turns black
    $('#greyButton').on('click', function() {
        clearGrid();
        $('div').on('mouseenter', '.column', function(event) {
            event.stopPropagation();
            var currentColor = 'rgba(0, 0, 0, ' + opacity + ')';
            console.log(currentColor);
            $(this).css('background-color', currentColor);
            if (opacity < 1) {
                opacity = parseFloat((opacity + 0.1).toFixed(1));
            }
            else opacity = 0.1;
        })
    })
})



