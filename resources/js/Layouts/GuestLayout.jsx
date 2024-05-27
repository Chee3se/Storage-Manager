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
                <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2 flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed " className='fill-black dark:fill-white'>
                    <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/>
                </svg> Back
                </button>
            </Link>

            {route().current() == 'login' ? (
               <Link href='/register'>
               <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2 flex gap-3'>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className='fill-black dark:fill-white'>
                <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm40 240v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
               </svg>Register
               </button>
           </Link> 
            ) : (
            <Link href='/login'>
                <button className='text-black dark:text-white border-2 rounded-lg p-2 w-32 border-gray-700 hover:border-gray-400 hover:mb-5 duration-300 m-2 flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className='fill-black dark:fill-white'>
                    <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
                </svg> Login
                </button>
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
