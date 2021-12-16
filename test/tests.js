import './example.test.js';

import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;




test('renderGame is a function that will return a DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = 
    {
        name1: 'fish',
        score1: 6,
        name2: 'gulls',
        score2: 3

    };

    const expected = '<div class="game"><div class="team"><p class="name">fish</p><p class="score">6</p></div><div class="team"><p class="name">gulls</p><p class="score">3</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected,'returns game and team divs');
});

test('renderTeam is a function that will return a DOM node', (expect) => {
    const name ='fish';
    const score = 6;

    

    const expected = '<div class="team"><p class="name">fish</p><p class="score">6</p></div>';


    const actual = renderTeam(name, score);

    expect.equal(actual.outerHTML, expected, 'returns a div with name and score p tags');

});