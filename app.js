$(document).ready(function(){

    let patient = $('#P').val()
    let intervention = $('#I').val()
    let comparison = $('#C').val()
    let outcome = $('#O').val()
    let combined = ''

    $('#generate').click(function() {

        // Patient
        var valP = $('#P').val()
        var splitValP = valP.split("\n")
        let fieldP = $('#Pfield').val()
        let andToggleP = false

        for (let x in splitValP){

            if (x==0){
                patient = "(" + splitValP[x] + fieldP + ")"
            } else if (splitValP[x] == 'AND') {
                patient += ' AND '
                andToggleP = true
            }else if (andToggleP == true) {
                patient += "(" + splitValP[x] + fieldP + ")"
                andToggleP = false
            }else if (splitValP[x] == '') {
                patient = patient
            }else {
                patient += " OR " + "(" + splitValP[x] + fieldP + ")"
            }  
        }
        $('#PGen').html(patient)

        // Intervention
        var valI = $('#I').val()
        var splitValI = valI.split("\n")
        let fieldI = $('#Ifield').val()
        let andToggleI = false

        for (let x in splitValI){

            if (x==0){
                intervention = "(" + splitValI[x] + fieldI + ")"
            } else if (splitValI[x] == 'AND') {
                intervention += ' AND '
                andToggleI = true
            }else if (andToggleI == true) {
                intervention += "(" + splitValI[x] + fieldI + ")"
                andToggleI = false
            }else if (splitValI[x] == '') {
                intervention = intervention
            }else {
                intervention += " OR " + "(" + splitValI[x] + fieldI + ")"
            }  
        }
        $('#IGen').html(intervention)

        // Comparison
        var valC = $('#C').val()
        var splitValC = valC.split("\n")
        let fieldC = $('#Cfield').val()
        let andToggleC = false

        for (let x in splitValC){

            if (x==0){
                comparison = "(" + splitValC[x] + fieldC + ")"
            } else if (splitValC[x] == 'AND') {
                comparison += ' AND '
                andToggleC = true
            }else if (andToggleC == true) {
                comparison += "(" + splitValC[x] + fieldC + ")"
                andToggleC = false
            }else if (splitValC[x] == '') {
                comparison = comparison
            }else {
                comparison += " OR " + "(" + splitValC[x] + fieldC + ")"
            }  
        }
        $('#CGen').html(comparison)

        // Outcome
        var valO = $('#O').val()
        var splitValO = valO.split("\n")
        let fieldO = $('#Ofield').val()
        let andToggleO = false

        for (let x in splitValO){

            if (x==0){
                outcome = "(" + splitValO[x] + fieldO + ")"
            } else if (splitValO[x] == 'AND') {
                outcome += ' AND '
                andToggleO = true
            }else if (andToggleO == true) {
                outcome += "(" + splitValO[x] + fieldO + ")"
                andToggleO = false
            }else if (splitValO[x] == '') {
                outcome = outcome
            }else {
                outcome += " OR " + "(" + splitValO[x] + fieldO + ")"
            }  
        }
        $('#OGen').html(outcome)


        // Combine
        
    })


    $('#P').change(function(){

    })

    $('#I').change(function(){

    })

    $('#C').change(function(){
        
    })

    $('#O').change(function(){
        
    })


    


  });