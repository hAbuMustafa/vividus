<script lang="ts">
  import { onMount } from 'svelte';

  // bug: add number validation for Ayah (to be in its Surah's range) and Surah (to be in 1-114)
  // bug: if requesting the same Surah in a range, don't fetch again
  // todo: add slot display to allow partial Ayah display

  const surahs = [
    {
      name: 'الفاتحة',
      name_transliterated: 'Al-Fatihah',
      count: 7,
    },
    {
      name: 'البقرة',
      name_transliterated: 'Al-Baqarah',
      count: 286,
    },
    {
      name: 'آل عمران',
      name_transliterated: "Ali 'Imran",
      count: 200,
    },
    {
      name: 'النساء',
      name_transliterated: 'An-Nisa',
      count: 176,
    },
    {
      name: 'المائدة',
      name_transliterated: "Al-Ma'idah",
      count: 120,
    },
    {
      name: 'الأنعام',
      name_transliterated: "Al-An'am",
      count: 165,
    },
    {
      name: 'الأعراف',
      name_transliterated: "Al-A'raf",
      count: 206,
    },
    {
      name: 'الأنفال',
      name_transliterated: 'Al-Anfal',
      count: 75,
    },
    {
      name: 'التوبة',
      name_transliterated: 'At-Tawbah',
      count: 129,
    },
    {
      name: 'يونس',
      name_transliterated: 'Yunus',
      count: 109,
    },
    {
      name: 'هود',
      name_transliterated: 'Hud',
      count: 123,
    },
    {
      name: 'يوسف',
      name_transliterated: 'Yusuf',
      count: 111,
    },
    {
      name: 'الرعد',
      name_transliterated: "Ar-Ra'd",
      count: 43,
    },
    {
      name: 'ابراهيم',
      name_transliterated: 'Ibrahim',
      count: 52,
    },
    {
      name: 'الحجر',
      name_transliterated: 'Al-Hijr',
      count: 99,
    },
    {
      name: 'النحل',
      name_transliterated: 'An-Nahl',
      count: 128,
    },
    {
      name: 'الإسراء',
      name_transliterated: 'Al-Isra',
      count: 111,
    },
    {
      name: 'الكهف',
      name_transliterated: 'Al-Kahf',
      count: 110,
    },
    {
      name: 'مريم',
      name_transliterated: 'Maryam',
      count: 98,
    },
    {
      name: 'طه',
      name_transliterated: 'Taha',
      count: 135,
    },
    {
      name: 'الأنبياء',
      name_transliterated: 'Al-Anbya',
      count: 112,
    },
    {
      name: 'الحج',
      name_transliterated: 'Al-Hajj',
      count: 78,
    },
    {
      name: 'المؤمنون',
      name_transliterated: "Al-Mu'minun",
      count: 118,
    },
    {
      name: 'النور',
      name_transliterated: 'An-Nur',
      count: 64,
    },
    {
      name: 'الفرقان',
      name_transliterated: 'Al-Furqan',
      count: 77,
    },
    {
      name: 'الشعراء',
      name_transliterated: "Ash-Shu'ara",
      count: 227,
    },
    {
      name: 'النمل',
      name_transliterated: 'An-Naml',
      count: 93,
    },
    {
      name: 'القصص',
      name_transliterated: 'Al-Qasas',
      count: 88,
    },
    {
      name: 'العنكبوت',
      name_transliterated: "Al-'Ankabut",
      count: 69,
    },
    {
      name: 'الروم',
      name_transliterated: 'Ar-Rum',
      count: 60,
    },
    {
      name: 'لقمان',
      name_transliterated: 'Luqman',
      count: 34,
    },
    {
      name: 'السجدة',
      name_transliterated: 'As-Sajdah',
      count: 30,
    },
    {
      name: 'الأحزاب',
      name_transliterated: 'Al-Ahzab',
      count: 73,
    },
    {
      name: 'سبإ',
      name_transliterated: 'Saba',
      count: 54,
    },
    {
      name: 'فاطر',
      name_transliterated: 'Fatir',
      count: 45,
    },
    {
      name: 'يس',
      name_transliterated: 'Ya-Sin',
      count: 83,
    },
    {
      name: 'الصافات',
      name_transliterated: 'As-Saffat',
      count: 182,
    },
    {
      name: 'ص',
      name_transliterated: 'Sad',
      count: 88,
    },
    {
      name: 'الزمر',
      name_transliterated: 'Az-Zumar',
      count: 75,
    },
    {
      name: 'غافر',
      name_transliterated: 'Ghafir',
      count: 85,
    },
    {
      name: 'فصلت',
      name_transliterated: 'Fussilat',
      count: 54,
    },
    {
      name: 'الشورى',
      name_transliterated: 'Ash-Shuraa',
      count: 53,
    },
    {
      name: 'الزخرف',
      name_transliterated: 'Az-Zukhruf',
      count: 89,
    },
    {
      name: 'الدخان',
      name_transliterated: 'Ad-Dukhan',
      count: 59,
    },
    {
      name: 'الجاثية',
      name_transliterated: 'Al-Jathiyah',
      count: 37,
    },
    {
      name: 'الأحقاف',
      name_transliterated: 'Al-Ahqaf',
      count: 35,
    },
    {
      name: 'محمد',
      name_transliterated: 'Muhammad',
      count: 38,
    },
    {
      name: 'الفتح',
      name_transliterated: 'Al-Fath',
      count: 29,
    },
    {
      name: 'الحجرات',
      name_transliterated: 'Al-Hujurat',
      count: 18,
    },
    {
      name: 'ق',
      name_transliterated: 'Qaf',
      count: 45,
    },
    {
      name: 'الذاريات',
      name_transliterated: 'Adh-Dhariyat',
      count: 60,
    },
    {
      name: 'الطور',
      name_transliterated: 'At-Tur',
      count: 49,
    },
    {
      name: 'النجم',
      name_transliterated: 'An-Najm',
      count: 62,
    },
    {
      name: 'القمر',
      name_transliterated: 'Al-Qamar',
      count: 55,
    },
    {
      name: 'الرحمن',
      name_transliterated: 'Ar-Rahman',
      count: 78,
    },
    {
      name: 'الواقعة',
      name_transliterated: "Al-Waqi'ah",
      count: 96,
    },
    {
      name: 'الحديد',
      name_transliterated: 'Al-Hadid',
      count: 29,
    },
    {
      name: 'المجادلة',
      name_transliterated: 'Al-Mujadila',
      count: 22,
    },
    {
      name: 'الحشر',
      name_transliterated: 'Al-Hashr',
      count: 24,
    },
    {
      name: 'الممتحنة',
      name_transliterated: 'Al-Mumtahanah',
      count: 13,
    },
    {
      name: 'الصف',
      name_transliterated: 'As-Saf',
      count: 14,
    },
    {
      name: 'الجمعة',
      name_transliterated: "Al-Jumu'ah",
      count: 11,
    },
    {
      name: 'المنافقون',
      name_transliterated: 'Al-Munafiqun',
      count: 11,
    },
    {
      name: 'التغابن',
      name_transliterated: 'At-Taghabun',
      count: 18,
    },
    {
      name: 'الطلاق',
      name_transliterated: 'At-Talaq',
      count: 12,
    },
    {
      name: 'التحريم',
      name_transliterated: 'At-Tahrim',
      count: 12,
    },
    {
      name: 'الملك',
      name_transliterated: 'Al-Mulk',
      count: 30,
    },
    {
      name: 'القلم',
      name_transliterated: 'Al-Qalam',
      count: 52,
    },
    {
      name: 'الحاقة',
      name_transliterated: 'Al-Haqqah',
      count: 52,
    },
    {
      name: 'المعارج',
      name_transliterated: "Al-Ma'arij",
      count: 44,
    },
    {
      name: 'نوح',
      name_transliterated: 'Nuh',
      count: 28,
    },
    {
      name: 'الجن',
      name_transliterated: 'Al-Jinn',
      count: 28,
    },
    {
      name: 'المزمل',
      name_transliterated: 'Al-Muzzammil',
      count: 20,
    },
    {
      name: 'المدثر',
      name_transliterated: 'Al-Muddaththir',
      count: 56,
    },
    {
      name: 'القيامة',
      name_transliterated: 'Al-Qiyamah',
      count: 40,
    },
    {
      name: 'الانسان',
      name_transliterated: 'Al-Insan',
      count: 31,
    },
    {
      name: 'المرسلات',
      name_transliterated: 'Al-Mursalat',
      count: 50,
    },
    {
      name: 'النبإ',
      name_transliterated: 'An-Naba',
      count: 40,
    },
    {
      name: 'النازعات',
      name_transliterated: "An-Nazi'at",
      count: 46,
    },
    {
      name: 'عبس',
      name_transliterated: "'Abasa",
      count: 42,
    },
    {
      name: 'التكوير',
      name_transliterated: 'At-Takwir',
      count: 29,
    },
    {
      name: 'الإنفطار',
      name_transliterated: 'Al-Infitar',
      count: 19,
    },
    {
      name: 'المطففين',
      name_transliterated: 'Al-Mutaffifin',
      count: 36,
    },
    {
      name: 'الإنشقاق',
      name_transliterated: 'Al-Inshiqaq',
      count: 25,
    },
    {
      name: 'البروج',
      name_transliterated: 'Al-Buruj',
      count: 22,
    },
    {
      name: 'الطارق',
      name_transliterated: 'At-Tariq',
      count: 17,
    },
    {
      name: 'الأعلى',
      name_transliterated: "Al-A'la",
      count: 19,
    },
    {
      name: 'الغاشية',
      name_transliterated: 'Al-Ghashiyah',
      count: 26,
    },
    {
      name: 'الفجر',
      name_transliterated: 'Al-Fajr',
      count: 30,
    },
    {
      name: 'البلد',
      name_transliterated: 'Al-Balad',
      count: 20,
    },
    {
      name: 'الشمس',
      name_transliterated: 'Ash-Shams',
      count: 15,
    },
    {
      name: 'الليل',
      name_transliterated: 'Al-Layl',
      count: 21,
    },
    {
      name: 'الضحى',
      name_transliterated: 'Ad-Duhaa',
      count: 11,
    },
    {
      name: 'الشرح',
      name_transliterated: 'Ash-Sharh',
      count: 8,
    },
    {
      name: 'التين',
      name_transliterated: 'At-Tin',
      count: 8,
    },
    {
      name: 'العلق',
      name_transliterated: "Al-'Alaq",
      count: 19,
    },
    {
      name: 'القدر',
      name_transliterated: 'Al-Qadr',
      count: 5,
    },
    {
      name: 'البينة',
      name_transliterated: 'Al-Bayyinah',
      count: 8,
    },
    {
      name: 'الزلزلة',
      name_transliterated: 'Az-Zalzalah',
      count: 8,
    },
    {
      name: 'العاديات',
      name_transliterated: "Al-'Adiyat",
      count: 11,
    },
    {
      name: 'القارعة',
      name_transliterated: "Al-Qari'ah",
      count: 11,
    },
    {
      name: 'التكاثر',
      name_transliterated: 'At-Takathur',
      count: 8,
    },
    {
      name: 'العصر',
      name_transliterated: "Al-'Asr",
      count: 3,
    },
    {
      name: 'الهمزة',
      name_transliterated: 'Al-Humazah',
      count: 9,
    },
    {
      name: 'الفيل',
      name_transliterated: 'Al-Fil',
      count: 5,
    },
    {
      name: 'قريش',
      name_transliterated: 'Quraysh',
      count: 4,
    },
    {
      name: 'الماعون',
      name_transliterated: "Al-Ma'un",
      count: 7,
    },
    {
      name: 'الكوثر',
      name_transliterated: 'Al-Kawthar',
      count: 3,
    },
    {
      name: 'الكافرون',
      name_transliterated: 'Al-Kafirun',
      count: 6,
    },
    {
      name: 'النصر',
      name_transliterated: 'An-Nasr',
      count: 3,
    },
    {
      name: 'المسد',
      name_transliterated: 'Al-Masad',
      count: 5,
    },
    {
      name: 'الإخلاص',
      name_transliterated: 'Al-Ikhlas',
      count: 4,
    },
    {
      name: 'الفلق',
      name_transliterated: 'Al-Falaq',
      count: 5,
    },
    {
      name: 'الناس',
      name_transliterated: 'An-Nas',
      count: 6,
    },
  ];

  interface Props {
    number: string;
    styles?: string | undefined;
    showNumbers?: boolean;
    showReference?: boolean;
    showLink?: boolean;
  }

  let {
    number,
    styles = undefined,
    showNumbers = true,
    showReference = true,
    showLink = false,
  }: Props = $props();

  let ayat: Quran.Ayah[] = $state([]);
  const OnlySurahRegex = /^\d{1,3}$/;
  const SingleAyahRegex = /^\d{1,3}:\d{1,3}$/;
  const AyahRangeRegex = /^\d{1,3}:\d{1,3}-\d{1,3}$/;
  const MultipleSurahRegex = /^\d{1,3}-\d{1,3}$/;
  const MultipleAyahRegex = /^\d{1,3}:\d{1,3}-\d{1,3}:\d{1,3}$/;

  async function getAyatFromSurah(surahNum: number) {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${surahNum}.json`
    );
    const data = await response.json();
    const ayat = data.verses.map((v: Quran.Ayah) => ({ ...v, chapter: surahNum }));
    return ayat as Quran.Ayah[];
  }

  async function fetchAyahRange(num: string) {
    if (!num) return;

    if (OnlySurahRegex.test(num)) {
      const surahNum = Number(num);
      ayat = await getAyatFromSurah(surahNum);
    } else if (MultipleSurahRegex.test(num)) {
      let [startSurah, endSurah] = num.split('-').map(Number);
      if (startSurah > endSurah) [startSurah, endSurah] = [endSurah, startSurah];

      for (let surahN = startSurah; surahN <= endSurah; surahN++) {
        const surahAyat = await getAyatFromSurah(surahN);
        ayat.push(...surahAyat);
      }
    } else if (MultipleAyahRegex.test(num)) {
      let [startSurah, startAyah, endSurah, endAyah] = num
        .split(':')
        .flatMap((num) => num.split('-').map(Number));
      if (startSurah > endSurah) {
        [startSurah, endSurah] = [endSurah, startSurah];
        [startAyah, endAyah] = [endAyah, startAyah];
      }
      for (let surahN = startSurah; surahN <= endSurah; surahN++) {
        const surahAyat = await getAyatFromSurah(surahN);
        if (surahN === startSurah) {
          ayat.push(...surahAyat.slice(startAyah - 1, surahAyat.length));
        } else if (surahN === endSurah) {
          ayat.push(...surahAyat.slice(0, endAyah));
        } else {
          ayat.push(...surahAyat);
        }
      }
    } else if (SingleAyahRegex.test(num)) {
      const [surah, ayah] = num.split(':').map(Number);
      const surahAyat = await getAyatFromSurah(surah);
      ayat = [surahAyat[ayah - 1]];
    } else if (AyahRangeRegex.test(num)) {
      const [surah, ayahRange] = num.split(':');
      const [start, end] = ayahRange.split('-').map(Number);
      const surahAyat = await getAyatFromSurah(Number(surah));
      ayat = surahAyat.slice(start - 1, end);
    }
  }

  onMount(async () => {
    await fetchAyahRange(number);
  });
</script>

{#snippet Ayah(ayah: Quran.Ayah, isLast: boolean)}
  <span class="ayah"
    ><span class="ayah-text">{ayah.text}</span>
    <span class="ayah-indicator"
      >&#x06DD;{#if showNumbers}
        <span class="ayah-number">{ayah.id}</span>
      {/if}</span
    >{isLast ? '' : ' '}
  </span>
{/snippet}

{#snippet ChapterNameAndBasmalah(AyahList: Quran.Ayah[])}
  <div class="surah-name">
    {#if AyahList[0].id > 1 || AyahList.at(-1)!.id < surahs[(AyahList[0].chapter as number) - 1].count}
      من {' '}
    {/if}سورة {surahs[Number(AyahList[0].chapter) - 1].name}
  </div>
  {#if AyahList[0].id === 1 && Number(AyahList[0].chapter) !== 9}
    <div class="basmalah" aria-label="بسم الله الرحمن الرحيم">&#xFDFD;</div>
  {/if}
{/snippet}

{#snippet RefText()}
  {surahs[Number(number.split(':')[0]) - 1].name}{#if !showNumbers}
    : {number.split(':')[1].replace('-', ' - ')}{/if}
{/snippet}

<div class="quote-wrapper" style={styles}>
  {#if ayat.length}
    {#if MultipleAyahRegex.test(number) || MultipleSurahRegex.test(number)}
      {#each Object.entries(Object.groupBy(ayat, (a) => a.chapter as number)) as chapter, i (chapter[0])}
        {@render ChapterNameAndBasmalah(chapter[1]!)}
        <div class="ayat-wrapper">
          {#each (chapter as [string, Quran.Ayah[]])[1] as ayah, j ((ayah as Quran.Ayah).id)}
            {@render Ayah(ayah, j === chapter[1]!.length - 1)}
          {/each}
        </div>
      {/each}
    {:else if OnlySurahRegex.test(number)}
      {@render ChapterNameAndBasmalah(ayat)}
      <div class="ayat-wrapper">
        {#each ayat as ayah, i (i)}
          {@render Ayah(ayah, i === ayat.length - 1)}
        {/each}
      </div>
    {:else}
      <div class="ayat-wrapper">
        {#each ayat as ayah, i (ayah.id)}
          {@render Ayah(ayah, i === ayat.length - 1)}
        {/each}
      </div>
    {/if}
  {/if}
  {#if showReference}
    {#if SingleAyahRegex.test(number) || AyahRangeRegex.test(number)}
      <span class="ayah-ref"
        >[{#if showLink}
          <a
            href="https://quran.ksu.edu.sa/index.php?l=en#aya={number
              .split('-')[0]
              .replace(':', '_')}&m=hafs&qaree=husary&trans=en_sh"
            target="_blank">{@render RefText()}</a
          >{:else}{@render RefText()}{/if}]</span
      >
    {/if}
  {/if}
</div>

<style>
  @font-face {
    font-family: 'Amiri Quran';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(https://cdn.jsdelivr.net/fontsource/fonts/amiri-quran@latest/arabic-400-normal.woff2)
      format('woff2');
    unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1,
      U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74,
      U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF,
      U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32,
      U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F,
      U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62,
      U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E,
      U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB,
      U+1EEF0-1EEF1;
  }

  @font-face {
    font-family: 'KFGQPC HAFS Uthmanic Script Regular';
    src:
      url('https://db.onlinewebfonts.com/t/468122624d514e5acbeeb79e4e9f3d88.woff2')
        format('woff2'),
      url('https://db.onlinewebfonts.com/t/468122624d514e5acbeeb79e4e9f3d88.woff')
        format('woff'),
      url('https://db.onlinewebfonts.com/t/468122624d514e5acbeeb79e4e9f3d88.ttf')
        format('truetype'),
      url('https://db.onlinewebfonts.com/t/468122624d514e5acbeeb79e4e9f3d88.eot?#iefix')
        format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .quote-wrapper {
    display: inline;
    direction: rtl;
    font-family: 'KFGQPC HAFS Uthmanic Script Regular', 'Amiri Quran', Arial, Helvetica,
      sans-serif;
    font-feature-settings:
      'ss01' 1,
      'ss02' 1,
      'ss03' 1;
    line-height: 2;
  }

  .surah-name,
  .basmalah {
    text-align: center;
  }

  .ayat-wrapper {
    display: inline;
  }

  .ayat-wrapper > .ayah:first-of-type::before {
    content: '﴿';
  }

  .ayat-wrapper > .ayah:last-of-type::after {
    content: '﴾';
  }

  .ayah-indicator {
    position: relative;
  }

  .ayah-number {
    position: absolute;
    inset-inline: 0;
    inset-block: 25%;
    text-align: center;
    font-size: 0.5em;
    font-weight: 700;
    color: red;

    user-select: none;
  }

  .ayah-ref > a {
    color: inherit;
    text-decoration: none;
  }

  .ayah-ref > a:hover {
    text-decoration: underline;
  }
</style>
