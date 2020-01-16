function getSeite (text) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seite</title>
</head>
<body>
    <h3>${text}</h3>
    <form  method="get" ><button>Get</button></form>
    <form method="post" ><button>Post Methode</button> </form>
</body>
</html>`
}

module.exports.seite = getSeite;