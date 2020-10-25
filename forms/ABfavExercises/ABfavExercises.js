/*
var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

selExercises.items = exercises

ABfavExercises.onshow=function(){
    // set height property of textarea control 
    // - special code
    txtResults_contents.style.height = "100px"
}

results = [] 
let message = ""
        for (i = 0; i < results.length; i++){
            message = message + results[i][1] + "\n"
        txtResults.value = message
     } 



ABfavExercises.onshow=function(){
  //ABfavExercises.clear()   
    for (i = 0; i <= coreExercises.length - 1; i++){
        ABfavExercises.addItem(coreExercises[i])
     }   
    for (i = 0; i <= exercises.length - 1; i++) {
    ABfavExercises.addItem(exercises[i])
    }
}

btnDone.onclick=function(){
  // text returned is an array of the text choices made by the user
  let message = "The customers are:" 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + selExercises.text[i] + ", "
  // remove the last comma; slice starts at 0, and goes 
  // to end of the string minus 1 - net effect of dropping 
  // last 2 characters (comma and space)
  message = message.slice(0, -2);
  console.log(message)
}

selExercises.onfocusout=function(){

}


btnNxtPg.onclick=function(){
    ChangeForm(mobileNav)
}
*/