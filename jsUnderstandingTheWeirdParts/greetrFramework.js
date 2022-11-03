"use strict";
(function (attachFrameworkTo, framework) {
    if (attachFrameworkTo) {
        framework(attachFrameworkTo);
    }
})(window, (global) => {
    const G$ = (firstName, lastName, language) => {
        return new Greetr(firstName, lastName, language);
    };

    class Greetr {
        languageToGreetDict = {
            en: { informal: "Hi", formal: "Hello" },
            es: { informal: "Oy", formal: "Hola" },
        };

        constructor(firstName, lastName, language = "en") {
            this.firstName = firstName;
            this.lastName = lastName;
            this.language = language;
        }

        getFormalGreeting(htmlEl) {
            const greet = `${
                this.languageToGreetDict[this.language]["formal"]
            }, ${this.firstName} ${this.lastName}`;
            if (htmlEl?.jquery) htmlEl.text(greet);
            return greet;
        }

        getInformalGreeting(htmlEl) {
            const greet = `${
                this.languageToGreetDict[this.language]["informal"]
            }, ${this.firstName}`;
            if (htmlEl?.jquery) htmlEl.text(greet);
            return greet;
        }
    }

    global.G$ = G$;
});
