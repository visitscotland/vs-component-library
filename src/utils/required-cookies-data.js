export const cookieCategories = Object.freeze({
    analytical: 0,
    marketing: 1,
});

const cookieValues = {
    youtube: [
        cookieCategories.marketing,
    ],
    embed: [
        cookieCategories.analytical,
        cookieCategories.marketing,
    ],
};

export default cookieValues;
