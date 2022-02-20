
import siteMetadata from '~/lib/data/siteMetadata'
export default function SiteBrand() {
    return (
        <div className="flex items-center">
            <div className="mr-1">
                <img src={siteMetadata.image} alt="avatar" className="w-10 h-10 rounded-full" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                </div>
            ) : (
                siteMetadata.headerTitle
            )}
        </div>
    );
}