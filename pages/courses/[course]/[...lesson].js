import { useState } from "react";
import { useRouter } from 'next/router'

import MenuBar from '../../../components/navigation/MenuBar';
import LessonNav from "../../../components/navigation/LessonNav";

export default function Lesson() {
  const router = useRouter();
  const { course, lesson } = router.query;
  
  return (
    <div className="relative min-h-screen md:flex">
      <MenuBar />
      <div className="sidebar bg-gray-100 text-blue-100 w-96 space-y-6 px-0 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
        <div className="round-md bg-white p-2 m-2 drop-shadow-sm">
          <span className="text-xl font-extrabold text-slate-800">My Course</span>
        </div>
        <LessonNav/>
      </div>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
