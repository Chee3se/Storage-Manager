import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Show({ auth, product }) {

    return (
        <Layout
            user={auth.user}
        >
            <Head title={product.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-center ">
                            <div className='grid grid-cols-2'>
                                <div >
                                <h1 className="text-xl font-bold">{product.name}</h1>
                                <img src={product.thumbnail?.url} alt={product.name} className="h-80" />
                                </div>

                                <div >
                                <p>Price: {product.price}</p>
                                <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
