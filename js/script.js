function updateCurrentDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    document.getElementById('current-date').textContent = dateStr;
    document.title = "Calculadora de Lucro - " + dateStr;
}

function calculateAll() {
    const c3 = parseFloat(document.getElementById('c3').value) || 0;
    const c4 = parseFloat(document.getElementById('c4').value) || 0;
    const c5 = parseFloat(document.getElementById('c5').value) || 0;
    const c6 = parseFloat(document.getElementById('c6').value) || 0;
    const c7 = parseFloat(document.getElementById('c7').value) || 0;
    const c8 = parseFloat(document.getElementById('c8').value) || 0;
    
    const c11 = c3 / c4 * c5;
    const c12 = c6 + c8 - c11;
    
    document.getElementById('c11').textContent = c11.toFixed(2);
    document.getElementById('c12').textContent = c12.toFixed(2);
    document.getElementById('c15').textContent = (c3 / c4).toFixed(2);
    document.getElementById('c16').textContent = (c5 ? c12 / c5 : 0).toFixed(2);
    document.getElementById('c17').textContent = (c7 ? c12 / c7 : 0).toFixed(2);
    document.getElementById('c18').textContent = (c12 * 22).toFixed(2);
    document.getElementById('c19').textContent = (c12 * 30).toFixed(2);
}

function exportToJPG() {
    alert('Aguarde enquanto geramos a imagem...');
    
    html2canvas(document.getElementById('form-to-capture'), {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#FFFFFF'
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'relatorio-lucro-' + new Date().toLocaleDateString('pt-BR') + '.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.9);
        link.click();
    });
}

window.onload = function() {
    updateCurrentDate();
    calculateAll();
};