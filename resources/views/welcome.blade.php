<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />


    <title>Laravel</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        :root {
            --main-color: #027581;
            --color-dark: #1d2231;
            --text-grey: #8390A2;
        }

        * {
            font-family: "Poppins", sans-serif;
            margin: 0;
            padding: 0;
            text-decoration: none;
            list-style-type: none;
            box-sizing: border-box;
        }



        .main-content {
            position: relative;
            margin-left: 240px;
            padding: 1rem;
            border-radius: 10px;
            transition: margin-left 500ms;
        }

        header {
            position: fixed;
            left: 240px;
            top: 0;
            z-index: 100;
            width: calc(100% - 240px);
            background: #fff;
            height: 60px;
            padding: 0rem 1rem;
            display: 0rem 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            transition: left 500ms;
        }

        .search-wrapper {
            display: flex;
            align-items: center;
        }

        .search-wrapper input {
            border: 0;
            outline: 0;
            padding: 1rem;
            height: 38px;
        }

        .social-icons {
            display: flex;
            align-items: center;
        }

        .social-icons span,
        .social-icons div {
            margin-left: 1.2rem;
        }

        .social-icons div {
            height: 38px;
            width: 38px;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url("../img/profile.jpg");
            border-radius: 50%;
        }

        main {
            margin-top: 60px;
            background: #f1f5f9;
            border-radius: 10px;
            min-height: 90vh;
            padding: 1rem 3rem;
            height: 90vh;
            overflow-y: auto;
        }

        ::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        .dash-title {
            color: var(--color-dark);
            margin-bottom: 1rem;
        }

        .dash-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 2rem;
        }

        .card-single {
            background: #fff;
            border-radius: 7px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        }

        .card-body {
            padding: 1.3rem 1rem;
            display: flex;
            align-items: center;
        }

        .card-body span {
            font-size: 1.7rem;
            color: #777;
            padding-right: 1.4rem;
        }

        .card-body h5 {
            color: var(--text-grey);
            font-size: 1rem;
        }

        .card-body h4 {
            color: var(--color-dark);
            font-size: 1.1rem;
            margin-top: 0.2rem;
        }

        .card-footer {
            padding: 0.5rem 1rem;
            font-size: 15px;
            background: #f9fafc;
        }

        .card-footer a {
            text-decoration: none;
            color: var(--main-color);
        }

        .recent {
            margin-top: 1rem;
            margin-bottom: 3rem;

        }

        .activity-grid {
            display: grid;
            grid-template-columns: 70% 28%;
            grid-column-gap: 1.5rem;
        }

        .activity-grid-one {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 100%;
            grid-column-gap: 1.5rem;
        }

        .activity-grid-second {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 100%;
            grid-column-gap: 1.5rem;
        }

        .activity-card,
        .summary-card,
        .bday-card {
            background: #fff;
            border-radius: 7px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }


        .activity-card h3 {
            color: var(--text-grey);
            padding: 1rem;
        }

        .activity-card table {
            width: 100%;
            border-collapse: collapse;
        }

        .activity-card thead {
            background: #efefef;
            text-align: left;
        }

        th,
        td {
            font-size: 0.9rem;
            padding: 1rem 0.5rem;
            color: var(--color-dark);
        }

        td {
            font-size: 0.8rem;
        }

        tbody tr:nth-child(even) {
            background: #f9fafc;
        }

        .badge {
            padding: 0.2rem 1rem;
            border-radius: 20px;
            font-size: 0.7rem;
        }

        .badge.success {
            background: #def7ec;
            color: var(--main-color);
        }

        .badge.warning {
            background: #f0f6b2;
            color: orange;
        }

        .td-team {
            display: flex;
            align-items: center;
        }

        .img-1,
        .img-2,
        .img-3 {
            height: 38px;
            width: 38px;
            border-radius: 50%;
            margin-left: -15px;
            border: 3px solid #efefef;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .img-1 {
            background-image: url("../img/profile.jpg");
        }

        .img-2 {
            background-image: url("../img/profile.jpg");
        }

        .img-3 {
            background-image: url("../img/profile.jpg");
        }

        .summary-card {
            margin-bottom: 1.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .summary-single {
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
        }

        .summary-single span {
            font-size: 1.5rem;
            color: #777;
            padding-right: 1rem;
        }

        .summary-single h5 {
            color: var(--main-color);
            font-size: 1.1rem;
            margin-bottom: 0rem !important;
        }

        .summary-single small {
            font-weight: 700;
            color: var(--text-grey);
        }

        .bday-flex {
            display: flex;
            align-items: center;
            margin-bottom: 0.3rem;
        }

        .bday-card {
            padding: 1rem;
        }

        .bday-img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            border: 3px solid #efefef;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url("../img/profile.jpg");
            margin-right: 0.7rem;
        }

        .text-center {
            text-align: center;
        }

        .text-center button {
            background: var(--main-color);
            color: #fff;
            border: 1px solid var(--main-color);
            border-radius: 4px;
            padding: 0.4rem 1rem;
        }

        .table-responsive {
            text-align: center;
            overflow-x: auto;
        }

        .table-responsive table thead tr th {
            text-align: center;
            border: 1px solid #ccc;
        }

        .table-responsive table tbody tr td {
            max-height: 100px;
            border: 1px solid #ccc;
            overflow-y: auto;
        }

        @media only screen and (max-width: 1200px) {


            .main-content {
                margin-left: 60px;
            }

            .main-content header {
                left: 60px;
                width: calc(100% - 60px);
            }


        }

        @media only screen and (max-width: 860px) {
            .dash-cards {
                grid-template-columns: repeat(2, 1fr);
            }

            .card-single {
                margin-bottom: 1rem;
            }

            .activity-grid {
                display: block;
            }

            .summary {
                margin-top: 1.5rem;
            }
        }

        @media only screen and (max-width: 600px) {
            .dash-cards {
                grid-template-columns: 100%;
            }
        }

        @media only screen and (max-width: 450px) {
            main {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
    </style>
</head>

<body class="antialiased">
    <div id="app">
        <main-component></main-component>
    </div>
    <script src="{{mix('/js/app.js')}}"></script>
    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>
</body>



</html>