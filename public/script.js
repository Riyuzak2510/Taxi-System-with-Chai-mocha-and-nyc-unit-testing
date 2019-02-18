$(function(){

    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let ratebtn = $('#getrates')
    let ratediv = $('#rates')
    calcBtn.click(function(){
        $.post('/calcfare',{
            km : kmBox.val(),
            min : minBox.val()
        } ,function(data) {
            fareDiv.text(data.fare) 
        })
    })

    ratebtn.click(function(){
        $.get('/rates', function(data) {
            let prettyRateData = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM
            <br>
            Fare (Distance) = Rs. ${data.perKm}/ KM
            <br>
            Fare (Waiting) = Rs. ${data.perMin}/ min ( after ${data.freeMin} min)
            `
            ratediv.html(prettyRateData)
        })
    })
})

