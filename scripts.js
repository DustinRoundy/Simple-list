$('.myInput').on('keydown', function(event){
    console.log(event.which);
    if (event.which === 13){
        additem();
    }
});

function additem(){
    let myname = $('.myInput').val();
    $('.container').append('<div class="row"><i class="far fa-trash-alt trashcan"></i><span contenteditable="true">' + myname + '</span></div>');
    $('.myInput').val('');
    let numchild = $('.container').children().length;
    console.log(numchild);
    $('.trashcan').click(function(){
        $(this).parent().animate({
            opacity: 0,
            left: "-=80"
        }, 400, function(){
            //when animation is done
            $(this).remove();
        });

    })
}

function clearList(){
    $('.row').remove();
}

let str = "I love candy";
let patt = /Halloween/i;
let sr = str.search(patt);
console.log(sr);