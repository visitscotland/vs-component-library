import { isAppleIOS } from "@/utils/is-apple-ios";

function createCustomControl({
    elementClass = 'vs-google-map__control-button',
    elementId = 'vs-google-map__control-button',
    label = '',
    icon = '',
    } = {
    }
) {
    const controlButton = document.createElement('button');

    controlButton.classList.add('vs-google-map__custom-control');
    controlButton.classList.add('btn');
    controlButton.classList.add('btn-sm');
    controlButton.classList.add('btn-secondary');
    controlButton.classList.add('vs-button');
    controlButton.classList.add('justify-content-center');
    controlButton.classList.add('vs-button--rounded');
    controlButton.classList.add('vs-button--icon-only');

    controlButton.id = elementId;

    if (icon) {
        const controlButtonIcon = document.createElement('i');
        controlButtonIcon.classList.add('fa-regular');
        controlButtonIcon.classList.add(icon);
        controlButton.append(controlButtonIcon);
    } 
    
    if (label) {
        const controlButtonLabel = document.createElement('span');
        controlButtonLabel.classList.add('vs-button__text')
        controlButtonLabel.textContent = 'label';
    }

    controlButton.type = 'button';

    return controlButton;
}

async function createCustomControlElement(map: google.maps.Map) {
    const customControlsDiv = document.createElement('div');
    customControlsDiv.classList.add('vs-google-map__custom-control-container');

    const customZoomInControl = createCustomControl({
        label: 'Zoom In',
        icon: 'fa-plus',
        elementId: 'vs-google-map__zoom-in-control',
    });
    
    customZoomInControl.addEventListener('click', () => {
        map.setZoom((map.getZoom() || 0) + 1);
    })

    const customZoomOutControl = createCustomControl({
        label: 'Zoom Out',
        icon: 'fa-minus',
        elementId: 'vs-google-map__zoom-out-control',
    });

    customZoomOutControl.addEventListener('click', () => {
        map.setZoom((map.getZoom() || 0) - 1);
    })

    customControlsDiv.append(customZoomInControl, customZoomOutControl);

    // Check to see if on iOS, as fullscreen is not available on iOS.
    if(!isAppleIOS()) {
        const customFullscreenControl = createCustomControl({
            label: 'Fullscreen',
            icon: 'fa-arrows-maximize',
            elementId: 'vs-google-map__fullscreen-control',
        });

        customFullscreenControl.addEventListener('click', () => {
            if (!document.fullscreenElement) {
            // Request fullscreen on the container element, NOT document or map div
            document.getElementById('vs-google-map')?.requestFullscreen()
                .catch(err => console.error(`Error enabling fullscreen: ${err.message}`));
            } else {
                document.exitFullscreen();
            };
        });

        customControlsDiv.append(customFullscreenControl);
    };

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(customControlsDiv);
}

export {
    createCustomControlElement as createCustomControls,
};
