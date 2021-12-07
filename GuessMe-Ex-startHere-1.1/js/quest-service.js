var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const STORAGE_KEY = 'questDB'

function createQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

    _saveQuestToStorage()
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest =  gCurrQuest ;
    gCurrQuest = gCurrQuest[res];
    
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    var newNode = createQuest(newQuestTxt);
    newNode.yes = createQuest(newGuessTxt);
    newNode.no = gCurrQuest;
    gPrevQuest[lastRes] = newNode;

    gCurrQuest = gQuestsTree;

    _saveQuestToStorage()
}

function _saveQuestToStorage() {
    saveToStorage(STORAGE_KEY, gQuestsTree)
}

function getCurrQuest() {
    return gCurrQuest
}