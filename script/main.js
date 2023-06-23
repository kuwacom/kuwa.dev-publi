window.onload = async () => {
    //IOSのデザインまだの時
    if(ios_check() == "ios"){
        alert("現在IOSおよびMAC等でSafariを使ってサイトを開くとデザインがおかしくなるバグが発生しています");
    }
    
    //初期言語設定
    var web_default_lang = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
        
    langset(web_default_lang);

    title_typing();
}


// // カーソル用のdivタグを取得してcursorに格納
// var cursor = document.getElementById('cursor'); 

// // カーソル用のdivタグをマウスに追従させる
// document.addEventListener('mousemove', function (e) {
//     cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
// });

// // リンクにホバーした時にクラス追加、離れたらクラス削除
// var link = document.querySelectorAll('a');
// for (var i = 0; i < link.length; i++) {
//     link[i].addEventListener('mouseover', function (e) {
//         cursor.classList.add('cursor--hover');
//     });
//     link[i].addEventListener('mouseout', function (e) {
//         cursor.classList.remove('cursor--hover');   
//     });
// }


/*日本語英語選択ここから */
function lang_select(){
    lang_select_dropdown.value;
    if(lang_select_dropdown.value == "日本語"){
        langset("ja");
    }
    else if(lang_select_dropdown.value == "English"){
        langset("en");
    }
}
let lang_select_dropdown = document.getElementById('langsele');
lang_select_dropdown.addEventListener('change', lang_select);
/*日本語英語選択ここまで */

function strIns(str, idx, val){/*指定した場所に文字列入れる奴*/
    var res = str.slice(0, idx) + val + str.slice(idx);
    return res;
}

function user_terminal (){
    var user = navigator.userAgent;
    if(user.indexOf('iPhone') > 0 || user.indexOf('iPod') > 0 || user.indexOf('Android') > 0 && user.indexOf('Mobile') > 0){
        return "SmartPhon";
    }else if(user.indexOf('iPad') > 0 || user.indexOf('Android') > 0){
        return "Tablet";
    }else{
        return "PC";
    }
}

function ios_check (){
    var user = navigator.userAgent;
    if(user.indexOf('iPhone') > 0 || user.indexOf('iPod') > 0){
        return "ios";
    }
}

/*文字打ってるように見せる奴*/
async function text_typing(input, output){
    const text = document.querySelector(input).innerHTML;
    var text_view = document.querySelector(output);
    for (let i = 0; i < 2; i++){
        text_view.innerHTML += "|";
        await delay(500);
        text_view.innerHTML = text_view.innerHTML.slice(0, -1);
        await delay(500);
    }
    text_view.innerHTML += "|";
    for(let out of text){
        switch(out){
            case "\n":/*カーソル再現するために空白と改行は消す*/
                text_view.innerHTML = strIns(text_view.innerHTML, -1, "<br>");
                break;
            case " ":
                text_view.innerHTML = strIns(text_view.innerHTML, -1, " ");
                break;
            default:
                text_view.innerHTML = strIns(text_view.innerHTML, -1, out);
                await delay(100);
        }
    }
    text_view.innerHTML = text_view.innerHTML.slice(0, -1);
    for (let i = 0; i < 6; i++){
        text_view.innerHTML += "|";
        await delay(500);
        text_view.innerHTML = text_view.innerHTML.slice(0, -1);
        await delay(500);
    }
}


async function title_typing(){
    text_typing("sub#langCng_en","sub#langCng_en_view");
    text_typing("sub#langCng_ja","sub#langCng_ja_view");
}


function delay(m) {/*休むやつ*/
    return new Promise(r => setInterval(r, m));
}

//選択された言語のみ表示
function langset(argLang){
    var elm = document.getElementsByClassName("langCng");
    for (var i = 0; i < elm.length; i++) {
        //選択された言語と一致は表示 その他は非表示
        if(elm[i].getAttribute("lang") == argLang){
            elm[i].style.display = '';
        }
        else{
            elm[i].style.display = 'none';
        }
    }
}


/*URL入力*/

function url_test(value){/*URLあってるか確認*/
    const url_pattern = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-]+.[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
    if(encodeURI(value).match(url_pattern) == encodeURI(value)){
        console.log(encodeURI(value).match(url_pattern));
        return true
    }else{
        return false
    }
}

let url_box_action_box_title_ja = document.getElementById('url_box_action_box_title_ja');
let url_box_action_box_title_en = document.getElementById('url_box_action_box_title_en');
let main_title = document.getElementById('main_title');
let url_check_mark = document.getElementById('url_check_mark');
let url_check_mark_box = document.getElementById('url_check_mark_box');
let url_input = document.getElementById('url');
url_input.addEventListener('keydown', (input_key) => {/*リアルタイム用*/
    console.log(input_key.key)
    if(encodeURI(url_input.value).length > 2082){
        console.log("out of range");
        url_box_action_box_title_ja.textContent  = "文字数が多すぎます！ 2038文字以下にしてください！";
    }else if (input_key.key == 'Enter') {
        console.log("Not Enter")
        input_key.preventDefault();/*入力無効化*/
    }
});
url_input.addEventListener('keyup', (input_key) => {/*入力完了後*/
    if(input_key.key == 'Enter') {}else{
        console.log("urlinput => "+encodeURI(url_input.value));
        // console.log(url_test(url_input.value));

        if(encodeURI(url_input.value).length > 2083){
            console.log("out of range");
            url_box_action_box_title_ja.textContent  = "文字数が多すぎます！ 2038文字以下にしてください！";
            url_box_action_box_title_en.textContent  = "There are too many characters! Keep it below 2038 characters!";
            url_check_mark.textContent  = "✖";
            url_check_mark_box.style.backgroundColor = "#FF6347";
        }else if(url_test(url_input.value) == true){
            console.log(true);
            url_box_action_box_title_ja.textContent  = "";
            url_box_action_box_title_en.textContent  = "";
            url_check_mark.textContent  = "✔";
            url_check_mark_box.style.backgroundColor = "lime";



        }else if(url_test(url_input.value) == false){
            url_box_action_box_title_ja.textContent  = "正しいURLを入力してください";
            url_box_action_box_title_en.textContent  = "Please enter the correct URL";
            url_check_mark.textContent  = "✖";
            url_check_mark_box.style.backgroundColor = "#FF6347";
        }
    }

});



/*マウスアニメーション*/
function element_mous_co (element, event){//要素からのマウスの相対座標求める
    var out = [];
    var element_data = document.getElementById(element).getBoundingClientRect();
    var mous_x = ((element_data.right - element_data.left)/2 + element_data.left - event.pageX);
    var mous_y = ((element_data.bottom - element_data.top)/2 + element_data.top - event.pageY);
    // console.log(mous_x);
    // console.log(mous_y);
    out.push(mous_x);
    out.push(mous_y);
    return out
}

if (user_terminal() == "PC"){
    let title_click = false;
    let start_time
    let end_time
    document.getElementById('main_title').addEventListener('mousedown', () => {
        
        start_time = new Date();
        title_click = true;
        main_title.style.transition = "color 0.5s, transform 0.5s, text-shadow 2s";
        main_title.style.textShadow = "";
    })
    document.getElementById('main_title').addEventListener('mouseup', async () => {
        end_time = new Date();
        let click_time = end_time - start_time;
        if (click_time < 1500) {//1500ms以内にクリック離したらクリックした時間だけ
            console.log("inTime"+click_time);
            await delay(click_time);
        }else{
            console.log("outTime"+click_time);
            await delay(1500);
        }
        title_click = false;
        main_title.style.transition = "";
    })
    if (title_click == false) {
        let mous_count = 0;
        var mous_out = document.getElementById('mous');
        document.addEventListener('mousemove', event => {
            if (title_click == false) {
                mous_count = mous_count + 1;
                if (mous_count == 1) {
                    mous_count = 0;
                    var mous = element_mous_co("main_title", event);
                    // console.log(mous[0]);
                    // console.log(mous[1]);
                    let mous_x = mous[0] / 10;
                    let mous_y = mous[1] / 10;
                    if (mous_y < -30) {
                        mous_y = -30
                    }else if(mous_y > 30) {
                        mous_y = 30
                    }
                    if (mous_x < -30) {
                        mous_x = -30
                    }else if(mous_x > 30) {
                        mous_x = 30
                    }
                    let main_title = document.getElementById('main_title');
                    main_title.style.textShadow = mous_x+"px "+mous_y+"px 5px #20202090";
                }
            }
        });
    }
}else{
    document.addEventListener('mousemove', () => {
        main_title.style.transition = "color 0.5s, transform 0.5s, text-shadow 2s";
    })
}