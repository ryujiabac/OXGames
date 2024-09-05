
var globalDatatableSettings = {
    "bProcessing": true,
    "bServerSide": true,
    "sScrollY": "300px",
    "sScrollX": "100%",
    "sScrollXInner": "110%",
    "sPaginationType": "full_numbers",
    "sAjaxSource": "http://",
    "aoColumns": [],
    "sDom": '<"ctoolbar"><"top"f>rt<"bottom"lip><"clear">',
    "oLanguage": {

        "sProcessing": "Processing...",
        "sLengthMenu": "Show _MENU_ entries",
        "sZeroRecords": "No matching records found",
        "sEmptyTable": "No data available in table",
        "sLoadingRecords": "Loading...",
        "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
        "sInfoEmpty": "Showing 0 to 0 of 0 entries",
        "sInfoFiltered": "(filtered from _MAX_ total entries)",
        "sInfoPostFix": "",
        "sInfoThousands": ",",
        "sSearch": "Search:",
        "sUrl": "",
        "oPaginate": {
            "sFirst": "First",
            "sPrevious": "Previous",
            "sNext": "Next",
            "sLast": "Last"
        },
        "fnInfoCallback": null
    }
};



var globalFancyboxSettings = {

    'modal': true,
    'width': 500,
    'height': 399,
    'type': 'iframe',
    'scrolling': 'no',
    'autoScale': true,
    'autoDimensions': true,
    'padding': 4,
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'titleShow': false,
    'onComplete': function () {

//        if (Global != undefined) {
//            Global.initControl();
//        }
    },
    'onClosed': function () { }
};