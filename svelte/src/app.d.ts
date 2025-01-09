// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  namespace Quran {
    interface Ayah {
      id: number;
      number?: number;
      text: string;
      translations?: Translations;
      transliteration: string;
      chapter?: Chapter | number;
    }

    interface Chapter {
      id: number;
      name: string;
      transliteration: string;
      translations?: Translations;
      type: string;
      total_verses?: number;
      verses?: Ayah[];
      link?: string;
    }

    interface Translations {
      en: string;
      es: string;
      fr: string;
      id: string;
      ru: string;
      sv: string;
      tr: string;
      ur: string;
      zh: string;
    }
  }
}

export {};
