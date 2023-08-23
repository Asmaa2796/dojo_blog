const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme","dark");
        localStorage.setItem("selectedTheme","dark");
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme","light");
        localStorage.setItem("selectedTheme","light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark") {setDarkMode()}
    else setLightMode();
    
    const toggleTheme = (e) => {
        if(e.target.checked) setLightMode();
        else setDarkMode();
    }
    return (
        <>
            <label id="switch" className="switch">
              <input type="checkbox" id="slider"  onChange={toggleTheme} defaultChecked={selectedTheme === "light"}/>
              <span className="slider round"></span>
            </label>
        </>
    );
}

export default DarkMode;
