import {setTimeout} from "timers";

export const TypingState = Object.freeze({ Typing: 1, Erase: 2, None: 3 });

class TypingEffect {

    text;
    typingState;
    textArray;
    typingSpeed;
    erasingSpeed;
    newTextDelay;
    textArrayIndex;
    charIndex;

    constructor(text, typingState, textArray, typingSpeed, erasingSpeed, newTextDelay, textArrayIndex, charIndex) {
        this.text = text
        this.typingState = typingState;
        this.textArray = textArray;
        this.typingSpeed = typingSpeed;
        this.erasingSpeed = erasingSpeed;
        this.newTextDelay = newTextDelay;
        this.textArrayIndex = textArrayIndex;
        this.charIndex = charIndex;
    }

    addToTyping(value, typingEffect) {
        if (typingEffect.textArray.includes(value)) {
            return
        }
        if (!typingEffect.textArray.includes(value) && typingEffect.typingState === TypingState.None) {
            typingEffect.textArray.push(value)
        }

        if (typingEffect.typingState === TypingState.None) {
            setTimeout(() => this.eraseText(typingEffect), typingEffect.newTextDelay);
        }
    }

    startTyping(typeEffect) {
        setTimeout(() => this.typeText(typeEffect), this.newTextDelay + 200);
    }

    typeText(typeEffect) {
        if(typeEffect.charIndex < typeEffect.textArray[typeEffect.textArrayIndex].length) {
            if(typeEffect.typingState === TypingState.None)
                typeEffect.typingState = TypingState.Typing

            if(typeEffect.typingState === TypingState.Typing) {
                typeEffect.text += typeEffect.textArray[typeEffect.textArrayIndex].charAt(typeEffect.charIndex);
                typeEffect.charIndex += 1;

                setTimeout(() => this.typeText(typeEffect), typeEffect.typingSpeed);
            }
        }
        else {
            typeEffect.typingState = TypingState.None;
        }
    }

    eraseText(typeEffect) {
        if(typeEffect.charIndex > 0) {
            if(typeEffect.typingState === TypingState.None)
                typeEffect.typingState = TypingState.Erase

            typeEffect.text = typeEffect.textArray[typeEffect.textArrayIndex].substring(0, typeEffect.charIndex - 1);
            typeEffect.charIndex -= 1;

            setTimeout(() => this.eraseText(typeEffect), typeEffect.erasingSpeed);
        }
        else {
            typeEffect.typingState = TypingState.None
            typeEffect.textArray.splice(typeEffect.textArray[0], 1);

            if(typeEffect.textArrayIndex >= typeEffect.textArray.length)
                typeEffect.textArrayIndex = 0;

            if(typeEffect.textArray.length !== 0) {
                setTimeout(() => this.typeText(typeEffect), typeEffect.newTextDelay + 200);
            }
        }
    }

    isTypeStateTyping(typeEffect) {
        return typeEffect.typingState === TypingState.Typing;
    }

}

export default TypingEffect;
