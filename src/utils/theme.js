export const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff";

        try {
            document.getElementById('minimal-logo-main').style.filter = 'none';
        } catch (e) {}

        try {
            document.getElementById('minimal-logo-header').style.filter = 'none';
        } catch (e) {}

        try {
            document.getElementById("header").style.backgroundColor = "#000000";
        } catch (e) {}

        try {
            document.getElementById("back-button-img").style.filter = 'invert(1)';
        } catch (e) {}

        try {
            document.getElementById("menu-button-img").style.filter = 'invert(1)';
        } catch (e) {}

        try {
            document.getElementById("tsParticles-main").style.filter = 'none';
        } catch (e) {}

        try {
            const projectCards = document.getElementsByClassName("item-card");
            Array.from(projectCards).forEach((element) => {
                element.style.backgroundColor = "#1e1e1e";
                element.style.color = "#ffffff";
            });
        } catch (e) {}

    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";

        try {
            document.getElementById('minimal-logo-main').style.filter = 'invert(1)';
        } catch (e) {}

        try {
            document.getElementById('minimal-logo-header').style.filter = 'invert(1)';
        } catch (e) {}

        try {
            document.getElementById("header").style.backgroundColor = "#ffffff";
        } catch (e) {}

        try {
            document.getElementById("back-button-img").style.filter = 'none';
        } catch (e) {}

        try {
            document.getElementById("menu-button-img").style.filter = 'none';
        } catch (e) {}

        try {
            document.getElementById("tsParticles-main").style.filter = 'invert(1)';
        } catch (e) {}

        try {
            const projectCards = document.getElementsByClassName("item-card");
            Array.from(projectCards).forEach((element) => {
                element.style.backgroundColor = "#f8f8f8";
                element.style.color = "#000000";
            });
        } catch (e) {}
    }
}

export const changeTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === "light") {
        applyTheme("dark")
        localStorage.setItem('theme', 'dark');
    } else {
        applyTheme("light")
        localStorage.setItem('theme', 'light');
    }
}
