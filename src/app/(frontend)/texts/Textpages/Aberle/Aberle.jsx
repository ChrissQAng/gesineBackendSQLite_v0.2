import BackArrow from "../../../../components/Backarrow/Backarrow";
import "./Aberle.css";

const Aberle = () => {
  return (
    <div className="aberle-wrapper">
      <BackArrow />
      <h2>
        Christian Aberle:
        <br /> Handgeblasene Mundstücke
      </h2>
      <div className="aberle-content">
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
          Doch auch Gesines zur 14“ LP abgewandelte Flexscheibe (1) ließe sich,
          trotz Übergröße, durchaus auf einem Plattenspieler abspielen; so wie
          eigentlich jedes einigermaßen flache Objekt mit einem Loch in der
          Mitte. Der Sound, der durch die, mit feinen Gesteinspartikeln
          beschichtete, Kunststoffoberfläche entstünde, gefiele wohl dem
          „Minister für Kratzen, Kreischen und Dröhnen“ aus einem frühen
          LUSTIGEN TASCHENBUCH von Walt Disney (2), unter dessen Regie alle
          möglichen Störgeräusche erzeugt und in alle Welt transportiert werden.
          I Serenade ist geradezu eine Allegorie für Klang und Musik als
          Gesamtheit, jedoch: Die Pseudo-Platte befindet sich in einem Schrein.
          Sie ist nicht als Trägerin eines Soundpiece, sondern als
          “bildhauerische Druckgrafik“ konzipiert, wie die Künstlerin selbst
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
      <div className="aberle-quotations">
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
    </div>
  );
};

export default Aberle;
