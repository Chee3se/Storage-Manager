import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex  items-center px-1 pt-1 border-b-2 text-m font-medium leading-5 transition duration-150 ease-in-out focus:outline-none h-fit ' +
                (active
                    ? ' text-gray-900 dark:text-gray-100 scale-105 '
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300  focus:text-gray-700 dark:focus:text-gray-300 h-fit rounded-md hover:scale-105') +
                className
            }
        >
            {children}
        </Link>
    );
}
