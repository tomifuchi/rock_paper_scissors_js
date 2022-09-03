//references to output
const result = document.getElementById("result");
const record = document.getElementById("record");
const opponent = document.getElementById("opponent");
const you = document.getElementById("you");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play_again = document.getElementById("play_again");

function generate_random_move(){
    let valid_moves = ['rock','paper','scissors'];
    return valid_moves[Math.floor(Math.random()*3)];
}

rock.addEventListener('click', () => {
   player_move = 'rock';
    compare_to_computer();
})
paper.addEventListener('click', () => {
    player_move = 'paper';
    compare_to_computer();
})
scissors.addEventListener('click', () => {
    player_move = 'scissors';
    compare_to_computer();
})

let player_score = 0;
let opponent_score = 0;
let player_move = "";
let opponent_move = "";
updateStats("Make your move !");

function compare_to_computer() {
    opponent_move =  generate_random_move();

    if(player_move === opponent_move){
        winner = "noone";
    } else {
      if(player_move === "rock"){
          if(opponent_move === "scissors"){
            winner = "player";
          }
          else {
            winner = "computer";
          }
     } else if(player_move === "paper"){
          if(opponent_move === "rock"){
            winner = "player";
          }
          else {
            winner = "computer";
          }
     } else if(player_move === "scissors"){
          if(opponent_move === "paper"){
            winner = "player";
          }
          else {
            winner = "computer";
          }
     }
    }

    if (winner === "noone"){
       updateStats("Draw");
    } else if (winner === "player") {
        player_score += 1;
        updateStats("Player win!");
    } else {
        opponent_score += 1;
        updateStats("Computer win!");
    }

    if(player_score >= 3 || opponent_score >= 3){
      if(player_score !== opponent_score){
        if (player_score > opponent_score) {
        let congrats_variation = [
          'Congrats ! You win !',
          'Wow! nice job you beat a random number generator!',
          'Nice!',
          "How did you do that, that is awesome!"
        ];
          updateStats(congrats_variation[
          Math.floor(Math.random()*congrats_variation.length)
          ]
         );
        } else {
        let demotivation_variations = [
          'Thats too bad, lets try again.',
          'Wow, that is bad ! Lol',
          'Man, you gonna practice on your luck',
          'Forget to increase your luck ?',
          'How about another round ?'
        ];
          updateStats(
          demotivation_variations[
          Math.floor(Math.random()*demotivation_variations.length)
          ]
        );
        }
        toggleUI();
      }
    }
}

play_again.addEventListener('click', resetStats);

function resetStats(){
  toggleUI();
  player_score = 0;
  opponent_score = 0;
  player_move = "";
  opponent_move = "";
  updateStats("Make your move!");
}

/*Expected input
 result text expect a string
  record_scoreexpect a 2 element array with first element
  be player_score and 2nd opponent score
  move_text is like record_score but instead of number
  its string and the order is like the previous.
*/
function updateStats(result_text, record_score = [player_score, opponent_score], move_text = [player_move, opponent_move]){
  result.textContent = result_text;
  record.textContent = `You: ${record_score[0]}. Opponent: ${record_score[1]}`;
  you.textContent = `Your move: ${move_text[0]}`;
  opponent.textContent = `Opponent's move: ${move_text[1]}`;
}

function toggleUI() {
  play_again.classList.toggle('none');
  rock.classList.toggle('none');
  paper.classList.toggle('none');
  scissors.classList.toggle('none');
}