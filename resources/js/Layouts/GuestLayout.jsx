import { Link } from '@inertiajs/react';
import ThemeButton from '@/Components/ThemeButton';

export default function Guest({ children }) {
    return (
        <>

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        

            <Link href='/'>
                <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 duration-300 '>Home</button>
            </Link>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
        </>
    );
}
