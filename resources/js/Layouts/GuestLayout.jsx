import { Link } from '@inertiajs/react';
import ThemeButton from '@/Components/ThemeButton';

export default function Guest({ children }) {
    return (
        <>
        <div className="bg-gray-100 dark:bg-gray-900 p-2">
        <ThemeButton/>
        </div>

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        
        <div className="flex flex-row sm:justify-center items-center">
        
            <Link href='/'>
                <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2'>Back</button>
            </Link>

            {route().current() == 'login' ? (
               <Link href='/register'>
               <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2'>Register</button>
           </Link> 
            ) : (
            <Link href='/login'>
                <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2'>Login</button>
            </Link>
            )}

            
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>

        </>
    );
}
