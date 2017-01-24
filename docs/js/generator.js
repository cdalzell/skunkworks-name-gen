function buildWordLists() {
    console.log('building lists');
    
    const firstWords = adjectives.concat(adverbs).concat(alphabet).concat(verbs);
    const lastWords = adjectives.concat(adverbs).concat(alphabet);

    const lists = {
        "firstWords" : firstWords,
        "lastWords" : lastWords
    };

    return lists;
}

function getRandom(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    const random = Math.random();

    return Math.floor(random * (max - min)) + min;
}

function generateProjectName(wordLists) {
    const firstWordPos = getRandom(0, wordLists.firstWords.length);
    const firstWord = wordLists.firstWords[firstWordPos].toUpperCase();

    let lastWord;

    do {
        const lastWordPos = getRandom(0, wordLists.lastWords.length);

        lastWord = wordLists.lastWords[lastWordPos].toUpperCase();
    } while (firstWord === lastWord)

    return `${firstWord} ${lastWord}`;
}

$(document).ready(function docReady() {
    const wordLists = buildWordLists();

    $("#generate").click(function handleGenerateClick() {
        const projectName = generateProjectName(wordLists);

        $('#project-name').text(projectName);
    });
});
