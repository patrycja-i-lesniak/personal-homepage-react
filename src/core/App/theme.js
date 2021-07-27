const colorNames = {
    cardinal: "#C01638",
    crimson: "#DC143C",
    crimsonTransparent: "rgba(220, 20, 60, 0.03)",
    yukonGold: "#F4CA10",
    yukonGoldTransparent: "rgba(244,202,16, 0.3)",
    white: "#FFFFFF",
    alabaster: "#FAFAFA",
    trout: "#4C4E61",
    quillGray: "#D9D9D8",
    mercury: "#e5e5e5",
    slateGray: "#6E7E91",
    doveGray: "#6D6D6D",
    tundora: "#414141",
    mineShaft: "#252525",
    mineShaftLighter: "#313131",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
    },
    borderRadiusSmall: "10px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.cardinal,
        textPrimary: colorNames.trout,
        headline: colorNames.trout,
        site: {
            background: colorNames.alabaster,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.crimsonTransparent,
            shadow: colorNames.doveGray,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.white,
            borderHover: colorNames.crimson,
            header: colorNames.trout,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
    boxShadow: "0px -2px 50px rgb(241, 233, 235), 0px 16px 58px rgba(9, 10, 51, 0.03)",
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.yukonGold,
        textPrimary: colorNames.white,
        headline: colorNames.yukonGold,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.quillGray,
        },
        buttonLink: {
            text: colorNames.mineShaft,
            border: colorNames.yukonGoldTransparent,
            shadow: colorNames.trout,
        },
        boxBackground: colorNames.mineShaftLighter,
            text: colorNames.yukonGold,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.mineShaftLighter,
            borderHover: colorNames.yukonGold,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    },
    boxShadow: "0px -2px 50px rgb(28, 28, 28 ,0.01), 0px 16px 58px rgba(9, 10, 51, 0.03)",
};

