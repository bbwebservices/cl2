jQuery(document).ready(function($) {
  var acct = $('.my-account');
  var child = jQuery('#snav .menu-item');

  acct.insertBefore(child.eq(1));
})