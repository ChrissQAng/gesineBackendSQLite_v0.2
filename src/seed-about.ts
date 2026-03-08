/**
 * Seed script for the About page vita sections.
 * Run with: npx tsx src/seed-about.ts
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

// Helper to create a Lexical richText node for plain text
function plainText(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }],
          direction: 'ltr' as const,
          format: '' as const,
          indent: 0,
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

// Helper to create Lexical richText with mixed plain and italic text
// Usage: mixedText('before ', ['italic part'], ' after')
// Strings are plain, arrays with one string are italic
function mixedText(...parts: (string | [string])[]) {
  const children = parts.map((part) => {
    if (Array.isArray(part)) {
      return { type: 'text', text: part[0], format: 2, detail: 0, mode: 'normal', style: '', version: 1 }
    }
    return { type: 'text', text: part, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }
  })

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children,
          direction: 'ltr' as const,
          format: '' as const,
          indent: 0,
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

type LexicalRichText = ReturnType<typeof plainText>
type Entry = { year?: string; text: LexicalRichText }

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Delete existing vitaSections
  const existing = await payload.find({ collection: 'vitaSections', limit: 100 })
  for (const doc of existing.docs) {
    await payload.delete({ collection: 'vitaSections', id: doc.id })
  }

  console.log('Deleted existing vitaSections')

  // ─── 1. Teaching ───────────────────────────────────────────────────────
  const teachingEntries: Entry[] = [
    { year: '2024', text: plainText('guest lecturer, Keramik, Künstlerisches Gestalten, IKKG, Höhr-Grenzhausen') },
    { year: '2018-2017', text: plainText('artist in residence, head of the art laboratory, A.-Coppel-Gesamtschule Solingen') },
    { year: '2015-2014', text: plainText('teaching assignment, Ruhrakademie Schwerte') },
    { year: '2014-2012', text: plainText('teaching assignment, Kunstakademie Düsseldorf') },
    { year: '2013-2009', text: plainText('teaching assistant, Prof. Trockel, Kunstakadamie Düsseldorf (substitute in WS 2010/2011)') },
    { year: '2010-2007', text: plainText('teaching assignment, HBK Braunschweig, Dorothea-Erxleben-Stipend') },
  ]

  await payload.create({
    collection: 'vitaSections',
    data: { title: 'teaching', entries: teachingEntries },
  })
  console.log('Created: teaching')

  // ─── 2. Grants, Prizes, Residencies ────────────────────────────────────
  const grantsEntries: Entry[] = [
    { year: '2024', text: plainText('copy (machine) in residence, Museum for Fotocopy, Mülheim a.d. Ruhr') },
    { year: '2023', text: plainText('Art Prize of the Friends of KunstWerk Köln, Cologne') },
    { text: plainText('Research grant from the city of Cologne') },
    { year: '2022', text: plainText('Artist in Residence Salzamt Linz, Austria') },
    { year: '2021', text: plainText('Artist in Residence, Lichtenberg Studios, Berlin') },
    { year: '2020', text: plainText('Neustart working grant, Stiftung Kunstfonds, Bonn') },
    { year: '2015', text: plainText('catalogue grant, Kunststiftung NRW') },
    { year: '2013', text: plainText('Ida Gerhardi Prize, Lüdenscheid') },
    { text: plainText('nominated for 5x5 Castellò, ES') },
    { year: '2012', text: plainText('working grant, Stiftung Kunstfonds, Bonn') },
    { year: '2011', text: plainText('project grant, Kunststiftung NRW') },
    { year: '2010-2009', text: plainText('Erwine Steinblum Scholarship, Sylt') },
    { year: '2009-2008', text: plainText('Tel Aviv Scholarship, Kunststiftung NRW, Bonner Stiftung,') },
    { year: '2009-2007', text: plainText('Dorothea Erxleben Scholarship, HBK Braunschweig') },
    { year: '2008-2004', text: plainText('studio grant, Kölnischer Kunstverein, Cologne') },
    { year: '2008', text: plainText('Peter Mertes Scholarship, Bonner Kunstverein') },
    { text: plainText('Artist Studios Tel Aviv and Goethe Institute Tel Aviv, IL') },
    { year: '2007', text: plainText('artist grant, Kunststiftung NRW') },
    { year: '2002', text: plainText('scholarship, Kunststiftung NRW') },
    { year: '2001', text: plainText('DAAD scholarship for London') },
  ]

  await payload.create({
    collection: 'vitaSections',
    data: { title: 'grants, prizes, residencies', entries: grantsEntries },
  })
  console.log('Created: grants, prizes, residencies')

  // ─── 3. Selected Solo/Duo Shows ────────────────────────────────────────
  const soloEntries: Entry[] = [
    { year: '2024', text: mixedText(['Normally I\'m Not Copied'], ', Museum für Fotokopie, Mülheim a.d. Ruhr (c)') },
    { year: '2023', text: mixedText(['GENUGGEKRIEGT'], ', kjubh Kunstverein, Cologne') },
    { text: plainText('Planetenparade, k634 art space, Cologne') },
    { year: '2020', text: mixedText(['vier'], ', Gallery Kudlek, Cologne') },
    { year: '2018', text: mixedText(['30 Liter'], ', 30 Lieder, Gallery Roy, Zülpich') },
    { year: '2017', text: mixedText(['Interlude II'], ', Galerie Martin Kudlek, Cologne') },
    { text: mixedText(['0 : 0'], ', gkg - Society for Art and Design, Bonn') },
    { text: mixedText(['Korrelationen'], ', Montagehalle, Berlin (with Ronny Lichinski)') },
    { year: '2016', text: mixedText(['IRONCALL'], ', marie wolfgang, Essen') },
    { year: '2015', text: plainText('Anna Schmitt project space, Düsseldorf') },
    { year: '2013', text: mixedText(['not one thing that you want is upstream'], ', raum 13, Cologne') },
    { year: '2012', text: mixedText(['mit weissem Wasser bedeckt'], ', Raum 13, Cologne (with Heiko Räpple)') },
    { year: '2011', text: mixedText(['Krisen und Utopien'], ', Neuer Kunstverein, Wuppertal') },
    { year: '2010', text: mixedText(['Mountomato'], ', Artothek, Cologne') },
    { text: mixedText(['Open Space'], ', Art Cologne (Gallery Vera Gliem), Cologne') },
    { text: mixedText(['Gitter und Ketten'], ', Vera Gliem Gallery, Cologne') },
    { year: '2009', text: mixedText(['Peter Mertes Stipendium'], ', Bonner Kunstverein (with Monika Stricker) (c)') },
    { year: '2006', text: mixedText(['Who Fucks Like A Tiger And Twinkles'], ', The Mini Bar, Düsseldorf (with Catherine Island)') },
    { year: '2001', text: mixedText(['wer früh stirbt, ist halt länger tot'], ', workweb_art, Cologne (with Saskia Paul)') },
  ]

  await payload.create({
    collection: 'vitaSections',
    data: { title: 'selected solo/duo shows', entries: soloEntries },
  })
  console.log('Created: selected solo/duo shows')

  // ─── 4. Selected Group Shows ───────────────────────────────────────────
  const groupEntries: Entry[] = [
    { year: '2025', text: mixedText(['Bordstrom_EIN'], ', KunstWerk Köln, Cologne') },
    { text: mixedText(['we get closer'], ', Stoffpavillion Möller, Cologne') },
    { text: mixedText(['Kunst im Wohnraum Essen'], ', at Lambrecht-Wagenitz, Essen') },
    { text: mixedText(['EU UA'], ', Weltkunstzimmer, Düsseldorf') },
    { text: mixedText(['Great Summer of Art'], ', Ebertplatz, Cologne') },
    { text: mixedText(['Spurensuche - Kunst als Beute / Traces - Nature as Trophy'], ', Krohne Collection, Duisburg (c)') },
    { text: mixedText(['books & art'], ', artbooks store, Cologne') },
    { year: '2024', text: mixedText(['ARBOS'], ', Lustwarande, Platform for Contemporary Sculpture, Tilburg, NL') },
    { text: plainText('Peace Piece , Province Showroom, Bochum') },
    { text: mixedText(['Feriengäste'], ', Labor Ebertplatz, Cologne') },
    { text: mixedText(['Vice Versa – cutting in midair'], ', Pictura, Groningen, NL') },
    { year: '2023', text: mixedText(['Die Grosse'], ', Museum Kunstpalast, Düsseldorf') },
    { text: plainText('3HKP, Vulkaneifel') },
    { text: mixedText(['territories'], ', Malkastenpark Düsseldorf') },
    { text: mixedText(['Kunstpreis der Freunde des Kunstwerks'], ', KunstWerk, Cologne') },
    { text: mixedText(['7. Werkforum, Skulpturenprojekt'], ', Bad Salzhausen') },
    { text: mixedText(['wortwelt'], ', Strichstärke im Literaturhaus, Cologne') },
    { year: '2022', text: mixedText(['Altered Material'], ', Donopoulos Fine Arts, Thessaloniki, GR') },
    { text: mixedText(['Blessuren'], ', Christuskirche, Cologne (c)') },
    { text: mixedText(['bursts of sugar clouds of ashes'], ', KunstWerk, Cologne') },
    { text: mixedText(['enclosed space'], ', Kunstraum Brauer, Cologne') },
    { year: '2021', text: mixedText(['The Oasis'], ', Galéria Mamü and Magyar Műhely Galéria, Budapest, HU') },
    { text: mixedText(['wenn ich ihr wäre'], ', St. Gertud, Cologne') },
    { text: mixedText(['>>N<<'], ', Grölle Pass Projects, Wuppertal') },
    { year: '2020', text: mixedText(['Internationaler Lantz\'scher Skulpturenpark'], ', Düsseldorf') },
    { text: mixedText(['LRRH Contribution'], ', Zero Fold, Cologne') },
    { text: mixedText(['Aufgestellt, New Acquisitions'], ', Kunstmuseum Villa Zander, Bergisch-Gladbach (c)') },
    { year: '2019', text: mixedText(['Fatal Possibility'], ', Galéria Mamü and Magyar Műhely Galéria, Budapest, HU') },
    { text: mixedText(['Gift Shop'], '; Bruch & Dallas, Cologne') },
    { year: '2018', text: mixedText(['Biennale Internationale de Sculpture sur Bois'], ', Condrieu, FR') },
    { text: plainText('Alibi, Galéria Mamü and Magyar Műhely Galéria, Budapest, HU') },
    { year: '2017', text: mixedText(['pull down – break off'], ', Kunst- und Gewerbehof Deutz-Mülheimer-Str., Cologne') },
    { text: mixedText(['Skulpturen im Schlosspark Stammheim'], ', Cologne (c)') },
    { text: mixedText(['Landart Festival'], ', Bruchhof, Stadthagen') },
    { text: mixedText(['Vorwahl'], ', PETERSBURGER Raum für Kunst, Cologne') },
    { text: mixedText(['Ùtvestö – The Maze'], ', Galéria Mamü und MMG Galéria, Budapest, HU') },
    { year: '2016', text: mixedText(['Cyber Paradise'], ', Galéria Mamü und MMG Galéria, Budapest, HU') },
    { text: mixedText(['steinleicht'], ', Bildhauerwerkstatt, Miltitz, Sachsen') },
    { text: mixedText(['Provinz Editionen'], ', Kunsthalle Recklinghausen') },
    { year: '2015', text: mixedText(['genius loci'], ', Setareh Galerie, Düsseldorf (c)') },
    { text: mixedText(['Provinz Editionen - Neuerscheinungen'], ', Goldkante, Bochum') },
    { text: mixedText(['Internationale Bergische Kunstausstellung'], ', Kunstmuseum Solingen (c)') },
    { text: mixedText(['Skulptur'], ', Grölle Pass Projects, Wuppertal') },
    { text: mixedText(['Interlude'], ', Galerie Martin Kudlek, Köln') },
    { year: '2014', text: mixedText(['Softgrid'], ', CIAT, Berlin') },
    { text: mixedText(['Another Place, Another Space together'], ', Baumarkt, Quadriennale Düsseldorf') },
    { text: mixedText(['Automatic'], ', Kunstraum München') },
    { text: mixedText(['Bien, Merci'], ', Strzelecki & Aberle, Wertheim, Köln') },
    { year: '2013', text: mixedText(['Internat. Contemporary Art Prize 5x5'], ', Espai d\'art contemporani Castelló, ES') },
    { text: mixedText(['Ansichtssache Landschaft'], ', Kunstverein Pforzheim (c)') },
    { text: mixedText(['Pain Surprise'], ', Galerie Vera Gliem, Köln') },
    { text: mixedText(['Stelldichein'], ', Kirschenpflücker e.V., Bruch & Dallas, Köln (c)') },
    { text: mixedText(['Drinnen Binnen Buiten Draußen'], ', Kers Gallery, Amsterdam, NL') },
    { text: mixedText(['Kunst Jetzt!'], ' Ida Gerhardi Förderpreis, Städtische Galerie Lüdenscheid (c)') },
    { text: mixedText(['Moiras Planschränke – eingeräumte Zeit'], ', Raketenstation Insel Hombroich, Neuss') },
    { year: '2012', text: mixedText(['The Bronner Residency'], ', KiT, Düsseldorf (c)') },
    { text: mixedText(['Manifest Aanwezig'], ', Euregionaal kunstcentrum, Kasteel Oud-Rekem, BE (c)') },
    { text: mixedText(['Single Club im Februar'], ', The Attic, Düsseldorf') },
    { text: mixedText(['Singlemuseum Köln'], ', Bruch & Dallas, Cologne') },
    { text: mixedText(['Will to Absurd (Ill to Kill)'], ', Werft 77, Düsseldorf') },
    { text: mixedText(['Kompost'], ', Galerie Roy, Zülpich') },
    { year: '2011', text: mixedText(['brise'], ', Galerie Vera Gliem, Cologne') },
    { text: mixedText(['OpenART'], ', Orebro, Schweden, SE (c)') },
    { text: mixedText(['Ja schade, war echt ne schöne Stadt'], ', Vestfossen, NO') },
    { text: mixedText(['Wenn es ernst wird: Wachstumsprozesse'], ', Raketenstation Hombroich, Neuss') },
    { text: mixedText(['The Postcard'], ', Rosenberg Gallery, New York, NY, US') },
    { text: mixedText(['waiting for suicidal hares'], ', International VideoArt Festival, Chongqin, CN') },
    { year: '2010', text: mixedText(['neues rheinland. die postironische generation'], ', Museum Schloss Morsbroich, Leverkusen (c)') },
    { text: mixedText(['newtalents/pReview'], ', Landesvertretung NRW, Berlin (c)') },
    { year: '2009', text: mixedText(['Ruhende Reste'], ', Galerie der HBK Braunschweig, (with Sonja Alhäuser and Sabine Groß)') },
    { text: mixedText(['Jahresgaben'], ', Bonner Kunstverein, Bonn') },
    { year: '2008', text: mixedText(['believe me!'], ', KiT, Düsseldorf (c)') },
    { text: mixedText(['Die Angst reist immer mit'], ', Neues Problem, Berlin') },
    { text: mixedText(['Auf Wiedersehen und Dankeschön'], ', Projektraum S1, Berlin') },
    { text: mixedText(['New Talents Biennale'], ', Rheinauhafen, Cologne (c)') },
    { text: mixedText(['46th Beard St Show'], ', Brooklyn, New York') },
    { year: '2007', text: mixedText(['Die Tür für eine andere Zukunft aufmachen'], ', Neues Problem, Berlin') },
    { text: mixedText(['International Exchange Exhibition'], ', Art Gallery Chonbuk, KR (c)') },
    { text: mixedText(['Jahresgaben der Atelierstipendiaten'], ', Kölnischer Kunstverein') },
    { text: mixedText(['Sansibar'], ', The Mini Bar, Düsseldorf') },
    { year: '2006', text: mixedText(['Der letzte Schnitt'], ', Malkasten, Düsseldorf') },
    { year: '2005', text: mixedText(['Regarding Düsseldorf'], ', 701 e.V., Düsseldorf (c)') },
    { text: mixedText(['I will'], ', Theaterprojekt am Schauspielhaus Düsseldorf') },
    { text: mixedText(['Trendwände'], ', Kunstraum Himmelgeisterstraße, Düsseldorf') },
    { year: '2002', text: mixedText(['ordered order to order'], ', Henry Peacock Gallery, London, GB') },
    { text: mixedText(['MA Degree Show'], ', Goldsmiths College, London, GB (c)') },
    { text: mixedText(['The Absolute and Only Truth'], ', public life, London, GB') },
    { text: mixedText(['Eat Art'], ', Cassland 5, London, GB') },
    { year: '2001', text: mixedText(['The Big Show (2): Healing'], ', NICC, Antwerpen, BE (c)') },
  ]

  await payload.create({
    collection: 'vitaSections',
    data: { title: 'selected group shows', entries: groupEntries },
  })
  console.log('Created: selected group shows')

  // ─── 5. Collections ────────────────────────────────────────────────────
  const collectionsEntries: Entry[] = [
    { text: plainText('Paul Andriesse Collection, Amsterdam, NL') },
    { text: plainText('Kunsthaus NRW, Aachen-Kornelimünster') },
    { text: plainText('Kunstmuseum Villa Zanders, Bergisch-Gladbach') },
    { text: plainText('Municipal Gallery Lüdenscheid Sparkasse Lüdenscheid') },
    { text: plainText('Galila Collection, Brussels, BE') },
    { text: plainText('Collection Krohne, Duisburg') },
    { text: plainText('Múzeum Nagykátai Tájház, Nagykáta, HU') },
    { text: plainText('Bruchhof, Stadthagen') },
    { text: plainText('Collection Communal de Condrieu, FR') },
    { text: plainText('Muzej Galerija Buća Luković, Tivat, ME') },
    { text: plainText('Museum für Fotokopie, Mülheim a.d. Ruhr') },
  ]

  await payload.create({
    collection: 'vitaSections',
    data: { title: 'collections', entries: collectionsEntries },
  })
  console.log('Created: collections')

  console.log('\n✅ All vita sections seeded successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
