
// Funktion zum Umwandeln von Umlauten etc.
function htmlEntities(text) {
  return text
    .replace(/ä/g, '&auml;')
    .replace(/ö/g, '&ouml;')
    .replace(/ü/g, '&uuml;')
    .replace(/Ä/g, '&Auml;')
    .replace(/Ö/g, '&Ouml;')
    .replace(/Ü/g, '&Uuml;')
    .replace(/ß/g, '&szlig;');
}

// Erlaubte Typen und zugehörige Pfade
const typZuPfad = {
  kontakt: 'kontakte',
  firma: 'firmen',
  projekt: 'projekte',
  produkt: 'produkte'
};

// Funktion zum Ersetzen aller Platzhalter
export function adjustContent(str) {
  // Ensure `str` is a string
  if (typeof str !== 'string') {
    console.warn('adjustContent received a non-string input:', str);
    return str; // Return the original value if it's not a string
  }

  // Perform the replacement
  return str.replace(/\{(kontakt|firma|projekt|produkt)\|([^|]+)\|\'([^\']+)\'\}/g, (match, typ, slug, name) => {
    const pfad = typZuPfad[typ];
    const encodedName = htmlEntities(name);
    console.log(`Ersetze ${match} mit <a href='./${pfad}/${slug}'>${encodedName}</a>`);
    return `<a href='./${pfad}/${slug}'>${encodedName}</a>`;
  });
}