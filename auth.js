if (location.protocol !== 'https:')console.error(`Replit authentication doesn't work with http:// normally. Please consider changing.`)

const repl_auth = function(settings) {
  settings = {
    id: settings.id,
    onAuth: settings.onAuth || function(){window.location.reload()},
    onStartAuth: settings.onStartAuth || function(){},
    width: settings.width || 350,
    height: settings.height || 500,
    host: settings.host || location.host
  }

  if(settings.id && document.getElementById(settings.id)){
    let btn = document.getElementById(settings.id);
    
    btn.addEventListener('click',()=>{repl_auth_click(settings)})
  }else{
    console.error('Provide a valid button ID')
  }
}

const repl_auth_complete = function(r,on,window) {
  if (r.data !== 'auth_complete') {
    return;
  }

  window.close();
  on();
}

const repl_auth_click = function(settings) {
  settings.onStartAuth();

  window.addEventListener('message', (m)=>{repl_auth_complete(m,settings.onAuth,repl_auth_window)});

  var left = (screen.width / 2) - ( settings.width / 2);
  var top = (screen.height / 2) - (settings.height / 2);

  var repl_auth_window = window.open(
    location.protocol+'//repl.it/auth_with_repl_site?domain='+settings.host,
    '_blank',
    'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+settings.width+', height='+settings.height+', top='+top+', left='+left)
}
