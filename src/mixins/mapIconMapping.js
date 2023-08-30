const mapIconMapping = {
    methods: {
        getIconDetails(name) {
            const icon = {
            };
            switch (name) {
            case 'cities':
                icon.name = 'city';
                break;
            case 'towns':
                icon.name = 'home';
                break;
            case 'islands':
                icon.name = 'boat';
                break;
            case 'regions':
                icon.name = 'map';
                break;
            case 'acco':
                icon.name = 'bed';
                break;
            case 'acti':
                icon.name = 'walk';
                break;
            case 'attr':
                icon.name = 'camera';
                break;
            case 'even':
                icon.name = 'events';
                break;
            case 'cate':
                icon.name = 'food';
                break;
            case 'reta':
                icon.name = 'shopping-bag';
                break;
            case 'featured':
                icon.name = 'star';
                break;
            case 'twnv':
                icon.name = '';
                break;
            case 'serv':
                icon.name = 'icentre-information';
                break;
            case 'outlander-castle':
                icon.name = 'castle';
                break;
            case 'outlander-church-abbey':
                icon.name = 'church';
                break;
            case 'outlander-city-town-village':
                icon.name = 'city';
                break;
            case 'outlander-heritage':
                icon.name = 'history';
                break;
            case 'outlander-landscape-park':
                icon.name = 'landscape';
                break;
            case 'outlander-palace-house':
                icon.name = 'palace';
                break;
            case 'distilleries':
                icon.name = 'distillery';
                break;
            default:
                break;
            }
            return icon;
        },
    },
};

export default mapIconMapping;
