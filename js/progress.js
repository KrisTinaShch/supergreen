gsap.registerPlugin(ScrollTrigger);


// COUNTBAR
let happy_count = document.querySelector('.happy-customers');
let stats_num = document.querySelector('.loading-numbers');

let executed = false;

ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: isInViewport
});

function isInViewport() {

    let happy_testimonials = ScrollTrigger.isInViewport(happy_count);
    let stats_numbers = ScrollTrigger.isInViewport(stats_num);

    if (stats_numbers) {
        counter();
    } else if (happy_testimonials) {
        counter();

    }

}


function counter() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });
    });
}