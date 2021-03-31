<?php
$title = "Student";
require_once 'includes/header.php';
?>

<div id="wrapper">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">
                    O'Genious Panda
                </a>
            </li>
            <div class="sponsor">
                Sponsored by Master Card Foundation
            </div>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Competition</a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->
    <div class="alert-black d-flex justify-content-between align-items-center">
        <div class="side-bar-menu" id="menu-toggle"><i class="fas fa-bars"></i></div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="test-id">Test ID: <b>#0121DE2</b></div>
            <button class="btn btn-outline-warning btn-sm" type="submit">logout</button>
        </div>
    </div>
    
    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="alert alert-info" role="alert">
                        <h3 class="text-primary text-center">Sorry, you didn't pass the test!</h3>
                    </div>
                    <div class="alert alert-info" role="alert">
                        <div class="alert-course">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="h5">Unit:</span>
                                <span class="course text-primary text-center">Laboratory, Safety and Apparatus</span>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <span class="h5">Marks:</span>
                                <span class="course text-primary text-center">20/100</span>
                            </div>
                        </div>
                    </div>
                    <div class="alert alert-info" role="alert">
                        <div class="d-flex justify-content-center align-content-start flex-wrap">
                            <button type="button" class="btn btn-info m-3">Retake test</button>
                            <button type="button" class="btn btn-success m-3">Ask question</button>
                            <button type="button" class="btn btn-warning m-3">Create a challenge</button>
                            <button type="button" class="btn btn-success m-3">View Answer Sheet</button>
                            <button type="button" class="btn btn-info m-3">Share score on the forum</button>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <h3 class="text-center my-4">Share your score on social media</h3>
                        <div class="Social-media">
                            <a href="#"><i class="fab fa-facebook-f text-primary"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

<!-- </div> -->
<!-- /#wrapper -->

<?php
require_once 'includes/footer.php'
?>