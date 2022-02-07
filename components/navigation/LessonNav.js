import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link'

export default function LessonNav({ chapters, lesson, course }) {
    console.log(course);
    const [currentChapter, setCurrentChapter] = useState(Number(lesson[0]) - 1);
    const [currentLesson, setCurrentLesson] = useState(Number(lesson[1]) - 1);

    const onToggleAccordion = (i) => {
        if (currentChapter === i) {
            document.querySelector("#panel" + currentChapter).classList.toggle("scale-y-0");
            document.querySelector("#panel" + currentChapter).classList.toggle("scale-y-100");
            document.querySelector("#panel" + currentChapter).classList.toggle("h-0");
            document.querySelector("#panel" + currentChapter).classList.toggle("h-full");
            document.querySelector("#panel" + currentChapter + "_up").classList.toggle("hidden");
            document.querySelector("#panel" + currentChapter + "_down").classList.toggle("hidden");
        } else {
            setCurrentChapter(i);
            setCurrentLesson(0);
        }
    }

    const setPanel = () => {
        if (currentChapter >= 0 && currentLesson >= 0) {
            document.querySelector("#panel" + currentChapter).classList.toggle("scale-y-0");
            document.querySelector("#panel" + currentChapter).classList.toggle("scale-y-100");
            document.querySelector("#panel" + currentChapter).classList.toggle("h-0");
            document.querySelector("#panel" + currentChapter).classList.toggle("h-full");
            document.querySelector("#panel" + currentChapter + "_down").classList.toggle("hidden");
            document.querySelector("#panel" + currentChapter + "_up").classList.toggle("hidden");
            chapters.map((chapter, j) => {
                if (j !== currentChapter) {
                    document.querySelector("#panel" + j).classList.add("scale-y-0");
                    document.querySelector("#panel" + j).classList.add("h-0");
                    document.querySelector("#panel" + j).classList.remove("scale-y-100");
                    document.querySelector("#panel" + j).classList.remove("h-full");
                }
            });
            document.querySelector("#lesson" + currentChapter + "_" + currentLesson).classList.add("bg-stone-300");
            document.querySelector("#lesson_bullet" + currentChapter + "_" + currentLesson).classList.add("bg-white");
            chapters[currentChapter].lessons.map((lesson, j) => {
                if (j !== currentLesson) {
                    document.querySelector("#lesson" + currentChapter + "_" + j).classList.remove("bg-stone-300");
                    document.querySelector("#lesson_bullet" + currentChapter + "_" + j).classList.remove("bg-white");
                }
            });
        }
    }

    const onClickLesson = (i) => {
        setCurrentLesson(i);
    }

    const setLesson = () => {
        if (currentChapter >= 0 && currentLesson >= 0) {
            document.querySelector("#lesson" + currentChapter + "_" + currentLesson).classList.add("bg-stone-300");
            document.querySelector("#lesson_bullet" + currentChapter + "_" + currentLesson).classList.add("bg-white");
            chapters[currentChapter].lessons.map((lesson, j) => {
                if (j !== currentLesson) {
                    document.querySelector("#lesson" + currentChapter + "_" + j).classList.remove("bg-stone-300");
                    document.querySelector("#lesson_bullet" + currentChapter + "_" + j).classList.remove("bg-white");
                }
            });
        }
    }

    useEffect(() => {
        setPanel();
    }, [currentChapter]);

    useEffect(() => {
        setLesson();
    }, [currentLesson]);

    return (
        <>
            {chapters.length > 0 &&
                <nav className="divide-y divide-gray-400">
                    <div className="bg-gray-100">
                        {chapters.map((chapter, i) =>
                            <div key={`chapter_${i}`}>
                                <div className="p-0 m-0 py-2 border-t-2 border-slate-400" onClick={() => onToggleAccordion(i)}>
                                    <div>
                                        {currentChapter === i ? <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                                            <div className="w-6 h-6 p-0 m-px border-2 border-slate-400 absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                                            <div className="text-black font-medium flex-grow">{chapter.title}</div>
                                            <div className="text-gray-500 text-sm mx-2">{i === currentChapter ? `${currentLesson + 1} / ${chapter.lessons.length}` : `0 / ${chapter.lessons.length}`}</div>
                                            <ChevronDownIcon id={"panel" + i + "_down"} className="h-5 w-5 text-slate-500 mr-2" />
                                            <ChevronUpIcon id={"panel" + i + "_up"} className="h-5 w-5 text-slate-500 mr-2 hidden" />
                                        </div> : <Link href={`/courses/${course}/${i + 1}/1`}>
                                            <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                                                <div className="w-6 h-6 p-0 m-px border-2 border-slate-400 absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                                                <div className="text-black font-medium flex-grow">{chapter.title}</div>
                                                <div className="text-gray-500 text-sm mx-2">{i === currentChapter ? `${currentLesson + 1} / ${chapter.lessons.length}` : `0 / ${chapter.lessons.length}`}</div>
                                                <ChevronDownIcon id={"panel" + i + "_down"} className="h-5 w-5 text-slate-500 mr-2" />
                                                <ChevronUpIcon id={"panel" + i + "_up"} className="h-5 w-5 text-slate-500 mr-2 hidden" />
                                            </div>
                                        </Link>}
                                    </div>
                                </div>
                                {chapter.lessons.length > 0 &&
                                    <div id={"panel" + i} className="transform-all scale-y-0 origin-top h-0 transition-all">
                                        {chapter.lessons.map((lesson, j) =>
                                            <div id={"lesson" + i + "_" + j} className="p-0 m-0" onClick={() => onClickLesson(j)} key={`lesson_${j}`}>
                                                <Link href={`/courses/${course}/${i + 1}/${j + 1}`}>
                                                    <div className="transform transition cursor-pointer ml-10 flex items-center pt-2 m-0">
                                                        <div id={"lesson_bullet" + i + "_" + j} className="w-4 h-4 border-2 border-gray-500 p-0 m-px absolute -left-5 transform -translate-x-2/4 rounded-full z-10"></div>
                                                        <div className="text-gray-800 font-medium">{lesson.title}</div>
                                                    </div>
                                                </Link>
                                                {j < chapter.lessons.length - 1 ? <div className="border-l-2 border-gray-500 h-5 ml-5"></div> : <div className="h-5 ml-5"></div>}
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </nav>
            }
        </>
    );
}