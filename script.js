(function() {
    
    var addStickynoteBtn = document.querySelector('.addNote');
    
    addStickynoteBtn.addEventListener('click', createStickynote);
    
    function createStickynote() {
        
        var stickynoteElement = document.createElement('div'),
            barElement = document.createElement('div'),
            textareaElement = document.createElement('textarea');
    
        var transformCSSValue = "translateX(" + Math.random() * (window.innerWidth - 200) + "px) translateY(" + Math.random() * (window.innerHeight - 100) + "px)";
    
        stickynoteElement.style.transform = transformCSSValue; 
    
        stickynoteElement.classList.add('stickynote');
        barElement.classList.add('bar');
    
        stickynoteElement.appendChild(barElement);
        stickynoteElement.appendChild(textareaElement); 
    
        document.body.appendChild(stickynoteElement);
        
    }
    
    
    
})();