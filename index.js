<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Future Bottle</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="js/index.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</head>
    
<body>
    <form id = "formWidget">
    <div id = "container" class="container-fluid">
        <div id = "barDiv">
            <h1 id = "bar">&nbsp; FUTURE BOTTLE</h1>
        </div>

        <div id = "page1">
            <h1 id = "header">Create one</h1>
            <p id = "explain">Make your own bottle and send it to your future!</p>

                <div id = "main">
                    <div id = "dateDiv">
                    <p>Date: <input type="date" name = "date" id="date" class = "input"></p>
                    </div>

                    <div id= "titleDiv">
                    <p>Title: <input type = "text" id = "title" name = "title" class = "input" placeholder = "New friends"></p> 
                    </div>

                    <div id = "contentsDiv">
                        <textarea id = "contents" name = "contents" class = "input" placeholder="Type whatever you want to tell, how was your day, etc"></textarea>
                    </div>
                </div>
        
        
        <!-- Note NO FORM!! -->    
        <div id = "button">
            <button id = "send" type = "button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                <span class="fa fa-envelope" aria-hidden="true"></span>&nbsp;Send 
            </button>
    

            <!--<button type="button" class="btn btn-primary" aria-label="Send Email" data-toggle="modal" data-target="#myModal">
            <span class="fa fa-envelope" aria-hidden="true"></span> &nbsp;Email
        </button>
            <div class = "modal fade" tabindex = "-1" role = "dialog" id = "myModal">
            <div class = "modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Confirm Sending</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p><span class=" fa fa-question-circle"></span>&nbsp;Are you sure you want to send the email?</p>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Yes</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
            </div>
            
            
        <div class="alert alert-danger collapse" role="alert" id="noAlert">
              <span class="glyphicon glyphicon-exclamation-sign" style="font-size:1.2em" aria-hidden="true"></span>
              <strong>Oh!</strong> Something went wrong.
        </div>
            
        <div class="alert alert-success collapse" role="alert" id="yesAlert">
              <span class="glyphicon glyphicon-ok" style="font-size:1.2em" aria-hidden="true"></span>
              <strong>Email away!</strong> Your email has been sent.
        </div>-->
        </div>
    </div>
</form>
    
</body>
</html>
