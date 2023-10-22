


export function searchSound (datos) {
  for (const n of datos){
    if(n.audio !== ''){
      return n.audio
    }
  }
}


export function sound (){
  document.getElementById("audio").play()
}