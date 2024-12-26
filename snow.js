// Check if it's December
function isDecember() {
    const currentMonth = new Date().getMonth(); // 0-11, where 11 is December
    return currentMonth === 11;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 5 + 5 + 'px';
    
    document.querySelector('.snow-container').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

// Only start snow if it's December
if (isDecember()) {
    // Create snow container
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.prepend(snowContainer);
    
    // Start creating snowflakes
    setInterval(createSnowflake, 100);
} 