import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import HistorySearch from "@/Components/History/HistorySearch.jsx";

export default function History({ auth }) {
    return (
        <Layout user={auth.user}>
            <Head title="History" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <HistorySearch />
            </div>
        </Layout>
    );
}
