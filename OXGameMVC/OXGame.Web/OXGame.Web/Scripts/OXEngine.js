var oOXGameTable;
var oOXStatisticTable;
var sign = 'x';
var runningTime = $('.count');
var textStatus = $('.OXStatus h3');
var timer;
var duration = '60';
var gameDesc;
var gameDuration;
var gameComment;

var OXEngine =
    {
        getValue: function () {
            alert("Test Get Value");
        },
        engineStart: function (event) {

            if (event.name == 'sqr1' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr2' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr3' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr4' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr5' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr6' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr7' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr8' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            else if (event.name == 'sqr9' && event.value == '') {
                event.value = sign;
                if (sign == 'x') {
                    sign = 'o';
                    textStatus.text('O turn');
                    return;
                }
                if (sign == 'o') {
                    sign = 'x';
                    textStatus.text('X turn');
                    return;
                }
            }
            //Check Winner
           // OXEngine.winner(event);
        },

        winner: function (event) {
            var b1 = $('.OXZone .b1').val();
            var b2 = $('.OXZone .b2').val();
            var b3 = $('.OXZone .b3').val();
            var b4 = $('.OXZone .b4').val();
            var b5 = $('.OXZone .b5').val();
            var b6 = $('.OXZone .b6').val();
            var b7 = $('.OXZone .b7').val();
            var b8 = $('.OXZone .b8').val();
            var b9 = $('.OXZone .b9').val();

            //case 1
            if ((b1 == 'x' && b2 == 'x' && b3 == 'x') || (b1 == 'o' && b2 == 'o' && b3 == 'o')) {


                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i1').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 2
            if ((b1 == 'x' && b5 == 'x' && b9 == 'x') || (b1 == 'o' && b5 == 'o' && b9 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i7').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 3
            if ((b1 == 'x' && b4 == 'x' && b7 == 'x') || (b1 == 'o' && b4 == 'o' && b7 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i4').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 4
            if ((b2 == 'x' && b5 == 'x' && b8 == 'x') || (b2 == 'o' && b5 == 'o' && b8 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i5').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 5
            if ((b3 == 'x' && b6 == 'x' && b9 == 'x') || (b3 == 'o' && b6 == 'o' && b9 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i6').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }

            //case 6
            if ((b4 == 'x' && b5 == 'x' && b6 == 'x') || (b4 == 'o' && b5 == 'o' && b6 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i2').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 7
            if ((b5 == 'x' && b3 == 'x' && b7 == 'x') || (b5 == 'o' && b3 == 'o' && b7 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i8').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            //case 8
            if ((b7 == 'x' && b8 == 'x' && b9 == 'x') || (b7 == 'o' && b8 == 'o' && b9 == 'o')) {
                OXEngine.setMenuGameFinished();
                textStatus.text('The winner is "' + event.value + '"');
                $('.i3').css('display', 'block');
                timer.stop();
                OXEngine.finalResultToDB(event);
                return;
            }
            if (b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '') {
                OXEngine.setMenuGameFinished();
                textStatus.text('Draw Game!!');
                timer.stop();
                OXEngine.finalResultToDB('Draw');
                return;
            }
        },
        setMenuGameFinished: function () {
            $('.startGame').css('display', 'inline');
            $('.startGame2').css('display', 'none');
            $('.quitGame').css('display', 'inline');
            $('.quitGame2').css('display', 'none');
        },
        clearAll: function () {

        },
        gameStart: function () {

            $('.startGame').css('display', 'none');
            $('.startGame2').css('display', 'inline');
            $('.quitGame').css('display', 'none');
            $('.quitGame2').css('display', 'inline');

            $('.OxGackGround').css('display', 'none');
            runningTime.css('color', 'green');

            $('#txtAreaComment').val('');

            runningTime.text('0');
            $('.OXZone').css('display', 'block');
            textStatus.text('Game Start!!');
            var count = 0;
            timer = $.timer(
                function () {
                    count++;

                    //Make Brink Text
                    if (runningTime.text() == '49'
                        || runningTime.text() == '50'
                        || runningTime.text() == '51'
                        || runningTime.text() == '52'
                        || runningTime.text() == '53'
                        || runningTime.text() == '54'
                        || runningTime.text() == '55'
                        || runningTime.text() == '56'
                        || runningTime.text() == '57'
                        || runningTime.text() == '58'
                        || runningTime.text() == '59'
                        || runningTime.text() == '60'
                        ) {
                        runningTime.css('color', 'red');
                        $(runningTime).animate({ opacity: 0 }, 100, "linear", function () {
                            $(this).animate({ opacity: 1 }, 100);
                        });
                    }

                    //Make Brink Text
                    if (runningTime.text() == '39'
                        || runningTime.text() == '40'
                        || runningTime.text() == '41'
                        || runningTime.text() == '42'
                        || runningTime.text() == '43'
                        || runningTime.text() == '44'
                        || runningTime.text() == '45'
                        || runningTime.text() == '46'
                        || runningTime.text() == '47'
                        || runningTime.text() == '48'

                        ) {
                        runningTime.css('color', '#ca5100');
                        $(runningTime).animate({ opacity: 0 }, 200, "linear", function () {
                            $(this).animate({ opacity: 1 }, 200);
                        });
                    }



                    if (runningTime.text() == duration) {
                        OXEngine.setMenuGameFinished();
                        textStatus.text("Time up!!");
                        timer.stop();
                        $('.OxGackGround').css('display', 'inline');
                        $('.OXZone').css('display', 'none');
                        return;
                    }
                    runningTime.html(count);

                },
                1000,
                true
            );
            $('.OXZone .b1').val('');
            $('.OXZone .b2').val('');
            $('.OXZone .b3').val('');
            $('.OXZone .b4').val('');
            $('.OXZone .b5').val('');
            $('.OXZone .b6').val('');
            $('.OXZone .b7').val('');
            $('.OXZone .b8').val('');
            $('.OXZone .b9').val('');
            OXEngine.clearImage();
        },
        gameQuit: function () {
            $('.OxGackGround').css('display', 'inline');
            $('.startGame').css('display', 'inline');
            $('.startGame2').css('display', 'none');
            $('.quitGame').css('display', 'inline');
            $('.quitGame2').css('display', 'none');
            runningTime.css('color', 'green');

            $('.OXZone').css('display', 'none');
            OXEngine.clearImage();
            timer.stop();
            OXEngine.finalResultToDB('Quit');
            textStatus.text('');
            runningTime.text('0');
        },
        clearImage: function () {
            $('.i1').css('display', 'none');
            $('.i2').css('display', 'none');
            $('.i3').css('display', 'none');
            $('.i4').css('display', 'none');
            $('.i5').css('display', 'none');
            $('.i6').css('display', 'none');
            $('.i7').css('display', 'none');
            $('.i8').css('display', 'none');
        },
        finalResultToDB: function (event) {
            //TO DO:


            if (event.value == 'x') {
                gameDesc = '1';
            }
            if (event.value == 'o') {
                gameDesc = '2';
            }
            if (event == 'Draw') {
                gameDesc = '3';
            }
            if (event == 'Quit') {
                gameDesc = '4';
            }
            gameDuration = runningTime.text();
            gameComment = $('#txtAreaComment').val();
            $.ajax({
                dataType: "json",
                type: "POST",
                url: "/OXGame/AjaxSaveGameResult",
                data: { "gameDesc": gameDesc, "gameDuration": gameDuration, "gameComment": gameComment },

                success: function (data) {

                    OXEngine.gridSetReload();
                    OXEngine.gridStatisticReload();
                },
                error: function (xhr, ajaxOptions, thrownError) {

                }
            });

        },

        statisticInit: function () {
            oOXStatisticTable = $('#OXGameStatisticTable').dataTable($.extend(globalDatatableSettings,
                     {
                         "bPaginate": false,
                         "bLengthChange": false,
                         "bFilter": false,
                         "bSort": true,
                         "bInfo": false,
                         "bRetrieve": true,
                         "bDestroy": true,
                         "sDom": '<"ctoolbar"><"top">rt<"bottom"lip><"clear">',// hide default search textfield,
                         "sAjaxSource": "/OXGame/AjaxStaticList",
                         "sScrollX": "90%",
                         "sScrollXInner": "100%",
                         "fnServerParams": function (aoData) { },
                         "fnServerData": function (sSource, aoData, fnCallback) {
                             $.ajax({
                                 dataType: "json",
                                 type: "POST",
                                 url: sSource,
                                 data: aoData,
                                 success: function (jsonResult) {
                                     if (jsonResult.ErrorCode == 0) {
                                         fnCallback(jsonResult.Data);
                                     } else {
                                         //alert(jsonResult.Message);
                                     }
                                 },
                                 error: function () {
                                     //alert("Get JSON error :: " + sSource);
                                 }
                             });
                         },
                         "aoColumns":
                         [
                             { "sName": "XwinPercent", "sWidth": "25%", "bSortable": true },
                             { "sName": "OwinPercent", "sWidth": "25%", "bSortable": true },
                             { "sName": "DrawGamePercent", "sWidth": "25%", "bSortable": true },
                             { "sName": "QuitGamePercent", "sWidth": "25%", "bSortable": true }
                         ],

                         "fnInitComplete": function (oSettings, oObj) {
                             $("#btnGridSearch").click(function (e) {
                                 e.preventDefault();
                                 //TO DO....

                             });
                             $("#btnGridReset").click(function (e) {
                                 e.preventDefault();
                                 //TO DO....

                             });


                         },
                         "fnDrawCallback": function (oSettings) {

                         }
                     }
                 )//Closed Extended
                );//Closed DataTable
        },
        gridInit: function () {
            oOXGameTable = $('#OXGameStatusTable').dataTable($.extend(globalDatatableSettings,
                     {
                         "bPaginate": true,
                         "bLengthChange": true,
                         "bFilter": false,
                         "bSort": true,
                         "bInfo": false,
                         "bRetrieve": true,
                         "bDestroy": true,
                         "sDom": '<"ctoolbar"><"top">rt<"bottom"lip><"clear">',// hide default search textfield,
                         "sAjaxSource": "/OXGame/AjaxOXGameList",
                         "sScrollX": "90%",
                         "sScrollXInner": "100%",
                         "fnServerParams": function (aoData) { },
                         "fnServerData": function (sSource, aoData, fnCallback) {
                             $.ajax({
                                 dataType: "json",
                                 type: "POST",
                                 url: sSource,
                                 data: aoData,
                                 success: function (jsonResult) {
                                     if (jsonResult.ErrorCode == 0) {
                                         fnCallback(jsonResult.Data);
                                     } else {
                                         //alert(jsonResult.Message);
                                     }
                                 },
                                 error: function () {
                                     //alert("Get JSON error :: " + sSource);
                                 }
                             });
                         },
                         "aoColumns":
                         [

                             { "sName": "GameID", "sWidth": "25%", "bSortable": true },
                             { "sName": "GameDate", "sWidth": "25%", "bSortable": true },
                             { "sName": "GameDesc", "sWidth": "25%", "bSortable": true },
                             { "sName": "GameDuration", "sWidth": "25%", "bSortable": true }
                         ],

                         "fnInitComplete": function (oSettings, oObj) {
                             $("#btnGridSearch").click(function (e) {
                                 e.preventDefault();
                                 //TO DO....

                             });
                             $("#btnGridReset").click(function (e) {
                                 e.preventDefault();
                                 //TO DO....

                             });

                             $(".fbb_add").fancybox($.extend(globalFancyboxSettings, { 'width': 700, 'height': 330 }));
                         },
                         "fnDrawCallback": function (oSettings) {


                             $(".fbb_edit").fancybox($.extend(globalFancyboxSettings, { 'width': 700, 'height': 330 }));
                             $(".fbb_delete").fancybox($.extend(globalFancyboxSettings, { 'width': 500, 'height': 250 }));

                         }
                     }
                 )//Closed Extended
                );//Closed DataTable
        },

        gridSetReload: function () {  // new search with last condition

            oOXGameTable.fnClearTable(0);
            oOXGameTable.fnDraw();
        },

        gridStatisticReload: function () {  // new search with last condition

            oOXStatisticTable.fnClearTable(0);
            oOXStatisticTable.fnDraw();
        }
    };