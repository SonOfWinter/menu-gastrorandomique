export async function copyText(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    // fallback pour vieux navigateurs
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";  // éviter le scroll
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: erreur de copie', err);
    }
    document.body.removeChild(textarea);
  }
}
