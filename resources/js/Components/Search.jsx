import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function Search({model}) {
    const input = useRef();
    const [search, setSearch] = useState('');
    const [entries, setEntries] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        fetchEntries();
    }, [search]); 

    const fetchEntries = async () => {
        try {
            const response = await axios.get(route(`admin.${model.toLowerCase()}.index`), {
                params: {
                    search,
                    page,
                    perPage
                }
            });
            setEntries(response.data.data); 
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="bg-stone-100 dark:bg-gray-950 px-4 py-2 rounded-md" style={{maxWidth: '100%'}}>
            <div className="relative flex items-center gap-2">
                <div className="relative">
                    <input
                        type="text"
                        className='border-0 dark:border-0 bg-stone-200 dark:bg-gray-900 dark:text-gray-300 focus:border-0 dark:focus:border-0 focus:ring-0 dark:focus:ring-0 rounded-md shadow-sm pl-10'
                        ref={input}
                        value={search}
                        placeholder={`Search ${model}`}
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
                            ID
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                            Name
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                            Email
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            style={{minWidth: '200px'}}>
                            Role
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
                {/* Render your pagination controls here */}
            </div>
        </div>
    );
}
