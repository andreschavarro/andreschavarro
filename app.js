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
            document.getElementById('nombre ').value = '';
            document.getElementById('correo ').value = '';
            document.getElementById('telefono ').value = '';
            document.getElementById('jornada ').value = '';
            document.getElementById('estadoactual ').value = '';
            document.getElementById('estadocivil ').value = '';
            document.getElementById('sexo ').value = '';
            document.getElementById('Genero ').value = '';
            document.getElementById('tranporte ').value = '';
            document.getElementById('barrio ').value = '';
            document.getElementById('tiempo_del_trayecto').value = '';
            document.getElementById('hora_de_dormir ').value = '';
            document.getElementById('hora_de_despertarse ').value = '';
            document.getElementById('sueño ').value = '';
            document.getElementById('estudio_adicional ').value = '';
            document.getElementById('ingles ').value = '';
            document.getElementById('asignatura ').value = '';
            document.getElementById('especializacion ').value = '';
            document.getElementById('emprendimiento ').value = '';
            document.getElementById('catedra ').value = '';
            document.getElementById('cursos ').value = '';
            document.getElementById('relaciones').value = '';
            document.getElementById('amigos ').value = '';
            document.getElementById('profesores ').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});