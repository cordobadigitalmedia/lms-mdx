import courses from '~/lib/data/mycourses.json';
import Card from "~/components/content/Card";

export default function Index({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Courses
          </h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {courses.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={`courses/${d.slug}/1/1`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}