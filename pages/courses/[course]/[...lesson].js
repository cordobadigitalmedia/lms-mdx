import { useState } from "react";
import { useRouter } from 'next/router'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Lesson() {
  const router = useRouter();
  const { course, lesson } = router.query;
  console.log(course, lesson);
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    document.querySelector(".sidebar").classList.toggle("-translate-x-full");
  };

  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="#" className="block p-4 text-white font-bold">
          Better Dev
        </a>
        <button
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
          onClick={onToggleNav}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 px-2 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
        <a href="#" className="text-white flex items-center space-x-2">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span className="text-2xl font-extrabold">My Course</span>
        </a>
        
        <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
        <nav className="divide-y divide-gray-400">
          <a
            href=""
            className="flex items-center space-x-2 py-2.5 px-4 hover:bg-blue-700 transition duration-200"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
              ></path>
            </svg>
            <span>Learn</span>
          </a>
          <a
            href=""
            className="flex items-center space-x-2 py-2.5 px-4 hover:bg-blue-700 transition duration-200"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M512 256c0 141.4-114.6 256-256 256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"
              ></path>
            </svg>
            <span>Remember the Vocabulary</span>
          </a>
          <a href="" className="block py-2.5 px-4">
            Understand the big ideas
          </a>
          <a href="" className="block py-2.5 px-4">
            Apply these steps
          </a>
          <a href="" className="block py-2.5 px-4">
            Refine your practice
          </a>
          <a
            href=""
            className="block py-2.5 px-4 hover:bg-blue-700 transition duration-200 rounded"
          >
            Reflect
          </a>
          <a href="" className="block py-2.5 px-4">
            Are you looking forward to your prayer?
          </a>
          <a href="" className="block py-2.5 px-4">
            How do you feel now when you recite?
          </a>
          <a href="" className="block py-2.5 px-4">
            How do you feel after your prayer?
          </a>
          <a
            href=""
            className="block py-2.5 px-4 hover:bg-blue-700 transition duration-200 rounded"
          >
            Practice
          </a>
          <a href="" className="block py-2.5 px-4">
            Avoid these pitfalls
          </a>
          <a href="" className="block py-2.5 px-4">
            Establish your training plan
          </a>
          <a href="" className="block py-2.5 px-4">
            Get role models and accountability partners
          </a>
          <a href="" className="block py-2.5 px-4">
            Find your why
          </a>
        </nav>
      </div>

      <div className="flex-1 p-10 text-2xl font-bold">content</div>
    </div>
  );
}
