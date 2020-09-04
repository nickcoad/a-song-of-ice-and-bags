export default [
  {
    name: 'west-victoria-street',
    displayName: 'Victoria Street (West)',
    appearance: '',
    flavour: '',
    connections: [
      'east-victoria-street',
      'north-richmond-station',
      'church-street',
      '109-tram',
      '12-tram',
      'yarra-trail-richmond',
      'stingos'
    ],
    people: []
  },
  {
    name: 'north-richmond-station',
    displayName: 'North Richmond Station',
    appearance: '',
    flavour: '',
    connections: ['west-victoria-street'],
    people: []
  },
  {
    name: 'church-street',
    displayName: 'Church Street',
    appearance: '',
    flavour: [
      'You see a junkie. He yells something unintelligible, trips on the gutter and drops his freshly harvested cigarette butt.',
      'The number 78 has just arrived, you see several junkies rushing to jump aboard.'
    ],
    connections: [
      'east-victoria-street',
      'the-leadbeater',
      '109-tram',
      '12-tram',
      '78-tram'
    ],
    people: []
  },
  {
    name: 'the-leadbeater',
    displayName: 'The Leadbeater',
    appearance: '',
    flavour: [
      "It's a quiet day at The Leadbeater, but the locals are in as always.",
      'Bit of a busy day, Will is behind the bar and he looks stressed.'
    ],
    connections: ['church-street'],
    people: [
      'cameron-bloore',
      'leah-mariani',
      'declan-doherty',
      'karol-vitangcol',
      'anna-latussek',
      'karen',
      'ruben-rodriguez'
    ]
  },
  {
    name: 'east-victoria-street',
    displayName: 'Victoria Street (East)',
    appearance: '',
    flavour: '',
    connections: [
      'church-street',
      'west-victoria-street',
      'coad-abode',
      '109-tram',
      '12-tram'
    ],
    people: []
  },
  {
    name: 'coad-abode',
    displayName: 'The Coad Abode',
    appearance: '',
    flavour: '',
    connections: ['east-victoria-street'],
    people: ['nick-coad']
  },
  {
    name: '12-tram',
    displayName: 'No. 12 Tram',
    appearance: '',
    flavour: '',
    connections: ['west-victoria-street', 'east-victoria-street', 'cbd'],
    people: []
  },
  {
    name: '109-tram',
    displayName: 'No. 109 Tram',
    appearance: '',
    flavour: '',
    connections: ['west-victoria-street', 'east-victoria-street', 'cbd'],
    people: []
  },
  {
    name: '78-tram',
    displayName: 'No. 78 Tram',
    appearance: '',
    flavour: '',
    connections: ['church-street'],
    people: []
  },
  {
    name: 'cbd',
    displayName: 'Melbourne CBD',
    appearance: '',
    flavour: '',
    connections: ['12-tram', '109-tram', 'news-perform-office'],
    people: []
  },
  {
    name: 'yarra-trail-richmond',
    displayName: 'Yarra Trail (Richmond)',
    appearance: '',
    flavour: '',
    connections: [
      'east-victoria-street',
      'east-bridge-road',
      'east-swan-street'
    ],
    people: []
  },
  {
    name: 'east-bridge-road',
    displayName: 'Bridge Road (East)',
    appearance: '',
    flavour: '',
    connections: ['west-bridge-road', 'yarra-trail-richmond'],
    people: []
  },
  {
    name: 'west-bridge-road',
    displayName: 'Bridge Road (West)',
    appearance: '',
    flavour: '',
    connections: ['east-bridge-road'],
    people: []
  },
  {
    name: 'east-swan-street',
    displayName: 'Swan Street (East)',
    appearance: '',
    flavour: '',
    connections: ['west-swan-street', 'yarra-trail-richmond', 'kylas-house'],
    people: []
  },
  {
    name: 'west-swan-street',
    displayName: 'Swan Street (West)',
    appearance: '',
    flavour: '',
    connections: ['east-swan-street'],
    people: []
  },
  {
    name: 'kylas-house',
    displayName: "Kyla's House",
    appearance: '',
    flavour: '',
    connections: ['east-swan-street'],
    people: ['kyla-watson']
  },
  {
    name: 'news-perform-office',
    displayName: 'News Perform Office',
    appearance: "It's the News Perform office!",
    flavour: '',
    connections: ['12-tram', '109-tram'],
    people: ['declan-doherty', 'anna-latussek', 'karol-vitangcol', 'van-nim']
  },
  {
    name: 'stingos',
    displayName: "Stingo's",
    appearance: '',
    flavour: '',
    connections: ['west-victoria-street'],
    people: ['nicole-fraser']
  }
]
