
hmbMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) { /*
            case "Login":
            // hide the hamberger menu and show the signin button
                hmbrMenu.hide()
                btnSignIn.show()
                break */
            case "Dessert Voting":
                // Go to the dessertVoting form
                ChangeForm(dessertVoting)
                break
            case "Describing You":
                // Go to the describeYou form
                ChangeForm(describeYou)
                break
            case "Exercise Knowledge":
                // Go to the ABfavExercises form
                ChangeForm(ABfavExercises)
                break
       }  //switch
   } //else
}
}
