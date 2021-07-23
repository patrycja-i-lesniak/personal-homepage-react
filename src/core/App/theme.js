const colorNames = {
    scienceBlue: "#0366D6",
    blumine: "#1F5189",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    anakiwa: "#8CC2FF",
    tropicalBlue: "#CDE0F7",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    white: "#FFFFFF",
    alabaster: "#FAFAFA",
    trout: "#4C4E61",
    porcelain: "#F2F3F4",
    mercury: "#e5e5e5",
    slateGray: "#6E7E91",
    doveGray: "#6D6D6D",
    tundora: "#414141",
    mineShaft: "#252525",
    mineShaftLighter: "#313131",
};

const common = {
    breakpoints: {
        mobileMax: 769,
        tabletVerticalMax: 991,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "10px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.trout,
        site: {
            background: colorNames.alabaster,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },

};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    },

};

