import { useRouter } from 'next/router'

export default function Course() {
  const router = useRouter()
  const { course } = router.query
  return <div className="prose prose-green"><h1>{course}</h1></div>;
}