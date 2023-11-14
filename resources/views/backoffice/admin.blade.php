<!DOCTYPE html>
<html>

<head>
    <!-- Metas -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <meta name="theme-color" content="#00AEDF">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="TELESCOPE_ENABLED" content="{{ config('telescope.enabled') }}">

    <!-- Title -->
    <title>{{ config('app.name') }}</title>

    <!-- Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

    <!-- Manifest -->
    <link rel="manifest" href="/manifest.json">

    <!-- Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">


</head>

<body>
    <noscript>
        <div class="full-height flex-center">
            <h1 class="noscript-message">
                You need JavaScript enabled to run this app.
            </h1>
        </div>
    </noscript>
    <div id="root">
        <!--
                This is the root node that acts as the wrapper where
                the application will render the elements
            -->
    </div>


    @viteReactRefresh
    {{ useJsAssets() }}
</body>

</html>
