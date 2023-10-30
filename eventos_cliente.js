
document.getElementById("enviarForm").addEventListener('click', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby4BsgMgHTXL6tVcuO7Ozt-qgDq3-fKpVwmDnI6wxZ2KObK6gaknL2-XNLlBtUU0BbdZA/exec'
    const form = document.forms['formu_cliente']
    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})
