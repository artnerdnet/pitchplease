"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFrequencies = exports.fixNumberDecimals = exports.getScalesWithinRange = void 0;
const _1 = require(".");
const getScalesWithinRange = (startNote = "C2", endNote = "B6") => {
    const notesArray = [];
    let startOctave = parseInt(startNote.slice(-1));
    let endOctave = parseInt(endNote.slice(-1));
    for (let octave = startOctave; octave <= endOctave; octave++) {
        _1.NOTES.forEach((note) => {
            notesArray.push(note + octave);
        });
    }
    return notesArray;
};
exports.getScalesWithinRange = getScalesWithinRange;
const fixNumberDecimals = (num, fixAmount = 2) => {
    return Number(num.toFixed(fixAmount));
};
exports.fixNumberDecimals = fixNumberDecimals;
const getAllFrequencies = (notes) => (notes.map(note => note.frequencyInHz));
exports.getAllFrequencies = getAllFrequencies;