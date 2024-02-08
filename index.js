// die Fragen
const Fragen = [
  {
    Frage: "Wer ist das Autory von 'Dom Casmurro'?",
    Antwörter: [
      "Machado de Assis",
      "Gabriel Garcia Marquez",
      "Jorge Luis Borges",
    ],
    richtig: 0
  },
  {
    Frage: "Wie heißt der Protagonist von 'Dom Casmurro'?",
    Antwörter: [
      "Quincas Borba",
      "Bentinho",
      "Capitu",
    ],
    richtig: 1
  },
  {
    Frage: "Was ist die literarische Genre von 'Dom Casmurro' belong?",
    Antwörter: [
      "Liebesroman",
      "Science Fiction",
      "Mystery",
    ],
    richtig: 0
  },
  {
    Frage: "Was ist der echte Name von Dom Casmurro im Romanz?",
    Antwörter: [
      "Bento Santiago",
      "Pedro Diniz",
      "Augusto Matraga",
    ],
    richtig: 0
  },
  {
    Frage: "Was ist die Beziehung zwischen Bentinho und Capitu?",
    Antwörter: [
      "Geschwistern",
      "Cousins",
      "Kindheit Freunde",
    ],
    richtig: 1
  },
  {
    Frage: "Welche brasilienische Bewegung hängt mit 'Dom Casmurro' zusammen?",
    Antwörter: [
      "Modernismus",
      "Romantismus",
      "Realismus",
    ],
    richtig: 2
  },
  {
    Frage: "Was ist die Spitzname des Erzählers im Roman?",
    Antwörter: [
      "Dom Quixote",
      "Dom Casmurro",
      "Dom Augusto",
    ],
    richtig: 1
  },
  {
    Frage: "Wo findet die Geschichte von 'Dom Casmurro' hauptsächlich Platz?",
    Antwörter: [
      "Rio de Janeiro",
      "São Paulo",
      "Brasília",
    ],
    richtig: 0
  },
  {
    Frage: "Welches symbolische Tir ist oft mit mit Capitu im Roman assoziiert?",
    Antwörter: [
      "Löwe",
      "Schlange",
      "Tiger",
    ],
    richtig: 1
  },
  {
    Frage: "Welcher Satz des Romans ist mit Zweifeln und Verdacht assoziirt?",
    Antwörter: [
      "Sein order Nichtsein",
      "Zu haben und zu halten",
      "Capitu, meine Seele",
    ],
    richtig: 2
  },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const dieDieStimmt = new Set()
const gesamtFragen = Fragen.length
const zeigGesamt = document.querySelector('#Treffer span')
zeigGesamt.textContent = dieDieStimmt.size + ' aus ' + gesamtFragen

// Schleife (Wiedergabe)
for(const item of Fragen) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.Frage
  
  for(let Antwort of item.Antwörter) {
    //Das befehlt, das Program dt in dl finden und durch die Inhalten dt zu suchen
    //Die Linie darunter befehlt, welchem Inhalt wir suchen... 
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = Antwort
    dt.querySelector('input').setAttribute('name', 'Frage-' + Fragen.indexOf(item))
    //Das hier ↑ füge eine Name für jede Frage hinzu, um der Auswahl zu begrenzen.
    dt.querySelector('input').value = item.Antwörter.indexOf(Antwort)
    //Das hier ↑ erlaubt das Wert der Antwort zu bekommen. 
    //Damit ↑ können wir die richtige Antwort verifizieren
    dt.querySelector('input').onchange = (event) => {
      const stimmtDas = event.target.value == item.richtig
      
      dieDieStimmt.delete(item)
      if(stimmtDas) {
          dieDieStimmt.add(item)
      }

    zeigGesamt.textContent = dieDieStimmt.size + ' aus ' + gesamtFragen

    }
    //Das hängt alle Inhalten dls an.
    quizItem.querySelector('dl').appendChild(dt)
}
//Das entfernt die Vorlagsfrage
quizItem.querySelector('dl dt').remove()

// Füge die Fragen im Bildschirm hinzu! ↓
  quiz.appendChild(quizItem)
}
