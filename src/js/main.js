$(function(){

    console.log("Volte em breve ;)")

    //funcoes.efeitos.efeitoLazy();
    funcoes.efeitos.efeitoUnderline();
    funcoes.efeitos.efeitoTyped();
    funcoes.eventos.voltarAoTopo();
    
    // Ajustando formato do cursor
    $(".typed-cursor").css("font-size", "100px");
    $(".typed-cursor").css("margin-left", "2px");



    $('.link-seta').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $("#container").offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 600);
    });



});

var funcoes = {
    efeitos: {
        // Fade in ao interagir com o scroll
        efeitoLazy: function(){
            $('.lazy').lazy({
                effect: "fadeIn",
                effectTime: 5000,
                threshold: 0
            });
        },
        
        // Adiciona efeito no menu ao passar o mouse
        efeitoUnderline: function(){
            var toggle = false,
            hrs = $('.trans-grow');
            $('.navbar').hover(function(){
                $.map(hrs, function(val, i){
                    if(toggle === false){
                        $(val)
                        .addClass('grow')
                        .addClass('line-color-change'); 
                    }else{
                        $(val).removeClass('grow')
                        .removeClass('line-color-change');
                    }
                });
                toggle = !toggle;
            });
        },
        
        // Efeito de digitação automática
        efeitoTyped: function(){
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
            setTimeout(function() {
                $("p.animacao1").addClass("fadeOutLeft"); 
            },7000);
        }    
    },
    eventos: {
        // Botão é adicionado ao interagir com o scroll
        voltarAoTopo: function(){
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
        }
    }
}
