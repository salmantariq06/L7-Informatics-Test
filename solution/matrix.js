function findWord(grid, word = '') {
    const characters = grid.reduce((chars, array) => chars.concat(array), [])

    for (const character of word) {
        if (characters.includes(character)) {
            characters.splice(characters.indexOf(character), 1);
            continue;
        }

        return false;
    }

    return true;
}

const grid = [
    ['x', 'c', 'a'],
    ['d', 'y', 't'],
    ['o', 'g', 'z'],
];

console.log(findWord(grid, 'cat'));
