document.addEventListener('DOMContentLoaded', function() {
    // Create a <style> element
    var style = document.createElement('style');
    style.type = 'text/css';
    
    // Set the CSS rules to hide both header and footer
    style.textContent = `
        header.wp-block-template-part { display: none; }
        footer.wp-block-template-part { display: none; }
    `;
    
    // Append the <style> element to the <head>
    document.head.appendChild(style);
});
