const pages = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Games",
      url: "/games"
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Shop",
      url: "/store"
    }
]

const shopItems = [
    {
        name: "Orion Studios Cap",
        img: "hat_1.jpeg",
        url: "https://square.link/u/rIAufY33",
        price: 25.99,
        unit: "$"
    },
    {
        name: "Orion Studios Cap (Light)",
        img: "hat_2.jpeg",
        url: "https://square.link/u/7CgTBBxn",
        price: 25.99,
        unit: "$"
    },
    {
        name: "Orion Studios Polo Shirt",
        img: "polo_1.jpeg",
        url: "https://square.link/u/T9oIjVBZ",
        price: 30.00,
        max: 31.50,
        unit: "$"
    },
    {
        name: "Orion Studios Polo Shirt (Light)",
        img: "polo_2.jpeg",
        url: "https://square.link/u/TLrj8FD6",
        price: 30.00,
        max: 31.50,
        unit: "$"
    },
    {
        name: "Orion Studios T-Shirt",
        img: "shirt_1.jpeg",
        url: "https://square.link/u/dfAlqd2i",
        price: 17.00,
        max: 24.00,
        unit: "$"
    },
    {
        name: "Orion Studios T-Shirt (Light)",
        img: "shirt_2.jpeg",
        url: "https://square.link/u/cAM6lX5G",
        price: 17.00,
        max: 24.00,
        unit: "$"
    },
]

const gamesList = [
    {
        name: "BlastFort",
        description: "A free-to-play multiplayer side-scrolling shooter",
        img: "display_bf.png",
        url: "blastfort",
        platforms: [{
                num: 0, //steam
                url: "https://store.steampowered.com/app/1682790/BlastFort/"
            },{
                num: 1, //ios appstore
                url: "https://apps.apple.com/us/app/blastfort/id1578592964"
            },{
                num: 2, //google play
                url: "https://play.google.com/store/apps/details?id=com.orion.blastfort"
            },{
                num: 3, //xbox
                url: "https://www.microsoft.com/en-us/p/blastfort/9n8g56xzpmqg"
            },{
                num: 4, //amazon
                url: "https://www.amazon.com/BlastFort/dp/B08RBLDYRN/"
            },{
                num: 5, //itch.io
                url: "https://orion-studios.itch.io/blastfort"
            },{
                num: 0, //steam
                info: "Knight's Shield DLC",
                url: "https://store.steampowered.com/app/1682830/BlastFort__Knights_Shield_Expansion_Pack/"
            },{
                num: 5, //itch.io
                info: "Knight's Shield DLC",
                url: "https://orion-studios.itch.io/blastfort-knightsshield"
            }
        ],
        screenshots: [
            "gallery/bf_1.png",
            "gallery/bf_2.png",
            "gallery/bf_3.png",
            "gallery/bf_4.png",
            "gallery/bf_5.png",
        ]
    },
    {
        name: "Overthrown",
        description: "You were the rightful ruler of a kingdom until you were banished to the Unbounding Cave. Escape and take back the throne.",
        img: "display_overthrown.png",
        url: "overthrown",
        platforms: [{
            num: 4, //amazon
            url: "https://www.amazon.com/Orion-Studios-Overthrown/dp/B089W1ZKNL/"
        },{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/overthrown"
        }],
        screenshots: [
            "gallery/overthrown_1.png",
            "gallery/overthrown_2.png",
            "gallery/overthrown_3.png",
        ]
    },
    {
        name: "Holy Roller",
        description: "A stupid game made by a stupid person.",
        img: "display_holyroller.png",
        url: "holy-roller",
        platforms: [{
            num: 2, //google play
            url: "https://play.google.com/store/apps/details?id=com.orion.holyroller"
        },{
            num: 3, //xbox
            url: "https://www.microsoft.com/en-us/p/holy-roller/9nbxx7fwq94r"
        },{
            num: 4, //amazon
            url: "https://www.amazon.com/dp/B096WQWN4W/"
        },{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/holyroller"
        }],
        screenshots: [
            "gallery/holy-roller_1.png",
            "gallery/holy-roller_2.png",
            "gallery/holy-roller_3.png",
        ]
    },
    {
        name: "Wordt",
        description: "A word-guessing puzzle game, where you get 6 tries to correctly guess the 5 letter word",
        img: "display_wordt.png",
        url: "wordt",
        platforms: [{
            num: 2, //google play
            url: "https://play.google.com/store/apps/details?id=com.orion.wordt"
        },{
            num: 3, //xbox
            url: "https://www.microsoft.com/en-us/p/wordt/9p015zpw9sdp"
        },{
            num: 4, //amazon
            url: "https://www.amazon.com/dp/B09S1CSHZX/"
        },{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/wordt"
        }],
        screenshots: [
            "gallery/wordt_1.png",
            "gallery/wordt_2.png",
            "gallery/wordt_3.png",
        ]
    },
    {
        name: "Tulaan",
        description: "Conquer Eurasia and rule the world in the late Medieval Era as the Mongols, Nizaris, Seljuqs, Abbasids, or Crusaders.",
        img: "display_tulaan.png",
        url: "tulaan",
        platforms: [{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/tulaan"
        }],
        screenshots: [
            "gallery/tulaan_1.png",
            "gallery/tulaan_2.png",
        ]
    },
    {
        name: "The Main in The Chair",
        description: "Give directions to your field agents to infiltrate enemies. Ensure mission success.",
        img: "display_tmic.png",
        url: "tmic",
        platforms: [{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/micf"
        }],
        screenshots: [
            "gallery/tmic_1.png",
            "gallery/tmic_2.png",
            "gallery/tmic_3.png",
        ]
    },
    {
        name: "The Twins",
        description: "In the midst of a war, two brothers with special abilities to join together into one or to share resources are recruited to get vital intel from the enemy.",
        img: "display_twins.png",
        url: "thetwins",
        platforms: [{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/thetwins"
        }],
        screenshots: [
            "gallery/thetwins_1.gif",
            "gallery/thetwins_2.png",
            "gallery/thetwins_3.png",
        ]
    },
    {
        name: "SideQuest",
        description: "A great hero and adventure travels across the kingdom in hopes of completing his ultimate quest... ...but that's not you.",
        img: "display_sidequest.png",
        url: "sidequest",
        platforms: [{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/sidequest"
        }],
        screenshots: [
            "gallery/sidequest_1.png",
            "gallery/sidequest_2.png",
            "gallery/sidequest_3.png",
            "gallery/sidequest_4.png",
            "gallery/sidequest_5.png",
        ]
    },
    {
        name: "The Boxy Boys",
        description: "A simple endless top-down shooter.",
        img: "display_boxyboys.png",
        url: "theboxyboys",
        platforms: [{
            num: 5, //itch.io
            url: "https://orion-studios.itch.io/boxy-boys"
        }],
        screenshots: [
            "gallery/boxyboys_1.png",
            "gallery/boxyboys_2.png",
            "gallery/boxyboys_3.png",
        ]
    },
]

const platformList = [
    {
        name: "Steam",
        img: "steam.png",
        url: "https://store.steampowered.com/developer/OrionStudios"
    },
    {
        name: "Apple App Store",
        dim: "the Apple App Store",
        img: "apple.png",
        url: ""
    },
    {
        name: "Google Play",
        dim: "the Google Play Store",
        img: "google.png",
        url: "https://play.google.com/store/apps/dev?id=5210834262846876120"
    },
    {
        name: "Xbox",
        dim: "the Microsoft Store",
        img: "xbox.png",
        url: ""
    },
    {
        name: "Amazon",
        dim: "the Amazon Appstore",
        img: "amazon.png",
        url: "https://www.amazon.com/s?i=mobile-apps&rh=p_4%3AOrion+Studios&search-type=ss"
    },
    {
        name: "Itch.io",
        img: "itch.png",
        url: "https://orion-studios.itch.io/"
    },
]

const socials = [
    {
        name: "Facebook",
        img: "facebook.png",
        url: "https://fb.me/orionstudiosgames"
    },
    {
        name: "Instagram",
        img: "instagram.png",
        url: "https://www.instagram.com/orionstudiogame/"
    },
    {
        name: "LinkedIn",
        img: "linkedin.png",
        url: "https://www.linkedin.com/company/75066985/"
    },
    {
        name: "YouTube",
        img: "youtube.png",
        url: "https://www.youtube.com/channel/UCXJ3v5UUFgndywQ9752yEDA"
    },
    {
        name: "Twitter",
        img: "twitter.png",
        url: "https://twitter.com/StudioOrionGame"
    },
    {
        name: "Email",
        img: "email.png",
        url: "mailto:orion.studios.games@gmail.com",
        address: "orion.studios.games@gmail.com"
    },
]

const servedMessages = [
    [
        "Your privacy is important to us. It is Orion Studios Interactive's policy to respect your privacy regarding any information we may collect from you across our website, https://orionstudio.ca, and other sites we own and operate.",
        "We only ask for personal information when we truly need it to provide a service to you, or offer some form of monetization, such as purchases, promotions, and advertising. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.",
        "We only retain collected information for as long as necessary to provide you with your requested service, at the utmost quality deemed possible. What data we store, with the exception of that which is collected by us on behalf of third parties, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
        "We don’t share any personally identifying information publicly or with third-parties, except when required to by law, under experiences that include or integrate promotions, advertising, or other monetization, and other information which is deemed legitimate interest.",
        "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
        "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.",
        "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
        "This policy is effective as of 4 August 2021."
    ],
    [
        "These terms and conditions outline the rules and regulations for the use of Orion Studios Interactive's content, software, website, and other mediums deemed by us.",
        "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person reading these terms of service; and accepting the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same. License Unless otherwise stated, Orion Studios Interactive and/or it's licensors own the intellectual property rights for all material on Orion Studios Interactive. All intellectual property rights are reserved.",
        "You must not:",
        "Republish or redistribute material from Orion Studios Interactive\nSell, rent or sub-license material from Orion Studios Interactive\nReproduce, duplicate or copy material from Orion Studios Interactive\nRedistribute content from Orion Studios Interactive (unless content is specifically made for redistribution).\nReservation of Rights",
        "We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing, you agree to be bound to and abide by these linking terms and conditions.",
        "Disclaimer",
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our content and the use of affiliated content (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:",
        "limit or exclude our or your liability for death or personal injury resulting from negligence;\nlimit or exclude our or your liability for fraud or fraudulent misrepresentation;\nlimit any of our or your liabilities in any way that is not permitted under applicable law; or\nexclude any of our or your liabilities that may not be excluded under applicable law.",
        "The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.",
        "We will not be liable for any loss or damage of any nature."
    ],
    [
        "All in-game data linked or regarding and individual or group of people can be deleted from within any full-release applications where a setting option or clear cache option will be available. Clicking or interacting with this element will result in clearing all data as described previously; all of which is located on the host device or software, unless otherwise modified by a third party. Applications not officially distributed might not comply and as such we are not responsible for and such data on third party modifications done to applications."
    ]
]

export default {gamesList, platformList, socials, servedMessages, pages, shopItems}