$(document).ready(function(){
    $('.deskTopNoneOneBtn').on('click',function(e){
        e.preventDefault();
        $('.content').toggleClass('showmenu1');
    });
});
$(document).ready(function(){
    $('.deskTopNoneTwoBtn').on('click',function(e){
        e.preventDefault();
        $('.content').toggleClass('showmenu2');
    });
});
$(document).ready(function(){
    $('.deskTopNoneThreeBtn').on('click',function(e){
        e.preventDefault();
        $('.content').toggleClass('showmenu3');
    });
});
$(document).ready(function(){
    $('.deskTopNoneFourBtn').on('click',function(e){
        e.preventDefault();
        $('.content').toggleClass('showmenu4');
    });
});

// $(document).ready(function(){
//     $('按鈕的class').on('click',function(e){
//         e.preventDefault();
//         $('要增加名稱的').toggleClass('增加的名稱是...');
//     });
// });