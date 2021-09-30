<?php
    $newsDB = json_decode(file_get_contents("db.json"));
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="assets/icon.png" type="image/png">
        <title>Total - Fournisseur d'énergie</title>
    </head>

    <body>
        <header>
            <img id="logo" src="assets/logo.webp" alt="Logo entreprise">
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/news.php">News</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <?php foreach ($newsDB as $news): ?>
                <article>
                    <img src="<?= $news->img->src ?>" height="342" width="460" alt="<?= $news->img->alt ?>">
                    <p>Date : <?= $news->date ?> <?= $news->category ?></p>
                    <p><?= $news->content ?></p>
                </article>
            <?php endforeach; ?>
        </main>
        <footer>
            Copyright &copy; 2021
        </footer>
        <script>
           navigator.serviceWorker.register("sw.js");
        </script>
    </body>
</html>