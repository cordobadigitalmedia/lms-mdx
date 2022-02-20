
import siteMetadata from '~/lib/data/siteMetadata'
import SiteBrand from './SiteBrand';
import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function CourseProgress() {
    //Course title with back to dashboard
    //Progress bar
    return (
        <div className="bg-white p-2 rounded-md drop-shadow-sm m-2">
            <SiteBrand />
            <div className="flex p-2 text-slate-500"><ArrowLeftIcon className="h-5 w-5 mr-2 mt-0.5" />Go to My Courses</div>
            <div className='p-2 '>
                <div className="w-full bg-gray-200 h-1">
                    <div className="bg-blue-600 h-1 w-2/5"></div>
                </div>
                <div className='text-sm text-slate-500 mt-1'>40% Complete</div>
            </div>
        </div>
    );
}

