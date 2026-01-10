[German version](#ivelchat-german)

# ivelchat

## A simple and local chat-application made with ReactJS

This is a website where you can chat with pre-defined bots. Main features are a quote- and a joke-bot. You can add / remove bots via the menu on the left screen side. In the settings, you can change the whole color scheme of the website. Choose a basecolor and the website will generate a palette and apply it to CSS. There are also other settings. Every settings and chat-history get saved in the local-Storage of your browser.

## Pages

In-depth explenation of the sites

### Login / Register

Basic Login / Register page. There will always be a Login error, since the website is hostet locally. You can only visit the Homepage with the 'guest' account.

### Homepage

Main page with the chat and the menu. The user types a prompt and the chat-bot filters the message for keywords. Keywords, responses, profile pictures and spinners are in `chatBots.json` defined. Should the prompt include an action (e.g. roll a dice) then the `actions.js` is used. On the left screen side is a menu to add / remove chat bots. You can only add bots, who are defined in the JSON-File. The Spinner for the chat-bot-response are defined in `spinners.json` ([spinners](https://raw.githubusercontent.com/sindresorhus/cli-spinners/master/spinners.json)).

### Settings

Basic Settings page. The User can change here the profile picture, the color scheme and some time and font settings. The settings get applied through global variabbles defined in `App.jsx`.

## Installation

```bash
git clone https://github.com/iveltier/ivelchat
cd ivelchat
npm install
npm run dev
```

Open `http://localhost:5137`

## Technisches

To use the bot fully a **API-Key** from [API-Ninjas](https://api-ninjas.com/) is used. Create an `.env` and add your `VITE_API_NINJAS_KEY=apikey`.

# ivelchat german

## Eine simple und lokale Chat-Anwendung mit React

Dies ist eine Website, auf der du mit vordefinierten Bots chatten kannst. Hauptmerkmale sind ein Zitate- und ein Witz-Bot. Über das Menü auf der linken Seite kannst du Bots hinzufügen/entfernen. In den Einstellungen kannst du das gesamte Farbschema der Website ändern. Wähle eine Basisfarbe und die Website generiert eine Palette und wendet sie auf CSS an. Alle Einstellungen sowie der Chat-Verlauf werden im localStorage deines Browsers gespeichert.

## Seiten im Detail

### Login / Register

Einfache Login-/Register-Seite. Es wird immer ein Login-Fehler auftreten, da die Website lokal gehostet wird. Die Homepage kann nur über den „Gast“-Account betreten werden.

### Homepage

Hauptseite mit Chat und Menü. Der Nutzer gibt eine Eingabe und der Chat-Bot filtert die Nachricht nach Keywords. Keywords, Antworten, Profilbilder und Spinner sind in `chatBots.json` definiert. Enthält die Eingabe eine Aktion (z. B. Würfeln), wird `actions.js` verwendet. Auf der linken Seite befindet sich ein Menü zum Hinzufügen/Entfernen von Chat-Bots. Es können nur Bots hinzugefügt werden, die in der JSON-Datei definiert sind. Die Spinner für die Bot-Antworten sind in `spinners.json` definiert ([Spinners](https://raw.githubusercontent.com/sindresorhus/cli-spinners/master/spinners.json)).

### Settings

Einfache Einstellungs-Seite. Hier kann der Nutzer sein Profilbild ändern, das Farbschema anpassen sowie einige Zeit- und Schrift-Einstellungen vornehmen. Die Einstellungen werden über globale Variablen in `App.jsx` angewendet.

## Lokale Installation

```bash
git clone https://github.com/iveltier/ivelchat.git
cd ivelchat
npm install
npm run dev
```

Öffne `http://localhost:5137`

## Technisches

Um die Bots komplett nutzen zu können wird eine **API-Key** von [API-Ninjas](https://api-ninjas.com/) verwendet. Dazu muss im `.env` ein `VITE_API_NINJAS_KEY=apikey` angelegt werden.
