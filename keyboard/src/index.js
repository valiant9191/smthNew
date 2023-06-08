const bodyEl = document.querySelector('body');
bodyEl.innerHTML = '<h1>keyboard</h1>';

class Key {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

const buttons = [
    {
        value: 'q',
        type: 'letter',/* number | special | operator? */

    },
    {
        value: 'w',
        type: 'letter',/* number | special | operator? */

    },
    {
        value: 'e',
        type: 'letter',/* number | special | operator? */

    },
    {
        value: 'r',
        type: 'letter',/* number | special | operator? */

    },
    {
        value: 't',
        type: 'letter',/* number | special | operator? */

    },
    {
        value: 'y',
        type: 'letter',/* number | special | operator? */

    }
]