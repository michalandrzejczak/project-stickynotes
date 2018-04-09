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
        
        stickynoteElement.setAttribute("draggable", "true");
        
        stickynoteElement.addEventListener('dragstart', drag_start, false); 
        
    }
    
    createStickynote();
    
    document.body.addEventListener('dragover', drag_over, false); 
    document.body.addEventListener('drop', drop, false); 
    
    function drag_start(event) {
        
        var style = window.getComputedStyle(event.target, null);
        
        event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
        
    } 
    
    function drag_over(event) { 
        
        event.preventDefault(); 
        return false; 
        
    } 
    
    function drop(event) { 
        
        var offset = event.dataTransfer.getData("text/plain").split(',');
        var draggableElement = document.querySelector('.stickynote:active');
        draggableElement.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
        draggableElement.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
        event.preventDefault();
        return false;
        
        } 

    
})();