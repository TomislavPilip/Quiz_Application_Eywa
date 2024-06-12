const QuestionsData = {
  questions: [
    {
      question_text:
        "Koja je zaštićena azijska zvijer, latinskog naziva Panthera uncia, nacionalni simbol Afganistana i Kirgistana te je često zvana i 'duhom Himalaje'?",
      category: {
        category_name: "Prirodne znamenitosti",
      },
      levels: {
        level_description: "Beginner level",
        level_number: 1,
      },
      answers: [
        {
          answer_text: "Bengalski tigar",
          is_correct: false,
        },
        {
          answer_text: "Snježni leopard",
          is_correct: true,
        },
        {
          answer_text: "Crna Pantera",
          is_correct: false,
        },
        {
          answer_text: "Karakal",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "Ako znamo da je ovaj roman, uz Životinjsku farmu, najpoznatije djelo njegova tvorca, i ako se u njemu pojavljuju Winston Smith, Emmanuel Goldstein, te sve kontrolira Veliki Brat, o kojem je književnom klasiku riječ?",
      category: {
        category_name: "Književnost",
      },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        {
          answer_text: "1984",
          is_correct: true,
        },
        {
          answer_text: "2055",
          is_correct: false,
        },
        {
          answer_text: "1001",
          is_correct: false,
        },
        {
          answer_text: "1945",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "U Louvru se nalazi kip Miloske Venere. Koji dio tijela joj nedostaje?",
      category: {
        category_name: "Umjetnost",
      },
      levels: {
        level_description: "Beginner level",
        level_number: 1,
      },
      answers: [
        {
          answer_text: "Ruke",
          is_correct: true,
        },
        {
          answer_text: "Noge",
          is_correct: false,
        },
        {
          answer_text: "Glava",
          is_correct: false,
        },
        {
          answer_text: "Trup",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "Mali princ je remekdjelo svjetske književnosti. U njemu se pojavljuje niz životinja. Jedna od njih moli Malog princa da ju pripitomi kako bi bili prijatelji i potrebni jedno drugom. O kojoj je to životinji riječ u ovom pitanju?",
      category: {
        category_name: "Književnost",
      },
      levels: {
        level_description: "Beginner level",
        level_number: 1,
      },
      answers: [
        {
          answer_text: "Roda",
          is_correct: false,
        },
        {
          answer_text: "Lisica",
          is_correct: true,
        },
        {
          answer_text: "Zec",
          is_correct: false,
        },
        {
          answer_text: "Kornjaca",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "Matija u Matija Gubec je samo nadimak. Navedite pravo ime vođe Seljačke bune, Matije Gubca.",
      category: {
        category_name: "Povijest",
      },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        {
          answer_text: "Ambroz",
          is_correct: true,
        },
        {
          answer_text: "Ilija",
          is_correct: false,
        },
        {
          answer_text: "Ivan",
          is_correct: false,
        },
        {
          answer_text: "Nikola",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "Autor knjige “Kraj povijesti i posljednji čovjek”, u njoj je, gledajući poraze komunističkih sustava sa početka devedesetih, proglasio kraj povijesti i pobjedu liberalne demokracije. Kako se zove ovaj američki politički filozof japanskoga podrijetla?",
      category: {
        category_name: "Politika",
      },
      levels: {
        level_description: "Advanced level",
        level_number: 3,
      },
      answers: [
        {
          answer_text: "Henry Kissinger",
          is_correct: false,
        },
        {
          answer_text: "Samuel P. Huntington",
          is_correct: false,
        },
        {
          answer_text: "Francis Fukuyama",
          is_correct: true,
        },
        {
          answer_text: "Russell Kirk",
          is_correct: false,
        },
      ],
    },
    {
      question_text:
        "Kako se zove tehnologija koja se koristi za povecavanje ucinkovitosti i brzine web stranice. Da pitanje malo olaksamo. Znamo da tu tehnologiju koristi JavaScript, ali i da je pod tim imenom jedan klub davnih 70-ih osvojio Ligu prvaka tri godine za redom. O kojoj se tocno tehnologiji ili klubu radi?",
      category: { category_name: "Tehnologija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Benfica", is_correct: false },
        { answer_text: "Ajax", is_correct: true },
        { answer_text: "Inter", is_correct: false },
        { answer_text: "Milan", is_correct: false },
      ],
    },
    {
      question_text:
        "Za Messija mnogi kažu da izluđuje protivnike na terenu. Iz toga dolazi i jedan od njegovih životopisnijih nadimaka kojeg je dobio po stvoru iz životinjskog svijeta. Kojem?",
      category: { category_name: "Sport" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Komarac", is_correct: false },
        { answer_text: "Buha", is_correct: true },
        { answer_text: "Mrav", is_correct: false },
        { answer_text: "Cvrcak", is_correct: false },
      ],
    },
    {
      question_text:
        "Jedan od najpoznatijih poglavica svih vremena, na jeziku svog plemena zvao se Tatanka Iyotanka. Kako se on zove ako njegovo ime prevedemo na hrvatski?",
      category: { category_name: "Povijest" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Geronimo", is_correct: false },
        { answer_text: "Tupi noz", is_correct: false },
        { answer_text: "Ludi konj", is_correct: false },
        { answer_text: "Bik koji sjedi", is_correct: true },
      ],
    },
    {
      question_text:
        "Pomiluje vlat trave, nježno, lijevim pa desnim obrazom: nikada se više nećemo… I tebe će zgaziti. A mravu reče – pod zemlju, nesretniče! I Zemlju poljubi još jednom, za oproštaj – zbogom – onda krene četveronoške za zovom uplašenih zvijeri – ne vičite, dolazim – i otplazi bratski u izbezumljeni grad Zoopolis. Ovo je kraj jednog hrvatskog romana. Kojeg?",
      category: { category_name: "Književnost" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Na rubu pameti", is_correct: false },
        { answer_text: "Proljeca Ivana Galeba", is_correct: false },
        { answer_text: "Kiklop", is_correct: true },
        { answer_text: "Povratak Filipa Latinovicza", is_correct: false },
      ],
    },
    {
      question_text:
        "U Beču se tijekom 1814. i 1815. održao veliki politički skup koji je trebao odrediti smjernice postnapoleonske Europe. Taj događaj je u povijesti ostao zabilježen kao Bečki kongres. Organizator cijelog eventa bio je austrijski ministar vanjskih poslova. Kako se on zvao?",
      category: { category_name: "Povijest" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Genscher", is_correct: false },
        { answer_text: "Metternich", is_correct: true },
        { answer_text: "Kurtz", is_correct: false },
        { answer_text: "Merkel", is_correct: false },
      ],
    },
    {
      question_text:
        "U jednoj pjesmi Ivan Gundulić opisuje izlazak jedne božice iz mora. Kako se zove ta božica?",
      category: { category_name: "Književnost" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Venera", is_correct: true },
        { answer_text: "Hera", is_correct: false },
        { answer_text: "Atena", is_correct: false },
        { answer_text: "Afrodita", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove poznati tvorac stripa Peanuts, u kojem se pojavljuju Charlie Brown, Snoopy i Lucy?",
      category: { category_name: "Strip" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Walt Disney", is_correct: false },
        { answer_text: "Charles Schulz", is_correct: true },
        { answer_text: "Stan Lee", is_correct: false },
        { answer_text: "Matt Groening", is_correct: false },
      ],
    },
    {
      question_text: "Koje boje je dominantna boja na talijanskoj zastavi?",
      category: { category_name: "Zastave" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Plava", is_correct: false },
        { answer_text: "Bijela", is_correct: false },
        { answer_text: "Crvena", is_correct: false },
        { answer_text: "Zelena", is_correct: true },
      ],
    },
    {
      question_text: "Koji je glavni grad Italije?",
      category: { category_name: "Geografija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Firenca", is_correct: false },
        { answer_text: "Napulj", is_correct: false },
        { answer_text: "Venecija", is_correct: false },
        { answer_text: "Rim", is_correct: true },
      ],
    },
    {
      question_text: "Koja je najviša planina na svijetu?",
      category: { category_name: "Priroda" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Kilimanjaro", is_correct: false },
        { answer_text: "Mont Blanc", is_correct: false },
        { answer_text: "Mount Everest", is_correct: true },
        { answer_text: "K2", is_correct: false },
      ],
    },

    {
      question_text: "Koji je najdublji ocean na svijetu?",
      category: { category_name: "Priroda" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Atlantski ocean", is_correct: false },
        { answer_text: "Indijski ocean", is_correct: false },
        { answer_text: "Tihi ocean", is_correct: true },
        { answer_text: "Arktički ocean", is_correct: false },
      ],
    },
    {
      question_text: "Koji je glavni grad Francuske?",
      category: { category_name: "Geografija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Marseille", is_correct: false },
        { answer_text: "Lyon", is_correct: false },
        { answer_text: "Pariz", is_correct: true },
        { answer_text: "Nica", is_correct: false },
      ],
    },
    {
      question_text: "Kako se zove najduža rijeka na svijetu?",
      category: { category_name: "Priroda" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Nil", is_correct: true },
        { answer_text: "Amazon", is_correct: false },
        { answer_text: "Mississippi", is_correct: false },
        { answer_text: "Yangtze", is_correct: false },
      ],
    },
    {
      question_text: "Koji je najviši vodopad na svijetu?",
      category: { category_name: "Priroda" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Niagara", is_correct: false },
        { answer_text: "Victoria", is_correct: false },
        { answer_text: "Angel", is_correct: true },
        { answer_text: "Iguazu", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove najpoznatiji detektiv iz književnosti, kojeg je stvorio Arthur Conan Doyle?",
      category: { category_name: "Književnost" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Hercule Poirot", is_correct: false },
        { answer_text: "Sherlock Holmes", is_correct: true },
        { answer_text: "Miss Marple", is_correct: false },
        { answer_text: "Philip Marlowe", is_correct: false },
      ],
    },
    {
      question_text: "Koji planet je najbliži Suncu?",
      category: { category_name: "Astronomija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Venera", is_correct: false },
        { answer_text: "Mars", is_correct: false },
        { answer_text: "Zemlja", is_correct: false },
        { answer_text: "Merkur", is_correct: true },
      ],
    },
    {
      question_text: "Koji planet je poznat kao crveni planet?",
      category: { category_name: "Astronomija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Jupiter", is_correct: false },
        { answer_text: "Mars", is_correct: true },
        { answer_text: "Saturn", is_correct: false },
        { answer_text: "Venera", is_correct: false },
      ],
    },
    {
      question_text: "Koja je najsvjetlija zvijezda na noćnom nebu?",
      category: { category_name: "Astronomija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Sirius", is_correct: true },
        { answer_text: "Polaris", is_correct: false },
        { answer_text: "Betelgeuse", is_correct: false },
        { answer_text: "Vega", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove najpoznatija formula u fizici koju je postavio Albert Einstein?",
      category: { category_name: "Fizika" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "F = ma", is_correct: false },
        { answer_text: "E = mc^2", is_correct: true },
        { answer_text: "V = IR", is_correct: false },
        { answer_text: "P = F/A", is_correct: false },
      ],
    },
    {
      question_text: "Koji je najtvrđi prirodni mineral na svijetu?",
      category: { category_name: "Priroda" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Kvarc", is_correct: false },
        { answer_text: "Topaz", is_correct: false },
        { answer_text: "Korund", is_correct: false },
        { answer_text: "Dijamant", is_correct: true },
      ],
    },
    {
      question_text: "Koji je simbol za kemijski element kisik?",
      category: { category_name: "Kemija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "O", is_correct: true },
        { answer_text: "K", is_correct: false },
        { answer_text: "H", is_correct: false },
        { answer_text: "N", is_correct: false },
      ],
    },
    {
      question_text: "Koji je kemijski element poznat kao 'Au'?",
      category: { category_name: "Kemija" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Srebro", is_correct: false },
        { answer_text: "Zlato", is_correct: true },
        { answer_text: "Željezo", is_correct: false },
        { answer_text: "Bakar", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove najpoznatiji spomenik u Parizu, izgrađen za Svjetsku izložbu 1889. godine?",
      category: { category_name: "Arhitektura" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Kip slobode", is_correct: false },
        { answer_text: "Brandenburška vrata", is_correct: false },
        { answer_text: "Eiffelov toranj", is_correct: true },
        { answer_text: "Big Ben", is_correct: false },
      ],
    },
    {
      question_text: "Koji je najduži zid na svijetu?",
      category: { category_name: "Arhitektura" },
      levels: { level_description: "Beginner level", level_number: 1 },
      answers: [
        { answer_text: "Kineski zid", is_correct: true },
        { answer_text: "Zid plača", is_correct: false },
        { answer_text: "Hadrijanov zid", is_correct: false },
        { answer_text: "Berlinski zid", is_correct: false },
      ],
    },

    {
      question_text:
        "Najveća arena na US Openu nosi ime tenisača Arthura Ashea. Druga po veličini nosi ime legendarnog glazbenika. Kako se on zove?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Frank Sinatra", is_correct: false },
        { answer_text: "Louis Armstrong", is_correct: true },
        { answer_text: "Chuck Berry", is_correct: false },
        { answer_text: "Robert Johnson", is_correct: false },
      ],
    },
    {
      question_text:
        "Ova hrvatska utvrda ulazi u priču o tvrđavama bez predavanja. Kako se zove ova utvrda, osvojena 1578. od strane Turaka, gdje su se svi branitelji navodno smrznuli?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Expert level",
        level_number: 3,
      },
      answers: [
        { answer_text: "Siget", is_correct: false },
        { answer_text: "Klis", is_correct: false },
        { answer_text: "Gvozdansko", is_correct: true },
        { answer_text: "Bribir", is_correct: false },
      ],
    },
    {
      question_text:
        "Prvo spominjanje imena Šibenika datira se u 1066. godinu. U darovnici ga tada spominje ondašnji hrvatski vladar. Kako se on zove?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Branimir", is_correct: false },
        { answer_text: "Trpimir", is_correct: false },
        { answer_text: "Dmitar Zvonimir", is_correct: false },
        { answer_text: "Petar Krešimir IV", is_correct: true },
      ],
    },
    {
      question_text:
        "Jedan od najvećih preokreta u povijesti nogometa, dogodio se 26. lipnja 1999. g., na Camp Nouu u Barceloni. U finalu Lige prvaka, MANu je sa dva pogotka u sudačkoj nadoknadi uspio preokrenuti utakmicu, i pobijediti 2:1. Koja je ekipa tragični gubitnik iz ovog finala?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Bayern Munchen", is_correct: true },
        { answer_text: "Real Madrid", is_correct: false },
        { answer_text: "Olympique Marseille", is_correct: false },
        { answer_text: "Ajax Amsterdam", is_correct: false },
      ],
    },
    {
      question_text:
        "Tko je bio svjetski prvak u Formuli 1 2007. godine iako je uoči zadnje utrke bio tek treći u ukupnom poretku?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Fernando Alonso", is_correct: false },
        { answer_text: "Lewis Hamilton", is_correct: false },
        { answer_text: "Felipe Massa", is_correct: false },
        { answer_text: "Kimi Raikkonen", is_correct: true },
      ],
    },
    {
      question_text:
        "Zdravko i Zoran Mamić su rijetko kontroverzna braća u Hrvata. Nećemo ulaziti u njihove trenutne probleme sa zakonom, i pozicije u hrvatskom nogometu, već ćemo se posvetiti njihovom porijeklu. U kojem gradu su rođeni Mamići?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Velika Gorica", is_correct: false },
        { answer_text: "Slavonski Brod", is_correct: false },
        { answer_text: "Bjelovar", is_correct: true },
        { answer_text: "Ogulin", is_correct: false },
      ],
    },
    {
      question_text:
        "Jedan od najvećih mečeva svih vremena 1974. godine, omogućio je Aliu da ponovno postane svjetski prvak. Naime, u meču, poznatom kao Rumble in the Jungle, u 14. rundi pobjeđuje Georgea Foremana. U kojem gradu se održala ova povijesna borba?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Lusaka", is_correct: false },
        { answer_text: "Brazzaville", is_correct: false },
        { answer_text: "Luanda", is_correct: false },
        { answer_text: "Kinshasa", is_correct: true },
      ],
    },
    {
      question_text:
        "U Bibliji se pojavljuju dvije životinje koje imaju moć govora. O kojim je to životinjama riječ?",
      category: { category_name: "Religija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Zmija i magarac", is_correct: true },
        { answer_text: "Deva i konj", is_correct: false },
        { answer_text: "Ovca i koza", is_correct: false },
        { answer_text: "Krava i mrav", is_correct: false },
      ],
    },
    {
      question_text:
        "Nelson Mandela dobar dio života proveo je u zatvoru. Taj zatvor bio je smješten na jedan otok. Ako znamo da ime dijeli s prezimenom jednog nizozemskog nogometaša, o kojem se otoku radi?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Gakpo Island", is_correct: false },
        { answer_text: "Cruyf Island", is_correct: false },
        { answer_text: "Robben Island", is_correct: true },
        { answer_text: "Van Persie Island", is_correct: false },
      ],
    },
    {
      question_text:
        "Najstarije sveučilište u Europi osnovano je 1088. godine u Italiji. Recite nam u kojem gradu?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Milano", is_correct: false },
        { answer_text: "Bologna", is_correct: true },
        { answer_text: "Napulj", is_correct: false },
        { answer_text: "Firenza", is_correct: false },
      ],
    },
    {
      question_text: "Što je proglašeno istrebljenim 9. prosinca 1979. godine?",
      category: { category_name: "Znanost" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Sifilis", is_correct: false },
        { answer_text: "Ebola", is_correct: false },
        { answer_text: "Boginje", is_correct: true },
        { answer_text: "Kuga", is_correct: false },
      ],
    },
    {
      question_text:
        "Koji grad bio glavni grad Hrvatske sve do požara 1776. godine kada se centar vlasti seli u Zagreb?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Varaždin", is_correct: true },
        { answer_text: "Split", is_correct: false },
        { answer_text: "Rijeka", is_correct: false },
        { answer_text: "Osijek", is_correct: false },
      ],
    },
    {
      question_text:
        "Kojem otoku ime otkriva da se radi o jednom od najvećih nalazišta bakra na svijetu?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Malta", is_correct: false },
        { answer_text: "Korzika", is_correct: false },
        { answer_text: "Cipar", is_correct: true },
        { answer_text: "Kreta", is_correct: false },
      ],
    },
    {
      question_text:
        "Najveći hit ovog glazbenog sastava je o požaru u Švicarskoj, a pjevaju i o čudnim ženama. Jednoj iz Kentuckya, a bogami i o nekoj iz Japana. Tko su oni?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Deep Purple", is_correct: true },
        { answer_text: "Arctic Monkeys", is_correct: false },
        { answer_text: "Franz Ferdinand", is_correct: false },
        { answer_text: "Led Zeppelin", is_correct: false },
      ],
    },
    {
      question_text:
        "Jedan od najvećih rock glazbenika ikad zove se Robert Zimmerman. Iako ne zvuči najpoznatije, pravo je ime zvijezde koja se sakrila iza pseudonima. Kako se zvijezda zove?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Jim Morrison", is_correct: false },
        { answer_text: "Bob Dylan", is_correct: true },
        { answer_text: "Elvis Presley", is_correct: false },
        { answer_text: "Jimi Hendrix", is_correct: false },
      ],
    },
    {
      question_text:
        "Od kad je Hrvatska neovisna, daleko najpoznatiji hrvatski boksač je Željko Mavrović. Najblistaviji trenutak njegove karijere desio se 1998. godine, kada je dobio priliku boriti se za svjetsku titulu u teškoj kategoriji. Nažalost, nije uspio. Kako se, imenom i prezimenom, zvao boksač od kojeg je izgubio?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Vladimir Klitschko", is_correct: false },
        { answer_text: "Evander Holyfield", is_correct: false },
        { answer_text: "Mike Tyson", is_correct: false },
        { answer_text: "Lennox Lewis", is_correct: true },
      ],
    },
    {
      question_text:
        "Ako je mjesto zbivanja Oran, a o svemu piše Albert Camus, što točno pogađa ovaj alžirski grad?",
      category: { category_name: "Književnost" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Kuga", is_correct: true },
        { answer_text: "Glad", is_correct: false },
        { answer_text: "Rat", is_correct: false },
        { answer_text: "Potres", is_correct: false },
      ],
    },
    {
      question_text:
        "Koji roman počinje rečenicom: “Sve sretne obitelji nalik su jedna na drugu, svaka nesretna obitelj nesretna je na svoj način.”",
      category: { category_name: "Književnost" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Majstor i Margarita", is_correct: false },
        { answer_text: "Ana Karenjina", is_correct: true },
        { answer_text: "Rat i mir", is_correct: false },
        { answer_text: "Zločin i kazna", is_correct: false },
      ],
    },
    {
      question_text:
        "Godine 1993. Hrvatska prvi put nastupa kao samostalna država na Eurosongu. Predstavljala ju je grupa iz Rijeke, koja je izvodila pjesmu Don’t ever cry, i koja je, na kraju, zauzela 15. mjesto. Kako se zvao ovaj riječki sastav?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Laufer", is_correct: false },
        { answer_text: "Let 3", is_correct: false },
        { answer_text: "ENI", is_correct: false },
        { answer_text: "Putokazi", is_correct: true },
      ],
    },
    {
      question_text:
        "Popularna serija Igra Prijestolja zasnovana je na zbirci od sedam knjiga, pod imenom Pjesma leda i vatre. Tko je autor ovog književnog serijala?",
      category: { category_name: "Književnost" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "J.R.R. Tolkien", is_correct: false },
        { answer_text: "J.K. Rowling", is_correct: false },
        { answer_text: "G.R.R. Martin", is_correct: true },
        { answer_text: "A. Huxley", is_correct: false },
      ],
    },
    {
      question_text:
        "Tijekom Hladnog rata u mnogim istočnoeuropskim državama bile su na vlasti strahovlade. Najpoznatija je ona rumunjska sa Nicolaeom Causescuom na čelu. Kako se zvala tajna policija kojom je Causescu držao pod kontrolom Rumunjske?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "STASI", is_correct: false },
        { answer_text: "UDBA", is_correct: false },
        { answer_text: "SECURITATE", is_correct: true },
        { answer_text: "NKVD", is_correct: false },
      ],
    },
    {
      question_text:
        "Koja je Konamijeva franšiza, u kojoj pratimo glavnog lika Solid Snakea, jedna od najdugovječnijih i najuspješnijih igara u povijesti?",
      category: { category_name: "Igre" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Final Fantasy", is_correct: false },
        { answer_text: "Metal Gear Solid", is_correct: true },
        { answer_text: "Grand Theft Auto", is_correct: false },
        { answer_text: "Resident Evil", is_correct: false },
      ],
    },
    {
      question_text:
        "Dva najpoznatija filmska psa su Lesi i Rin Tin Tin. Lesi je vjerni škotski ovčar. Koje je pasmine Rin Tin Tin?",
      category: { category_name: "Film" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Njemački ovčar", is_correct: true },
        { answer_text: "Belgijski ovčar", is_correct: false },
        { answer_text: "Hrvatski ovčar", is_correct: false },
        { answer_text: "Švicarski ovčar", is_correct: false },
      ],
    },
    {
      question_text:
        "Kratko i jasno pitanje iz geografije. Koja je država najveća na afričkom kontinentu?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Nigerija", is_correct: false },
        { answer_text: "Alžir", is_correct: true },
        { answer_text: "Demokratska Republika Kongo", is_correct: false },
        { answer_text: "Mali", is_correct: false },
      ],
    },
    {
      question_text:
        "Jednu od najsmrtonosnijih bolesti ikad znamo po imenu koje nam je došlo iz talijanskog. Kad se prevede na hrvatski, dobili bi pojam 'loš zrak'. O kojoj je to bolesti riječ u ovome pitanju?",
      category: { category_name: "Medicina" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Trihineloza", is_correct: false },
        { answer_text: "Velike boginje", is_correct: false },
        { answer_text: "Ospice", is_correct: false },
        { answer_text: "Malarija", is_correct: true },
      ],
    },
    {
      question_text:
        "Hrvatska je 2005., osvojila i najcijenjenije tenisko momčadsko natjecanje, Davis cup. Momčad u sastavu Ljubičić, Ančić, Ivanišević i Karlović, u finalnom meču pobjedila je u gostima, rezultatom 3:2. Koga?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Veliku Britaniju", is_correct: false },
        { answer_text: "Francusku", is_correct: false },
        { answer_text: "SAD", is_correct: false },
        { answer_text: "Slovačku", is_correct: true },
      ],
    },

    {
      question_text:
        "Tijekom španjolskih osvajanja Amerika, glavna pokretačka snaga bila je nesmiljena žeđ za zlatom. Zato i ne čudi pomamna potraga za „zlatnim gradom”, i u Sjevernoj i u Južnoj Americi, koju započinju Španjolci, a potom se pridružuju i drugi. Koje je uvriježeno ime za ovaj legendarni zlatni grad?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Quivira", is_correct: false },
        { answer_text: "El Dorado", is_correct: true },
        { answer_text: "Tordesillas", is_correct: false },
        { answer_text: "Mexico City", is_correct: false },
      ],
    },
    {
      question_text:
        "Koje godine je Vladimir Putin postao predsjednik Ruske Federacije?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "2000.", is_correct: true },
        { answer_text: "1990.", is_correct: false },
        { answer_text: "2010.", is_correct: false },
        { answer_text: "2020.", is_correct: false },
      ],
    },
    {
      question_text: "U kojem se oceanu smjestio Biskajski zaljev?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Indijskom", is_correct: false },
        { answer_text: "Atlantskom", is_correct: true },
        { answer_text: "Tihom", is_correct: false },
        { answer_text: "Arktičkom", is_correct: false },
      ],
    },
    {
      question_text:
        "Poznat po velikom broju restorana i barova, distrikt Nyhavn jedna od najpoznatijih znamenitosti kojeg glavnog grada?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Oslo", is_correct: false },
        { answer_text: "Kopenhagen", is_correct: true },
        { answer_text: "Helsinki", is_correct: false },
        { answer_text: "Stockholm", is_correct: false },
      ],
    },
    {
      question_text:
        "Finsku zovu “Zemljom tisuću jezera”, a koja američka savezna država ima nadimak “Zemlja 10.000 jezera”?",
      category: { category_name: "Geografija" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Minnesota", is_correct: true },
        { answer_text: "Nebraska", is_correct: false },
        { answer_text: "Ohio", is_correct: false },
        { answer_text: "Virginia", is_correct: false },
      ],
    },
    {
      question_text:
        "Pored Rijeke nalazi se automoto staza svjetske klase. Kako se ona zove?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Šoderica", is_correct: false },
        { answer_text: "Monza", is_correct: false },
        { answer_text: "Grobnik", is_correct: true },
        { answer_text: "Malačka", is_correct: false },
      ],
    },
    {
      question_text:
        "Koga je časopis Time godine 1938. izabrao kao osobu godine?",
      category: { category_name: "Povijest" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Papu Pia XI.", is_correct: false },
        { answer_text: "Staljina", is_correct: false },
        { answer_text: "Hitlera", is_correct: true },
        { answer_text: "Einsteina", is_correct: false },
      ],
    },
    {
      question_text:
        "Koji pojam povezuje roman Miroslava Krleže i pjesmu Parnog valjka?",
      category: { category_name: "Književnost" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Uhvati ritam", is_correct: false },
        { answer_text: "Buđenje", is_correct: false },
        { answer_text: "Na rubu pameti", is_correct: true },
        { answer_text: "Zastave", is_correct: false },
      ],
    },
    {
      question_text:
        "Što označava riječ ahimsa, ako je to prvi i najpoznatiji princip u satyagrahi, poznatoj platformi otpora iz 20. stoljeća?",
      category: { category_name: "Filozofija i religija" },
      levels: {
        level_description: "Profesor",
        level_number: 3,
      },
      answers: [
        { answer_text: "Ubojstvo", is_correct: false },
        { answer_text: "Borba", is_correct: false },
        { answer_text: "Nenasilje", is_correct: true },
        { answer_text: "Smrt", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Za otkriće DNA strukture tri muškarca su dobila Nobelovu nagradu, a koja dama je po mnogima također zaslužila priznanje za to otkriće?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Expert level",
        level_number: 3,
      },
      answers: [
        { answer_text: "Ada Lovelace", is_correct: false },
        { answer_text: "Rosalind Franklin", is_correct: true },
        { answer_text: "Marie Curie", is_correct: false },
        { answer_text: "Jane Goodall", is_correct: false },
      ],
    },
    {
      question_text:
        "Alexa je Amazonova, Siri Appleova, Kortana Microsoftova, a koje vrlo jednostavno inedovitljivo ime nosi Googleov virtualni pomoćnik?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Gogi", is_correct: false },
        { answer_text: "John", is_correct: false },
        { answer_text: "Google Assistant", is_correct: true },
        { answer_text: "Donald", is_correct: false },
      ],
    },
    {
      question_text:
        "Koji red kukaca vrlo cesto čujemo kada netko objašnjava što je teorija kaosa?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Leptiri", is_correct: true },
        { answer_text: "Mravi", is_correct: false },
        { answer_text: "Pčele", is_correct: false },
        { answer_text: "Komarci", is_correct: false },
      ],
    },
    {
      question_text:
        "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Mellotron", is_correct: false },
        { answer_text: "Metronom", is_correct: true },
        { answer_text: "Kontrabas", is_correct: false },
        { answer_text: "Theremin", is_correct: false },
      ],
    },
    {
      question_text:
        "Leonardo iz Pise najzaslužniji je za jedan vrlo poznati niz brojeva, kojeg mi znamo pod kojim imenom, ako je ime niza jednako nadimku Leonarda?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Intermediate level",
        level_number: 2,
      },
      answers: [
        { answer_text: "Da Vincijev niz", is_correct: false },
        { answer_text: "Michelangelov niz", is_correct: false },
        { answer_text: "Fibonaccijev niz", is_correct: true },
        { answer_text: "Rafaelov niz", is_correct: false },
      ],
    },

    {
      question_text:
        "Koja tipka se nalazi u donjem lijevom kutu standardne Windows tipkovnice?",
      category: { category_name: "Glazba" },
      levels: {
        level_description: "Begginer level",
        level_number: 1,
      },
      answers: [
        { answer_text: "Alt", is_correct: false },
        { answer_text: "Space", is_correct: false },
        { answer_text: "Shift", is_correct: false },
        { answer_text: "Ctrl", is_correct: true },
      ],
    },
    {
      question_text:
        "Mirko Filipović svjetski je poznati borac, no manje je znano da je zaigrao i nogomet u drugoj hrvatskoj ligi. Za koji klub?",
      category: { category_name: "Sport" },
      levels: {
        level_description: "Profesor",
        level_number: 3,
      },
      answers: [
        { answer_text: "Orijent", is_correct: false },
        { answer_text: "Vukovar", is_correct: false },
        { answer_text: "Marsonia", is_correct: false },
        { answer_text: "Cibalia", is_correct: true },
      ],
    },
  ],
};

const formattedQuestions = QuestionsData.questions.map((question) => ({
  question_text: question.question_text,
  category: {
    category_name: question.category.category_name,
  },
  levels: {
    level_description: question.levels.level_description,
    level_number: question.levels.level_number,
  },
}));

const formattedAnswers = QuestionsData.questions.flatMap((question) =>
  question.answers.map((answer) => ({
    answer_text: answer.answer_text,
    is_correct: answer.is_correct,
    question: {
      question_text: question.question_text,
    },
  }))
);

export { QuestionsData, formattedAnswers, formattedQuestions };
