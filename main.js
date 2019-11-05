$( "i:first").on({
   click: function() {
    $("div.hamburger-menu").show();
  }
});

$( "a.close").on({
   click: function() {
    $("div.hamburger-menu").hide();
  }
});
