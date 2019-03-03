var hash;

function Init() {
    hash = {
        A: "acfun.cn",
        B: "",
        C: "",
        D: "douban.com",
        E: "ele.me",
        F: "",
        G: "guokr.com",
        H: "",
        I: "iqiyi.com",
        J: "",
        K: "",
        L: "",
        M: "",
        N: "",
        O: "",
        P: "panda.tv",
        Q: "www.qq.com",
        R: "",
        S: "",
        T: "taobao.com",
        U: "",
        V: "v2ex.com",
        W: "weibo.com",
        X: "",
        Y: "youtube.com",
        Z: "zhihu.com",
    }
    let hashInLocalStorage = JSON.parse(localStorage.getItem('hashInLocal') || 'null')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
};
var liArray = document.getElementsByTagName('li');
var wordTable = new Array;
for (let i = 0; i < liArray.length; i++) {
    let temp = liArray[i].innerText;
    if (temp.length === 1) {
        if (temp >= 'A' && temp <= 'Z') {
            wordTable.push(liArray[i])
        } else {}
    } else {}
}

function Event() {
    for (let i = 0; i < wordTable.length; i++) {
        let key = wordTable[i].innerText;

        let website = hash[key];
        wordTable[i].addEventListener('mouseenter', (keyboard) => {
            let img = document.createElement('img');
            img.src = '/img/编辑.svg';
            img.id = key;
            img.className = 'edit';
            img.addEventListener('click', (e) => {
                let newWebsite = prompt('请输入一个网址:例如 baidu.com');
                hash[key] = newWebsite;
                localStorage.setItem('hashInLocal', JSON.stringify(hash));
                website = hash[key];
            })
            if (website) {
                keyboard.target.innerText = website;
            } else {}
            keyboard.target.appendChild(img);
            wordTable[i].addEventListener('mouseleave', (e) => {
                keyboard.target.innerText = key;
            })
        })
    }
}
Init();
Event();
! function () {
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].addEventListener('mousedown', (e) => {
            e.target.classList.add('active')
        })
        liArray[i].addEventListener('mouseup', (e) => {
            e.target.classList.remove('active')
        })
    }
}.call();
! function () {
    document.onkeypress = function (getkeypress) {
        let key = getkeypress.key.toUpperCase();
        let website = hash[key];
        if (website) {
            window.open('https://' + website, '_blank')
        } else return;
    }
    document.body.onclick = function (getclick) {
        let key = getclick.target.innerText;
        let website = key;
        if (key.length === 1) {
            website = hash[key];
        }
        if (website) {
            window.open('https://' + website, '_blank')
        } else return;
    }
}.call();