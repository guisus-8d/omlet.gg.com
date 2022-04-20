función comprobarFormulario(){
  var i, j;
  var tieneFormError;
  for(i = 0; i < _check.length; i++){
    var hasError = falso;
    for(j = 0; j < _check[i].errs.length; j++){
      if(_err[_check[i].errs[j].code]){
        _check[i].msgEle.innerHTML = _check[i].errs[j].msg;
        tieneError = verdadero;
      }
    }
    if(_check[i].defaultMsg){
      _check[i].desEle.className = 'des';
      _check[i].msgEle.className = hasError ? 'error': 'mensaje';
      si (! tiene error) {
        _check[i].msgEle.innerHTML = _check[i].defaultMsg;
      }
    }demás{
      _check[i].desEle.className = hasError ? 'des': 'ocultar';
    }
    si (tieneError) {
      tieneFormError = verdadero;
    }
  }

  return tiene un error de formulario;
}

función validarOmletId(omid){
  var idPt = /^[A-Z0-9][A-Z0-9._]{5,19}$/i;
  var idPt2 = /^[0-9]{6,20}$/i;

  si (! omid) {
    _err['ioi'] = verdadero;
    falso retorno;
  }demás{
    if(!idPt.test(omid) || idPt2.test(omid)){
      _err['ioi'] = verdadero;
      falso retorno;
    }
  }
  devolver verdadero;
}

función validar correo electrónico (correo electrónico) {
  var emailPt = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[AZ]{2,4}$/i;

  si (! correo electrónico) {
    _err['ie'] = verdadero;
    falso retorno;
  }demás{
    if(!emailPt.prueba(correo electrónico)){
      _err['ie'] = verdadero;
      falso retorno;
    }
  }

  devolver verdadero;
}

función validarOmletIdEmail(omid){
  si (! omid) {
    _err['ioi'] = verdadero;
    falso retorno;
  }demás{
    if(omid.indexOf('@') === -1){
      volver validarOmletId(omid);
    }demás{
      volver validarCorreo(omid);
    }
  }
}

función validar contraseña (contraseña) {
  var passPt = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,20}$/i;

  si(!pasar){
    _err['ip'] = verdadero;
    falso retorno;
  }demás{
    if(!passPt.test(aprobado)){
      _err['ip'] = verdadero;
      falso retorno;
    }
  }

  devolver verdadero;
}

función validarContraseña2(contraseña, ccontraseña){
  var válido = verdadero;
  válido = validar contraseña (contraseña) && válido;

  if(aprobar === cpass){
    válido = verdadero && válido;
  } demás {
    _err['pnm'] = verdadero;
    válido = falso && válido;
  }
  devolución válida;
}

función getLoginErrorCount() {
  const cuenta = sessionStorage.getItem('gLoginErrorCount');
  devuelve parseInt(cuenta) || 0;
}

función agregarContadorErrorInicio() {
  let count = getLoginErrorCount() + 1;
  sessionStorage.setItem('gLoginErrorCount', cuenta);
}

función resetLoginErrorCount() {
  sessionStorage.setItem('gLoginErrorCount', 0);
}

función validarInicio de sesión(){
  var f = documento.formularios["iniciar sesión"];
  f['omid'].value = f['omid'].value.trim();
  var omid = f['omid'].valor;
  var paso = f['paso'].valor;
  _error = {};

  var válido = verdadero;
  válido = validarOmletIdEmail(omid) && válido;

  si (! válido) {
    chequeErrorCountAlert();
    falso retorno;
  }

  devolución válida;
}

función comprobarErrorCountAlert() {
  const hasLoginError = checkForm();
  si (hasLoginError) {
    addLoginErrorCount();
  }

  const errorCount = getLoginErrorCount();
  si (contador de errores > 2) {
    const modal = document.getElementById('reset-confirm');
    si (modal) {
      modal.classList.add('mostrar');
      resetLoginErrorCount();
    }
  }
}

función validarRegistro(){
  var f = documento.formularios["iniciar sesión"];
  _error = {};
  var válido = verdadero;

  if(f['omid']){
    var omid = f['omid'].valor;
    válido = validarOmletId(omid) && válido;
  }

  if(f['aprobar']){
    var paso = f['paso'].valor;
    var cpass = f['cpass'].value;
    var correo electrónico = f['correo electrónico'].valor;
    válido = validarContraseña2(contraseña, ccontraseña) && válido;
    si (correo electrónico){
      correo electrónico = correo electrónico.trim();
      f['correo'].valor = correo;
      válido = validar correo electrónico (correo electrónico) && válido;
    }
  }

  comprobarFormulario();
  si (válido){
    document.getElementById('botón de registro').className += ' ocultar';
    document.getElementById('signupmsg').className += document.getElementById('signupmsg').className.replace('hide', '');
  }
  devolución válida;
}

función validarOlvidé mi contraseña(){
  var f = documento.formularios["iniciar sesión"];
  f['omid'].value = f['omid'].value.trim();
  var omid = f['omid'].valor;
  _error = {};

  const válido = validarCorreo(omid);

  comprobarFormulario();
  si (válido){
    document.getElementById('botón de envío').className += ' ocultar';
    document.getElementById('enviandomsg').className += document.getElementById('enviandomsg').className.replace('hide', '');
  }
  devolución válida;
}

función validarResetPassword(){
  var f = documento.formularios["iniciar sesión"];
  var paso = f['paso'].valor;
  var cpass = f['cpass'].value;
  _error = {};

  var válido = verdadero;
  válido = validarContraseña2(contraseña, ccontraseña) && válido;

  comprobarFormulario();
  devolución válida;
}

función validarSetOmletId(){
  var f = documento.formularios["iniciar sesión"];
  f['omid'].value = f['omid'].value.trim();
  var omid = f['omid'].valor;
  _error = {};

  var válido = verdadero;
  válido = validarOmletId(omid) && válido;

  comprobarFormulario();
  devolución válida;
}

función alternarVisibilidad de contraseña () {
  entrada const = documento.getElementById('contraseña');
  const btn = document.getElementById('pw-visible-btn');
  if (entrada.tipo === 'contraseña') {
    input.type= 'texto';
    btn.classList.add("hide-pw");
  } demás {
    input.type = 'contraseña';
    btn.classList.remove("hide-pw");
  }
}

// nota: el cliente de Android llama a closeErrorCountAlert desde la aplicación, no cambie el nombre de la función
función cerrarErrorCountAlert() {
  const modal = document.getElementById('reset-confirm');
  si (modal) {
    modal.classList.remove('mostrar');
    resetLoginErrorCount();
  }
}