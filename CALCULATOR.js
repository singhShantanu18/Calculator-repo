let calculation = localStorage.getItem('calculation')
            if(calculation===null){
                calculation = '';
            }

            //this function adds the string parameter to calculation variable
            function calculator(vaLue){
                calculation += vaLue;        
                console.log(calculation);

                display(); // this function displays the string on a paragraph element
            }

            function display(){
                document.querySelector('.js-display').innerHTML = calculation
            }