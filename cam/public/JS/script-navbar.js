// "use strict";

console.log("Connection test");
console.log("Working!");

(function($)
{
  $(function() // DOM ready
  {

    $('nav ul li a:not(:only-child)').click(function(e) // If a link has a dropdown, add sub menu toggle.
    {
      $(this).siblings('.nav-dropdown').toggle(); // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });

    $('html').click(function() // Clicking away from dropdown will remove the dropdown class
    {
      $('.nav-dropdown').hide();
    });

    $('#nav-toggle').click(function() // Toggle open and close nav styles on click
    {
      $('nav ul').slideToggle();
    });

    $('#nav-toggle').on('click', function() // Hamburger to X toggle
    {
      this.classList.toggle('active');
    });
  });
})(jQuery);
