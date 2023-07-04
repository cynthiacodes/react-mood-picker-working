import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
    
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
    
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
    
  };



  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={()=> queueRerenderWithNewMoodValue("tired") }>😴</button>
      <button onClick={()=> queueRerenderWithNewMoodValue("Sick") }>🤕</button>
      <button onClick={()=> queueRerenderWithNewMoodValue("Fabulous")}>💃🏽</button>
    </>
  );
}

export default MoodPickerDemo;
