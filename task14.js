const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const sortedArray = arr.sort();
    const teams = [
        sortedArray.slice(0, 3),
        sortedArray.slice(3, 6),
        sortedArray.slice(6, 9)
    ];
    const rest = sortedArray.slice(9);
    if (rest.length === 0) {
        return [...teams,`Оставшиеся студенты: -`];
    }
    return [...teams,`Оставшиеся студенты: ${rest.join(', ')}`];
}