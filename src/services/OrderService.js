export async function sendOrder(payload, payDetail) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + mm + dd;
  localStorage.setItem('payload', JSON.stringify(payload));
  let dt = {
    commerceOrder: (Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100) + today,
    subject: "Pago Minimayorista",
    currency: "CLP",
    amount: payDetail.amount,
    email: payDetail.email,
    paymentMethod: 9,
    urlConfirmation: "https://payments-nple.onrender.com/apiFlow/payment_confirm",
    urlReturn: "https://payments-nple.onrender.com/apiFlow/result"
  }
  const response = await fetch(`https://payments-nple.onrender.com/apiFlow/create_order`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dt)
  });
  const data = await response.json();
  return data;
}

export async function confirmOrder(payl) {
  const response = await fetch(`https://minimayorista-back.onrender.com/api/pedidos`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payl // body data type must match "Content-Type" header
  });
  const data = await response.json();
  return data;
}