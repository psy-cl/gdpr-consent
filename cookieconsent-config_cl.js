import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "fr",
        autoDetect: "browser",
        translations: {
            fr: {
                consentModal: {
                    title: "Consentement de cookies!",
                    description: "Avec votre accord nous aimerions utiliser des cookies nécessaires au bon fonctionnement du site.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href=\"#link\">Politique de confidentialité</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    closeIconLabel: "Fermer la popup",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: ""
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour toute question relative à ma politique en matière de cookies et à vos choix, contacter <a class=\"cc__link\" href=\"#claudelefort.com\">contactez moi</a>."
                        }
                    ]
                }
            }
        }
    }
});
