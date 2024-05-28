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
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-center gap-5">
                            <div>
                                <h1 className="text-xl font-bold">{product.name}</h1>
                                <p>{product.description}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
