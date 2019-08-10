var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

    if(isMobile){
        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });
    }













$( document ).ready(function() {
    var w = window.innerWidth
    var unit = w/9
    var posX
    var posY 
    var start_x
    var start_y

var pointerEventToXY = function(e){
      var out = {x:0, y:0};
      if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        out.x = touch.pageX;
        out.y = touch.pageY;
      } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        out.x = e.pageX;
        out.y = e.pageY;
      }
      return out;
    };

    $(document).on('mousedown touchstart', function(e){
                posX = pointerEventToXY(e).x
                posY = pointerEventToXY(e).y
            // han_1
            if( posX>0*unit&&
                posX<1*unit&&
                posY>0*unit&&
                posY<3*unit){
                  han_1()
            }else{han_1_return()}

            if( posX>0*unit&&
                posX<1*unit&&
                posY>3*unit&&
                posY<4*unit){
                  han_3()
            }else{han_3_return()}

            if( posX>2*unit&&
                posX<3*unit&&
                posY>2*unit&&
                posY<4*unit){
                  han_2()
            }else{han_2_return()}



            if( posX>3*unit&&
                posX<4*unit&&
                posY>0*unit&&
                posY<4*unit){
                  gul_1()
            }else{gul_1_return()}
            if( posX>3*unit&&
                posX<4*unit&&
                posY>4*unit&&
                posY<6*unit){
                  gul_2()
            }else{gul_2_return()}




            if( posX>4*unit&&
                posX<6*unit&&
                posY>0*unit&&
                posY<4*unit){
                  sil_1()
            }else{sil_1_return()}
            if( posX>6*unit&&
                posX<7*unit&&
                posY>2*unit&&
                posY<7*unit){
                  sil_3()
            }else{sil_3_return()}





            if( posX>7*unit&&
                posX<8*unit&&
                posY>1*unit&&
                posY<3*unit){
                  hum_1()
            }else{hum_1_return()}
            if( posX>8*unit&&
                posX<9*unit&&
                posY>1*unit&&
                posY<3*unit){
                  hum_2()
            }else{hum_2_return()}
            if( posX>8*unit&&
                posX<9*unit&&
                posY>3*unit&&
                posY<7*unit){
                  hum_3()
            }else{hum_3_return()}






            if( posX>0*unit&&
                posX<3*unit&&
                posY>10*unit&&
                posY<11*unit){
                  p_1()
            }else{p_1_return()}


            if( posX>4*unit&&
                posX<5*unit&&
                posY>9*unit&&
                posY<11*unit){
                  p_1()
            }else{p_1_return()}








            if( posX>4*unit&&
                posX<5*unit&&
                posY>9*unit&&
                posY<11*unit){
                  ro_1()
            }else{ro_1_return()}

            if( posX>3*unit&&
                posX<5*unit&&
                posY>11*unit&&
                posY<13*unit){
                  ro_2()
            }else{ro_2_return()}







            if( posX>5*unit&&
                posX<6*unit&&
                posY>10*unit&&
                posY<11*unit){
                  jek_1()
            }else{jek_1_return()}







            if( posX>7*unit&&
                posX<8*unit&&
                posY>9*unit&&
                posY<11*unit){
                  t_1()
            }else{t_1_return()}
            if( posX>7*unit&&
                posX<8*unit&&
                posY>11*unit&&
                posY<12*unit){
                  t_2()
            }else{t_2_return()}
    })

    $( document ).on('touchmove mousemove', function(e){
                posX = pointerEventToXY(e).x
                posY = pointerEventToXY(e).y

    })
    $(document).on('touchend mouseup', function(){
                console.log('Het')
            // setTimeout(function(){ han_1_return() }, 600);
        // console.log(e.originalEvent.touches[0].pageX)
        // han_1_return()

        // $('.han_2_1').removeClass('han_2_1_animate')
        // $('.han_2_2').removeClass('han_2_2_animate')
        // $('.han_2_3').removeClass('han_2_3_animate')
    })





        function han_1(){
            $('.han_1_1').removeClass('return')
            $('.han_1_2').removeClass('return')
            $('.han_1_3').removeClass('return')
            $('.han_1_last').addClass('char_last_ani')
            $('.han_1_1').addClass('han_1_1_animate')
            $('.han_1_2').addClass('han_1_2_animate')
            $('.han_1_3').addClass('han_1_3_animate')
        }
        function han_2(){
            $('.han_2_1').removeClass('return')
            $('.han_2_2').removeClass('return')
            $('.han_2_3').removeClass('return')
            $('.han_2_1').addClass('han_2_1_animate')
            $('.han_2_2').addClass('han_2_2_animate')
            $('.han_2_3').addClass('han_2_3_animate')
        }
        function han_3(){
            $('.han_3_1').removeClass('return')
            $('.han_3_2').removeClass('return')
            $('.han_3_1').addClass('han_3_1_animate')
            $('.han_3_2').addClass('han_3_2_animate')
        }

        function han_1_return(){
            console.log('fired')
            $('.han_1_1').addClass('return')
            $('.han_1_2').addClass('return')
            $('.han_1_3').addClass('return')
            $('.han_1_last').removeClass('char_last_ani')
            $('.han_1_1').removeClass('han_1_1_animate')
            $('.han_1_2').removeClass('han_1_2_animate')
            $('.han_1_3').removeClass('han_1_3_animate')
        }

        function han_2_return(){
            $('.han_2_1').addClass('return')
            $('.han_2_2').addClass('return')
            $('.han_2_3').addClass('return')
            $('.han_2_1').removeClass('han_2_1_animate')
            $('.han_2_2').removeClass('han_2_2_animate')
            $('.han_2_3').removeClass('han_2_3_animate')
        }
        function han_3_return(){
            $('.han_3_1').addClass('return')
            $('.han_3_2').addClass('return')
            $('.han_3_1').removeClass('han_3_1_animate')
            $('.han_3_2').removeClass('han_3_2_animate')
        }
            // settimeout
            // han_return()







        function gul_1(){
            $('.gul_1_1').removeClass('return')
            $('.gul_1_3').removeClass('return')
            $('.gul_1_1').addClass('gul_1_1_animate')
            $('.gul_1_1_shadow').addClass('gul_1_1_shadow_animate')
            $('.gul_1_3').addClass('gul_1_3_animate')
        }
        function gul_2(){
            $('.gul_2_2').addClass('gul_2_2_animate')
            $('.gul_2_3').addClass('gul_2_3_animate')
            $('.gul_2_4').addClass('gul_2_4_animate')
            $('.gul_2_5').addClass('gul_2_5_animate')
            $('.gul_1_1_shadow').removeClass('gul_1_1_shadow_animate')
            $('.gul_2_2').removeClass('return')
            $('.gul_2_3').removeClass('return')
            $('.gul_2_4').removeClass('return')
            $('.gul_2_5').removeClass('return')
        }

        function gul_1_return(){
            $('.gul_1_1').addClass('return')
            $('.gul_1_3').addClass('return')
            $('.gul_1_1').removeClass('gul_1_1_animate')
            $('.gul_1_3').removeClass('gul_1_3_animate')
        }
        function gul_2_return(){
            $('.gul_2_2').removeClass('gul_2_2_animate')
            $('.gul_2_3').removeClass('gul_2_3_animate')
            $('.gul_2_4').removeClass('gul_2_4_animate')
            $('.gul_2_5').removeClass('gul_2_5_animate')
            $('.gul_2_2').addClass('return')
            $('.gul_2_3').addClass('return')
            $('.gul_2_4').addClass('return')
            $('.gul_2_5').addClass('return')
        }









        function sil_1(){
            $('.sil_1_1').removeClass('return')
            $('.sil_1_2').removeClass('return')
            $('.sil_1_3').removeClass('return')
            $('.sil_1_4').removeClass('return')
            $('.sil_1_5').removeClass('return')
            $('.sil_1_1').addClass('sil_1_1_animate')
            $('.sil_1_2').addClass('sil_1_2_animate')
            $('.sil_1_3').addClass('sil_1_3_animate')
            $('.sil_1_4').addClass('sil_1_4_animate')
            $('.sil_1_5').addClass('sil_1_5_animate')
        }
        function sil_3(){
            $('.sil_3_1').removeClass('return')
            $('.sil_3_2').removeClass('return')
            $('.sil_3_3').removeClass('return')
            $('.sil_3_4').removeClass('return')
            $('.sil_3_5').removeClass('return')
            $('.sil_3_1').addClass('sil_3_1_animate')
            $('.sil_3_2').addClass('sil_3_2_animate')
            $('.sil_3_3').addClass('sil_3_3_animate')
            $('.sil_3_4').addClass('sil_3_4_animate')
            $('.sil_3_5').addClass('sil_3_5_animate')
        }


        function sil_1_return(){
            $('.sil_1_1').addClass('return')
            $('.sil_1_2').addClass('return')
            $('.sil_1_3').addClass('return')
            $('.sil_1_4').addClass('return')
            $('.sil_1_5').addClass('return')
            $('.sil_1_1').removeClass('sil_1_1_animate')
            $('.sil_1_2').removeClass('sil_1_2_animate')
            $('.sil_1_3').removeClass('sil_1_3_animate')
            $('.sil_1_4').removeClass('sil_1_4_animate')
            $('.sil_1_5').removeClass('sil_1_5_animate')
        }
        function sil_3_return(){
            $('.sil_3_1').addClass('return')
            $('.sil_3_2').addClass('return')
            $('.sil_3_3').addClass('return')
            $('.sil_3_4').addClass('return')
            $('.sil_3_5').addClass('return')
            $('.sil_3_1').removeClass('sil_3_1_animate')
            $('.sil_3_2').removeClass('sil_3_2_animate')
            $('.sil_3_3').removeClass('sil_3_3_animate')
            $('.sil_3_4').removeClass('sil_3_4_animate')
            $('.sil_3_5').removeClass('sil_3_5_animate')
        }










        function hum_1(){
            $('.hum_1_1').removeClass('return')
            $('.hum_1_2').removeClass('return')
            $('.hum_1_3').removeClass('return')
            $('.hum_1_1').addClass('hum_1_1_animate')
            $('.hum_1_2').addClass('hum_1_2_animate')
            $('.hum_1_3').addClass('hum_1_3_animate')
        }
        function hum_2(){
            $('.hum_2_1').removeClass('return')
            $('.hum_2_2').removeClass('return')
            $('.hum_2_1').addClass('hum_2_1_animate')
            $('.hum_2_2').addClass('hum_2_2_animate')
        }
        function hum_3(){
            $('.hum_3_2').removeClass('return')
            $('.hum_3_3').removeClass('return')
            $('.hum_3_4').removeClass('return')
            $('.hum_3_5').removeClass('return')
            $('.hum_3_2').addClass('hum_3_2_animate')
            $('.hum_3_3').addClass('hum_3_3_animate')
            $('.hum_3_4').addClass('hum_3_4_animate')
            $('.hum_3_5').addClass('hum_3_5_animate')
        }
        function hum_1_return(){
            $('.hum_1_1').addClass('return')
            $('.hum_1_2').addClass('return')
            $('.hum_1_3').addClass('return')
            $('.hum_1_1').removeClass('hum_1_1_animate')
            $('.hum_1_2').removeClass('hum_1_2_animate')
            $('.hum_1_3').removeClass('hum_1_3_animate')
        }
        function hum_2_return(){
            $('.hum_2_1').addClass('return')
            $('.hum_2_2').addClass('return')
            $('.hum_2_1').removeClass('hum_2_1_animate')
            $('.hum_2_2').removeClass('hum_2_2_animate')
        }
        function hum_3_return(){
            $('.hum_3_2').addClass('return')
            $('.hum_3_3').addClass('return')
            $('.hum_3_4').addClass('return')
            $('.hum_3_5').addClass('return')
            $('.hum_3_2').removeClass('hum_3_2_animate')
            $('.hum_3_3').removeClass('hum_3_3_animate')
            $('.hum_3_4').removeClass('hum_3_4_animate')
            $('.hum_3_5').removeClass('hum_3_5_animate')
        }









        function p_1(){
            $('.b_1').addClass('b_1_animate')
            $('.b_2').addClass('b_2_animate')
        }
        function p_1_return(){
            $('.b_1').removeClass('b_1_animate')
            $('.b_2').removeClass('b_2_animate')
        }

        function ro_1(){
            $('.ro_1_1').removeClass('return')
            $('.ro_1_2').removeClass('return')
            $('.ro_1_3').removeClass('return')
            $('.ro_1_4').removeClass('return')
            $('.ro_1_5').removeClass('return')
            $('.ro_1_1').addClass('ro_1_1_animate')
            $('.ro_1_2').addClass('ro_1_2_animate')
            $('.ro_1_3').addClass('ro_1_3_animate')
            $('.ro_1_4').addClass('ro_1_4_animate')
            $('.ro_1_5').addClass('ro_1_5_animate')
        }
        function ro_2(){
            $('.ro_2_1').removeClass('return')
            $('.ro_2_2').removeClass('return')
            $('.ro_2_3').removeClass('return')
            $('.ro_2_1').addClass('ro_2_1_animate')
            $('.ro_2_2').addClass('ro_2_2_animate')
            $('.ro_2_3').addClass('ro_2_3_animate')
        }
        function ro_1_return(){
            $('.ro_1_1').addClass('return')
            $('.ro_1_2').addClass('return')
            $('.ro_1_3').addClass('return')
            $('.ro_1_4').addClass('return')
            $('.ro_1_5').addClass('return')
            $('.ro_1_1').removeClass('ro_1_1_animate')
            $('.ro_1_2').removeClass('ro_1_2_animate')
            $('.ro_1_3').removeClass('ro_1_3_animate')
            $('.ro_1_4').removeClass('ro_1_4_animate')
            $('.ro_1_5').removeClass('ro_1_5_animate')
        }
        function ro_2_return(){
            $('.ro_2_1').addClass('return')
            $('.ro_2_2').addClass('return')
            $('.ro_2_3').addClass('return')
            $('.ro_2_1').removeClass('ro_2_1_animate')
            $('.ro_2_2').removeClass('ro_2_2_animate')
            $('.ro_2_3').removeClass('ro_2_3_animate')
        }







        function jek_1(){
            $('.jek_1_1').removeClass('return')
            $('.jek_1_2').removeClass('return')
            $('.jek_1_3').removeClass('return')
            $('.jek_1_4').removeClass('return')
            $('.jek_1_1').addClass('jek_1_1_animate')
            $('.jek_1_2').addClass('jek_1_2_animate')
            $('.jek_1_3').addClass('jek_1_3_animate')
            $('.jek_1_4').addClass('jek_1_4_animate')
        }
        function jek_1_return(){
            $('.jek_1_1').addClass('return')
            $('.jek_1_2').addClass('return')
            $('.jek_1_3').addClass('return')
            $('.jek_1_4').addClass('return')
            $('.jek_1_1').removeClass('jek_1_1_animate')
            $('.jek_1_2').removeClass('jek_1_2_animate')
            $('.jek_1_3').removeClass('jek_1_3_animate')
            $('.jek_1_4').removeClass('jek_1_4_animate')
        }








        function t_1(){
            $('.t_1_1').removeClass('return')
            $('.t_1_2').removeClass('return')
            $('.t_1_3').removeClass('return')
            $('.t_1_4').removeClass('return')
            $('.t_1_1').addClass('t_1_1_animate')
            $('.t_1_2').addClass('t_1_2_animate')
            $('.t_1_3').addClass('t_1_3_animate')
            $('.t_1_4').addClass('t_1_4_animate')
        }
        function t_2(){
            $('.t_2_1').removeClass('return')
            $('.t_2_1').addClass('t_2_1_animate')
        }

        function t_1_return(){
            $('.t_1_1').addClass('return')
            $('.t_1_2').addClass('return')
            $('.t_1_3').addClass('return')
            $('.t_1_4').addClass('return')
            $('.t_1_1').removeClass('t_1_1_animate')
            $('.t_1_2').removeClass('t_1_2_animate')
            $('.t_1_3').removeClass('t_1_3_animate')
            $('.t_1_4').removeClass('t_1_4_animate')
        }
        function t_2_return(){
            $('.t_2_1').addClass('return')
            $('.t_2_1').removeClass('t_2_1_animate')
        }








    })

