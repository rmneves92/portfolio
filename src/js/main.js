$(document).ready(function () {

    $('img[alt="000webhost logo"]').hide();
    $('img[alt="www.000webhost.com"]').hide();

    $("html").animate({
        scrollTop: 0
    }, 600);
    AOS.init({
        duration: 1200,
    })

    funcoes.efeitos.openMenuAuto();
    funcoes.eventos.trocarCorMenu();
    funcoes.eventos.timer();
    funcoes.efeitos.preloader();

    funcoes.efeitos.efeitoToast();
    funcoes.efeitos.efeitoLazy();
    funcoes.efeitos.efeitoLightbox();
    funcoes.efeitos.efeitoHr();
    funcoes.efeitos.efeitoTyped();
    funcoes.eventos.voltarAoTopo();
    

    // Ajustando formato do cursor
    $(".typed-cursor").css("font-size", "100px");
    $(".typed-cursor").css("margin-left", "2px");


    funcoes.eventos.slidePage(".link-seta", "#sobre");
    /* funcoes.eventos.slidePage("#link-portfolio", "#portfolio");
      funcoes.eventos.slidePage("#link-home", "#destaque");
      funcoes.eventos.slidePage("#link-sobre", "#sobre"); */


});

var funcoes = {
    efeitos: {
        // Toast ao clicar no icone Telefone
        efeitoToast: function(){
            $('.telefone').click(function () {
                $('.toast').toggleClass('on');
            });
        
            $('.close').click(function () {
                $('.toast').removeClass('on');
            });  
        },

        // Fade in ao interagir com o scroll
        efeitoLazy: function () {
            $('.lazy').Lazy({
                scrollDirection: 'vertical',
                effect: 'fadeIn',
                visibleOnly: true,
                onError: function (element) {
                    console.log('error loading ' + element.data('src'));
                }
            });
        },

        // Adiciona efeito no menu ao passar o mouse
        efeitoHr: function () {
            var toggle = false,
                hrs = $('.trans-grow');
            //$('.navbar').hover(function(){
            $.map(hrs, function (val, i) {
                if (toggle === false) {
                    $(val)
                        .addClass('grow')
                        .addClass('line-color-change');
                } else {
                    $(val).removeClass('grow')
                        .removeClass('line-color-change');
                }
            });
            toggle = !toggle;
            //});
        },

        // Efeito de digitação automática
        efeitoTyped: function () {
            var typed = new Typed('.titulo-principal', {
                stringsElement: '#typed-conteudo',
                typeSpeed: 55,
                backSpeed: 55,
                startDelay: 3000,
                shuffle: true,
                smartBackspace: true,
                fadeOut: true
            });

            // Ajuste no tempo até o título principal ser exibido
            $(".titulo-principal").fadeIn(2000);

            // Ajuste no tempo até que a mensagem desapareça 
            setTimeout(function () {
                $("p.animacao1").addClass("fadeOutLeft");
                
            }, 7000);
        },

        efeitoLightbox: function () {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'alwaysShowNavOnTouchDevices': true,
                'maxWidth': 1500,
                'positionFromTop': 100

            });
        },

        preloader: function () {
            $(window).on("load", function () {
                $("#preloader").fadeOut(500);
            });

            setTimeout(function () {
                $("#preloader").remove();
            }, 1000);
        },

        openMenuAuto: function() {
            setTimeout(function(){
                $("#menuToggle > input").click()
            },1000)
            
        }
    },
    eventos: {
        trocarCorMenu: function () {

            var sections = $('section, header'),
                nav = $('nav'),
                nav_height = nav.outerHeight();

            $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();

                sections.each(function () {
                    var top = $(this).offset().top - 80,
                        bottom = top + $(this).outerHeight();

                    if (cur_pos >= top && cur_pos < bottom) {
                        nav.find('a').parent().removeClass('active');
                        sections.removeClass('active');


                        nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
                    }
                });
            });

            nav.find('a').on('click', function () {
                var $el = $(this),
                    id = $el.attr('href');

                $('html, body').animate({
                    scrollTop: $(id).offset().top - nav_height
                }, 500);

                return false;
            });

        },

        timer: function () {

            var today = new Date();


            var BigDay = new Date("October 3, 2016");
            var msPerDay = 24 * 60 * 60 * 1000;
            var timeLeft = (today.getTime() - BigDay.getTime());
            var e_daysLeft = timeLeft / msPerDay;
            var daysLeft = Math.floor(e_daysLeft);
            var yearsLeft = 0;
            var mounthLeft = 0;


            var sAno = "";
            var sDia = "";
            if (daysLeft > 365) {
                yearsLeft = Math.floor(daysLeft / 365);
                daysLeft = daysLeft % 365;
            }


            if (daysLeft > 31) {
                mounthLeft = Math.floor(daysLeft / 30);
                daysLeft = (daysLeft % 30);
            }

            if (yearsLeft <= "1") {
                sAno = " ano";
            } else {
                sAno = " anos"
            }


            if (mounthLeft <= "1") {
                sMes = " mes";
            } else {
                sMes = " meses"
            }

            if (daysLeft <= "1") {
                sDia = " dia";
            } else {
                sDia = " dias"
            }


            $("#timer").html(yearsLeft + sAno + ", " + mounthLeft + sMes + " e " + daysLeft + sDia);

        },

        // Botão é adicionado ao interagir com o scroll
        voltarAoTopo: function () {
            if ($('#voltar-ao-topo').length) {
                var scrollTrigger = 100, // px
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('#voltar-ao-topo').addClass('show');
                        } else {
                            $('#voltar-ao-topo').removeClass('show');
                        }
                    };
                backToTop();
                $(window).on('scroll', function () {
                    backToTop();
                });
                $('#voltar-ao-topo').on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }
        },
        slidePage: function (element, target) {
            $(element).on('click', function (e) {

                e.preventDefault();
                var id = $(this).attr('href'),
                    targetOffset = $(target).offset().top - 44;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 600);
            });

        }
    }
}