'use strict';

var i = 1;
var $role = $('#role');
var $update = $('#update');
var $fixture = $('#fixture');
var $ariaLive = $('#aria-live');
var $ariaAtomic = $('#aria-atomic');
var $ariaRelevant = $('#aria-relevant');

configureRegion();

$('#submit').on('click', configureRegion);
$('#clear').on('click', function () {
  $update.empty();
});

$role.on('change', onroleChange);


function configureRegion(e) {
  // configure attributes
  var roleVal = $role.val()
  var isCustom = roleVal === 'Customized';

  if (!isCustom) {
    $fixture.attr('role', roleVal);
  }

  $fixture
    .attr({
      'aria-live': $ariaLive.val(),
      'aria-atomic': $ariaAtomic.val(),
      'aria-relevant': $ariaRelevant.val()
    });

  // configure content insertion (if submit was clicked)
  if (e) {
    configureInsertion();
  }
}


function configureInsertion() {
  var freq = $('input[name="trigger-type"]:checked').val();

  // call `insertContent` based on frequency chosen
  if (freq === 'once') {
    insertContent()
  } else {
    var freq = (freq === 'five') ? 5 : 10;
    setInterval(insertContent, freq * 1000)
  }
}

function insertContent() {
  $update.append('<div>Updated Content #' + i + '</div>');
  i++;
}

function onroleChange() {
  var activeCache = document.activeElement;
  var role = $role.val();
  console.log('role: ', role);
  $('#loading').fadeIn().focus();


  // TODO: update <select /> vals based on role
  // (or fuck off if changed to custom)
  // if (role !== 'Customized') {

  // }


  setTimeout(function () {
    $('#loading').fadeOut();
    activeCache.focus();
  }, 1800)
}