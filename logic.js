$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  var newFriend = {
    name: $("#inputName")
      .val()
      .trim(),
    photo: $("#inputPhoto")
      .val()
      .trim(),
    scores: [
      parseInt(
        $("#question1")
          .val()
          .trim()
      ),
      parseInt(
        $("#question2")
          .val()
          .trim()
      ),
      parseInt(
        $("#question3")
          .val()
          .trim()
      ),
      parseInt(
        $("#question4")
          .val()
          .trim()
      ),
      parseInt(
        $("#question5")
          .val()
          .trim()
      ),
      parseInt(
        $("#question6")
          .val()
          .trim()
      ),
      parseInt(
        $("#question7")
          .val()
          .trim()
      ),
      parseInt(
        $("#question8")
          .val()
          .trim()
      ),
      parseInt(
        $("#question9")
          .val()
          .trim()
      ),
      parseInt(
        $("#question10")
          .val()
          .trim()
      )
    ]
  };
  console.log(newFriend);
});
