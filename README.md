# Adressbuch Test 📇

Ein Adressbuch-Projekt als Testumgebung für die Integration verschiedener moderner Web-Technologien.

## 🚀 Technologie-Stack

- [Astro.js](https://astro.build/) - Modernes Static Site Generator Framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Supabase](https://supabase.com/) - Backend-as-a-Service für Datenbank und Auth
- [Pagefind](https://pagefind.app/) - Statische Suchfunktionalität
- [GitHub Actions](https://github.com/features/actions) - CI/CD Pipeline

## 🛠️ Installation & Setup

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn
- Supabase Account (für Backend-Funktionalitäten)

### Lokale Entwicklung

1. Repository klonen
    git clone https://github.com/sehnot/adressbuch-test.git
    cd adressbuch-test
2. Abhängigkeiten installieren
    npm install
3. .env Datei erstellen
4. Füge deine Supabase-Konfiguration hinzu:
    SUPABASE_URL=deine-supabase-url
    SUPABASE_ANON_KEY=dein-supabase-anon-key
5. Entwicklungsserver starten
    npm run dev
6. Öffne <http://localhost:4321> in deinem Browser.

## 📋 Verfügbare Scripts

|Kommando           |Beschreibung                          |
|-------------------|--------------------------------------|
|`npm install`      |Installiert alle Abhängigkeiten       |
|`npm run dev`      |Startet den lokalen Entwicklungsserver|
|`npm run build`    |Erstellt die Production-Version       |
|`npm run preview`  |Vorschau der erstellten Seite         |
|`npm run astro ...`|Führt Astro CLI-Kommandos aus         |

## 🎯 Projektziele

Dieses Projekt dient als Testumgebung für:

- Frontend-Entwicklung mit Astro.js und TailwindCSS
- Backend-Integration mit Supabase
- Suchfunktionalität durch Pagefind
- Automatisierte Deployments via GitHub Actions
- Moderne JAMstack-Architektur

## 🔧 Funktionalitäten

- Komplette Seite basiert auf rein statischem HTML und CSS
- Suche mit Pagefind (JavaScript)
- Bearbeiten der Inhalte (hier Kontakte und Firmen) direkt in Supabase (dadurch gut mit KI möglich)
- Bearbeiten des Web-Designs mit Astro.js und TailwindCSS
- Automatische Deployments (bei Anpassungen des Codes, Schedule 1x wöchentlich sowie manuell mit GitHub Actions)

## 🚀 Deployment

Das Projekt nutzt GitHub Actions für automatische Deployments. Bei jedem Push zum `main`-Branch wird die Anwendung automatisch gebaut und deployed.

## 📚 Weiterführende Links

- [Astro Dokumentation](https://docs.astro.build)
- [TailwindCSS Dokumentation](https://tailwindcss.com/docs)
- [Supabase Dokumentation](https://supabase.com/docs)
- [Pagefind Dokumentation](https://pagefind.app/docs)

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

-----

Status: 🚧 In Entwicklung

Erstellt mit ❤️ und modernen Web-Technologien.