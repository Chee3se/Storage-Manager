export default function ThemeButton(props) {


    if (localStorage.getItem("color-theme") !== "dark" ) {
        document.documentElement.classList.remove("dark");

    } else {
        document.documentElement.classList.add("dark");
    }

    function handleClick(event){
        event.preventDefault();

        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");

        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }

        
    }
    return (
        <button id="theme-toggle" type="button" onClick={handleClick}>
        
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-7 fill-white hidden dark:inline">
            <path d="M14,24A12.013,12.013,0,0,1,2,12C1.847,3.044,12.031-2.985,19.791,1.509l1.553.862-1.543.88c-6.7,3.688-6.21,13.87.8,16.906l1.621.731-1.467,1.006A11.921,11.921,0,0,1,14,24Z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="w-10 h-10 fill-yellow-500 inline dark:hidden">
                <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
            </svg>
         </button>

    );
}
