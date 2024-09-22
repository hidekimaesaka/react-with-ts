import { useState } from "react";

import { type CourseGoalType } from "./types/CourseGoal.tsx";

import CourseGoalList from "./components/CourseGoalList.tsx";

import NewGoal from "./components/NewGoal.tsx";

import Header from "./components/Header.tsx";

import appImg from "./assets/goals.jpg"


export default function App() {

  const [goals, setGoals] = useState<CourseGoalType[]>([])

  function handleGoal(goal: string, summary: string) {
    setGoals(prevGoals => {

      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }


  return <main>
    <Header image={{ src: appImg, alt: "Goals alternative text" }} >
      <h1>Your Course Goals</h1>
    </Header>
  <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
    <NewGoal onAddGoal={handleGoal}></NewGoal>
  </main>
}
