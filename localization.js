//-------------------------------------------------------------------------------------------------------
// Localization - simple HTML page.
// Written by: Shahar Avshalom
// Version: 1.0
// January 2021
//-------------------------------------------------------------------------------------------------------


// Core Functions ---------------------------------------------------------------------------------------
async function initLanguage() {
    const LanguageFromLocalStorage = getLanguageFromLocalStorage();
    LanguageFromLocalStorage.length ? document.getElementById("htmlLanguage").value = LanguageFromLocalStorage : document.getElementById("htmlLanguage").value = "English";
    changeLanguage()
}
function changeLanguage() {
    const len = document.getElementById("htmlLanguage").value

    // document.getElementById("").innerText = dictionary[len]['']
    // document.getElementById("").setAttribute("placeholder", `${dictionary[len]['']}`)
    // document.getElementsByClassName("title")[0].innerText = dictionary[len]['title']
    // document.getElementsByClassName("title")[1].innerText = dictionary[len]['title']

    // General translation ------------------------------------------------------------------------------
    document.querySelectorAll('.title').forEach((element) => {
        element.innerText = dictionary[len]['title']
    });
    document.querySelectorAll('.about').forEach((element) => {
        element.innerText = dictionary[len]['about']
    });
    document.querySelectorAll('.technologies').forEach((element) => {
        element.innerText = dictionary[len]['technologies']
    });
    document.querySelectorAll('.textDirection').forEach((element) => {
        if (len === "Hebrew") {
            element.style.textAlign = "right";
            element.style.direction = "rtl";
        } else {
            element.style.textAlign = "left";
            element.style.direction = "ltr";
        }
    });


    // Cryptonite project --------------------------------------------------------------------------------
    document.getElementById("cryptoniteHeader").innerText = dictionary[len]['cryptoniteHeader']
    document.getElementById("cryptoniteTitle").innerText = dictionary[len]['cryptoniteTitle']
    document.getElementById("cryptoniteLine1").innerText = dictionary[len]['cryptoniteLine1']
    document.getElementById("cryptoniteLine2").innerHTML = dictionary[len]['cryptoniteLine2']
    document.getElementById("cryptoniteLine3").innerHTML = dictionary[len]['cryptoniteLine3']
    document.getElementById("cryptoniteLine4").innerHTML = dictionary[len]['cryptoniteLine4']
    document.getElementById("cryptoniteLine5").innerText = dictionary[len]['cryptoniteLine5']
    document.getElementById("cryptoniteLine6").innerHTML = dictionary[len]['cryptoniteLine6']
    document.getElementById("cryptoniteLine7").innerText = dictionary[len]['cryptoniteLine7']

    // Task Board project --------------------------------------------------------------------------------
    document.getElementById("taskBoardHeader").innerText = dictionary[len]['taskBoardHeader']
    document.getElementById("taskBoardTitle").innerText = dictionary[len]['taskBoardTitle']
    document.getElementById("taskBoardLine1").innerText = dictionary[len]['taskBoardLine1']
    document.getElementById("taskBoardLine2").innerText = dictionary[len]['taskBoardLine2']
    document.getElementById("taskBoardLine3").innerText = dictionary[len]['taskBoardLine3']
    document.getElementById("taskBoardLine4").innerText = dictionary[len]['taskBoardLine4']
    document.getElementById("taskBoardLine5").innerText = dictionary[len]['taskBoardLine5']
    document.getElementById("taskBoardLine6").innerText = dictionary[len]['taskBoardLine6']
    document.getElementById("taskBoardLine7").innerText = dictionary[len]['taskBoardLine7']

    setLanguageToLocalStorage(len)
}


// Local Storage Functions ----------------------------------------------------------------------------- 
function getLanguageFromLocalStorage() {
    languageJSON = localStorage.getItem("avshalomsProjectsSiteLanguage") == null ? JSON.stringify([]) : localStorage.getItem("avshalomsProjectsSiteLanguage");
    return JSON.parse(languageJSON)
}
function setLanguageToLocalStorage(language) {
    jsonToSave = JSON.stringify(language);
    localStorage.setItem("avshalomsProjectsSiteLanguage", jsonToSave);
}

// Dictionary -------------------------------------------------------------------------------------------
const dictionary = {
    Hebrew: {
        // General --------------------------------------------------------------------------------------
        title: "הפרוייקטים של אבשלום",
        chooseLanguage: "בחר שפה",
        about: "אודות הפרוייקט",
        viewProject: "הצג פרוייקט",
        technologies: "טכנולוגיות",
        // Projects -------------------------------------------------------------------------------------

        // Cryptonite project
        cryptoniteHeader: "מטבעות וירטואליים",
        cryptoniteTitle: "מטבעות וירטואליים jQuery-AJAX RESTful API",
        cryptoniteLine1: "מטרת הפרויקט להנגיש מידע מעולם הסחר הווירטואלי (ביטקוין וכו׳).",
        cryptoniteLine2: `<b>דף הבית</b> מכיל כרטיסי מידע על מטבעות וירטואליים <small>(בלחיצה על <b>"מידע נוסף"</b> תתבצע קריאה חדשה לקבלת מידע מהשרת רק אם עברו יותר משתי דקות מהקריאה האחרונה)</small>.`,
        cryptoniteLine3: `<b>לחיצה על כפתור <em>"גרף"</em></b> תוסיף את המטבע לדוחות זמן אמת <small>(ניתן לבחור עד 5 מטבעות)</small>.`,
        cryptoniteLine4: `<b>מסך <em>"דוחות זמן אמת" </em></b> מכיל גרף זמן אמת של שערי המטבעות שנבחרו.`,
        cryptoniteLine5: "HTML5, CSS3, Bootstrap, Parallax scrolling, Collapser, progress bar.",
        cryptoniteLine6: `Dynamic page layouts, <b>S</b>ingle <b>P</b>age <b>A</b>pplication foundations. `,
        cryptoniteLine7: "JavaScript, jQuery, Ajax (RESTful API), Callbacks, JSON.",

        // Taskboard project 
        taskBoardHeader: "לוח משימות",
        taskBoardTitle: " לוח משימות - HTML5, CSS3, JavaScript",
        taskBoardLine1: "בפרויקט זה ניתן להוסיף משימות פשוטות ללוח.",
        taskBoardLine2: "כל משימה מכילה תיאור וזמן יעד לביצוע.",
        taskBoardLine3: "המשתמש ימלא את פרטי המשימה בטופס, ולאחר לחיצה על לחצן הוספה, המשימה תתוסף אל לוח המשימות.",
        taskBoardLine4: 'המשימות נשמרות ב "Local Storage" של הדפדפן בפורמט "JSON".',
        taskBoardLine5: "HTML5, CSS3, Bootstrap.",
        taskBoardLine6: "ביצוע DOM Manipulations.",
        taskBoardLine7: "שימוש ב JSON, Glyph Icon, Fade-In, hover.",
    },
    English: {
        // General --------------------------------------------------------------------------------------
        title: "Avshalom's projects",
        chooseLanguage: "Choose a language:",
        about: "About the project",
        technologies: "Technologies",
        viewProject: "View project",
        // Projects -------------------------------------------------------------------------------------

        // Cryptonite project
        cryptoniteHeader: "Cryptonite",
        cryptoniteTitle: "Cryptonite - JQuery-AJAX RESTful API",
        cryptoniteLine1: "The goal of the project is to make information from the world of virtual commerce accessible (Bitcoin etc).",
        cryptoniteLine2: `<b>The home page</b> contains information cards about virtual currencies <small>(clicking  <b>"More info"</b> will make a new call for information from the server, only if more than two minutes have passed since the last call)</small>.`,
        cryptoniteLine3: `<b>Clicking the <em>"Chart button"</em></b> will add the currency to real-time reports,  <small>(up to 5 currencies can be selected)</small>.`,
        cryptoniteLine4: `<b>The <em>"Live Report screen" </em></b> contains a graph of real-time selected currency rates.`,
        cryptoniteLine5: "HTML5, CSS3, Bootstrap, Parallax scrolling, Collapser, progress bar.",
        cryptoniteLine6: `Dynamic page layouts, <b>S</b>ingle <b>P</b>age <b>A</b>pplication foundations. `,
        cryptoniteLine7: "JavaScript, jQuery, Ajax (RESTful API), Callbacks, JSON.",

        // Taskboard project 
        taskBoardHeader: "Task Board ",
        taskBoardTitle: "Task Board - HTML5, CSS3, JavaScript",
        taskBoardLine1: "In this project you can add simple tasks to the board.",
        taskBoardLine2: "Each task contains a description and target time for its completion.",
        taskBoardLine3: "The user will fill the task details in the form, and after clicking the Add button, the task will be added to the board.",
        taskBoardLine4: "Tasks are stored in the browser's “Local Storage” in “JSON” format.",
        taskBoardLine5: "HTML5, CSS3, Bootstrap.",
        taskBoardLine6: "DOM Manipulations.",
        taskBoardLine7: "JSON, Glyph Icon, Fade-In, hover.",
    }
}
