import { createClient } from '@supabase/supabase-js';

// Ersetze diese Werte mit deinen eigenen Supabase-Anmeldedaten
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Funktion zum Abrufen aller Kontakte
export async function getAllKontakte() {
  const { data, error } = await supabase
    .from('kontakte')
    .select(`
      *,
      firmen:firma_id (
        id,
        name,
        branche,
        slug
      )
    `)
    .order('name');

  if (error) {
    console.error('Fehler beim Laden der Kontakte:', error);
    return [];
  }

  return data;
}

// Funktion zum Abrufen aller Firmen
export async function getAllFirmen() {
  const { data, error } = await supabase
    .from('firmen')
    .select('*')
    .order('name');

  if (error) {
    console.error('Fehler beim Laden der Firmen:', error);
    return [];
  }

  return data;
}

// Funktion zum Abrufen aller Kontakte einer bestimmten Firma
export async function getKontakteByFirma(firmaSlug) {
  // Schritt 1: Firma anhand des Slugs abrufen
  const { data: firmaData, error: firmaError } = await supabase
    .from('firmen')
    .select('id')
    .eq('slug', firmaSlug)
    .single();

  if (firmaError) {
    console.error(`Fehler beim Laden der Firma mit Slug ${firmaSlug}:`, firmaError);
    return [];
  }

  const firmaId = firmaData.id;

  // Schritt 2: Kontakte zur Firma-ID abrufen
  const { data: kontakteData, error: kontakteError } = await supabase
    .from('kontakte')
    .select('*')
    .eq('firma_id', firmaId)
    .order('name');

  if (kontakteError) {
    console.error(`Fehler beim Laden der Kontakte für Firma ${firmaSlug}:`, kontakteError);
    return [];
  }

  return kontakteData;
}


// Funktion zum Abrufen eines einzelnen Kontakts anhand seiner ID
export async function getKontaktBySlug(slug) {
  const { data, error } = await supabase
    .from('kontakte')
    .select(`
      *,
      firmen:firma_id (
        id,
        name,
        branche,
        slug
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Fehler beim Laden des Kontakts ${slug}:`, error);
    return null;
  }

  return data;
}

// Funktion zum Abrufen einer einzelnen Firma anhand ihrer ID
export async function getFirmaBySlug(slug) {
  const { data, error } = await supabase
    .from('firmen')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Fehler beim Laden der Firma ${slug}:`, error);
    return null;
  }

  return data;
}