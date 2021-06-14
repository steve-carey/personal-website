<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SteveCareyDeveloper</title>
    <link href="css/style.css" rel ="stylesheet" type = "text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arvo" type = "text/css">
    <link rel = "stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" crossorigin="anonymous" type = "text/css"/>
</head>
<body>
    <nav id = "navbar">
        <ul class = "menu">
            <li id = logo><a href = "#"><img src = "img/logo.png" width ="29" height ="29"></a></li>
            <li><a id = about href = "#">About</a></li>
            <li><a href = "adventure.html">Adventure</a></li>
            <li class = "push"><a href = "contact.php">Contact</a></li>
        </ul>
    </nav>
    <div class ="home-wrapper" id ="home-wrapper">
        <h1 class = "title">Steve Carey</h1>
        <p class = "heading">Bangor University MSc Computing Student,
            soon available for full time work
        </p>

        <button type="button" id ="scrollBtn" class = "scrollBtn">My Work <i class="fas fa-arrow-right" id ="arrow"></i></button>
    </div>
    <div class = "profile">
        <img class = "profileImg" src="img/profile.jpg" alt = "Profile Picture">
        <div class = "profileText">
            <h2>Hi, I'm Steve, please take a look around...</h2>
            <p>I'm passionate about creating software that provides solutions to societies problems. 
                I'm also an outdoor enthusiast and general nature nut! 
                I'm currently available to work with you or your organisation.
            </p>
        </div>
    </div><hr>
    <div class = icons>
        <div class = "icon-container">
            <div class = "circle">
                <i class="fas fa-tachometer-alt icon"></i> 
            </div>
            <h2>Fast</h2>
            <p>Software Developed with speed as a priority</p>
        </div>
        <div class = "icon-container">
            <div class = "circle">
                <i class="fas fa-brain icon"></i>
            </div>
            <h2>Intuitive</h2>
            <p>Software Developed with UI and UX in mind</p>
        </div>
        <div class = "icon-container">
            <div class = "circle">
                <i class="fas fa-ruler-combined icon"></i>
            </div>
            <h2>Tailored</h2>
            <p>Software Developed to your needs</p>
        </div>
        <div class = "icon-container">
            <div class = "circle">
                <i class="fas fa-mobile-alt icon"></i>
            </div>
            <h2>Responsive</h2>
            <p>Software Developed to work on any device</p>
        </div>
    </div>
    
    
    <div id ="carousel" class = carousel>
        <h2>Skillset</h2>
        <div class ="images" id=images></div>
        <div class ="comment" id=comment></div>
    </div>
    <div class="buffer">

    </div>

    <script src="js/script.js" type ="text/javascript"></script>
</body>
<footer>
    &copy; Steve Carey <script>document.write(new Date().getFullYear())</script> <a href = "https://github.com/steve-carey" target="_blank" alt ="Github">Github <i class="fab fa-github"></i></a>
</footer>
</html>
