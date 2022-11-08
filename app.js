document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));

    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            document.getElementById('txt_usuario').value = '';
            document.getElementById('txt_nombre').value = '';
            document.getElementById('int_edad').value = '';
            document.getElementById('txt_vivienda').value = '';
            document.getElementById('txt_condicion').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});