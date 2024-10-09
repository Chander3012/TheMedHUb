<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TheMedHub</title>
    <link rel="shortcut icon" href="img/pin.png" type="image/x-icon">
    <link rel="stylesheet" href="Style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

</head>

<body>
<div class="hero">
        <?php require'partials\_nav.php' ?>

        <div class="loginform">
            <h1><b>LOGIN</b></h1>
            <form action="\loginsystem\signup.php" method="POST">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="mb-3">
                    <label for="cpassword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="cpassword" name="cpassword">
                    <div id="emailHelp" class="form-text">Make sure you Enter the same password.</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>