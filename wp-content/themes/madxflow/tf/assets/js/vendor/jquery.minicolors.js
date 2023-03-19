/*
 * jQuery MiniColors: A tiny color picker built on jQuery
 * Copyright Cory LaViska for A Beautiful Site, LLC. (http://www.abeautifulsite.net/)
 * Dual-licensed under the MIT and GPL Version 2 licenses
 */
jQuery&&function($){function i(i,t){var o=$('<span class="minicolors" />'),n=$.minicolors.defaultSettings;i.data("minicolors-initialized")||(t=$.extend(!0,{},n,t),o.addClass("minicolors-theme-"+t.theme).addClass("minicolors-swatch-position-"+t.swatchPosition).toggleClass("minicolors-swatch-left","left"===t.swatchPosition).toggleClass("minicolors-with-opacity",t.opacity),void 0!==t.position&&$.each(t.position.split(" "),function(){o.addClass("minicolors-position-"+this)}),i.addClass("minicolors-input").data("minicolors-initialized",!0).data("minicolors-settings",t).prop("size",7).prop("maxlength",7).wrap(o).after('<span class="minicolors-panel minicolors-slider-'+t.control+'"><span class="minicolors-slider"><span class="minicolors-picker"></span></span><span class="minicolors-opacity-slider"><span class="minicolors-picker"></span></span><span class="minicolors-grid"><span class="minicolors-grid-inner"></span><span class="minicolors-picker"><span></span></span></span></span>'),i.parent().find(".minicolors-panel").on("selectstart",function(){return!1}).end(),"left"===t.swatchPosition?i.before('<span class="minicolors-swatch"><span></span></span>'):i.after('<span class="minicolors-swatch"><span></span></span>'),t.textfield||i.addClass("minicolors-hidden"),t.inline&&i.parent().addClass("minicolors-inline"),r(i))}function t(i){var t=i.parent();i.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeProp("maxlength").removeClass("minicolors-input"),t.before(i).remove()}function o(i){r(i)}function n(i){var t=i.parent(),o=t.find(".minicolors-panel"),n=i.data("minicolors-settings");!i.data("minicolors-initialized")||i.prop("disabled")||t.hasClass("minicolors-focus")||(s(),t.addClass("minicolors-focus"),o.stop(!0,!0).fadeIn(n.showSpeed,function(){n.show&&n.show.call(i)}))}function s(){$(".minicolors-input").each(function(){var i=$(this),t=i.data("minicolors-settings"),o=i.parent();t.inline||o.find(".minicolors-panel").fadeOut(t.hideSpeed,function(){o.hasClass("minicolors-focus")&&t.hide&&t.hide.call(i),o.removeClass("minicolors-focus")})})}function a(i,t,o){var n=i.parents(".minicolors").find(".minicolors-input"),s=n.data("minicolors-settings"),a=i.find("[class$=-picker]"),r=i.offset().left,c=i.offset().top,l=Math.round(t.pageX-r),h=Math.round(t.pageY-c),d=o?s.animationSpeed:0,p,u,g,f;t.originalEvent.changedTouches&&(l=t.originalEvent.changedTouches[0].pageX-r,h=t.originalEvent.changedTouches[0].pageY-c),0>l&&(l=0),0>h&&(h=0),l>i.width()&&(l=i.width()),h>i.height()&&(h=i.height()),i.parent().is(".minicolors-slider-wheel")&&a.parent().is(".minicolors-grid")&&(p=75-l,u=75-h,g=Math.sqrt(p*p+u*u),f=Math.atan2(u,p),0>f&&(f+=2*Math.PI),g>75&&(g=75,l=75-75*Math.cos(f),h=75-75*Math.sin(f)),l=Math.round(l),h=Math.round(h)),i.is(".minicolors-grid")?a.stop(!0).animate({top:h+"px",left:l+"px"},d,s.animationEasing,function(){e(n)}):a.stop(!0).animate({top:h+"px"},d,s.animationEasing,function(){e(n)})}function e(i){function t(i,t){var o,n;return i.length&&t?(o=i.offset().left,n=i.offset().top,{x:o-t.offset().left+i.outerWidth()/2,y:n-t.offset().top+i.outerHeight()/2}):null}var o,n,s,a,e,r,c,l,d,u,g=i.parent(),m=i.data("minicolors-settings"),b=g.find(".minicolors-panel"),v=g.find(".minicolors-swatch"),y=g.find(".minicolors-grid"),w=g.find(".minicolors-slider"),M=g.find(".minicolors-opacity-slider"),x=y.find("[class$=-picker]"),C=w.find("[class$=-picker]"),k=M.find("[class$=-picker]"),S=t(x,y),P=t(C,w),z=t(k,M);switch(m.control){case"wheel":c=y.width()/2-S.x,l=y.height()/2-S.y,d=Math.sqrt(c*c+l*l),u=Math.atan2(l,c),0>u&&(u+=2*Math.PI),d>75&&(d=75,S.x=69-75*Math.cos(u),S.y=69-75*Math.sin(u)),n=p(d/.75,0,100),o=p(180*u/Math.PI,0,360),s=p(100-Math.floor(P.y*(100/w.height())),0,100),r=f({h:o,s:n,b:s}),w.css("backgroundColor",f({h:o,s:n,b:100}));break;case"saturation":o=p(parseInt(S.x*(360/y.width())),0,360),n=p(100-Math.floor(P.y*(100/w.height())),0,100),s=p(100-Math.floor(S.y*(100/y.height())),0,100),r=f({h:o,s:n,b:s}),w.css("backgroundColor",f({h:o,s:100,b:s})),g.find(".minicolors-grid-inner").css("opacity",n/100);break;case"brightness":o=p(parseInt(S.x*(360/y.width())),0,360),n=p(100-Math.floor(S.y*(100/y.height())),0,100),s=p(100-Math.floor(P.y*(100/w.height())),0,100),r=f({h:o,s:n,b:s}),w.css("backgroundColor",f({h:o,s:n,b:100})),g.find(".minicolors-grid-inner").css("opacity",1-s/100);break;default:o=p(360-parseInt(P.y*(360/w.height())),0,360),n=p(Math.floor(S.x*(100/y.width())),0,100),s=p(100-Math.floor(S.y*(100/y.height())),0,100),r=f({h:o,s:n,b:s}),y.css("backgroundColor",f({h:o,s:100,b:100}))}a=m.opacity?parseFloat(1-z.y/M.height()).toFixed(2):1,i.val(h(r,m.letterCase)),m.opacity&&i.attr("data-opacity",a),v.find("SPAN").css({backgroundColor:r,opacity:a}),r+a!==i.data("minicolors-lastChange")&&(i.data("minicolors-lastChange",r+a),m.change&&m.change.call(i,r,a))}function r(i,t){var o,n,s,a,e,r,c,l=i.parent(),u=i.data("minicolors-settings"),g=l.find(".minicolors-swatch"),b=l.find(".minicolors-grid"),v=l.find(".minicolors-slider"),y=l.find(".minicolors-opacity-slider"),w=b.find("[class$=-picker]"),M=v.find("[class$=-picker]"),x=y.find("[class$=-picker]");switch(o=h(d(i.val(),!0),u.letterCase),o||(o=h(d(u.defaultValue,!0))),n=m(o),t||i.val(o),u.opacity&&(s=""===i.attr("data-opacity")?1:p(parseFloat(i.attr("data-opacity")).toFixed(2),0,1),i.attr("data-opacity",s),g.find("SPAN").css("opacity",s),e=p(y.height()-y.height()*s,0,y.height()),x.css("top",e+"px")),g.find("SPAN").css("backgroundColor",o),u.control){case"wheel":r=p(Math.ceil(.75*n.s),0,b.height()/2),c=n.h*Math.PI/180,a=p(75-Math.cos(c)*r,0,b.width()),e=p(75-Math.sin(c)*r,0,b.height()),w.css({top:e+"px",left:a+"px"}),e=150-n.b/(100/b.height()),""===o&&(e=0),M.css("top",e+"px"),v.css("backgroundColor",f({h:n.h,s:n.s,b:100}));break;case"saturation":a=p(5*n.h/12,0,150),e=p(b.height()-Math.ceil(n.b/(100/b.height())),0,b.height()),w.css({top:e+"px",left:a+"px"}),e=p(v.height()-n.s*(v.height()/100),0,v.height()),M.css("top",e+"px"),v.css("backgroundColor",f({h:n.h,s:100,b:n.b})),l.find(".minicolors-grid-inner").css("opacity",n.s/100);break;case"brightness":a=p(5*n.h/12,0,150),e=p(b.height()-Math.ceil(n.s/(100/b.height())),0,b.height()),w.css({top:e+"px",left:a+"px"}),e=p(v.height()-n.b*(v.height()/100),0,v.height()),M.css("top",e+"px"),v.css("backgroundColor",f({h:n.h,s:n.s,b:100})),l.find(".minicolors-grid-inner").css("opacity",1-n.b/100);break;default:a=p(Math.ceil(n.s/(100/b.width())),0,b.width()),e=p(b.height()-Math.ceil(n.b/(100/b.height())),0,b.height()),w.css({top:e+"px",left:a+"px"}),e=p(v.height()-n.h/(360/v.height()),0,v.height()),M.css("top",e+"px"),b.css("backgroundColor",f({h:n.h,s:100,b:100}))}}function c(i){var t=d($(i).val(),!0),o=v(t),n=$(i).attr("data-opacity");return o?(void 0!==n&&$.extend(o,{a:parseFloat(n)}),o):null}function l(i,t){var o=d($(i).val(),!0),n=v(o),s=$(i).attr("data-opacity");return n?(void 0===s&&(s=1),t?"rgba("+n.r+", "+n.g+", "+n.b+", "+parseFloat(s)+")":"rgb("+n.r+", "+n.g+", "+n.b+")"):null}function h(i,t){return"uppercase"===t?i.toUpperCase():i.toLowerCase()}function d(i,t){return i=i.replace(/[^A-F0-9]/gi,""),3!==i.length&&6!==i.length?"":(3===i.length&&t&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),"#"+i)}function p(i,t,o){return t>i&&(i=t),i>o&&(i=o),i}function u(i){var t={},o=Math.round(i.h),n=Math.round(255*i.s/100),s=Math.round(255*i.b/100);if(0===n)t.r=t.g=t.b=s;else{var a=s,e=(255-n)*s/255,r=(a-e)*(o%60)/60;360===o&&(o=0),60>o?(t.r=a,t.b=e,t.g=e+r):120>o?(t.g=a,t.b=e,t.r=a-r):180>o?(t.g=a,t.r=e,t.b=e+r):240>o?(t.b=a,t.r=e,t.g=a-r):300>o?(t.b=a,t.g=e,t.r=e+r):360>o?(t.r=a,t.g=e,t.b=a-r):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}function g(i){var t=[i.r.toString(16),i.g.toString(16),i.b.toString(16)];return $.each(t,function(i,o){1===o.length&&(t[i]="0"+o)}),"#"+t.join("")}function f(i){return g(u(i))}function m(i){var t=b(v(i));return 0===t.s&&(t.h=360),t}function b(i){var t={h:0,s:0,b:0},o=Math.min(i.r,i.g,i.b),n=Math.max(i.r,i.g,i.b),s=n-o;return t.b=n,t.s=0!==n?255*s/n:0,0!==t.s?i.r===n?t.h=(i.g-i.b)/s:i.g===n?t.h=2+(i.b-i.r)/s:t.h=4+(i.r-i.g)/s:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}function v(i){return i=parseInt(i.indexOf("#")>-1?i.substring(1):i,16),{r:i>>16,g:(65280&i)>>8,b:255&i}}"undefined"==typeof $.fn.minicolors&&($.minicolors={defaultSettings:{animationSpeed:100,animationEasing:"swing",change:null,control:"hue",defaultValue:"",hide:null,hideSpeed:100,inline:!1,letterCase:"lowercase",opacity:!1,position:"default",show:null,showSpeed:100,swatchPosition:"left",textfield:!0,theme:"default"}},$.extend($.fn,{minicolors:function(n,s){switch(n){case"destroy":return $(this).each(function(){t($(this))}),$(this);case"opacity":return void 0===s?$(this).attr("data-opacity"):($(this).each(function(){o($(this).attr("data-opacity",s))}),$(this));case"rgbObject":return c($(this),"rgbaObject"===n);case"rgbString":case"rgbaString":return l($(this),"rgbaString"===n);case"settings":return void 0===s?$(this).data("minicolors-settings"):($(this).each(function(){var i=$(this).data("minicolors-settings")||{};t($(this)),$(this).minicolors($.extend(!0,i,s))}),$(this));case"value":return void 0===s?$(this).val():($(this).each(function(){o($(this).val(s))}),$(this));case"create":default:return"create"!==n&&(s=n),$(this).each(function(){i($(this),s)}),$(this)}}}),$(document).on("mousedown.minicolors touchstart.minicolors",function(i){$(i.target).parents().add(i.target).hasClass("minicolors")||s()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(i){var t=$(this);i.preventDefault(),$(document).data("minicolors-target",t),a(t,i,!0)}).on("mousemove.minicolors touchmove.minicolors",function(i){var t=$(document).data("minicolors-target");t&&a(t,i)}).on("mouseup.minicolors touchend.minicolors",function(){$(this).removeData("minicolors-target")}).on("mousedown.minicolors touchstart.minicolors",".minicolors-swatch",function(i){var t=$(this).parent().find(".minicolors-input"),o=t.parent();o.hasClass("minicolors-focus")?s(t):n(t)}).on("focus.minicolors",".minicolors-input",function(i){var t=$(this);t.data("minicolors-initialized")&&n(t)}).on("blur.minicolors",".minicolors-input",function(i){var t=$(this),o=t.data("minicolors-settings");t.data("minicolors-initialized")&&(t.val(d(t.val(),!0)),""===t.val()&&t.val(d(o.defaultValue,!0)),t.val(h(t.val(),o.letterCase)),s(t))}).on("keydown.minicolors",".minicolors-input",function(i){var t=$(this);if(t.data("minicolors-initialized"))switch(i.keyCode){case 9:s();break;case 27:s(),t.blur()}}).on("keyup.minicolors",".minicolors-input",function(i){var t=$(this);t.data("minicolors-initialized")&&r(t,!0)}).on("paste.minicolors",".minicolors-input",function(i){var t=$(this);t.data("minicolors-initialized")&&setTimeout(function(){r(t,!0)},1)}))}(jQuery);