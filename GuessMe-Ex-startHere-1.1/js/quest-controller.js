'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  // TODO: hide the game-start section
  $('.game-start').hide();

  renderQuest();
  $('.quest').show();

  // TODO: show the quest section
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text
  var $elH2 = $('.quest h2')
  var CurrQuest = getCurrQuest()
  $elH2.text(CurrQuest.txt)
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!');
      $('.new-quest').css({ display: 'block' })
      // TODO: hide and show new-quest section
    }
  } else {
    // TODO: update the lastRes global var
    gLastRes = res;
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();

  // TODO: Get the inputs' values
  // TODO: Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  $('.quest').hide();
  $('')

  gLastRes = null;


}
