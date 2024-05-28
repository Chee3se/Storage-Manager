import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-gradient-1 dark:dark-text-gradient-1 text-7xl text-center pt-16 font-medium py-4">Storage Manager 📦</h1>
                </div>
            </div>
        </Layout>
    );
}
