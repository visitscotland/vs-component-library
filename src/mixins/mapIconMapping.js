const mapIconMapping = {
    methods: {
        getIconDetails(name) {
            const icon = {
            };
            switch (name) {
            case 'cities':
                icon.name = 'fa-regular fa-city';
                break;
            case 'towns':
                icon.name = 'fa-regular fa-house-chimney-window';
                break;
            case 'islands':
                icon.name = 'fa-regular fa-ship';
                break;
            case 'regions':
                icon.name = 'fa-regular fa-map';
                break;
            case 'acco':
                icon.name = 'fa-regular fa-bed';
                break;
            case 'acti':
                icon.name = 'fa-regular fa-person-walking';
                break;
            case 'attr':
                icon.name = 'fa-regular fa-camera';
                break;
            case 'even':
                icon.name = 'fa-regular fa-ticket';
                break;
            case 'cate':
                icon.name = 'fa-regular fa-utensils';
                break;
            case 'reta':
                icon.name = 'fa-regular fa-bag-shopping';
                break;
            case 'featured':
                icon.name = 'fa-regular fa-star';
                break;
            case 'twnv':
                icon.name = '';
                break;
            case 'vics':
                icon.name = 'fa-kit fa-icentre-information';
                break;
            case 'outlander-castle':
                icon.name = 'fa-regular fa-chess-rook';
                break;
            case 'outlander-church-abbey':
                icon.name = 'fa-regular fa-church';
                break;
            case 'outlander-city-town-village':
                icon.name = 'fa-regular fa-city';
                break;
            case 'outlander-heritage':
                icon.name = 'fa-regular fa-landmark';
                break;
            case 'outlander-landscape-park':
                icon.name = 'fa-regular fa-mountain';
                break;
            case 'outlander-palace-house':
                icon.name = 'fa-regular fa-crown';
                break;
            case 'distilleries':
                icon.name = 'fa-kit fa-vs-distillery';
                break;
            case 'itinerary-stop':
                icon.name = '';
                break;
            default:
                break;
            }
            return icon;
        },
    },
};

export default mapIconMapping;
