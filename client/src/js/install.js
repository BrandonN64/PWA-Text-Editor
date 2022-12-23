const installButtion = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    installButtion.classList.toggle('hidden',false)
});
installButtion.addEventListener('click', async () => {
    const prompt = window.deferredPrompt
    if (!prompt) {
        return;
    }
    prompt.prompt();
    window.deferredPrompt = null;
    installButtion.classList.toggle('hidden',true)
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt =null;
});
