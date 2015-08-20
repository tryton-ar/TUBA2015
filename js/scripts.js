$('document').ready(function(){
    Eventbrite({'app_key': "PVM6CIDIEZCCHDINHL",
                'user_key': "138020372274390647429"}, function(eb_client){
        eb_client.event_list_attendees ( {'id': 17682323305 }, function( response ){
            for (var i = 0; i < response.attendees.length; i++) {
                a = response.attendees[i].attendee
                company = a.company || ''
                $('.attendees').append('<div>' + a.first_name + ' ' + a.last_name + '<span class="company">' + company + '</span></div>')
            }
        });
    });
});
