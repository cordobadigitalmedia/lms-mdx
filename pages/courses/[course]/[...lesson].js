import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import MenuBar from "~/components/navigation/MenuBar";
import LessonNav from "~/components/navigation/LessonNav";
import { lessonFilePaths, LESSONS_PATH } from '~/utils/mdxUtils'

export default function PostPage({ source, frontMatter, jsondata, lesson, course, lessonSrc, err }) {
  if (err !== "") {
    return (<div>Error loading data</div>)
  }
  return (
    <div>
      {jsondata !== undefined && frontMatter != undefined ?
        <div className="relative min-h-screen md:flex">
          <MenuBar />
          <div className="sidebar bg-gray-100 text-blue-100 w-96 space-y-6 px-0 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
            <div className="round-md bg-white p-2 m-2 drop-shadow-sm">
              <span className="text-xl font-extrabold text-slate-800">My Course</span>
            </div>
            <LessonNav chapters={jsondata} lesson={lesson} course={course} />
          </div>
          <h1>{frontMatter.title}</h1>
          <div className="flex-1 p-10 text-2xl font-bold prose prose-green">
            <MDXRemote {...source}/>
          </div>
        </div> : <div>Loading</div>}
    </div>
  )
}

export const getStaticProps = async (context) => {
  const { course, lesson } = context.params;
  try {
    const jsonfile = fs.readFileSync(path.join(process.cwd(), "lib/data/" + course + ".json"));
    const jsondata = JSON.parse(jsonfile);
    let lessonSrc = "";
    lessonSrc = jsondata[Number(lesson[0]) - 1].lessons[Number(lesson[1]) - 1].content;
    //add env variable to find site root for fetch
    const postFilePath = path.join(LESSONS_PATH, lessonSrc)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    })
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
        jsondata,
        lesson,
        course,
        lessonSrc,
        err: ""
      },
    }
  } catch (err) {
    return {
      props: {
        err: err.toString()
      },
    }
  }
}

export const getStaticPaths = async () => {
  const paths = lessonFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { course: '0', lesson: [slug] } }))
  return {
    paths,
    fallback: true,
  }
}