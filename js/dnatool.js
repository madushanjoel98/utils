// List of valid DNA nucleotides
const nucleotools = ["A", "C", "G", "T"];

// Dictionary containing complementary base pairs
const DNA_reverse_complement = { "A": "T", "C": "G", "G": "C", "T": "A" };

// Codon Table: Mapping RNA codons to amino acids
const CODON_TABLE = {
    "UUU": "F", "UUC": "F", "UUA": "L", "UUG": "L",
    "UCU": "S", "UCC": "S", "UCA": "S", "UCG": "S",
    "UAU": "Y", "UAC": "Y", "UAA": "*", "UAG": "*",
    "UGU": "C", "UGC": "C", "UGA": "*", "UGG": "W",
    "CUU": "L", "CUC": "L", "CUA": "L", "CUG": "L",
    "CCU": "P", "CCC": "P", "CCA": "P", "CCG": "P",
    "CAU": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
    "CGU": "R", "CGC": "R", "CGA": "R", "CGG": "R",
    "AUU": "I", "AUC": "I", "AUA": "I", "AUG": "M",
    "ACU": "T", "ACC": "T", "ACA": "T", "ACG": "T",
    "AAU": "N", "AAC": "N", "AAA": "K", "AAG": "K",
    "AGU": "S", "AGC": "S", "AGA": "R", "AGG": "R",
    "GUU": "V", "GUC": "V", "GUA": "V", "GUG": "V",
    "GCU": "A", "GCC": "A", "GCA": "A", "GCG": "A",
    "GAU": "D", "GAC": "D", "GAA": "E", "GAG": "E",
    "GGU": "G", "GGC": "G", "GGA": "G", "GGG": "G"
};

/**
 * Validates if the input DNA sequence contains only 'A', 'C', 'G', and 'T'.
 * @param {string} dna_seq - Input DNA sequence
 * @returns {string|boolean} - Uppercased DNA sequence if valid, otherwise false
 */
function validateSequence(dna_seq) {
    const upperSeq = dna_seq.toUpperCase();
    for (let i of upperSeq) {
        if (!nucleotools.includes(i)) return false;
    }
    return upperSeq;
}

/**
 * Counts occurrences of each nucleotide in the DNA sequence.
 * @param {string} dna_seq - Input DNA sequence
 * @returns {Object} - Dictionary with nucleotide counts
 */
function countNucleotides(dna_seq) {
    return [...dna_seq].reduce((acc, nucleotide) => {
        acc[nucleotide] = (acc[nucleotide] || 0) + 1;
        return acc;
    }, {});
}

/**
 * Transcribes DNA into RNA by replacing 'T' (Thymine) with 'U' (Uracil).
 * @param {string} dna_seq - Input DNA sequence
 * @returns {string} - Transcribed RNA sequence
 */
function transcribeDNA(dna_seq) {
    return dna_seq.replace(/T/g, "U");
}

/**
 * Generates the reverse complement of a DNA sequence.
 * @param {string} dna_seq - Input DNA sequence
 * @returns {string} - Reverse complement of the sequence
 */
function reverseComplement(dna_seq) {
    return [...dna_seq].reverse().map(base => DNA_reverse_complement[base]).join("");
}

/**
 * Translates an RNA sequence into a protein sequence using the codon table.
 * @param {string} rna_seq - Input RNA sequence
 * @returns {string} - Protein sequence
 */
function translateRNAtoProtein(rna_seq) {
    let protein = [];
    for (let i = 0; i < rna_seq.length - 2; i += 3) {
        let codon = rna_seq.slice(i, i + 3);
        let aminoAcid = CODON_TABLE[codon] || "X"; // 'X' for unknown codons
        if (aminoAcid === "*") break; // Stop translation at stop codon
        protein.push(aminoAcid);
    }
    return protein.join("");
}

/**
 * Colorizes the DNA sequence by wrapping each nucleotide in a span with a corresponding class for color.
 * @param {string} dna_seq - Input DNA sequence
 * @returns {string} - HTML string with colorized DNA sequence
 */
function colorizeSequence(dna_seq) {
    return dna_seq.split("").map(base => {
        switch (base) {
            case "A":
                return `<span class="text-primary">${base}</span>`; // Blue for A
            case "C":
                return `<span class="text-success">${base}</span>`; // Green for C
            case "G":
                return `<span class="text-warning">${base}</span>`; // Yellow for G
            case "T":
                return `<span class="text-danger">${base}</span>`; // Red for T
            default:
                return base;
        }
    }).join("");
}

function drawDNA(dna_seq) {
    const dnaContainer = document.getElementById("dnaContainer");
    dnaContainer.innerHTML = "";  // Clear any existing DNA content

    // Create a "ladder" structure for the DNA sequence
    const strand1 = document.createElement("div");
    const strand2 = document.createElement("div");

    strand1.classList.add("strand");
    strand2.classList.add("strand");

    for (let i = 0; i < dna_seq.length; i++) {
        const nucleotide1 = dna_seq[i];
        const nucleotide2 = DNA_reverse_complement[nucleotide1];

        // Create the "rungs" of the ladder (complementary pairs)
        const rung = document.createElement("div");
        rung.classList.add("rung");

        // Add nucleotides with color classes
        const base1 = document.createElement("span");
        base1.classList.add(getColorClass(nucleotide1));
        base1.textContent = nucleotide1;

        const base2 = document.createElement("span");
        base2.classList.add(getColorClass(nucleotide2));
        base2.textContent = nucleotide2;

        rung.appendChild(base1);
        rung.appendChild(base2);

        strand1.appendChild(rung);
        strand2.appendChild(rung);
    }

    dnaContainer.appendChild(strand1);
    dnaContainer.appendChild(strand2);
}

function getColorClass(nucleotide) {
    switch (nucleotide) {
        case "A":
            return "text-primary"; // Blue
        case "C":
            return "text-success"; // Green
        case "G":
            return "text-warning"; // Yellow
        case "T":
            return "text-danger"; // Red
        default:
            return "";
    }
}