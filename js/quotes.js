'use strict';

$(function () {
    var Quote = {
        index: 0,
        quotes: [
            '"Don’t worry about failure; you only have to be right once." — Drew Houston, Dropbox founder and CEO',
            '"The competitor to be feared is the one who never bothers you at all, but goes on making his own business better all the time." - Henry Ford',
            '"Get big quietly, so you don’t tip off potential competitors." —Chris Dixon, Andreesen Horowitz',
            '"It’s hard to do a really good job on anything you don’t think about in the shower." — Paul Graham, YCombinator',
            '"Best startups generally come from somebody needing to scratch an itch." — Michael Arrington, TechCrunch'
        ],
        change: function () {
            var _this = this;
            $("#quote").html(this.quotes[this.index]);
            setInterval(function () {
                _this.index += 1;
                if (_this.index === _this.quotes.length) {
                    _this.index = 0;
                }

                $('#quote').empty();
                $('#quote').html(_this.quotes[_this.index]);
            }, 10000);
        },
    };

    Quote.change();
});
