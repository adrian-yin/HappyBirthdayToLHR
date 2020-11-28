// 实时更新时间
let getTime = window.setInterval("displayTime()", 500);
function displayTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    document.getElementById("time-text").innerHTML = hour + "时" + minute + "分" + second + "秒";
}

// 显示警告
let button2 = document.getElementById("button2");
button2.addEventListener("click", showWarn, {once: true});
function showWarn() {
    let button = document.getElementById("button2");
    let warn = document.getElementById("warn1");
    button.style.opacity = "0";
    setTimeout(function() {
        warn.style.display="block"
        warn.style.opacity = "1";
        button.style.display = "none";
    }, 1000);
}

// 开始问题
let button1 = document.getElementById("button1");
button1.addEventListener("click", firstStart, {once: true});
function firstStart() {
    // 隐藏元素
    let elementsToHide = [
        document.getElementById("button1"),
        document.getElementById("text7")
    ];
    if (document.getElementById("button2").style.display === "none") {
        elementsToHide.push(document.getElementById("warn1"));
    } else {
        elementsToHide.push(document.getElementById("button2"));
    }
    elementsToHide.forEach(element => {
        element.style.animation = "hide 1.5s";
        element.style.animationPlayState = "running";
    });
    setTimeout(function () {
        elementsToHide.forEach(element => {
            element.style.display = "none";
        });
        // 显示元素
        let elementsToShow = [
            document.getElementById("text8"),
            document.getElementById("button3"),
            document.getElementById("button4")
        ];
        elementsToShow.forEach(element => {
            element.style.display = "block";
            element.style.animation = "show-text-keep 3s";
            element.style.animationFillMode = "forwards";
            element.style.animationPlayState = "running";
        });
    }, 1500);
}

// 第一个问题答错
let button3 = document.getElementById("button3");
button3.addEventListener("click", wrongAnswerFirst, {once: true});
function wrongAnswerFirst() {
    let text8 = document.getElementById("text8");
    let text9 = document.getElementById("text9");
    text8.style.animation = "hide 2s";
    text8.style.animationFillMode = "forwards";
    text8.style.animationPlayState = "running";
    setTimeout(function () {
        text9.style.animation = "show-text-keep 3s";
        text9.style.animationFillMode = "forwards";
        text9.style.animationPlayState = "running";
        text8.style.display = "none";
    }, 2000);
}

// 第一个问题答对
let button4 = document.getElementById("button4");
button4.addEventListener("click", rightAnswerFirst, {once: true});
function rightAnswerFirst() {
    let text8 = document.getElementById("text8");
    if (text8.style.display === "none") {
        text8 = document.getElementById("text9");
    }
    let text10 = document.getElementById("text10");
    let gift1 = document.getElementById("gift1");
    let text11 = document.getElementById("text11");
    let button3 = document.getElementById("button3");
    let button4 = document.getElementById("button4");
    let letterH = document.getElementById("letter-h");
    let input1 = document.getElementById("input1");
    let button5 = document.getElementById("button5");
    let elementsToHide = [text8, button3, button4];
    elementsToHide.forEach(element => {
        element.style.animation = "hide 2s";
        element.style.animationFillMode = "forwards";
        element.style.animationPlayState = "running";
        setTimeout(function () {
            element.style.display = "none";
        }, 2000);
    })
    setTimeout(function () {
        text10.style.animation = "show-text 8s";
        text10.style.animationPlayState = "running";
    }, 2000);
    setTimeout(function () {
        gift1.style.animation = "show-text 8s";
        gift1.style.animationPlayState = "running";
        letterH.innerHTML = "H";
        letterH.style.color = "#CCFF66";
    }, 10000);
    setTimeout(function () {
        text11.style.animation = "show-text-keep 3s";
        text11.style.animationFillMode = "forwards";
        text11.style.animationPlayState = "running";
    }, 18000);
    setTimeout(function () {
        input1.style.display = "block";
        input1.style.animation = "show-text-keep 3s";
        input1.style.animationFillMode = "forwards";
        input1.style.animationPlayState = "running";
        button5.style.display = "block";
        button5.style.animation = "show-text-keep 3s";
        button5.style.animationFillMode = "forwards";
        button5.style.animationPlayState = "running";
    }, 19000);
}

// 第二个问题
let button5 = document.getElementById("button5");
button5.addEventListener("click", checkSecond, {once: true});
function checkSecond() {
    let input1 = document.getElementById("input1");
    let button5 = document.getElementById("button5");
    let text11 = document.getElementById("text11");
    let elementsToHide = [input1, button5, text11];
    elementsToHide.forEach(element => {
        element.style.animation = "hide 2s";
        element.style.animationFillMode = "forwards";
        element.style.animationPlayState = "running";
        setTimeout(function () {
            element.style.display = "none";
        }, 2000);
    });
    setTimeout(function () {
        let year = document.getElementById("input-year").value;
        let month = document.getElementById("input-month").value;
        let day = document.getElementById("input-day").value;
        let text14 = document.getElementById("text14");
        let text12 = document.getElementById("text12");
        let text13 = document.getElementById("text13");
        let gift2 = document.getElementById("gift2");
        let text15 = document.getElementById("text15");
        let button6 = document.getElementById("button6");
        let letterR = document.getElementById("letter-r");
        if (year === "2000" && (month === "6" || month === "06") && (day === "1" || day === "01")) {
            text14.style.animation = "show-text 8s";
            text14.style.animationPlayState = "running";
            clearInterval(getTime);
            document.getElementById("time-text").innerHTML = "2000年6月1日";
            setTimeout(function () {
                gift2.style.animation = "show-text 8s";
                gift2.style.animationPlayState = "running";
                letterR.innerHTML = "R";
                letterR.style.color = "#66CCCC";
            }, 8000);
            setTimeout(function () {
                text15.style.animation = "show-text-keep 3s";
                text15.style.animationFillMode = "forwards";
                text15.style.animationPlayState = "running";
            }, 16000);
            setTimeout(function () {
                button6.style.display = "block";
                button6.style.animation = "show-text-keep 3s";
                button6.style.animationFillMode = "forwards";
                button6.style.animationPlayState = "running";
            }, 17000);
        } else {
            text12.style.animation = "show-text 8s";
            text12.style.animationPlayState = "running";
            clearInterval(getTime);
            document.getElementById("time-text").innerHTML = "2000年6月1日";
            setTimeout(function () {
                text13.style.animation = "show-text 8s";
                text13.animationPlayState = "running";
            }, 8000);
            setTimeout(function () {
                gift2.style.animation = "show-text 8s";
                gift2.style.animationPlayState = "running";
                letterR.innerHTML = "R";
                letterR.style.color = "#66CCCC";
            }, 16000);
            setTimeout(function () {
                text15.style.animation = "show-text-keep 3s";
                text15.style.animationFillMode = "forwards";
                text15.style.animationPlayState = "running";
            }, 24000);
            setTimeout(function () {
                button6.style.display = "block";
                button6.style.animation = "show-text-keep 3s";
                button6.style.animationFillMode = "forwards";
                button6.style.animationPlayState = "running";
            }, 25000);
        }
    }, 2000);
}

// 最后一个问题
let button6 = document.getElementById("button6");
button6.addEventListener("click", finalQuestion, {once: true});
function finalQuestion() {
    let button6 = document.getElementById("button6");
    let text15 = document.getElementById("text15");
    let text16 = document.getElementById("text16");
    let gift3 = document.getElementById("gift3");
    let letterL = document.getElementById("letter-l");
    let elementsToHide = [button6, text15];
    elementsToHide.forEach(element => {
        element.style.animation = "hide 2s";
        element.style.animationFillMode = "forwards";
        element.style.animationPlayState = "running";
        setTimeout(function () {
            element.style.display = "none";
        }, 2000);
    });
    setTimeout(function () {
        text16.style.animation = "show-text 8s";
        text16.style.animationPlayState = "running";
    }, 2000);
    setTimeout(function () {
        gift3.style.animation = "show-text 8s";
        gift3.style.animationPlayState = "running";
        letterL.innerHTML = "L";
        letterL.style.color = "#FF99CC";
    }, 10000);
    setTimeout(showHappyBirthday, 18000);
}

function showHappyBirthday() {
    let infoBox = document.getElementsByClassName("info-box")[0];
    infoBox.style.animation = "hide 1.5s";
    infoBox.style.animationFillMode = "forwards";
    infoBox.style.animationPlayState = "running";
    setTimeout(function () {
        infoBox.style.visibility = "hidden";
        let happyBirthday = document.getElementById("happy-birthday");
        happyBirthday.style.visibility = "visible";
        let birthdayTime = document.getElementById("birthday-time");
        birthdayTime.style.animation = "show-text-keep 2s";
        birthdayTime.style.animationFillMode = "forwards";
        birthdayTime.style.animationPlayState = "running";
        let birthdayName = document.getElementById("birthday-name");
        let birthdayL = document.getElementById("birthday-l");
        let birthdayH = document.getElementById("birthday-h");
        let birthdayR = document.getElementById("birthday-r");
        setTimeout(function () {
            birthdayName.style.animation = "show-text-keep 2s";
            birthdayName.style.animationFillMode = "forwards";
            birthdayName.style.animationPlayState = "running";
        }, 2000);
        setTimeout(function () {
            birthdayName.style.animation = "hide 1s";
            birthdayName.style.animationFillMode = "forwards";
            birthdayName.style.animationPlayState = "running";
        }, 6000);
        setTimeout(function () {
            birthdayL.innerHTML = "刘";
            birthdayH.innerHTML = "浩";
            birthdayR.innerHTML = "冉";
            birthdayName.style.animation = "show-text-keep 2s";
            birthdayName.style.animationFillMode = "forwards";
            birthdayName.style.animationPlayState = "running";
        }, 7000);
        let birthdayWord = document.getElementById("birthday-word");
        setTimeout(function () {
            birthdayWord.style.animation = "show-text-keep 3s";
            birthdayWord.style.animationFillMode = "forwards";
            birthdayWord.style.animationPlayState = "running";
        }, 9000);
        let button7 = document.getElementById("button7");
        setTimeout(function () {
            button7.style.animation = "show-text-keep 1s";
            button7.style.animationFillMode = "forwards";
            button7.style.animationPlayState = "running";
        }, 12000);
    }, 1500);
}

let button7 = document.getElementById("button7");
button7.addEventListener("click", toRobot, {once: true});
function toRobot() {
    let happyBirthday = document.getElementById("happy-birthday");
    happyBirthday.style.animation = "hide 2s";
    happyBirthday.style.animationFillMode = "forwards";
    happyBirthday.style.animationPlayState = "running";
    setTimeout(function () {
        happyBirthday.style.visibility = "hidden";
        let robotA = document.getElementById("robot-a");
        robotA.style.visibility = "visible";
        robotA.style.animation = "show-text-keep 2s";
        robotA.style.animationFillMode = "forwards";
        robotA.style.animationPlayState = "running";
    }, 2000);
}

let button8 = document.getElementById("button8");
button8.addEventListener("click", sendMessage, {once: false});
function sendMessage() {
    let message = document.getElementById("robot-input-text").value;
    document.getElementById("robot-input-text").value = "";
    let myWordToRobot = document.getElementById("my-word-to-robot");
    myWordToRobot.style.animation = "hide 1s";
    myWordToRobot.style.animationFillMode = "forwards";
    myWordToRobot.style.animationPlayState = "running";
    setTimeout(function () {
        myWordToRobot.innerHTML = message;
        myWordToRobot.style.animation = "show-text-keep";
        myWordToRobot.style.animationFillMode = "forwards";
        myWordToRobot.style.animationPlayState = "running";
        const apiUrl = "https://api.ruyi.ai/v1/message_h5?app_id=86b644be-37f4-4754-9908-149e1004a89e&q=" + message
            + "&options=entities,intents,know,act&user_id=yulin0";
        const http = new XMLHttpRequest();
        http.open("GET", apiUrl);
        http.send();
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let responseObj = JSON.parse(http.responseText);
                let responseContent = responseObj["result"]["intents"][0]["outputs"][0]["property"]["text"];
                let robotReply = document.getElementById("robot-reply");
                robotReply.style.animation = "hide 1s";
                robotReply.style.animationFillMode = "forwards";
                robotReply.style.animationPlayState = "running";
                setTimeout(function () {
                    robotReply.innerHTML = responseContent;
                    robotReply.style.animation = "show-text-keep";
                    robotReply.style.animationFillMode = "forwards";
                    robotReply.style.animationPlayState = "running";
                }, 1000);
            }
        }
    }, 1000);
}