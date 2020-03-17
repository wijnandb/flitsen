var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var phrases = [
  'het diploma',
  'het etiket',
  'de familie',
  'de finale',
  'horizontaal',
  'de kampioen',
  'minimaal',
  'de organisatie',
  'de pagina',
  'het podium',
  'de radio',
  'het stadion',
  'de televisie',
  'de video',
  'de visite',
  'bereiken'];
  /*,
  'het geheim',
  'de scheiding',
  'het seizoen',
  'verscheidene',
  'de afwijking',
  'belangrijk',
  'het onderwijs',
  'vergelijken',
  'augustus',
  'de autobus',
  'de automaat',
  'de flauwerik',
  'nauwkeurig',
  'de pauze',
  'betrouwbaar',
  'ouderwets',
  'de verbouwing',
  'het wantrouwen',
  'betonnen',
  'diamanten',
  'glazen',
  'gouden',
  'houten',
  'katoenen',
  'koperen',
  'leren',
  'papieren',
  'porseleinen',
  'stalen',
  'stenen',
  'wollen',
  'ijzeren',
  'zilveren',
  'echte',
  'gebreide',
  'gekochte',
  'versierde',
  'zwarte',
  'blamage',
  'collage',
  'energie',
  'montage',
  'origineel',
  'passagier',
  'rage',
  'ravage',
  'tatoeage',
  'broche',
  'brochure',
  'charme',
  'Chinese',
  'fiche',
  'hartchirurg',
  'lunchtijd',
  'machinaal',
  'machinefabriek',
  'recherche',
  'dromen',
  'horen',
  'komen',
  'wijzen',
  'zitten',
  'beantwoorden',
  'bieden',
  'houden',
  'landen',
  'raden',
  'redden',
  'rijden',
  'schudden',
  'vinden',
  'worden',
  'hebben',
  'kunnen',
  'mogen',
  'zijn',
  'zullen',
  'het Binnenhof',
  'Den Haag',
  'Hollandse',
  'de Ridderzaal',
  'de gouden eeuw',
  'Koninginnedag',
  'de middeleeuwen',
  'de Tweede Wereldoorlog',
  'Ajax',
  'de ANWB',
  'de Volkskrant',
  'de Gouden Koets',
  'middeleeuwse',
  'Prinsjesdag',
  'blazen',
  'blijven',
  'geven',
  'zoeken',
  'vinden',
  'weten',
  'worden',
  'zitten',
  'instorten',
  'ontmoeten',
  'starten',
  'stoten',
  'antwoorden',
  'opladen',
  'uitbreiden',
  'verspreiden',
  'beloven',
  'durven',
  'reizen',
  'verbazen',
  'het beddengoed',
  'de boekenbon',
  'de hartenwens',
  'de heggenschaar',
  'het kippenvel',
  'de koekenpan',
  'de krentenbol',
  'de kurkentrekker',
  'de lampenkap',
  'de schroevendraaier',
  'de vlaggenstok',
  'het geboortekaartje',
  'het gemeentehuis',
  'het horlogebandje',
  'de secondewijzer',
  'de paddestoel',
  'apetrots',
  'beregoed',
  'het spinnewiel',
  'de verrekijker',
  'aankleden',
  'besteden',
  'branden',
  'leiden',
  'opvoeden',
  'feesten',
  'lusten',
  'praten',
  'vergroten',
  'vluchten',
  'opletten',
  'redden',
  'schudden',
  'spitten',
  'zetten',
  'beleven',
  'eten',
  'geloven',
  'snijden',
  'verhuizen',
  'de bakkerswinkel',
  'doodsbang',
  'het dorpsfeest',
  'hemelsblauw',
  'de meisjeskleren',
  'de meisjesstem',
  'het meningsverschil',
  'het reddingsvest',
  'de stadsbus',
  'het stadscentrum',
  'het verjaardagsfeest',
  'de verwarmingsketel',
  'de vierbaansweg',
  'het voorjaarszonnetje',
  'de watersnood',
  'het fietsslot',
  'de kerncentrale',
  'het maanlicht',
  'de windstilte',
  'het zwemvest',
  'bedoelen',
  'beloven',
  'beperken',
  'bereiken',
  'beschuldigen',
  'betalen',
  'bewaren',
  'gebeuren',
  'gebruiken',
  'geloven',
  'veranderen',
  'verbazen',
  'verbranden',
  'verdoven',
  'vergissen',
  'verhuizen',
  'vernielen',
  'verstoppen',
  'vertellen',
  'verwachten',
  'het aardbeienijs',
  'de bejaardenverzorgster',
  'de fietsenmaker',
  'de krantenbezorger',
  'de pannenkoek',
  'de garagedeur',
  'de hoogtevrees',
  'de lachebek',
  'reuzegoed',
  'stekeblind',
  'de afdelingschef',
  'de doktersassistente',
  'de gezinsverzorgster',
  'de schoonheidsspecialiste',
  'de veiligheidsspeld',
  'de verkeersagent',
  'de verkeerssituatie',
  'de verwarmingsmonteur',
  'de dwarsstraat',
  'muisstil',
  'de adressen',
  'de apparaten',
  'de illustratie',
  'interessant',
  'de kennissen',
  'de lading',
  'de leraressen',
  'de levensmiddelen',
  'het litteken',
  'de maatschappij',
  'de mohammedaan',
  'de omgeving',
  'onmiddellijk',
  'de overwinning',
  'de processen',
  'de rebussen',
  'de reebokken',
  'de vlammenzee',
  'de zebrapaden',
  'de zeerovers',
  'Argentinië',
  'Azië',
  'beïnvloeden',
  'bingoën',
  'de egoïst',
  'geïnteresseerd',
  'de heroïne',
  'judoën',
  'het mozaïek',
  'naïef',
  'het auto-ongeluk',
  'de diploma-uitreiking',
  'de file-ellende',
  'na-apen',
  'de video-opname',
  'de zee-egel',
  'de Noord-Brabander',
  'West-Europese',
  'Zuid-Amerika',
  'het evenwicht',
  'de gemeenteraad',
  'geregeld',
  'inderdaad',
  'de invloed',
  'langzamerhand',
  'het miljard',
  'de noodzaak',
  'onbekend',
  'ontzettend',
  'het sterrenbeeld',
  'de tegenstand',
  'tienduizend',
  'het verbod',
  'het voedsel',
  'de voorraad',
  'voortdurend',
  'het wisselgeld',
  'de zilvervliesrijst',
  'Zwitserland',
  'het café',
  'het comité',
  'de logé',
  'oké',
  'privé',
  'de carrière',
  'de crèche',
  'de crème',
  'hè',
  'de criteria',
  'de minima',
  'de musea',
  'de critici',
  'de technici',
  'het artikel',
  'de benzine',
  'de biologie',
  'het dieet'
*/

var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.result');
//var diagnosticPara = document.querySelector('.output');
var diagnosticPara = document.getElementById('progress-correct');
var diagnosticParb = document.getElementById('progress-wrong');
var diagnosticParc = document.getElementById('progress-understood');

var testBtn = document.querySelector('button');

var aantal_woorden = 0;
document.getElementById("total").innerHTML = aantal_woorden;
var aantal_goed = 0;
document.getElementById("correct").innerHTML = aantal_goed;
var aantal_fout = 0;
document.getElementById("wrong").innerHTML = aantal_fout;

function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}

function testSpeech() {
  testBtn.disabled = true;
  testBtn.textContent = '';

  var phrase = phrases[randomPhrase()];
//  var phrase = phrases[aantal_woorden]
  // To ensure case consistency while checking with the returned output text
//  phrase = phrase.toLowerCase();
  phrasePara.textContent = phrase;
//  resultPara.textContent = 'Goed of fout?';
//  resultPara.style.background = 'rgba(0,0,0,0.2)';
//  diagnosticPara.textContent = '...luisteren...';


  var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'nl-NL';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at position 0.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object 
    var speechResult = event.results[0][0].transcript;
    aantal_woorden += 1
    document.getElementById("total").innerHTML = aantal_woorden;
    if(speechResult.toLowerCase() === phrase.toLowerCase()) {
//      resultPara.textContent = speechResult;
      diagnosticPara.innerHTML += ' + ' + phrase + '<br>';
      diagnosticPara.style.background = '#33ff99';
      aantal_goed = aantal_goed + 1;
      document.getElementById("correct").innerHTML = aantal_goed;
    } else {
      diagnosticParb.innerHTML += ' - ' + phrase + '<br>';
      diagnosticParc.innerHTML += ' - ' + speechResult + '<br>';
      aantal_fout = aantal_fout + 1;
      document.getElementById("wrong").innerHTML = aantal_fout;
    }

    console.log('Zekerheid: ' + event.results[0][0].confidence);
    if (aantal_woorden > 9) {
      recognition.stop();
      testBtn.disabled = false;
      testBtn.textContent = 'Nog een keertje?';
    }
  }

  recognition.onspeechend = function() {
    // hier kun je een timer inzetten die na halve seconde nieuw woord geeft
    // nu zo aangepast dat automatisch nieuw woord wordt gevraagd
    // onderstaande drie waren ongecomment in origineel
  //  recognition.stop();
  //  testBtn.disabled = false;
  //  testBtn.textContent = 'Start new test';
  // hierdoor wordt nieuw woord gevraagd, toegevoegd als alternatief
  testSpeech()
  }

  recognition.onerror = function(event) {
    testBtn.disabled = false;
    testBtn.textContent = 'Start new test';
//    diagnosticPara.textContent = 'Fout in spraakherkenning: ' + event.error;
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
}

testBtn.addEventListener('click', testSpeech);

