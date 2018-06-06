<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
          <link href="{{asset('css/app.css')}}" rel="stylesheet">
          <link href="{{asset('css/reset.css')}}" rel="stylesheet">

        <style>
            html, body {
                background-color: #fff;
                color: #000000;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }
            .el-main{
                min-height: 600px;
            }
        </style>
    </head>
    <body>
       <div id="app">
        <el-container>
            <el-header>
                <headers></headers>
            </el-header>
            <el-main>
                <div>
                    <router-view></router-view>
                </div>
            </el-main>
            <el-footer>
               <footers></footers>
            </el-footer>
        </el-container>
            
            
          
       </div>
    </body>
    <script src="http://webapi.amap.com/loca?key=ee250a0046ba5e1cbb060277414f8c71"></script>
<script src="http://a.amap.com/Loca/static/mock/heatmapData.js"></script>
    <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</html>
