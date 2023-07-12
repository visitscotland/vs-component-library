const noJsClass = 'no-js';

const jsIsDisabled = () => {
    const elements = document.getElementsByClassName(noJsClass);

    return elements.length > 0;
};

export default jsIsDisabled;
