class TetrisManager
{
    constructor(document) 
    {
        this.document = document;

        this.template = document.getElementById('player-template');

        this.instances = [];

        const playerElements = document.querySelectorAll('.player');
        [...playerElements].forEach(element => {
            console.log(element);
            const tetris = new Tetris(element);
            this.instances.push(tetris);
        });
    }

    createPlayer()
    {
        const element = this.document
            .importNode(this.template.content, true) // Thanks you StackOverFlow... Jesus
            .children[0];

        console.log(element);
    }
}