class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    var ranNum;
    ranNum = Math.floor(Math.random()*Math.floor(3));
    return acceptedValues[ranNum];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection == "rock" && cpuSelection == "scissors")
    {
      var response = "win";
      return response;
    }
    else if (userSelection == "paper" && cpuSelection == "rock")
    {
      var response = "win";
      return response;
    }
    else if (userSelection == "scissors" && cpuSelection == "paper")
    {
      var response = "win";
      return response;
    }
    else if (userSelection == cpuSelection)
    {
      var response = "tie";
      return response;
    }
    else
    {
      var response = "lose";
      return response;
    }
    
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    var cpuSelection = this.generateCPUResponse();
    var winner = this.determineWinner(userSelection, cpuSelection)

    if (winner == "win")
    {
      this.score.user ++;
      return this.gameHistoryLog.push(username +" Selected " + userSelection + ", CPU selected " + cpuSelection + ": " + username + " wins!");
    }
    else if (winner == "lose")
    {
      this.score.cpu ++;
      return this.gameHistoryLog.push(username +" Selected " + userSelection + ", CPU selected " + cpuSelection + ": CPU wins!");
    }
    else
    {
      return this.gameHistoryLog.push(username +" Selected " + userSelection + ", CPU selected " + cpuSelection + ": It's a tie!");
    }
  }

}