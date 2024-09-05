$.editable.addInputType('datepicker', {
    element: function (settings, original) {
        var input = $('<input>');
        if (settings.width != 'none') { input.width(settings.width); }
        if (settings.height != 'none') { input.height(settings.height); }
        input.attr('autocomplete', 'off');
        $(this).append(input);
        return (input);
    },
    plugin: function (settings, original) {
        /* Workaround for missing parentNode in IE */
        var form = this;
        settings.onblur = 'ignore';
        //    $(this).find('input').datepicker({ 
        //        firstDay: 1, 
        //        dateFormat: 'dd/mm/yy', 
        //        closeText: 'X', 
        //        onSelect: function(dateText) { $(this).hide(); $(form).trigger("submit"); }, 
        //        onClose: function(dateText) { 
        //            original.reset.apply(form, [settings, original]); 
        //            $(original).addClass( settings.cssdecoration ); 
        //            }, 
        //    }); 

        //        $(this).find('input').datepicker().bind('click', function () {
        //            $(this).datepicker('show');
        //            return false;
        //        }).bind('dateSelected', function (e, selectedDate, $td) {
        //            $(form).submit();
        //        });

        $(this).find('input').dateinput({

            format: 'dd/mm/yyyy', // the format displayed for the user
            selectors: true,             	// whether month/year dropdowns are shown
            min: -100,                    // min selectable day (100 days backwards)
            max: 100,                    	// max selectable day (100 days onwards)
            offset: [10, 20],            	// tweak the position of the calendar
            speed: 'fast',               	// calendar reveal speed
            firstDay: 1                  	// which day starts a week. 0 = sunday, 1 = monday etc..
        
        });

    }
}); 


//$(".datepicker-initiative").editable('inc/ajax/saveInitiative.php', { 
//     type: 'datepicker', 
//     tooltip: 'Double-click to edit...', 
//     event: 'dblclick', 
//     submit: 'OK', 
//     cancel: 'Cancel', 
//     width: '100px' 
//}); 
