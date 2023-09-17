import { ref } from 'vue'

export const allCards = ref([
  {
    passCode: 'CARDS',
    siteUrl: 'https://myriad-central.netlify.app/',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png',
  },
  {
    passCode: 'PANDAEMONIC',
    siteUrl: '#',
    siteName: 'Coventry Grove Credit Union',
    siteDesc: 'to afford discretion to members of CGBA, a separate Credit Union, with distinct persona registries, is maintained. Address will be given only to members of CGBA, link here is disabled but is mentioned to assure the curious of discretion',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PANDAEMONIC-02ea_CARD.png',
  },
  {
    passCode: 'PLAY',
    siteUrl: 'https://sonic-circle.netlify.app/',
    siteName: 'Sonic Circle',
    siteDesc: 'A Place 4 Musicians 2 Play! A non-judgemental, turn based, participation oriented playground for musicians and aspiring musicians of all skill levels and goal orientations',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PLAY-4249.png',
  },
])

export function getCardFor(aPassCode) {
  const foundCard
        = allCards.value.find(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCard
}
