/*
Author       : Dreamguys
Template Name: Doccure - Bootstrap Admin Template
Version      : 1.3
*/

(function ($) {
  "use strict";

  // Variables declarations

  let $wrapper = $('.main-wrapper');
  let $pageWrapper = $('.page-wrapper');
  let $slimScrolls = $('.slimscroll');
  // Sidebar

  let Sidemenu = function () {
    this.$menuItem = $('#sidebar-menu a');
  };

  function init() {
    let $this = Sidemenu;
    $(document).on('click', '#sidebar-menu a', function (e) {
      if ($(this).parent().hasClass('submenu')) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      if (!$(this).hasClass('subdrop')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('subdrop');
        $(this).next('ul').slideDown(350);
        $(this).addClass('subdrop');
      } else if ($(this).hasClass('subdrop')) {
        $(this).removeClass('subdrop');
        $(this).next('ul').slideUp(350);
      }
    });
    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
  }

  // Sidebar Initiate
  init();

  // Mobile menu sidebar overlay

  $(".main-wrapper").append('<div class="sidebar-overlay"></div>');
  $(document).on('click', '#mobile_btn', function () {
    $('.main-wrapper').toggleClass('slide-nav');
    $(".main-wrapper").find('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    return false;
  });

  // Sidebar overlay

  $(document).on("click", ".sidebar-overlay", function () {
    $('.main-wrapper').removeClass('slide-nav');
    $(".sidebar-overlay").removeClass("opened");
    $('html').removeClass('menu-opened');
  });

  // Page Content Height
  if ($pageWrapper.length > 0) {
    let height = $(window).height();
    $pageWrapper.css("min-height", height);
  }

  // Page Content Height Resize

  $(window).resize(function () {
    if ($pageWrapper.length > 0) {
      let height = $(window).height();
      $pageWrapper.css("min-height", height);
    }
  });

  // Select 2
  let select2 = $('.select');
  if (select2.length > 0) {
    select2.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }

  // Datetimepicker
  let datetimepicker = $('.datetimepicker');
  if (datetimepicker.length > 0) {
    datetimepicker.datetimepicker({
      format: 'DD/MM/YYYY',
      icons: {
        up: "fa fa-angle-up",
        down: "fa fa-angle-down",
        next: 'fa fa-angle-right',
        previous: 'fa fa-angle-left'
      }
    });
    $(document).on('dp.show', '.datetimepicker', function () {
      $(this).closest('.table-responsive').removeClass('table-responsive').addClass('temp');
    });
    $(document).on('dp.hide', '.datetimepicker', function () {
      $(this).closest('.temp').addClass('table-responsive').removeClass('temp')
    });
  }

  // Tooltip
  let tooltip = $('[data-toggle="tooltip"]');
  if (tooltip.length > 0) {
    tooltip.tooltip();
  }

  // Datatable
  let datatable = $('.datatable');
  if (datatable.length > 0) {
    datatable.DataTable({
      "bFilter": false,
      "pageLength": 2,
      "iDisplayLength": 2,
      "lengthMenu": [[2, 50, 100, 250], [2, 50, 100, 250]],
    });
  }

  // Email Inbox

  if ($('.clickable-row').length > 0) {
    $(document).on('click', '.clickable-row', function () {
      window.location = $(this).data("href");
    });
  }

  // Check all email
  let checkmail = $(".checkmail");
  $(document).on('click', '#check_all', function () {
    checkmail.click();
    return false;
  });
  if (checkmail.length > 0) {
    checkmail.each(function () {
      $(this).on('click', function () {
        if ($(this).closest('tr').hasClass('checked')) {
          $(this).closest('tr').removeClass('checked');
        } else {
          $(this).closest('tr').addClass('checked');
        }
      });
    });
  }

  // Mail important

  $(document).on('click', '.mail-important', function () {
    $(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
  });

  // Summernote
  let summernote = $('.summernote');
  if (summernote.length > 0) {
    summernote.summernote({
      height: 200,                 // set editor height
      minHeight: null,             // set minimum height of editor
      maxHeight: null,             // set maximum height of editor
      focus: false                 // set focus to editable area after initializing summernote
    });
  }

  // Product thumb images
  let proImage = $(".pro-image img");
  if ($('.proimage-thumb li a').length > 0) {
    let full_image = $(this).attr("href");
    $(".proimage-thumb li a").click(function () {
      full_image = $(this).attr("href");
      proImage.attr("src", full_image);
      proImage.parent().attr("href", full_image);
      return false;
    });
  }

  // Lightgallery
  let proPopup = $("#pro_popup");
  if (proPopup.length > 0) {
    proPopup.lightGallery({
      thumbnail: true,
      selector: 'a'
    });
  }

  // Sidebar Slimscroll

  if ($slimScrolls.length > 0) {
    $slimScrolls.slimScroll({
      height: 'auto',
      width: '100%',
      position: 'right',
      size: '7px',
      color: '#ccc',
      allowPageScroll: false,
      wheelStep: 10,
      touchScrollStep: 100
    });
    let wHeight = $(window).height() - 60;
    $slimScrolls.height(wHeight);
    $('.sidebar .slimScrollDiv').height(wHeight);
    $(window).resize(function () {
      let rHeight = $(window).height() - 60;
      $slimScrolls.height(rHeight);
      $('.sidebar .slimScrollDiv').height(rHeight);
    });
  }

  // Small Sidebar
  $(document).on('click', '#toggle_btn', function () {
    if ($("body").hasClass('mini-sidebar')) {
      $("body").removeClass('mini-sidebar');
      $('.subdrop + ul').slideDown();
    } else {
      $("body").addClass('mini-sidebar');
      $('.subdrop + ul').slideUp();
    }

    return false;
  });
  $(document).on('mouseover', function (e) {
    if ($("body").hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
      let targ = $(e.target).closest('.sidebar').length;
      if (targ) {
        $("body").addClass('expand-menu');
        $('.subdrop + ul').slideDown();
      } else {
        $("body").removeClass('expand-menu');
        $('.subdrop + ul').slideUp();
      }
      return false;
    }
  });


})(jQuery);
