$(function () {
    //轮播部分
    (function () {
        var arr = [
            {
                img: './网易云图片/109951164359801815.jpg',
                color: 'rgb(3,3,4)',
            },
            {
                img: './网易云图片/109951164359802475.jpg',
                color: 'rgb(0,37,61)'
            },
            {
                img: './网易云图片/109951164359838666.jpg',
                color: 'rgb(22,22,23)'
            },
            {
                img: './网易云图片/109951164360663742.jpg',
                color: 'rgb(2,2,2)'
            },
            {
                img: './网易云图片/109951164359839300.jpg',
                color: 'rgb(0,31,36)'
            },
            {
                img: './网易云图片/109951164359844816.jpg',
                color: 'rgb(152,160,166)'
            },
            {
                img: './网易云图片/109951164359815759.jpg',
                color: 'rgb(254,244,58)'
            },
            {
                img: './网易云图片/109951164359852872.jpg',
                color: 'rgb(252,252,252)'
            }
        ];
        var index = 0;
        function text() {
            $('.lunbo .con .bo img').css('opacity', 0);
            $('.lunbo').css('backgroundColor', arr[index].color);
            $('.lunbo .con .sup a').eq(index).css('backgroundPositionX', '-16px')
                .siblings('a').css('backgroundPositionX', '3px');
            $('.lunbo .con .bo img').attr('src', arr[index].img);
            $('.lunbo .con .bo img').stop().animate({ 'opacity': 1 }, 400);
        }
        function item() {
            index++;
            if (index > 7) {
                index = 0;
            }
            text();
        }
        $('.lunbo .con .right_arrow').click(function () {
            item();
        })
        $('.lunbo .con .left_arrow').click(function () {
            index--;
            if (index < 0) {
                index = 7;
            }
            text();
        })
        $('.lunbo .con .sup a').click(function () {
            index = $(this).index();
            text()
        })
        var time = setInterval(function () {
            $('.lunbo .con .right_arrow').click();
        }, 2000)
        $('.lunbo .con').hover(function () {
            clearInterval(time);
        }, function () {
            time = setInterval(function () {
                $('.lunbo .con .right_arrow').click();
            }, 2000)
        })
    })();
})