a="Stránka ještě není dokončena. Berte to prosím v potaz :)"
alert(a);

function() {
  var navLinks = $ ('#nav-bar ul li a'),
      navH = $('#nav-bar').height(),
      section = $('section'),
      documentEl = $(document);

  documentEl.on('scroll',function () {
      var currentScrollPos = documentEl.scrolltop();
      section.each(function() {
            var self = $(this);
            if (self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerheight()) ) {
              var targetClass = '.' + self.attr('class') + '-menu';
              navLinks.removeClass('active');
              $(targetClass).addClass('active');
            }

      });
  });
}
