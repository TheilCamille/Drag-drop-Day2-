$( function() {
    var x = 0;
    $('.hammer').hide();


    $(".ui-widget-content").draggable({
        helper: function() {
            return jQuery(this).clone().appendTo('body');
        }
    });
    $( "#pig" ).droppable({

        drop: function(event, ui) {
            if(ui.draggable.is("#coin4")){
                $(this).addClass("ui-state-highlight").find("p").html("1€ ? C'est toujours ça :)");
                x++;
                $('#count').text(x);
                if (x > 40) {
                    $('.hammer').show();
                  
                }


            }
            else if(ui.draggable.is("#coin3")){
                $(this).addClass("ui-state-hightlight").find("p").html("2€ ? Merci !");
                x++;
                x++;
                $('#count').text(x);
                if (x > 40) {
                    $('.hammer').show();

                }


            }

            else if(ui.draggable.is("#coin1")){
                $(this).addClass("ui-state-hightlight").find("p").html("Delicieux !");
                x++;
                x++;
                x++;
                x++;
                x++;
                $('#count').text(x);
                if (x > 40) {
                    $('.hammer').show();
                }

            }
            else if(ui.draggable.is("#coin2")){
                alert("Je n'accepte pas les boutons !");
                ui.draggable.draggable('option','revert', true);
                if (x > 40) {
                    $('.hammer').show();

                }
            }




        }


});
    $('.hammer').click(function(){
        $('#pig').css('background-image','url ("/assets/img/cochon.png")');
    });
});
