import React from 'react'
import { notFound } from 'next/navigation'
import BackArrow from '@/components/BackArrow/BackArrow'
import './textpage.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [
    { slug: 'uhr' },
    { slug: 'hirsch' },
    { slug: 'aberle' },
    { slug: 'donauer' },
    { slug: 'heym' },
  ]
}

function UhrContent() {
  return (
    <>
      <h2>
        Harald Uhr:
        <br /> GEN <br />
        UGG <br />
        EKR <br />
        IEGT <br /> (2023)
      </h2>
      <p>
        In den bildhauerischen Arbeiten von Gesine Grundmann stoßen die
        materiellen Bedürfnisse des Menschen auf die metaphysischen Bedürfnisse
        der Dinge. Geprägt ist ihre Strategie dabei von einer gezielten
        Suspendierung des Identitätszwangs. Die Objekte und Skulpturen geben
        ihre materielle Beschaffenheit nur bedingt preis und propagieren den
        Zweifel. Gemeint ist die Kunst bei Gesine Grundmann als die Welt noch
        einmal. Jedoch nicht als eine andere Welt neben der bestehenden, sondern
        dieselbe, aber ganz anders.
      </p>
      <p>
        Fokussiert zeigt die Ausstellung im kjubh e.V. eine konzentrierte
        Auswahl von schwarzen Arbeiten, die im Werk von Gesine Grundmann wie ein
        ‚roter Faden&apos;, immer mal wieder auftauchen. Der Eröffnungstermin mutiert
        somit unversehens zum ‚Black Friday&apos;. Prominent mag hierfür die schwarz
        beschichtete ‚Kleine Null&apos; inmitten des Raums stehen. Von sogenannten
        Wirtschaftsexperten zum Fetisch bundesrepublikanischer Haushaltspolitik
        deklariert, behauptet die vermaledeite Schwarze Null hier ihr Terrain
        und verhindert als skulpturales Bollwerk selbstbewusst ein Abgleiten in
        die Roten Zahlen. Als Fetisch-Objekt steht ihr die Farbe Schwarz nur zu
        gut und animiert zu ausufernden Fantasien. Mit ihren, annähernd
        Körpergröße, erreichenden Maßen rückt einem dieses
        assoziationsgesättigte Gebilde, eigentlich ein leeres Nichts, gehörig
        auf die Pelle und gemahnt, den eigenen Haushalt auf den Prüfstand zu
        stellen.
      </p>
      <p>
        Von der Finsterfarbe Schwarz wird auch der Schriftzug umfasst, welcher
        der Ausstellung ihren Titel verleiht. &bdquo;GENUGGEKRIEGT&ldquo; – mit etwas Mühe
        entziffern wir dieses Wortgebilde. Auf den ersten Blick scheint auch
        hier ein ökonomischer Sachverhalt angesprochen. Eingebunden ist jedoch
        auch der Krieg und gemahnt momentan unmissverständlich an das von
        Russland entfesselte Kriegsgeschehen am Schwarzen Meer. Einmal auf die
        Fährte geführt, sind wir kaum noch in der Lage, die Arbeiten von Gesine
        Grundmann unbedarft als Formenspiele des bildhauerischen Gestaltens zu
        betrachten. Scheinbar ephemere Phänomene geraten in den Strudel
        multipler Deutungsmöglichkeiten. Zulässig ist eine Untersuchung der rein
        formalen Spannungsmomente der Arbeiten allemal. Anknüpfungspunkte gäbe
        es zuhauf.
      </p>
      <p>
        Unbedarft kommt die Pfeilerarbeit ‚Territories&apos; vielleicht zunächst
        daher. Vier übereinander gestapelte Kuben reichen bis sehr knapp unter
        die Decke des Ausstellungsraums. Das schwarze Quadrat wird in die dritte
        Dimension überführt und durch das Material der Bitumenwellplatten in
        Schwingung versetzt. Die zunächst klar erscheinende Form bekommt jedoch
        unversehens eine mobile Note und stellt die Stabilität des Pfeilers in
        Frage. Ein Bewegungsimpuls scheint von den Kuben auszugehen. Der kjubh
        ist daher sicherlich kein schlechter Ort für diese Setzung. Gezielt
        überführt Gesine Grundmann die Welt der Dinge in ein komplexes System
        räumlicher Relationen. An ihren Arbeiten haften die vielfältigsten
        Assoziationen und Allusionen von gesellschaftlichen Zusammenhängen und
        psychischer Fragilität. Auch schwarzer Humor kann mitunter Anstöße zur
        eigenen Verortung liefern.
      </p>
      <p className="copyright">Copyright by Harald Uhr, 2023</p>
    </>
  )
}

function HirschContent() {
  return (
    <>
      <h2>
        Thomas Hirsch:
        <br />
        In actual fact (likenesses)
      </h2>
      <div className="textpage-content">
        <p>
          With her art, Gesine Grundmann questions the environments our
          civilization creates. For the most part, her pieces can be considered
          to belong in the artistic genres of sculpture and installation, but
          they can also involve painting and photographic techniques as well as
          writing and text. She is a sculptor and a conceptual artist, but her
          contributions also place her, at least in a broader sense, among the
          ranks of the archeologists and sociologists. Despite the intentions of
          her individual works being very diverse, her role is always the same:
          she dissects her subject matter in a very hands-on way, defining it in
          its constitution, then references something outside of it in realizing
          the pieces. Her interest in objects and found phenomena, even in as it
          were the obsolete leftovers you might encounter in a home environment
          and nature, finds expression in the special way in which she engages
          with materials. Gesine Grundmann simulates reality and its particles
          through her approach to surfaces and the nuanced hues they exhibit,
          their consistency and texture, often expressed as a serial structure.
        </p>
        <p>
          Her method is consistent. For her exhibition at Städtischer Kunstraum
          Dusseldorf in 2005 she was already working in this vein. There, a
          fairly naturalistic depiction of a fireplace as one would find in
          traditional home environments took center stage. Assembled from
          several parts, the piece conveys a cozy, homely atmosphere. Every part
          is in the right place, it looks &apos;built&apos;. A grid is installed in front
          of the opening to the flue in the lower area. The board concluding the
          piece at the top is reminiscent of a flickering TV screen and conjures
          up connotations of a roof covered in moss. On the other hand it can
          also simply be read as what it is: an abstract painting with
          alternating color fields carried out in thick paint (1) which, being
          propped up as it is against the wall, achieves sculptural qualities.
          As a whole, the fireplace is carefully organized down to the last
          detail. An echo of the tiled stripe forming the rectangular framing of
          the grid can be found in the tiled outer hearth projecting into the
          room. The tiled jamb area in turn forms a compact shape together with
          the dark surrounding wooden elements. The rustic coffer field carries
          an inscription in a sober, modern, black typeface: &quot;Wessen Probleme
          möchte ich eigentlich haben?&quot; – whose problems would I actually like
          to have? The title here points the viewer to the scent of a possible
          interrelationship between luxury, wellness and psychological
          fragility. The surfaces convey different haptic stimuli, while the
          grid becomes a membrane between inside and outside. The piece can be
          read as an indirect, symbolic metaphor for human existence.
        </p>
        <p>
          Whenever Gesine Grundmann uses text as a formal element of her work,
          she employs a sober typeface that makes the written words appear
          somewhat dispassionate. This stands in contrast to the actual
          statements made, which are often touching and sometimes touch on
          taboos and individuality: &quot;Landschaft with to fuck&quot; (made of the cheap
          materials cardboard and masking tape, 2002), &quot;das Land der Großen
          Mutter&quot; (written on the slanted wall of the exhibition space and shown
          in combination with a video of riding cowboys; with Caterine Val,
          2003); &quot;I&apos;m a Tiger&quot; (stained onto sheepskin, 2006); &quot;Sind Ichs / Ist
          Wirs / Bin Dus&quot; (carved into a slab of travertine, 2007). Gesine
          Grundmann instigates controversial scenes by fusing subject and
          object.
        </p>
        <p>
          Shown alongside &quot;Wessen Probleme möchte ich eigentlich haben?&quot; in the
          early exhibition in Düsseldorf was an elongated, panoramic object,
          fairly ambiguous and open to interpretation. The piece in question,
          &quot;147&quot; is made up of Styrofoam elements boasting wave-shaped surfaces
          dusted in bright light green and placed loosely on top of each other.
          Based on the modes of resting, leaning and sliding, its surfaces seem
          as though having been polished by rushing water; in fact they are very
          much reminiscent of ragged rock. Depending on the lighting situation,
          the surfaces glisten in a wonderful range of shades. Calm and
          restrained sensuality are juxtaposed here to the creaking movement of
          moraines. Today, Gesine Grundmann&apos;s art still operates in this field
          of ambivalence created by the juxtaposition of built, custom-fit
          structures and organic matter taken from nature, or reconstructions of
          the latter. Grundmann distills hill formations from the typology of
          ashtrays (from 2007). She has placed sandstone boulders, made porous
          by wind and sea and collected by the artist herself on the coasts of
          Israel, as a field on a slanted wall (2013). She cast a shell in
          plastic (acrylic with marble powder mixed into it), but undermined the
          impression of this material being coquina by leaving red silicone
          residue on the negative form.(2) She then spliced a chain made from
          Acrystal that looks like rusty iron onto this shell (2013). But she
          has also sawed a monumental chain from the trunk of an oak tree, which
          simultaneously conjures up fetters and jewelry, references growth in
          its potential for continuation and relates rigidity and liveliness
          (from 2010). The wooden chains snake across the floor like amphibians.
          They, too, allude to the destruction of our habitat.
        </p>
        <p>
          In this aspect they are very much related to her piece &quot;Grosser
          Rheinischer Tiger&quot; (2007), which melds wildness and 1950s German
          gemütlichkeit in all its Baroque gravity. The deep black stripes of
          this &apos;wall hanging&apos;, which is actually made up of skins from sheep of
          three different races sewn together, allude to the rhythm of
          prehistoric stone drawings. Or could this be a tally sheet of the
          &apos;Rhineland tigers&apos; slain before this animal became extinct? Whatever
          the case, the illusion of warmth and coziness is rigorously thrust
          aside in the knowledge of the consequences it has had for evolution
          (genetic manipulation, extinction): Nothing but lies!
        </p>
        <p>
          Gesine Grundmann&apos;s works harness the atmospheres and auras created by
          familiar images and tropes firmly lodged in our memory. In order to
          achieve this, she not only employs a large repertoire of visual
          experiences, with which she both evokes and undermines realities, but
          she also works with the potential inherent in nuances of color and
          modes of presentation. She first installed &apos;cement wallpaper&apos; on a
          wall in 2000 for her piece &quot;Betontapete&quot;, in which the title describes
          both the material shown in the piece and the intention behind it.
          Here, offset prints of close-up photographs of prefabricated slab
          concrete were pasted directly onto the wall of the exhibition space,
          thus bringing the outside space into the interior. This in turn is
          reminiscent of a further piece of hers referencing surface, which
          features photographs showing a dark green area with holes that pretend
          to be a starry night sky. The first version of this piece was a canopy
          (2001).
        </p>
        <p>
          In these works, Gesine Grundmann wanders, like somnambulist, between
          realism and abstraction while reflecting mimetic aspects, imitation
          and disillusionment. At the same time, we can clearly discern her
          interest in the potentiality of her materials, such as in those
          instances when a substance in a work feigns being another. Her
          spectrum encompasses iron, bronze, granite and marble, wood and wool,
          ceramics and Acrystal, corrugated polyester and Styrofoam, board:
          namely, &apos;traditional&apos; natural materials, which are usually crafted by
          hand and which may prove somewhat unruly, as well as new, chemically
          produced substances primarily created for industrial processing. It
          follows that Gesine Grundmann also employs very diverse methods when
          working, researching and experimenting with them. She then responds to
          the very surfaces she has herself created and uses coatings that
          cancel out effects usually associated with the look of the materials
          used, such as for example absorbing light reflexes.
        </p>
        <p>
          A further device used is that of allusion. With her &quot;Aschenbecher&quot;
          series, she has created an immense spectrum of variations while
          repeating a common set of proportions: the shapes of these objects
          range from inconspicuous reconstructions to amorphous lumps. She
          questions the subject matter&apos;s very meaning. The ashtray channels a
          combustion process and gathers its detritus – and in this regard forms
          a parallel to the previously explored fireplace theme. At the same
          time, it alludes to cigarettes – in particular as their shape is
          incorporated in the design of ashtrays by way of an indentation – and
          in this way kindles emotional associations such as tranquility and
          painful addiction. By presenting groups of her &apos;ashtrays&apos; at
          exhibitions as moving, floating fields, Gesine Grundmann has
          visualized the ritualization of a social convention. These
          installations evoke the types of event-like situations where party
          fittings are needed, without this being given much thought, on
          whichever surface might be available; at the same time, the works
          highlight what is special about each of these objects. If we are to
          pick up individual works from the series, we feel their robust
          softness and considerable weight. The question of the model (and with
          it, of dimensions) almost immediately comes to the fore. Some of the
          &apos;ashtrays&apos; somehow resemble mountains and craters (3) or stone
          architectures chiseled out of or built into rock face. It seems as
          though everything has started slipping in these objects or is in a
          state of collapse; yet at the same time they give off the impression
          of having weathered the centuries.
        </p>
        <p>
          One of the &apos;ashtrays&apos; bears lighter and darker horizontal bands which,
          despite being somewhat jagged, bring a zebra hide to mind (2008). But
          despite this Sixties-inspired look, the structure also points to rock
          sedimentation. And is this object not also highly evocative of
          traditional artisanal pottery? In the simulacrum of a vessel (as
          which, after all, most of the &quot;Aschenbecher&quot; could yet be used) shell
          and (hollow) core interact. The object&apos;s weight correlates with
          aspects of presence, volume and inspection.
        </p>
        <p>
          The platinum coated can sculptures titled &quot;Platindosen&quot; – fired,
          glazed and platinized ceramics – give the impression that here
          Grundmann revisits the fundamental ideas underlying her &apos;ashtrays&apos;. In
          a way, they are each other&apos;s counterparts. The communication between
          inside and outside spaces functions at different levels in the two
          series. While the &apos;ashtrays&apos; have evidently been formed by hand, the
          &apos;cans&apos; seem anonymous, as though made in mass production by machines.
          And indeed they are created as negative molds at first, they show the
          imprints of the inner walls of conventional food cans on their outward
          skins. With clay shrinking as it dries, these pottered objects can be
          extracted from the cans after this process has taken place. One of the
          key aspects the works exhibit – having themselves been created out of
          a state of openness – is their closed-off nature. Do they have thin
          walls, containing some content or other, or are they compact mass? The
          perfection of these &apos;cans&apos; – and this is another way in which they
          differ from the &apos;ashtrays&apos; – makes us shrink back from wanting to
          touch them: Despite being entirely profane in their block-like
          Minimalism, they are rather (hermetically) iconic. Their reflective
          platinum or deep black surfaces make them appear quite exquisite,
          which is of course entirely contrary to the purpose of storing
          perishable comestibles. In this case, the flawless horizontal waves
          are an end in themselves.
        </p>
        <p>
          Line patterns with grooves and grids then turn out to be a further red
          thread running through the entirety of Grundmann&apos;s oeuvre, one that is
          potentiated when used in modules, which sometimes leave open the
          possibility of being continued or added to – in the sense of
          Brancusi&apos;s &quot;Endless Columns&quot; (4). As is the case with a column-shaped
          piece made up of square polyester cubes. This line of thinking has
          recently led Gesine Grundmann to create three columns using egg
          cartons. (5) The differently colored cardboard objects were dipped
          into liquid binding agent, further intensifying their distinctive
          hues, before they were stacked with their edges arching outward. The
          pattern achieved in this way creates a moiré effect, in which our gaze
          tries to steady itself yet always becomes lost. The columns are a
          little over 2m in height and with their horizontal stature signalize
          bodily physicality, notions of stretching upwards and evolvement; they
          thus demonstrate a successive coming-alive. Once again, Gesine
          Grundmann transforms profane functional containers into magical
          objects here, this time into ritually charged steles.
        </p>
        <p>
          Seriality in the sense of the possibility of continuation also
          characterizes the works featuring textile strips, which are hung,
          crossing each other at right angles, on the wall of the exhibition
          space, thereby activating the gaps between the fabric. Gesine
          Grundmann cuts these grids from cloth available by the meter and in
          some cases bearing patterns with a century-old tradition, separating
          them from the meaning they still held in the manufactories. Yet the
          resulting art works, which can be read as an ironic commentary on
          Minimalism, are anything but uniform, if only because the gaps between
          the threads are populated by a myriad of individual loose threads. The
          fragility of the fabric strips heightens the impression of the sublime
          the pieces convey. The shift from a sphere of use value to that of
          art, carried out with simple means, is perfect: &quot;After all, every
          checkered fabric contains a grid, and I wanted to free the grid from
          its fashion aspect.&quot; (6) As is the case with the &apos;cans&apos;, the fabric
          works inverse positive and negative form. This also applies, in a
          similar way, to the reliefs made of drilled steel workpieces. They are
          waste products left over from highly precise industrial manufacturing
          processes and provide the nucleus for new sculptural work. Sorted
          according to hue and hanging down as protracted, somewhat heavy rolls,
          the arrangement in rows makes them look somewhat like glittery
          curtains such as can be found in discos or beach bars, it conjures up
          jingling sounds. But does the iridescent effect as a seemingly
          spirited entity moving between surface and space not have something to
          do with the paintings Gesine Grundmann used in her fireplace piece
          &quot;Wessen Probleme möchte ich eigentlich haben?&quot;, a series which she has
          carried on to this day? In these paintings, matt and shiny surfaces
          play a central role, with the latter being created by mixing paint
          with stone and metal powders.
        </p>
        <p>
          The repetitive structure as leitmotif in the different work series
          further heightens the clarity of the presentation. As serial
          succession – and even as ornamental patterns – it creates, even in
          abstract works, a great deal of familiarity, based on experiences of
          primary formulation and deduced from surfaces. &quot;The subconscious in
          the sense of that which is implied [is] the standard subject of
          hermeneutic efforts,&quot; wrote Hans-Georg Gadamer.(7) In Gesine
          Grundmann&apos;s oeuvre, subliminally contemporary context is turned into
          texture that submits its object of research to subjective revision:
          She takes a new look at our living environment and sounds out
          human-object relationships. In doing so, she reinvents reality in its
          (supposedly) banal (supposed) implicitness as laconism. By creating
          reproductions in different materials that enhance our visual and
          tactile experience or even simply extracting and recombining waste
          material, she brings substance and structural systematization as
          semantics into focus. Yet she places the outlier at an auratic
          distance, as art. Viewed up close, it becomes ever more difficult to
          see what is real and what is fake and how we should react to the
          situation. Or, as Jean Baudrillard demanded: &quot;What counts is the
          poetic uniqueness of the analysis... [a]nd allowing the deception of
          the world to shine through, which is its mysterious function, the
          mystification of the world, which is its secret. Whereby the world
          allows its own deception to shine through – deception, not dissolution
          of meaning.&quot; And Baudrillard concluded: &quot;The absolute rule of thought
          is to give the world back as we have received it – incomprehensible –
          and if possible, a bit more so.&quot; (8)
        </p>
      </div>
      <div className="textpage-quotations">
        <span>(1)</span>
        <p>
          Possibly a reference to her first choice when beginning her course of
          studies at Kunstakademie Düsseldorf, painting. Incidentally, the
          handling of paint in this piece, creating gossamer-like, interwoven
          structures, is reminiscent of Eugène Leroy&apos;s (figurative) works.
        </p>
        <span>(2)</span>
        <p>
          On this and the techniques employed in the other works described here,
          see the interview with Gesine Grundmann, Düsseldorf, November 20,
          2016.
        </p>
        <span>(3)</span>
        <p>
          She has referenced these associations in an exhibition title:
          &quot;Mountomato&quot; at artothek, Cologne, 2010. For the show, she still
          worked with sculptural reproductions of fruits and vegetables.
        </p>
        <span>(4)</span>
        <p>
          In her catalogue booklet on her project for the Peter Mertes
          Stipendium award, Gesine Grundmann referred to corresponding stone
          sculptures in the Israeli landscape, Bonn 2009.
        </p>
        <span>(5)</span>
        <p>
          Exhibited among others at &quot;Skulptur&quot; curated by Wolfgang Flad, Grölle
          pass:projects, Wuppertal 2015.
        </p>
        <span>(6)</span>
        <p>
          Gesine Grundmann in conversation with Stefanie Klingemann, in: MOFF,
          Cologne 2013 (1), p. 28.
        </p>
        <span>(7)</span>
        <p>
          Hans-Georg Gadamer, &quot;Hermeneutik als praktische Philosophie,&quot; 1978, in
          his: Vernunft im Zeitalter der Wissenschaft, (Suhrkamp Verlag,
          Frankfurt/M., 1980), p. 105, (trans.). Gadamer refers to approaches to
          written text.
        </p>
        <span>(8)</span>
        <p>
          Jean Baudrillard, &quot;Das radikale Denken,&quot; 1994, German translation by
          Riek Walter, in: the same, Short Cuts, (Zweitausendeins, Frankfurt/M.,
          2003), pp. 188, 189, 190, (trans.).
        </p>
      </div>
      <p className="copyright">Copyright by Thomas Hirsch, 2017</p>
    </>
  )
}

function AberleContent() {
  return (
    <>
      <h2>
        Christian Aberle:
        <br /> Handgeblasene Mundstücke
      </h2>
      <div className="textpage-content">
        <p>Einige Gedanken zu Serenade von Gesine Grundmann.</p>
        <p>Wie kommt die Musik auf die Schallplatte?</p>
        <p>
          Nun, beim Schallplatten-Schnitt schneidet ein Stichel, der in einen
          Schreiber montiert ist, eine rund laufende Rille in eine blanke,
          rotierende Scheibe. Entsprechend des beaufschlagten Tonsignals
          moduliert der Stichel die Rille in einer zum Signal proportionalen
          Bewegung. Später, beim Abspielen, liest der Tonabnehmer über die Nadel
          diese in die Rille eingeschriebene Struktur. Das ist das übliche
          Procedere.
        </p>
        <p>
          Doch auch Gesines zur 14&quot; LP abgewandelte Flexscheibe (1) ließe sich,
          trotz Übergröße, durchaus auf einem Plattenspieler abspielen; so wie
          eigentlich jedes einigermaßen flache Objekt mit einem Loch in der
          Mitte. Der Sound, der durch die, mit feinen Gesteinspartikeln
          beschichtete, Kunststoffoberfläche entstünde, gefiele wohl dem
          &bdquo;Minister für Kratzen, Kreischen und Dröhnen&ldquo; aus einem frühen
          LUSTIGEN TASCHENBUCH von Walt Disney (2), unter dessen Regie alle
          möglichen Störgeräusche erzeugt und in alle Welt transportiert werden.
          I Serenade ist geradezu eine Allegorie für Klang und Musik als
          Gesamtheit, jedoch: Die Pseudo-Platte befindet sich in einem Schrein.
          Sie ist nicht als Trägerin eines Soundpiece, sondern als
          &quot;bildhauerische Druckgrafik&quot; konzipiert, wie die Künstlerin selbst
          sagt – und somit als Objekt visuell, räumlichen Erlebens. Ich schaue
          beispielsweise durch Glas durch ein Loch in einem Kreis in einem Kreis
          in einem Rechteck auf eine Ausstellung. (3)
        </p>
        <p>
          Gesine erweitert durch zwei siebgedruckte, kreisförmig monochrome
          Farbflächen den ursprünglichen, nahezu ausschließlich unbunten,
          Farbakkord der Flexscheibe um die zweite und dritte Grundfarbe. Die
          Scheibe verleibt sie, quasi als Intarsie, einer von zwei Glasscheiben
          in einem Holzrahmen gehaltenen dritten Glasplatte ein und montiert den
          Rahmen derart an die Wand, dass er um 180 Grad geklappt, also immer
          neu arrangiert / arretiert werden kann. Im Extrem ist also nur eine
          Seite der Arbeit zu sehen; in den Raum gerichtet, verursacht sie
          mitunter einen geradezu monumentalen Schatten. Der Raum, den das
          Kunstwerk beansprucht, wenn es ihn auch unmöglich permanent als ganzes
          einnehmen kann, ist ihm gedanklich immer zuzugestehen; als Territorium
          des Halbkreises.
        </p>
        <p>
          Letzte Frage, angesichts des Titels I Serenade: Wer singt? Gesine? Das
          Werk? Ich? Wir alle? Und für wen? – wer weiß...
        </p>
      </div>
      <div className="textpage-quotations">
        <span>(1)</span>
        <p>Nicht zu verwechseln mit der sogenannten Flexidisc.</p>
        <span>(2)</span>
        <p>
          aus Micky und der Zauberschuh in Abenteuer mit Micky und Goofy, Walt
          Disneys Lustige Taschenbücher (Nr. 15), EHAPA Verlag Stuttgart, 1971.
        </p>
        <span>(3)</span>
        <p>
          Die Referenz an malerische Positionen, wie die von K.N., P.G. oder
          J.J. möchte ich hier ungern aufdrängen. Wer die Assoziation von sich
          aus hat, wird anhand der Namenskürzel erkennen, wer gemeint ist.
        </p>
      </div>
      <p className="copyright">Copyright by Christian Aberle, 2015</p>
    </>
  )
}

function DonauerContent() {
  return (
    <>
      <h2>
        Carla Donauer:
        <br />
        not one thing that you want is upstream
      </h2>
      <p>
        Die auratische Präsentation der Arbeiten, verspricht genau das: eine
        Konzentration auf das einzelne Objekt – nur ich und du. Was ist es
        eigentlich was wir sehen? Wie verhält sich ein Ding zu seiner
        tatsächlichen Materialität und Deutbarkeit? Was bedeutet es also zu
        erkennen und zu deuten? Die Frage nach Signifikat und Signifikant stellt
        sich gewissermaßen skulptural in Gesine Grundmanns Arbeiten.
      </p>
      <p>
        Dass Vorstellung und Wissen über etwas oft zwei verschiedene Dinge sind,
        lässt sich beispielsweise an einer der insgesamt sechs gezeigten
        Arbeiten der Ausstellung O.T. (Rinde) verdeutlichen: Die Platten, die
        sich hier als klassische Bildträger präsentieren, erscheinen zunächst
        wie minimal abstrakte Malereien, schaut man genauer hin glaubt man darin
        in Form gebrachte Baumrinde zu erkennen – hier tritt das Material als
        Ambivalent auf, handelt es sich doch tatsächlich um Polyester dessen
        Oberfläche mit Steinpulver bearbeitet wurde. Die Frage nach Mimesis und
        Täuschung findet sich in vielen Arbeiten der Ausstellung und man mag es
        als Aufforderung verstehen: Die der Erkenntnisgewinnung durch das
        Überprüfen allgegenwertiger Seheindrücke.
      </p>
      <p>
        Ein weißer Kubus (Territories), die dritte Dimension des Quadrats und
        Äußerung von Volumen – eine einfache geometrische Figur, mit großer
        kunsthistorischer Aufladung. Diese wird aufgebrochen durch eine fast
        gegenläufige Richtungsbewegung – die Welle, eigentlich ein dynamischer
        Prozess, wird hier an den Kanten zusammengeführt und hält den Zustand
        von ewiger Spannung, als wäre dies nichts mehr als eine
        Selbstverständlichkeit. Das ursprünglich einfache Material des
        Wellblechs, das durch seine bearbeitete matte Oberfläche jegliche
        Spiegelung verschluckt, da der ursprünglich glänzende Kunststoff
        geschliffen wurde, verwandelt sich so in ein nahezu hochwertiges
        Material – mit einem Augenzwinkern wird hier das in Massenproduktion
        fabrizierte Nutzmaterial in neue Gebiete geführt.
      </p>
      <p>
        Hingegen bei der für die Ausstellung entstandenen neuen Arbeit Upstream
        ist das Material klar zu identifizieren, gar historisch: Eine seltene
        Art flachen Sedimentgesteins, welches als Abbruch, durchsiebt und
        geformt von Zeit und Gezeiten, an Küstenabschnitten Israels zu finden
        ist. Diese found-objects werden im Verbund auf einem Trägergrund, der
        sich vertikal in den Raum stellt, zum bildhauerischen Artefakt. Das
        Material bringt seine eigene Information mit, die hier einerseits
        wissenschaftlich deutbar, aber auch im reinen &bdquo;Sehen&ldquo; einen bildwerten
        Mehrwert generiert.
      </p>
      <p>
        Eine Ökonomie des Materials findet sich auch in der Arbeit Eisberg –
        hier schieben sich Styrodurplatten so ineinander, das sie den Eindruck
        des &bdquo;Gewachsen-seins&ldquo; hinterlassen, fliessend, Schicht um Schicht.
        Ähnlich wie bei Territories kommen hier zwei unterschiedliche Bewegungen
        zusammen: Der formalen Setzung folgt die Bewegung im Material.
      </p>
      <p>
        Diese Dualität von alltäglichem, einfachen Material, welches eine
        Umwandlung durch die Arbeit erfährt und andererseits die Transformation
        von werthaften Material in Einfaches fordert den Betrachter geradezu
        heraus das Gesehene zu erforschen, zu hinterfragen und die eigene
        Wahrnehmung zu testen. Ist das was ich sehe, das für das ich es halte?
        Dabei erschafft Grundmann eine minimale Bildsprache, die sich durch eine
        Verschränkung von Materialdiversität und Design, Hochkultur und Handwerk
        auszeichnet.
      </p>
      <p>
        Gesine Grundmann spürt in ihren Arbeiten das Potenzial von Material auf
        – indem sie Material austauscht, es ersetzt, auf- und abwertet, umdeutet
        und es schließlich auf die Probe stellt. So auch in der Arbeit Sunday
        Morning, einer Kollaborationsarbeit zwischen der Künstlerin und der
        Malerin Sabine Tress. Reste von Bildproduktion, eines künstlerischen
        Prozesses, Zufall und Lenkung kommen hier zusammen. Die
        Zeichenhaftigkeit der Stiefel, als trendiges Gebrauchsstück oder als das
        amerikanischste aller Symbole, tritt hinter ihrer Materialität zurück.
        In diesem Umgang mit Skulptur liegt eine große Freiheit - Warum nicht
        heute mit Muscheltasche ausgehen?
      </p>
      <p className="copyright">Copyright by Carla Donauer, 2013</p>
    </>
  )
}

function HeymContent() {
  return (
    <>
      <h2>
        Michael Heym:
        <br />
        Das Unsichtbare im Blick
      </h2>
      <p>
        Zwischen Kampfstern Galactica und Museum Koenig war noch eine Lücke zu
        füllen, die im Alltag beginnt und im zeitgenössischen
        Ausstellungskontext endet. Gesine Grundmann hat diesen Zusammenhang
        schnell erkannt und gleich gehandelt. 2007 erweckt sie den &bdquo;Großen
        Rheinischen Tiger&ldquo; zum Leben um ihm ein Dasein in der Asservatenkammer
        zu ersparen, ganz so, als führte sie mit den aneinander genähten
        Schaffellen ein Beweismittel vor, um für die ausgestorben geglaubte Art
        lebendiger Seelen zu werben. Hier steckt zwar der Witz im Fell und die
        Pointe liegt außerhalb des Konzepts, aber das ist erst der Anfang. Denn
        &bdquo;Grundmann&ldquo; und &bdquo;grundständig&ldquo; ist schließlich Tautologie genug, das
        reicht für ein Leben. Anders als in vielen zeitgenössischen Kunstsparten
        üblich, wird der Wahrnehmung hier nicht die Rolle eines
        sklavisch-funktionalen Konzept-Erfüllungsgehilfen zugewiesen, sondern
        sie selbst ist Gegenstand der Betrachtung. So auch bei den Dosen aus
        glasierter Keramik (2009-2010), deren ganzes Dasein in ihrem
        Ähnlichkeitsstreben zu ihren blechern nackten Vorbildern besteht. Nur
        durch die neugierige Betrachtung formt sich urplötzlich aus der
        scheinbar allzu bekannten Hohlform des Wegwerfprodukts die sinnliche
        Erkenntnis eines Volumens. Nicht, dass es um eine Art Meta-Dose als
        Stellvertreter für alle Blechbüchsen zwischen Pokalersatz und
        Konservierungswahn ginge, viel eher demonstriert die organische
        Materialität eine selbstverständliche Gelassenheit, die sich jenseits
        der funktionalen Eindimensionalität administrativer Produktsprache auf
        die Leistung der Sinne stützt. Denn nur durch das überprüfend genaue
        Hinsehen kann sich die Erkenntnis eines intuitiv erfassbaren Ganzen
        einstellen. Der Materialshift von Leichtmetall zu platiniertem Ton
        leistet dabei eine Verdichtung von Material, Wörtlichkeit und
        übertragenem Sinn auf einmal indem er etwas von jener lebendigen
        Intensität zu transportieren vermag, die Idee und Realisation
        unmittelbar vorausgegangen ist.
      </p>
      <p>
        Ganz ähnlich verhält es sich mit dem auf den Sockel gehievten Gemüse (
        &bdquo;Gemüsehaufen&ldquo; 2010). Es kann jeglichen Anflug von Post-Pop Gehabe
        souverän in den Haufen abschütteln, in dem es steckt, der beliebte
        Gegensatz von Massenprodukt und Individuum ist dabei längst überwunden.
        Nicht zugunsten einer peinlich genauen Nachahmung nach der Natur,
        sondern um mit dem Mittel der Mimesis aus Blitzbeton, Kunststoff und
        verschieden farbigen Metallpulvern in einer Tradition zu stehen, die
        sich einst auf den Weg machte mit der Soft-Sculpture Knautschigkeit
        etwas anzudeuten, was geradezu ungehörig klingt: Nämlich im
        Wiedererkennen des eigenen Blicks Schönheit zu empfinden.
      </p>
      <p className="copyright">Copyright by Michael Heym, 2010</p>
    </>
  )
}

const textPages: Record<string, () => React.JSX.Element> = {
  uhr: UhrContent,
  hirsch: HirschContent,
  aberle: AberleContent,
  donauer: DonauerContent,
  heym: HeymContent,
}

export default async function TextPage({ params }: PageProps) {
  const { slug } = await params
  const ContentComponent = textPages[slug]

  if (!ContentComponent) {
    notFound()
  }

  return (
    <div className="textpage-wrapper">
      <BackArrow />
      <ContentComponent />
    </div>
  )
}
