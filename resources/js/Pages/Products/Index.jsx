import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, products }) {
    console.log(products)
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Avalable products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 items-center">
                    {products.map(product => (
                        <div key={product.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-60">
                            <div className="flex-col flex text-gray-900 dark:text-gray-100 justify-center">
                                <div className="flex justify-center">
                                    <img src={product.thumbnail?.url} alt={product.name} className="h-60" />
                                </div>
                                <div>
                                    <h1 className="text-center text-xl font-bold py-4">{product.name}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
