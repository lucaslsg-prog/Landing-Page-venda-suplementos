function getValues(){
    
    const nome = document.querySelector('#user-name')
    const email = document.querySelector('#user-email')
        
    const newUserName = nome.value
    const newUserEmail = email.value
    localStorage.setItem('key_name',newUserName)
    localStorage.setItem('key_email',newUserEmail)

    var user = localStorage.getItem('key_name');
    alert('Obrigado por se cadastrar ' + user)
    
}

