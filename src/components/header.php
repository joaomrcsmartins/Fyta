<?php
function make_header($scripts, $styles)
{ ?>
    <!DOCTYPE html>
    <html>

    <head>
        <title>Fytá - Feel the Flower Power</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/ac3e82986f.js" crossorigin="anonymous"></script>
        <link href="../styles/navbar.css" rel="stylesheet">
        <script src="../js/navbar.js" type="module"></script>
        <?php foreach ($scripts as $script) { ?>
            <script src=<?= $script ?> type="module"></script>
        <?php } ?>
        <?php foreach ($styles as $style) { ?>
            <link href=<?= $style ?> rel="stylesheet">
        <?php } ?>
    </head>

    <body>
        <nav class="navbar-wrapper navbar navbar-expand-md">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Company Logo">
            </a>
            <nav class="navbar navbar-expand-lg navbar-light navbar-icons">
                <div class="user">
                    <i class="far fa-user"></i>
                </div>
                <div class="star">
                    <i class="far fa-star"></i>
                </div>
                <div class="cart">
                    <i class="fas fa-shopping-basket"></i>
                </div>
            </nav>
            <nav class="navbar navbar-expand-md navbar-light navbar-categories">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#categoriesNavbar" aria-controls="categoriesNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fas"></span>
                </button>
                <div class="collapse navbar-collapse" id="categoriesNavbar">
                    <ul class="navbar-nav mt-2 mt-lg-0 mr-lg-4">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Indoor</a>
                        </li>
                        <li class="nav-item  divider">
                            <a class="nav-link" href="#">Outdoor</a>
                        </li>
                        <li class="nav-item  divider">
                            <a class="nav-link" href="#">Vases</a>
                        </li>
                        <li class="nav-item  divider">
                            <a class="nav-link" href="#">Tools</a>
                        </li>
                        <li class="nav-item  divider">
                            <a class="nav-link" href="#">Deals</a>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col user">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="col star">
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="input-group w-auto mt-1 rounded-pill border border-dark navbar-search">
                <span class="input-group-append">
                    <button class="btn border border-right-0" type="button">
                        <i class="fas fa-search form-control-feedback"></i>
                    </button>
                </span>
                <input class="form-control border-left-0">
            </div>
        </nav>
    <?php } ?>