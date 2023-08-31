

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('facebook.com')) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: verificarInicioSesion,
      },
      function (results) {
        
          mostrarNotificacion();
        
      }
    );
  }
});

function verificarInicioSesion() {
  return !!document.querySelector('body[data-testid="pagelet_home_stream"]');
}

function mostrarNotificacion() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.png',
    title: 'Inicio de Sesión de Facebook',
    message: 'Bienvenido a Facebook',
  });
}

  