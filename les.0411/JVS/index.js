/**
 * Wraps the document.querySelector method
 */
 const q = (selector) => document.querySelector(selector);


 const render = (container, items) => {
   const elements = items.map((element) => 
     `<li>
       <h3>${element.name}</h3>
       <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
       <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
     </li>`
   );
   
   const content = elements.join('');
 
   container.innerHTML = content;
 }
 
 document.addEventListener('DOMContentLoaded', () => {
   const form = q('form');
   const input = q('form input');
   const list = q('ul');
   const update = q('.NewLabel');
   const inputName = q("#name");
   const inputEmail = q("#email");
   const inputTel = q("#Phone"); 
   

   render(list, data);
  
/*versione originale con il submit
 form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const value = input.value.toLowerCase();

const results = data.filter((element, index) => {
    return element.name.toLowerCase().search(value) > -1
});

 console.log(results);

    render(list, results);
 }); */

 input.addEventListener('keyup', (event) => {
  event.preventDefault();
    const value = input.value.toLowerCase();

const results = data.filter((element) => {
     return element.name.toLowerCase().search(value) > -1 
     

    });
 
    render(list, results);

});
update.addEventListener('submit', (event) => {
  event.preventDefault();
  const newUser = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputTel.value
  }
 data.push(newUser)



  render(list, data);
  
  data.sort();

});

});




