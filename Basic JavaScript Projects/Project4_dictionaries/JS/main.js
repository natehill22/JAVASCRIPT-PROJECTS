function myDictionary() { 
    const PeaFacts = { //Dictionary of pea descriptions
        Color: "Green",
        Texture: "Mushy",
        Appearance: "Wrinkly",
        Taste: "meh",
        Aura: "Both vibrant and shrivelled",
        Smell: "s'awright",
        Rating: "6/10"
    }
    delete PeaFacts.Texture; //Deletes the selected value from the dictionary before it can be used

    var keys = Object.keys(PeaFacts); // Creating a variable that pulls in an array of all keys
    if ((Object.keys(PeaFacts).length) === 7) { //If the length of the PeaFacts Keys array is 7, set the peaString variable to pull both the value of the Key and Value into a string
        var peaString = keys[1] + ": " + PeaFacts.Texture; 
        } else { //If the length equals anything else (say if it's been deleted), set the peaString variable to pull only the value into peaString
            var peaString = PeaFacts.Texture;
        }
    document.getElementById("Dictionary").innerHTML = peaString; //Displaying that string in the HTML element
}