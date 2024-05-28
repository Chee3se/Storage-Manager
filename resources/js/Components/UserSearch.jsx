import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Modal from '@/Components/Modal.jsx';

export default function UserSearch() {
    const input = useRef();
    const [search, setSearch] = useState('');
    const [entries, setEntries] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [sort, setSort] = useState({field: 'id', order: 'asc'})

    useEffect(() => {
        fetchEntries();
    }, [search, page, sort]);

    useEffect(() => {
        setPage(1);
    }, [search, sort]);

    const fetchEntries = async () => {
        try {
            const response = await axios.get(route('admin.users.index'), {
                params: {
                    search,
                    page,
                    perPage,
                    sort: sort
                }
            });
            setEntries(response.data.data);
            setTotalPages(Math.ceil(response.data.total / perPage));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleNextPage = () => {
        if (page < totalPages) { // Check if current page is less than total pages
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleSort = (field) => {
        setSort(prevSort => {
            const newOrder = prevSort.field === field && prevSort.order === 'asc' ? 'desc' : 'asc';
            return {field, order: newOrder};
        });
    };

    const ArrowIcon = ({ field }) => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"  fill="#e8eaed" >
        <path d={sort.field === field && sort.order === 'asc' ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"} />
    </svg>
    );

    return (
        <div className="bg-stone-100 dark:bg-gray-950 px-4 py-2 rounded-md" style={{maxWidth: '100%'}}>
            <div className="relative flex items-center gap-2">
                <div className="relative">
                    <input
                        type="text"
                        className='border-0 dark:border-0 bg-stone-200 dark:bg-gray-900 dark:text-gray-300 focus:border-0 dark:focus:border-0 focus:ring-0 dark:focus:ring-0 rounded-md shadow-sm pl-10'
                        ref={input}
                        value={search}
                        placeholder={`Search Users...`}
                        onChange={handleSearch}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
            </div>
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table
                    className="my-4 min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden"
                    style={{minWidth: '1000px'}}>
                    <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '100px'}}>
                             <button onClick={() => handleSort('id')} className='flex flex-row'>ID <ArrowIcon field='id' /></button>
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                             <button onClick={() => handleSort('name')} className='flex flex-row'>Name <ArrowIcon field='name'/></button>
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                             <button onClick={() => handleSort('email')} className='flex flex-row'>EMAIL <ArrowIcon field='email'/></button>
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                            <button>ROLE</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {entries.map(entry => (
                        <tr key={entry.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-100">{entry.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-100">{entry.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-100">{entry.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500 dark:text-gray-400">{entry.roles[0]?.name}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <div>
                    <div className="flex justify-between items-center my-4">
                        <button onClick={handlePrevPage} className="text-blue-500 hover:text-blue-700 dark:text-white dark:hover:text-gray-300 font-bold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  fill="currentColor">
                                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                            </svg>
                        </button>
                        <span className="text-gray-700 dark:text-gray-300">{page}</span>
                        <button onClick={handleNextPage} className={`text-blue-500 hover:text-blue-700 dark:text-white dark:hover:text-gray-300 font-bold py-2 px-4 rounded ${page >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
