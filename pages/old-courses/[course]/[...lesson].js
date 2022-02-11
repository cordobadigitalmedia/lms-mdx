import MenuBar from "~/components/navigation/MenuBar";
import LessonNav from "~/components/navigation/LessonNav";
import LessonViewer from "~/components/content/LessonViewer";
import matter from 'gray-matter'

export default function Lesson({ data, lesson, course, lessonSrc }) {

  return (
    <div>
      {data !== undefined &&
        <div className="relative min-h-screen md:flex">
          <MenuBar />
          <div className="sidebar bg-gray-100 text-blue-100 w-96 space-y-6 px-0 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
            <div className="round-md bg-white p-2 m-2 drop-shadow-sm">
              <span className="text-xl font-extrabold text-slate-800">My Course</span>
            </div>
            <LessonNav chapters={data} lesson={lesson} course={course} />
          </div>
          <div className="flex-1 p-10 text-2xl font-bold">
            <LessonViewer lessonSrc={lessonSrc} />
          </div>
        </div>
      }
    </div>

  );
}

export const getStaticProps = async ({ params }) => {
  const { course, lesson } = params;
  const res = await fetch("http://localhost:3000/json/" + course + ".json");
  //add env variable to find site root for fetch
  const data = await res.json();
  let lessonSrc = "";
  lessonSrc = data[Number(lesson[0]) - 1].lessons[Number(lesson[1]) - 1].content;
  //const { content, mdxData } = matter(mdxSrc);
  //get mdx data and pass to props to feed lesson viewer
  //const lessonFilePath = path.join(LESSONS_PATH, `${lessonSrc}`)
  //const source = fs.readFileSync(lessonFilePath)
  return {
    props: { data, lesson, course, lessonSrc },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { course: 'oft-recited-chapters', lesson: ['1', '1'] } },
      { params: { course: 'oft-recited-chapters', lesson: ['1', '2'] } }
    ],
    fallback: true
  };
}
