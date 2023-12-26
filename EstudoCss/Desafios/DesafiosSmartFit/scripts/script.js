function BuscarUnidades(params) {
  document.getElementById('loadingscreen').style.display = 'block';

  $.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json", function (success) {
   var results = document.getElementById('results')
  
   results.innerHTML = ""
     // Obter o valor do filtro selecionado
     var filter = document.querySelector('input[name="flexRadioDefault"]:checked').id;

   success.locations.forEach((element, index) => {
    console.log(element)

    var hasFilter = false;

element.schedules.forEach(schedule => {
  const time = schedule.hour.split(' ')[0]; 
  const [hour, minutes] = time.split(':');
  const numericTime = parseFloat(hour + '.' + minutes);

  // Verificar se o horário está de acordo com o filtro selecionado
  if (
    (filter === 'flexRadioDefault1' && numericTime >= 6 && numericTime <= 18) || // Manhã
    (filter === 'flexRadioDefault2' && numericTime >= 12.01 && numericTime <= 18) || // Tarde
    (filter === 'flexRadioDefault3' && numericTime >= 18.01 && numericTime <= 23) // Noite
  ) {
    hasFilter = true;
  }
});


     if (element.mask == "required") {
       var maskR = "block"
       var maskL = "none"
     }else{
       var maskR = "none"
       var maskL = "block"
     }

 
     if (element.towel == "required") {
       var towelR = "block"
       var towelL = "none"
     }else{
       var towelR = "none"
       var towelL = "block"
     }

     
     if (element.fountain == "required") {
       var fountainR = "block"
       var fountainL = "none"
     }else{
       var fountainR = "none"
       var fountainL = "block"
     }

     if (element.locker_room == "closed") {
       var locker_roomR = "block"
       var locker_roomL = "none"
       var locker_roomP = "none"
     }else if (element.locker_room == "allowed"){
       var locker_roomR = "none"
       var locker_roomL = "block"
       var locker_roomP = "none"
     }else{
       var locker_roomR = "none"
       var locker_roomL = "none"
       var locker_roomP = "block"
     }

  
     if (element.opened == true && hasFilter) {
       var col = `
     
     <div class="col-md-4">
       <div class="container rounded p-3" style="min-height: 70vh; background: #f5f5f5;">
         <div>
           <h5 class="text-success">Aberto</h5>
           <h3>${element.title}</h3>
           ${element.content}
         </div>
         
         <hr>
 
         <div class="container d-flex justify-content-center align-items-center">
           <img src="/images/required-mask.png" style='display: ${maskR}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/recommended-mask.png" style='display: ${maskL}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/required-towel.png" style='display: ${towelR}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/recommended-towel.png" style='display: ${towelL}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/partial-fountain.png" style='display: ${fountainR}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/forbidden-fountain.png" style='display: ${fountainL}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/required-lockerroom.png" style='display: ${locker_roomR}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/partial-lockerroom.png" style='display: ${locker_roomL}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">
           <img src="/images/forbidden-lockerroom.png" style='display: ${locker_roomP}' class="figure-img img-fluid rounded max-width-100" alt="A generic square placeholder image with rounded corners in a figure.">

         </div>

         
     `
     var scheduleHTML = ''; // Criar uma string vazia para armazenar os horários

element.schedules.forEach(schedule => {
 // Iterar sobre cada horário e adicionar ao HTML
 scheduleHTML += `
   <div class="col">
     <blockquote class="blockquote">
       <p class="mb-0">${schedule.weekdays}</p>
       <footer class="">${schedule.hour}</footer>
     </blockquote>
   </div>
 `;
});

// Substituir a estrutura fixa pela estrutura dinâmica dos horários
var schedulesDiv = `
 <div>
   <div class="container text-center">
     <div class="row row-cols-2">
       ${scheduleHTML}
     </div>
   </div>
 </div>
`;

results.innerHTML += col + schedulesDiv;
     } else if (params == 'ativado') {

       var col = `
     <div class="col-md-4">
       <div class="container rounded p-3" style="min-height: 70vh; background: #f5f5f5;">
         <div>
           <h5 class="text-danger">Fechado</h5>
           <h3>${element.title}</h3>
           ${element.content}
         </div>
     `
     results.innerHTML += col
     }


     var a = document.getElementById('results').children.length
     document.getElementById('aaaaaaa').innerHTML = `Resultados encontrados: ${a}`



   });
 });
 document.getElementById('loadingscreen').style.display = 'none';

}
