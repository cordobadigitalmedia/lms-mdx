import { useState } from "react";
import { useRouter } from 'next/router'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

export default function Lesson() {
  const router = useRouter();
  const { course, lesson } = router.query;
  console.log(course, lesson);
  const [navShow, setNavShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <div className="sidebar bg-gray-100 text-blue-100 w-96 space-y-6 px-0 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
        <div className="round-md bg-white p-2 m-2 drop-shadow-sm">
          <span className="text-xl font-extrabold text-slate-800">My Course</span>
        </div>
        <nav className="divide-y divide-gray-400">
          <div className="bg-gray-100">
            <div className="p-0 m-0 py-2 border-t-2 border-slate-400">
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                <div className="w-6 h-6 p-0 m-px border-2 border-slate-400 absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-black font-medium flex-grow">Learn</div>
                <div className="text-gray-500 text-sm mx-2">0/4</div>
                <ChevronUpIcon className="h-5 w-5 text-slate-500 mr-2" />
              </div>
            </div>
            <div className="p-0 m-0 bg-stone-300">
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                <div className="w-4 h-4 bg-white p-0 m-px absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-gray-800 font-medium">Remember the Vocabulary</div>
              </div>
              <div className="border-l-2 h-5 ml-5">
              </div>
            </div>
            <div className="p-0 m-0">
              <div className="border-l-2 border-slate-400 h-2 ml-5">
              </div>
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-0 m-0">
                <div className="w-4 h-4 bg-white border-2 border-slate-500 p-0 m-px absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-gray-800 font-medium">Understand the big ideas</div>
              </div>
              <div className="border-l-2 border-slate-400 h-3 ml-5">
              </div>
            </div>
            <div className="p-0 m-0">
              <div className="border-l-2 border-slate-400 h-2 ml-5">
              </div>
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-0 m-0">
                <div className="w-4 h-4 bg-white border-2 border-slate-500 p-0 m-px absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-gray-800 font-medium">Apply these steps</div>
              </div>
              <div className="border-l-2 border-slate-400 h-3 ml-5">
              </div>
            </div>
            <div className="p-0 m-0">
              <div className="border-l-2 border-slate-400 h-2 ml-5">
              </div>
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-0 m-0">
                <div className="w-4 h-4 bg-white border-2 border-slate-500 p-0 m-px absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-gray-800 font-medium">Refine your practice</div>
              </div>
              <div className="h-3 ml-5">
              </div>
            </div>
            <div className="p-0 m-0 py-2 border-t-2 border-slate-400">
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                <div className="w-6 h-6 p-0 m-px border-2 border-slate-400 absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-black font-medium flex-grow">Reflect</div>
                <div className="text-gray-500 text-sm mx-2">0/3</div>
                <ChevronDownIcon className="h-5 w-5 text-slate-500 mr-2" />
              </div>
            </div>
            <div className="p-0 m-0 py-2 border-t-2 border-slate-400">
              <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                <div className="w-6 h-6 p-0 m-px border-2 border-slate-400 absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                <div className="text-black font-medium flex-grow">Practice</div>
                <div className="text-gray-500 text-sm mx-2">0/5</div>
                <ChevronDownIcon className="h-5 w-5 text-slate-500 mr-2" />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-1 p-10 text-2xl font-bold">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
