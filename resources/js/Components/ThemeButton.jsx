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
        
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="48px" fill="#5f6368" className="h-10 fill-white hidden dark:inline">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="48px" fill="#5f6368" className="h-10 fill-yellow-500 inline dark:hidden">
                <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
            </svg>
         </button>

    );
}
