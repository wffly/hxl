$(document).ready(function(){
     /*************************************
     * 设置图片区域的外边距
    *************************************/
    $('#divboss').css({
        'margin-left':'5%'
    });
    /*************************************
     * 初始化图片下面的6个按钮
    *************************************/
    for(var i=0;i<6;i++){
        $("#div2").append('<div id="div'+(i+3)+'"></div>');
    }
    for(var i=0;i<6;i++){
        $('#div'+(i+3)).css({
            width:'32px',
            height:'32px',
            'background-image':'url("resource/bullet_white.png")',
            'background-size':'32px 32px',
            'background-repeat':'no-repeat',
            'margin':'auto',
            'display':'inline-block',
        });
    }
    /*************************************
     * 定时器 用来轮播图片
    *************************************/
    var index = 0;
    $('#div'+(index+3)).css('background-image',"url('resource/bullet-grey.png')");
    var playImage = setInterval(function(){
        if(index==6){
            index=0;
            return;
        }
        $('#div1').css('background-image',"url('resource/"+(index+1)+".jpg')");
        if(index==0){
            $('#div'+(index+8)).css('background-image',"url('resource/bullet_white.png')");
            $('#div'+(index+3)).css('background-image',"url('resource/bullet-grey.png')");
        }else{
            //先清除上一个的灰色图片
            $('#div'+(index+2)).css('background-image',"url('resource/bullet_white.png')");
            //把这一个设为灰色
            $('#div'+(index+3)).css('background-image',"url('resource/bullet-grey.png')");
        }
        index++;
    },2500);
    /*************************************
     * 给div加上鼠标移入事件
    *************************************/
    $('#div1').mouseenter(function(){
        clearInterval(playImage);
    });
      /*************************************
     * 给div加上鼠标移出事件
    *************************************/
    $('#div1').mouseleave(function(){
        playImage = setInterval(function(){
            if(index==6){
                index=0;
                return;
            }
            $('#div1').css('background-image',"url('resource/"+(index+1)+".jpg')");
            if(index==0){
                $('#div'+(index+8)).css('background-image',"url('resource/bullet_white.png')");
                $('#div'+(index+3)).css('background-image',"url('resource/bullet-grey.png')");
            }else{
                //先清除上一个的灰色图片
                $('#div'+(index+2)).css('background-image',"url('resource/bullet_white.png')");
                //把这一个设为灰色
                $('#div'+(index+3)).css('background-image',"url('resource/bullet-grey.png')");
            }
            index++;
        },3000);
    });
});