<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>React CRUD</title>
    @vite('resources/css/app.css')
</head>

<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/app.ts')
</body>
<script>
    window.env = {
        API_BASE_URL: '{{ env ("API_BASE_URL") }}'
    }
</script>
</html>