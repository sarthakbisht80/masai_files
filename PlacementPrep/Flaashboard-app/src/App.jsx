import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flashcards } from './data/flashCard'
import Flashcard from './components/Flashcard'

const Session_Time= 600;
function App() {
  const [index,setIndex]= useState(0);
  const [flipped,setFlipped]= useState(false);
  const [correct,setCorrect]= useState(1);
  const [incorrect,setInCorrect]= useState(1);
  const [attempted,setAttempted]= useState({});
  const [timeleft,setTimeLeft]= useState(Session_Time);
  const [finished,setFinished]= useState(false);

  //lod from localStroage
  useEffect(()=>{
      const saved= JSON.parse(localStorage.getItem("session"));
    if(saved){
      setIndex(saved.index ??0);
      setCorrect(saved.correct ??0);
      setInCorrect(saved.incorrect??0);
      setAttempted(saved.attempted?? {});
      setTimeLeft(saved.timeleft>0 ?saved.timeleft: Session_Time);

    }
  },[]);

//autosave
useEffect(()=>{
localStorage.setItem("session",JSON.stringify({index,correct,incorrect,attempted,timeleft}));


},[index,correct,incorrect,attempted,timeleft]);

//timer
useEffect(()=>{
  if(timeleft<=0) {
    setFinished(true);
return;
  }
  
  const t=setInterval(() => {
      setTimeLeft(t=>t-1);
  }, 1000);
  return ()=> clearInterval(t);
},[timeleft]);


const mark=(isCorrect)=>{
  if(attempted[index]) return;
  setAttempted({...attempted,[index]:true});
  isCorrect? setCorrect(correct+1) : 
  setInCorrect(incorrect+1);
};
if(finished){
  const unattempted= flashcards.length-Object.keys(attempted).length;


  return (
    <>
      <h2>Session Summary</h2>  
      <p>Correct {correct}</p>
      <p>Incorrect{incorrect}</p>
      <p>Unattempted{unattempted}</p>


    </>
  )
}
return(
   <div>


    <h3>Time Left :{Math.floor(timeleft/60)}:{("0"+timeleft %60)
      .slice(-2)}</h3>
 <Flashcard card={flashcards[index]}
 flipped={flipped}
 onflip={()=>setFlipped(f=>!f)}/>

 <button onClick={()=>setIndex(Math.max(0,index-1))}
 >Prev</button>
 <button onClick={()=>setIndex(Math.min(flashcards.length-1,index+1))

 }>Next</button>
  
  {flipped && !attempted[index] && (
    <div>
      <button onClick={()=>mark(true)}> Correct</button>
      <button onClick={()=>mark(false)}>Incorrect</button>
      </div>
  )}
  <p>Progress {correct}</p>
  </div>

)
}
export default App
