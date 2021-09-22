const available_options = ["Hela","Thor","Hulk"];
let player_points = 0;
let computer_points = 0;

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection)
        return "Tie"
    let temp_player_point = player_points;
    if(playerSelection == 0)
        if(available_options[computerSelection] == available_options[available_options.length - 1])
            computer_points++;
        else
            player_points++;
    else
        if(available_options[computerSelection] == available_options[playerSelection - 1])
            computer_points++;
        else
            player_points++;
    if(temp_player_point == player_points)
        return "You lost the round!"
    return "You won the round!"
}



function Game(player_choice){
    let computer_choice = computerPlay()
    let result = playRound(player_choice,computer_choice)
    RefreshResults(player_choice,computer_choice,result)
    UpdateScore()
    if(player_points == 5)
        display("game_result_win","Game")
    else if(computer_points == 5)
        display("game_result_lose","Game")
}

function computerPlay(){
    return Math.floor((Math.random() * 3))
} 

function display(Show,Hide){
    document.getElementById(Show).style.display = "flex"
    document.getElementById(Hide).style.display = "none"
}
function Reset(Hide){
    player_points = 0
    computer_points = 0
    RefreshResults()
    UpdateScore()
    display("Game",Hide)
}

function RefreshResults(player_choice,computer_choice,result){
    if(player_points == undefined || computer_choice == undefined || result == undefined )
    {
        document.getElementById("round_choices").textContent = ""
        document.getElementById("round_result").textContent = ""
        return
    }
    document.getElementById("round_choices").textContent = "Your Choice : " + available_options[player_choice] + " ----  Computer's Choice : " + available_options[computer_choice] 
    document.getElementById("round_result").textContent = result
}

function UpdateScore(){
    document.getElementById("player_score").innerHTML = player_points
    document.getElementById("computer_score").innerHTML = computer_points
}