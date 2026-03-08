import React from 'react'
import BackArrow from '@/components/BackArrow/BackArrow'
import './imprint.css'

export default async function ImprintPage() {
  return (
    <div className="imprint-wrapper">
      <BackArrow />
      <h2>impressum</h2>

      <p>
        verantwortlich im Sinne des TDG/MDStV - <i>Gesine Grundmann</i>
      </p>
      <p>
        Gestaltung der Webseite - <i>Christian Angerer &amp; Gesine Grundmann</i>
      </p>
      <p>
        Fotografien -{' '}
        <i>
          Markus Bollen, Pola Brändle, Ivo Faber, Tamera Lorenz, Gert Jan van Rooij, Therese
          Schuleit, Gerlinde Thuma, Uli Westerfrölke &amp; Michael Witttassek
        </i>
      </p>

      <p>
        Copyright by <i>Gesine Grundmann</i>, 2025
      </p>
      <p className="fine-print">
        Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten
        oder Bildmaterial bedarf meiner vorherigen Zustimmung. Das gesamte Online-Angebot, d.h. die
        Site als Ganze und die dort veröffentlichten Texte, Bilder, Animationen u.a. unterliegen dem
        Urheberrecht, das Copyright bleiben allein bei mir. Eine Vervielfältigung oder Verwendung
        des Layouts, der Grafiken, Dateien und Texte in anderen elektronischen oder gedruckten
        Publikationen, auch in Auszügen, ist ohne eine schriftliche Genehmigung nicht gestattet. Die
        private Verwendung von zum Download angebotenen Dokumenten und Bildern ist ausdrücklich
        gestattet unter der Bedingung, dass alle Angaben zur Quelle und zur Urheberschaft erhalten
        bleiben und die Materialien nicht verändert werden.
      </p>
      <div className="imprint-angerer">
        <p>Technische Umsetzung der Webseite</p>
        <p className="angerer">Christian Angerer</p>
        <p>Techniken der Umsetzung</p>
        <ul>
          <li>Next.js / React</li>
          <li>PAYLOAD CMS</li>
          <li>SQLite</li>
          <li>Apache HTTP Server</li>
        </ul>
      </div>
      <div className="imprint-contact">
        <h3>Kontakt</h3>
        <a href="mailto:mail@gesinegrundmann.org">
          <i>Gesine Grundmann</i> - mail@gesinegrundmann.org
        </a>
        <a href="mailto:chrissangerer@web.de">
          <i>Christian Angerer</i> - chrissangerer@web.de
        </a>
      </div>
    </div>
  )
}
