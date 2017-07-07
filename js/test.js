$(document).ready(function() {
        
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'Test',
                    start: '2017-07-13T12:00:00',
                    end: '2017-07-13T13:00:00',
                    url: ''
                }
            ]
        });
        
    });