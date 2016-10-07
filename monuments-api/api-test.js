$(document).ready(function(){

    $.get( "https://monuments-data.herokuapp.com/api/monuments", function( data ) {
        
        data.map(function(x,y){

            $("#monuments-list").append(
                '<h3>' + (data[y].name) + '</h3>' +
                '<img src="' + data[y].imageUrl + '"> </img>' +
                '<p> <br>' + (data[y].description) + '</p> <br>');
        })
    });
    
})