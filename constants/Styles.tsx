import Colors from './Colors';

const mainFont = 'Space Grotesk'

const button = {
    width: '90%',
    height: '6vh',
    alignItems: "center",
    justifyContent: "center",
    margin: "0.4rem"
}

const buttonText = {
    fontFamily: mainFont, fontSize: 26
}

export default {
    lightButton: {
        ...button,
        backgroundColor: 'white',
        borderColor: Colors.palette.secondary,
        borderWidth: 2.7,
        text: {
            ...buttonText,
            color: Colors.palette.secondary
        }
    },
    darkButton: {
        ...button,
        backgroundColor: Colors.palette.secondary,
        borderWidth: 0,
        text: {
            ...buttonText,
            color: Colors.palette.white
        }
    },
    Title:{
        fontFamily: mainFont,
        fontSize: "2rem",
        fontWeight: "Bold"
    },
    Subtitle:{
        fontFamily: mainFont,
        fontSize: "1rem",
        fontWeight: "Normal"
    }
}
