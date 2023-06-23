<?php
$id = $_GET['id'];
$error_ids = str_split($id);
$error_id = substr($id, 3);
if($id == "403"){
    $error = ["Forbidden","<span class=blur2>F</span>o<span class=noise1>rb</span>i<span class=blur1>dd</span><span class=noise2>e</span>n","ページを閲覧する権限がありません！"];
}else if($id == "404"){
    $error = ["Not Found","<span class=blur2>No</span><span class=noise1>t</span> Fo<span class=blur1>u</span><span class=noise2>n</span>d","ページが見つかりません！"];
}else{
    $error = ["ERROR","E<span class=blur1>R</span><span class=noise1>RO</span><spanclass=noise3>R</span>","エラーが発生しました！"];
}
echo<<<HTML
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>kuwa.dev - oops! $id $error[0]</title>
<link rel="icon" type="image/png" href="https://cdn.kuwa.dev/image/icon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="kuwa.dev">
<meta property="og:type" content="website">
<meta property="og:description" content="oops! $id $error[0]\n$id $error[2]">

<meta property="og:url" content="https://kuwa.dev">
<meta property="og:image" content="https://cdn.kuwa.dev/image/icon.png">
<meta property="og:site_name" content="kuwa.dev">
<meta property="og:locale" content="ja_ja">

<meta name="twitter:card" content="summary_large_image"><!--デカい画像とかはこれで設定できる-->
<meta property="twitter:title" content="kuwa.dev">
<meta name="twitter:description" content="oops! $id $error[0]\n$id $error[2]">
<meta name="twitter:site" content="kuwa.dev">
<meta name="twitter:image" content="https://cdn.kuwa.dev/image/icon.png">

<meta name="theme-color" content="#ffc400">

<link rel="stylesheet" href="https://cdn.kuwa.dev/style/error-glitch.css">
</head>
<body>
<div class="visual_effects">
</div>
<div class="box">
    <div class="boxs">
    <div class="main">
        <p class="glitch" data-text="$id"><span>$error_ids[0]</span><span>$error_ids[1]</span><span>$error_ids[2]</span>$error_id
        </p>
    </div>
    </div>

    <div class="boxs">
    <div class="error">
        <div style="display: inline-block;">
        <p class="glitch" data-text="$error[0]">$error[1]
        </p>
        </div>
    </div>
    </div>
    <div class="boxs">
    <div class="back">
        <div style="display: inline-block;">
        <p>Back to Home <span class="kuwa.dev"><a href="https://kuwa.dev">kuwa.dev</a></span>
        </p>
        </div>
    </div>
    </div>

    <!-- <div class="boxs" style="height: 50px;">
    <div class="back">
        
    </div>  
    </div> -->
</div>
</div>

<footer>
<div class="copyright">
Copyright&copy; <a href="https://kuwa.dev">kuwa.dev</a> All Rights Reserved.
<br>
This site is powered BY kuwa
</div>
<div class="sns">
<div class="snsbutton"><a href="https://kuwa.dev/discord"><img src="https://cdn.kuwa.dev/image/discord.png" width="30px" height="30px" alt="discord"></a></div>
<div class="snsbutton"><a href="https://kuwa.dev/tw"><img src="https://cdn.kuwa.dev/image/twitter.png" width="30px" height="30px" alt="twitter"></a></div>
<div class="snsbutton"><a href="https://kuwa.dev/github"><img src="https://cdn.kuwa.dev/image/github-light-120.png" width="30px" height="30px" alt="github"></a></div>
</div>
</footer>
<div class="noise_wrap">
<div class="noise">
</div>
</div>
<script></script>

</body>
</html>



HTML;