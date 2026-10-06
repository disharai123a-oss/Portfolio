
function saveSettings() {

    let user = {
        username: document.getElementById("username").value,
        color: document.getElementById("themeColor").value,
    };
    localStorage.setItem("usersettings", JSON.stringify(user));
    let data = JSON.parse(localStorage.getItem("usersettings"));
    document.getElementById("box").style.backgroundColor = data.color;

    document.getElementById("msg").innerHTML =
        "welcome back, " + data.username;
}
