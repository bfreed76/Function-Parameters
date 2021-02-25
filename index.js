
// function with interpolation
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

introduction ('Josh');

// function with two parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage ('Scott, Ember.js');

// function with optional parameter, default
function introductionWithLanguageOptional (name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional ('Gracie');

