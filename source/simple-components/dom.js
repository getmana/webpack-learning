export default (text = 'Hello hello 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
