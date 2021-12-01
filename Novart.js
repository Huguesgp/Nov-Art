$('.carousel').carousel({
  interval: 500
})
$('#myCarousel').on('slide.bs.carousel', function (slide) {
  // do something…
})
$('.carousel').carousel({
  data-interval="1000"
})
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
$carousel-control-color:             $white;
$carousel-control-width:             15%;
$carousel-control-opacity:           .5;
$carousel-control-hover-opacity:     .9;
$carousel-control-transition:        opacity .15s ease;

$carousel-indicator-width:           30px;
$carousel-indicator-height:          3px;
$carousel-indicator-hit-area-height: 10px;
$carousel-indicator-spacer:          3px;
$carousel-indicator-opacity:         .5;
$carousel-indicator-active-bg:       $white;
$carousel-indicator-active-opacity:  1;
$carousel-indicator-transition:      opacity .6s ease;

$carousel-caption-width:             70%;
$carousel-caption-color:             $white;
$carousel-caption-padding-y:         1.25rem;
$carousel-caption-spacer:            1.25rem;

$carousel-control-icon-width:        2rem;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

$carousel-transition-duration:       .6s;
$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

$carousel-dark-indicator-active-bg:  $black;
$carousel-dark-caption-color:        $black;
$carousel-dark-control-icon-filter:  invert(1) grayscale(100);

@mixin form-validation-state-selector($state) {
  @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(&, "&", "")}:#{$state},
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  }
}

@mixin form-validation-state(
  $state,
  $color,
  $icon,
  $tooltip-color: color-contrast($color),
  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity)
) {
  .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top;
    @include font-size($form-feedback-font-size);
    font-style: $form-feedback-font-style;
    color: $color;
  }

  .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
    margin-top: .1rem;
    @include font-size($form-feedback-tooltip-font-size);
    line-height: $form-feedback-tooltip-line-height;
    color: $tooltip-color;
    background-color: $tooltip-bg-color;
    @include border-radius($form-feedback-tooltip-border-radius);
  }

  @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
      display: block;
    }
  }

  .form-control {
    @include form-validation-state-selector($state) {
      border-color: $color;

      @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-image: escape-svg($icon);
        background-repeat: no-repeat;
        background-position: right $input-height-inner-quarter center;
        background-size: $input-height-inner-half $input-height-inner-half;
      }

      &:focus {
        border-color: $color;
        box-shadow: $focus-box-shadow;
      }
    }
  }

  // stylelint-disable-next-line selector-no-qualifying-type
  textarea.form-control {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;
      }
    }
  }

  .form-select {
    @include form-validation-state-selector($state) {
      border-color: $color;

      @if $enable-validation-icons {
        padding-right: $form-select-feedback-icon-padding-end;
        background-image: escape-svg($form-select-indicator), escape-svg($icon);
        background-position: $form-select-bg-position, $form-select-feedback-icon-position;
        background-size: $form-select-bg-size, $form-select-feedback-icon-size;
      }

      &:focus {
        border-color: $color;
        box-shadow: $focus-box-shadow;
      }
    }
  }

  .form-check-input {
    @include form-validation-state-selector($state) {
      border-color: $color;

      &:checked {
        background-color: $color;
      }

      &:focus {
        box-shadow: $focus-box-shadow;
      }

      ~ .form-check-label {
        color: $color;
      }
    }
  }
  .form-check-inline .form-check-input {
    ~ .#{$state}-feedback {
      margin-left: .5em;
    }
  }

  .input-group .form-control,
  .input-group .form-select {
    @include form-validation-state-selector($state) {
      z-index: 3;
    }
  }
}
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})