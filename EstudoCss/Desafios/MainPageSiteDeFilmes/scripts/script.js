document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.limited-text');
    elements.forEach(function(el) {
        var originalText = el.textContent.trim();
        var maxLength = 80;
        if (originalText.length > maxLength) {
            var truncatedText = originalText.substring(0, maxLength).trim() + '...';
            el.textContent = truncatedText;
        }
    });
});
