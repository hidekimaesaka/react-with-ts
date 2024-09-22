import CourseGoal from "./CourseGoal";

import InfoBox from "./InfoBox";

import { CourseGoalType } from "../types/CourseGoal";
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
};


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps){


    
  if (goals.length === 0){
    return (
      <>
      <InfoBox mode="hint">
      You don't have any goals. Create One!
      </InfoBox>
      <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
      </>
    )
  }

  let warningBox: ReactNode;

  if (goals.length > 3){
    warningBox = (<InfoBox mode="warning" severety="high">Hey, you are creating too many goals. Be careful. Are you sure, you gonna make it?</InfoBox>)
  }
  
  
  return (
    <>
    {warningBox}
      <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
        
    )
}
