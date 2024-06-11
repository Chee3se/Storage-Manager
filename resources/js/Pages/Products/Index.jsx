import React, { useState } from 'react';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import AddProductForm from '@/Components/Products/AddProductForm';

export default function Index({ auth, products }) {
    const [showProductForm, setShowProductForm] = useState(false);

    const toggleProductForm = () => {
        setShowProductForm(!showProductForm);
    };

    return (
        <Layout user={auth.user}>
            <Head title="Available products" />
            <div>
                <div className='flex justify-end items-start'>
                    <button
                        onClick={toggleProductForm}
                        className="bg-green-700 p-2 rounded-lg text-white hover:bg-green-600 duration-200 w-10 h-10 m-2"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className='w-10 h-10'>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
                <div className="max-w-7xl sm:px-6 lg:px-8 grid lg:grid-cols-3 sm:grid-cols-2 items-center mx-auto">
                    {products.map(product => (
                        <div key={product.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-80 border-0 hover:border-2 hover:border-black dark:hover:border-2 dark:hover:border-white mb-10">
                            <div className="flex-col flex text-gray-900 dark:text-gray-100 justify-center">
                                <a href={`/products/${product.id}`}>
                                    <div className="flex justify-center">
                                        <img src={product.thumbnail?.url} alt={product.name} className="h-80 select-none" />
                                    </div>
                                    <div>
                                        <h1 className="text-center text-xl font-bold py-4">{product.name}</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showProductForm && <AddProductForm onClose={toggleProductForm} show={showProductForm} />}
        </Layout>
    );
}
