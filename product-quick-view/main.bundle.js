webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* --------------------------------\r\nModules - reusable parts of our design\r\n-------------------------------- */\r\n.cd-container {\r\n  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */\r\n  width: 90%;\r\n  max-width: 1170px;\r\n  margin: 0 auto;\r\n}\r\n.cd-container:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-items {\r\n  padding: 1em 0;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .cd-items {\r\n    padding: 2em 0 0;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n  .cd-items {\r\n    padding: 4em 0 0;\r\n  }\r\n}\r\n.cd-item {\r\n  position: relative;\r\n  margin: 0 0 1em;\r\n}\r\n.cd-item > img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .cd-item {\r\n    width: 48%;\r\n    float: left;\r\n    margin: 0 4% 2em 0;\r\n  }\r\n  .cd-item:nth-child(2n) {\r\n    margin-right: 0;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n  .cd-item {\r\n    width: 22%;\r\n    float: left;\r\n    margin: 0 4% 2.8em 0;\r\n  }\r\n  .cd-item:nth-child(2n) {\r\n    margin-right: 4%;\r\n  }\r\n  .cd-item:nth-child(4n) {\r\n    margin-right: 0;\r\n  }\r\n  .cd-item.empty-box::after {\r\n    /* box visible as placeholder when the .cd-quick-view zooms in */\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #392c3f;\r\n  }\r\n}\r\n.cd-trigger {\r\n  position: absolute;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  text-align: center;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #ffffff;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  -webkit-transition: opacity 0.2s, background-color 0.2s;\r\n  transition: opacity 0.2s, background-color 0.2s;\r\n}\r\n.cd-trigger:hover {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n  .cd-trigger {\r\n    /* always visible on small devices */\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-trigger {\r\n    /* only visible on hover on big devices */\r\n    opacity: 0;\r\n  }\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-item:hover .cd-trigger {\r\n    opacity: 1;\r\n  }\r\n\r\n  .touch .cd-item .cd-trigger {\r\n    opacity: 1;\r\n  }\r\n}\r\n.cd-quick-view {\r\n  /* quick view non available on small devices */\r\n  display: none;\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n  .cd-quick-view {\r\n    display: block;\r\n    position: fixed;\r\n    max-width: 900px;\r\n    visibility: hidden;\r\n    /* Force Hardware Acceleration in WebKit */\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    will-change: left, top, width;\r\n    z-index: 1;\r\n  }\r\n  .cd-quick-view:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .cd-quick-view.is-visible {\r\n    /* class added when user clicks on .cd-trigger */\r\n    visibility: visible;\r\n  }\r\n  .cd-quick-view.animate-width {\r\n    /* class added at the end of the first zoom-in animation */\r\n    background-color: #ffffff;\r\n    -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\r\n    -webkit-transition: box-shadow 0.3s;\r\n    -webkit-transition: -webkit-box-shadow 0.3s;\r\n    transition: -webkit-box-shadow 0.3s;\r\n    transition: box-shadow 0.3s;\r\n    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;\r\n  }\r\n}\r\n.cd-slider-wrapper {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.cd-slider-wrapper:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-slider {\r\n  float: left;\r\n}\r\n.cd-slider li {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n.cd-slider li img {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n.cd-slider li.selected {\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n.add-content .cd-slider {\r\n  margin-right: 3em;\r\n}\r\n.cd-slider-navigation {\r\n  opacity: 0;\r\n}\r\n.add-content .cd-slider-navigation {\r\n  opacity: 1;\r\n}\r\n.cd-slider-navigation li {\r\n  position: absolute;\r\n  top: 50%;\r\n  bottom: auto;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  z-index: 3;\r\n}\r\n.cd-slider-navigation li:first-child {\r\n  left: 0;\r\n}\r\n.cd-slider-navigation li:last-child {\r\n  /* equal to the .cd-slider-wrapper margin-right */\r\n  right: 3em;\r\n}\r\n.cd-slider-navigation li a {\r\n  display: block;\r\n  width: 40px;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  text-indent: 100%;\r\n  white-space: nowrap;\r\n  opacity: 0;\r\n  /* Force Hardware Acceleration in WebKit */\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-transition: opacity 0.2s, background 0.2s;\r\n  transition: opacity 0.2s, background 0.2s;\r\n}\r\n.cd-slider-navigation li a::before, .cd-slider-navigation li a::after {\r\n  /* create arrows in CSS */\r\n  position: absolute;\r\n  top: 18px;\r\n  left: 14px;\r\n  display: inline-block;\r\n  background: #ffffff;\r\n  height: 3px;\r\n  width: 12px;\r\n}\r\n.cd-slider-navigation li a::before {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.cd-slider-navigation li a::after {\r\n  -webkit-transform: translateY(7px) rotate(-45deg);\r\n  transform: translateY(7px) rotate(-45deg);\r\n}\r\n.add-content .cd-slider-navigation li a {\r\n  opacity: .2;\r\n}\r\n.cd-slider-navigation li a:hover {\r\n  background: rgba(71, 55, 78, 0.8);\r\n  opacity: 1;\r\n}\r\n.touch .cd-slider-navigation li a {\r\n  opacity: 1;\r\n}\r\n.cd-slider-navigation li:first-child a::before {\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n.cd-slider-navigation li:first-child a::after {\r\n  -webkit-transform: translateY(7px) rotate(45deg);\r\n  transform: translateY(7px) rotate(45deg);\r\n}\r\n.cd-item-info {\r\n  position: absolute;\r\n  padding: 3em 3em 3em 0;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .3s, visibility 0s;\r\n  transition: opacity .3s, visibility 0s;\r\n}\r\n.cd-item-info h2 {\r\n  font-size: 28px;\r\n  font-size: 1.75rem;\r\n}\r\n.cd-item-info p {\r\n  line-height: 1.6;\r\n  margin: 1em 0;\r\n  color: #67919c;\r\n}\r\n.cd-item-info .cd-item-action li {\r\n  display: inline-block;\r\n  margin-right: 1em;\r\n}\r\n.cd-item-info .cd-item-action li:first-child {\r\n  margin-left: -4px;\r\n}\r\n.cd-item-info .add-to-cart {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  -o-appearance: none;\r\n  appearance: none;\r\n  border-radius: 0.25em;\r\n  border: none;\r\n  padding: .6em 1.2em;\r\n  background-color: #f82f53;\r\n  color: #ffffff;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-family: \"PT Sans\", sans-serif;\r\n  font-size: 16px;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n.add-content .cd-item-info {\r\n  /* class added at the end of the width animation, used to show the content */\r\n  position: relative;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n.add-content .cd-item-info h2 {\r\n  -webkit-animation: cd-slide-in 0.3s;\r\n  animation: cd-slide-in 0.3s;\r\n}\r\n.add-content .cd-item-info p {\r\n  -webkit-animation: cd-slide-in 0.4s;\r\n  animation: cd-slide-in 0.4s;\r\n}\r\n.add-content .cd-item-info .cd-item-action {\r\n  -webkit-animation: cd-slide-in 0.5s;\r\n  animation: cd-slide-in 0.5s;\r\n}\r\n@-webkit-keyframes cd-slide-in {\r\n  0% {\r\n    -webkit-transform: translate3d(-40px, 0, 0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n@keyframes cd-slide-in {\r\n  0% {\r\n    -webkit-transform: translate3d(-40px, 0, 0);\r\n    transform: translate3d(-40px, 0, 0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n.cd-close {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  /* image replacement */\r\n  overflow: hidden;\r\n  text-indent: 100%;\r\n  white-space: nowrap;\r\n  visibility: hidden;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition: -webkit-transform .3s 0s, visibility 0s .3s;\r\n  -webkit-transition: visibility 0s .3s, -webkit-transform .3s 0s;\r\n  transition: visibility 0s .3s, -webkit-transform .3s 0s;\r\n  transition: transform .3s 0s, visibility 0s .3s;\r\n  transition: transform .3s 0s, visibility 0s .3s, -webkit-transform .3s 0s;\r\n}\r\n.cd-close::before, .cd-close::after {\r\n  /* close icon in css */\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 5px;\r\n  display: inline-block;\r\n  height: 4px;\r\n  width: 20px;\r\n  background: #47374e;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.cd-close::before {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.cd-close::after {\r\n  -webkit-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n.cd-close:hover {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.add-content .cd-close {\r\n  visibility: visible;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: -webkit-transform .3s 0s, visibility 0s 0s;\r\n  -webkit-transition: visibility 0s 0s, -webkit-transform .3s 0s;\r\n  transition: visibility 0s 0s, -webkit-transform .3s 0s;\r\n  transition: transform .3s 0s, visibility 0s 0s;\r\n  transition: transform .3s 0s, visibility 0s 0s, -webkit-transform .3s 0s;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"cd-items cd-container\">-->\n  <!--<li class=\"cd-item\">-->\n    <!--<img src=\"assets/img/city.jpg\" alt=\"Item Preview\">-->\n    <!--<a href=\"#0\" class=\"cd-trigger\">Quick View</a>-->\n  <!--</li>-->\n\n  <!--<li class=\"cd-item\">-->\n    <!--<img src=\"assets/img/item-1.jpg\" alt=\"Item Preview\">-->\n    <!--<a href=\"#0\" class=\"cd-trigger\">Quick View</a>-->\n  <!--</li>-->\n\n  <!--<li class=\"cd-item\">-->\n    <!--<img src=\"assets/img/item-1.jpg\" alt=\"Item Preview\">-->\n    <!--<a href=\"#0\" class=\"cd-trigger\">Quick View</a>-->\n  <!--</li>-->\n\n  <!--<li class=\"cd-item\">-->\n    <!--<img src=\"assets/img/item-1.jpg\" alt=\"Item Preview\">-->\n    <!--<a href=\"#0\" class=\"cd-trigger\">Quick View</a>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<ul class=\"cd-items cd-container\">\n  <li class=\"cd-item\" *ngFor=\"let item of items\">\n    <img [src]=\"item['img_path']\" [attr.alt]=\"item['product_title']\">\n    <a href=\"#0\" class=\"cd-trigger\">Quick View</a>\n  </li>\n</ul>\n\n<div class=\"cd-quick-view\">\n  <div class=\"cd-slider-wrapper\">\n    <ul class=\"cd-slider\">\n      <li class=\"selected\"><img src=\"assets/img/item-1.jpg\" alt=\"Product 1\"></li>\n      <li><img src=\"assets/img/item-1.jpg\" alt=\"Product 2\"></li>\n      <li><img src=\"assets/img/item-1.jpg\" alt=\"Product 3\"></li>\n    </ul> <!-- cd-slider -->\n\n    <ul class=\"cd-slider-navigation\">\n      <li><a class=\"cd-next\" href=\"#0\">Prev</a></li>\n      <li><a class=\"cd-prev\" href=\"#0\">Next</a></li>\n    </ul> <!-- cd-slider-navigation -->\n  </div> <!-- cd-slider-wrapper -->\n\n  <div class=\"cd-item-info\">\n    <h2>Produt Title</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis, maxime laborum praesentium.</p>\n\n    <ul class=\"cd-item-action\">\n      <li><button class=\"add-to-cart\">Add to cart</button></li>\n      <li><a href=\"#0\">Learn more</a></li>\n    </ul> <!-- cd-item-action -->\n  </div> <!-- cd-item-info -->\n  <a href=\"#0\" class=\"cd-close\">Close</a>\n</div> <!-- cd-quick-view -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
window["jQuery"] = window['$'] = $;
__webpack_require__("../../../../velocity-animate/velocity.js");
delete window['jQuery'];
delete window['$'];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sliderFinalWidth = 400;
        this.maxQuickWidth = 900;
        this.items = [
            {
                img_path: 'assets/img/city.jpg',
                product_title: 'Продукт 1',
                description: 'Описание продукта 1'
            },
            {
                img_path: 'assets/img/item-1.jpg',
                product_title: 'Продукт 2',
                description: 'Описание продукта 2'
            },
            {
                img_path: 'assets/img/item-1.jpg',
                product_title: 'Продукт 3',
                description: 'Описание продукта 3'
            },
            {
                img_path: 'assets/img/item-1.jpg',
                product_title: 'Продукт 4',
                description: 'Описание продукта 4'
            }
        ];
    }
    AppComponent.prototype.handleEvent = function (event) {
        if (event.keyCode === 27) {
            this.closeQuickView(this.sliderFinalWidth, this.maxQuickWidth);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('body').on('click', function (event) {
            if ($(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
                _this.closeQuickView(_this.sliderFinalWidth, _this.maxQuickWidth);
            }
        });
        $('.cd-trigger').on('click', function (event) {
            var selectedImage = $(event.currentTarget).parent('.cd-item').children('img'), selectedImageUrl = selectedImage.attr('src');
            $('body').addClass('overlay-layer');
            _this.animateQuickView(selectedImage, _this.sliderFinalWidth, _this.maxQuickWidth, 'open');
        });
    };
    AppComponent.prototype.animateQuickView = function (image, finalWidth, maxQuickWidth, animationType) {
        var parentListItem = image.parent('.cd-item');
        var topSelected = image.offset().top - $(window).scrollTop(), leftSelected = image.offset().left, widthSelected = image.width(), heightSelected = image.height(), windowWidth = $(window).width(), windowHeight = $(window).height(), finalLeft = (windowWidth - finalWidth) / 2, finalHeight = finalWidth * heightSelected / widthSelected, finalTop = (windowHeight - finalHeight) / 2, quickViewWidth = (windowWidth * .8 < maxQuickWidth) ? windowWidth * .8 : maxQuickWidth, quickViewLeft = (windowWidth - quickViewWidth) / 2;
        if (animationType === 'open') {
            parentListItem.addClass('empty-box');
            $('.cd-quick-view').css({
                'top': topSelected,
                'left': leftSelected,
                'width': widthSelected,
            }).velocity({
                'top': finalTop + 'px',
                'left': finalLeft + 'px',
                'width': finalWidth + 'px',
            }, 1000, [400, 20], function () {
                $('.cd-quick-view').addClass('animate-width').velocity({
                    'left': quickViewLeft + 'px',
                    'width': quickViewWidth + 'px',
                }, 300, 'ease', function () {
                    $('.cd-quick-view').addClass('add-content');
                });
            }).addClass('is-visible');
        }
        else {
            $('.cd-quick-view').removeClass('add-content').velocity({
                'top': finalTop + 'px',
                'left': finalLeft + 'px',
                'width': finalWidth + 'px',
            }, 300, 'ease', function () {
                $('body').removeClass('overlay-layer');
                $('.cd-quick-view').removeClass('animate-width').velocity({
                    'top': topSelected,
                    'left': leftSelected,
                    'width': widthSelected,
                }, 500, 'ease', function () {
                    $('.cd-quick-view').removeClass('is-visible');
                    parentListItem.removeClass('empty-box');
                });
            });
        }
    };
    AppComponent.prototype.closeQuickView = function (finalWidth, maxQuickWidth) {
        var close = $('.cd-close'), activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'), selectedImage = $('.empty-box').find('img');
        selectedImage.attr('src', activeSliderUrl);
        if (!$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
            selectedImage.attr('src', activeSliderUrl);
            this.animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
        }
        else {
            this.closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
        }
    };
    AppComponent.prototype.closeNoAnimation = function (image, finalWidth, maxQuickWidth) {
        var parentListItem = image.parent('.cd-item'), topSelected = image.offset().top - $(window).scrollTop(), leftSelected = image.offset().left, widthSelected = image.width();
        $('body').removeClass('overlay-layer');
        parentListItem.removeClass('empty-box');
        $('.cd-quick-view').velocity('stop').removeClass('add-content animate-width is-visible').css({
            'top': topSelected,
            'left': leftSelected,
            'width': widthSelected,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleEvent", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detailed_product_detailed_product_detailed_component__ = __webpack_require__("../../../../../src/app/product-detailed/product-detailed/product-detailed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__product_detailed_product_detailed_product_detailed_component__["a" /* ProductDetailedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/product-detailed/product-detailed/product-detailed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detailed/product-detailed/product-detailed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-quick-view\">\n  <div class=\"cd-slider-wrapper\">\n    <ul class=\"cd-slider\">\n      <li class=\"selected\"><img src=\"assets/img/item-1.jpg\" alt=\"Product 1\"></li>\n      <li><img src=\"assets/img/item-1.jpg\" alt=\"Product 2\"></li>\n      <li><img src=\"assets/img/item-1.jpg\" alt=\"Product 3\"></li>\n    </ul>\n\n    <ul class=\"cd-slider-navigation\">\n      <li><a class=\"cd-next\" href=\"#0\">Prev</a></li>\n      <li><a class=\"cd-prev\" href=\"#0\">Next</a></li>\n    </ul>\n  </div>\n\n  <div class=\"cd-item-info\">\n    <h2>Produt Title</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis, maxime laborum praesentium.</p>\n\n    <ul class=\"cd-item-action\">\n      <li><button class=\"add-to-cart\">Add to cart</button></li>\n      <li><a href=\"#0\">Learn more</a></li>\n    </ul>\n  </div>\n  <a href=\"#0\" class=\"cd-close\">Close</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-detailed/product-detailed/product-detailed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailedComponent = /** @class */ (function () {
    function ProductDetailedComponent() {
    }
    ProductDetailedComponent.prototype.ngOnInit = function () {
    };
    ProductDetailedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-product-detailed',
            template: __webpack_require__("../../../../../src/app/product-detailed/product-detailed/product-detailed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-detailed/product-detailed/product-detailed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailedComponent);
    return ProductDetailedComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map