
//let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value") 


rdoCharacteristics.onclick=function(s){
 // but not on one item in the list.
      let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value")
     lblRadioLabel.value = (`I would agree that you are a ${userChoice} person too!`)
  }


btnNextPage.onclick=function(){
    ChangeForm(favExercises)
}
