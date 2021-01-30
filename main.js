
// Fast Class Ticket Option Handler Function
function handleFTicket(isIncrease){
    const fClassTicketInput = document.getElementById('fClassTicket');
    const fClassTicketCount = parseInt(fClassTicketInput.value);
    let newFClassTicket = fClassTicketCount;
    if(isIncrease == true){
        newFClassTicket = fClassTicketCount + 1;
    }
    if(isIncrease == false && fClassTicketCount > 0){
        newFClassTicket = fClassTicketCount - 1;
    }
    fClassTicketInput.value = newFClassTicket; 
    calculateTotal()
}


// Economy Ticket Option Handler Function
function handleETicket(isIncrease){
    const eClassTicketInput = document.getElementById('eClassTicket');
    const eClassTicketCount = parseInt(eClassTicketInput.value);
    let newEClassTicket = eClassTicketCount;
    if(isIncrease == true){
        newEClassTicket = eClassTicketCount + 1;
    }
    if(isIncrease == false && eClassTicketCount > 0){
        newEClassTicket = eClassTicketCount - 1;
    }
    eClassTicketInput.value = newEClassTicket; 
    calculateTotal()
}

// Total Ticket Price Function 

function calculateTotal(){
    const fClassTicketInput = document.getElementById('fClassTicket');
    const fClassTicketCount = parseInt(fClassTicketInput.value);
    const eClassTicketInput = document.getElementById('eClassTicket');
    const eClassTicketCount = parseInt(eClassTicketInput.value);

    const subTotalFare = fClassTicketCount * 150 + eClassTicketCount * 100;
    document.getElementById('subTotal').innerText = subTotalFare + '.00';

    const vatAmount = subTotalFare * 10 / 100;
    document.getElementById('vatAmount').innerText = vatAmount + '.00';

    const totalAmount = subTotalFare + vatAmount;
    document.getElementById('totalAmount').innerText = totalAmount + '.00';

       
}

// 