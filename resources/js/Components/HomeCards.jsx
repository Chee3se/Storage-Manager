export default function HomeCard({ permissions }) {
    const permissionJSX = permissions.map((v, i) => {
        return (
            <>
                <div id={"key-"+i} className="bg-white flex dark:bg-gray-800 m-10 font-sans text-gray-500 dark:text-gray-300 px-4 py-2 w-64 h-96 rounded-md items-center justify-center shadow-sm hover:shadow-xl transition hover:scale-105"> 
                    {v.name}
                </div>
            </>
        ); 
    });

    return <>{permissionJSX}</>;
}
