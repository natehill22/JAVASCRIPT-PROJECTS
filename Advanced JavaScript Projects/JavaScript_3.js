function displayType(character) {
    var characterName = character.getAttribute("data-character-type");
    var characterID = character.getAttribute("id");
    alert(characterName + " is the " + characterID + " in the Addams family.");
}