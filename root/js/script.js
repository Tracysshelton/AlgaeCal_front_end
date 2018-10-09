// Main Javascript file

// Using Ajax to retrieve Json and jquery to access information
$(document).ready(function() {
    var d = new Date();
    $.ajax({
        url: "https://www.algaecal.com/wp-json/acf/v3/options/options"
    }).then(function(data) {
        
        // 7yr full copy
        $('.acf-7yr-full-copy').append(data.acf['7yr_full_copy']);
       
        // Default phone number       
        $('.acf-default_phone_number').append(data.acf.default_phone_number);
        
        // Removing special characters from default phone number
        var str = data.acf.default_phone_number;
        str = str.replace(/-/g, '');
        
        // Placing phone number in a href
        $("#call").attr("href", "tel:"+str);
        
        // Checking if the current time is within working hours  
        for(var i=0; i<7; i++){
            if(d.getDay() == 6){
                if(d.getHours() >7 && d.getHours() < 17){
                    $('.acf-open').append("Speak to Our Bone Specialist");
                    i=8;
                }else{
                    i=8;
                }
            }else{
                if(d.getHours() > 6 && d.getHours() < 16){
                    $('.acf-open').append("Speak to Our Bone Specialist");
                    i=8;
                }else{
                    i=8;
                }
            }
        }
    });
    
    $('#buyNow').click(function(){
        var x = document.getElementById("bundles");
        x.removeAttribute("style");
    });
});

// Setting pluggin to unhide div afterthe 2:13 marker
window._wq = window._wq || [];

// target our video by the first 3 characters of the hashed ID
_wq.push({ id: "5gpdmwj4ur", onReady: function(video) {
  // at 2:13 minute mark
  video.bind('secondchange', function(s) {
      var x = document.getElementById("bundles");
    if (s === 133) {
        if (x.style.display === "none") {
            x.removeAttribute("style");
        } else {
            x.style.display = "none";
        }
    }
  });
}});
