
let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
   console.log(`The value property of the control is ${rdoCharacteristics.value}`)
   


rdoCharacteristics.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
      let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value")
     lblRadioLabel.value = (`I would agree that you are a ${userChoice} person too!`)
  }


btnNextPage.onclick=function(){
    ChangeForm(ABfavExercises)
}
