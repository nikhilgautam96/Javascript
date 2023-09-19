// Question - Manipulating DOM

const updateElementText = (elementId) => (content) => {
    document.querySelector('#' + elementId).textContent = content;
};

const updateHeader = updateElementText('heading');
updateHeader('Hello Nikhil');
