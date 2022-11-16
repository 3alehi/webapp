let akhbar=[
    "امروز مدارس قم بدلیل بارندگی تعطیل شد",
    "با راه اندازی بزرگ راه قم تهران ترافیک 2 درصد افزایش یافت",
"قیمت اجاره خانه از سال گذشته 10درصد افزایش یافت",
"شهردار قم بودجه بیشتری برای  متروپل قم هزینه میکند",
"اقامه نماز جمعه در مصلی با حضور ایت الله خامنه ایی",
"الودگی هوا نسبت به سال گذشته 10درصد افزایش یافته است",
"مونوریل های بیشتری در حال احداث است",
"استاندار قم گفت پارک های بیشتری احداث خواهیم کرد",
]
let akhbarindex =0;
let khabar = document.getElementById('khabar')
setInterval(function(){
    akhbarindex++
    if(akhbarindex == 8){
        akhbarindex=0;
    }
    khabar.innerHTML="اخبار کوتاه:"  +akhbar[akhbarindex]


},3000)
let sliderpc =[
    "slider1.jpg",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg",
    "slider6.jpg",
    "slider7.jpg",
    "slider8.jpg",
    "slider9.jpg",
    "slider10.jpg",
    "slider11.jpg",
    "slider.jpg",

]
let sliderimg = document.getElementById('sliderimg')
let sliderindex=0;
setInterval(function(){
    sliderindex++
    if(sliderindex == 12){
        sliderindex = 0;
    }
sliderimg.setAttribute('src' , sliderpc[sliderindex])

},3000)
