import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineTikTok } from "react-icons/ai";

const pagesLinks = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "QR Codes",
    url: "/qr-codes",
  },
  {
    page: "Browse Music",
    url: "/browse-music",
  },
  {
    page: "Mint",
    url: "/mint",
  },
  {
    page: "About Us",
    url: "/about-us",
  },
  {
    page: "Fan Registration",
    url: "/fan/signin",
  },
  {
    page: "Artist Registration",
    url: "/artist/signup",
  },
  {
    page: "Sign In",
    url: "",
  },
];

const dropsList = [
  {
    songImg: "/images/home/song-image-1.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Gus Dapperton",
    songs: "2 Songs",
    duration: "23 min 43 sec",
    date: "2 October 2024",
    album: "Album",
    albumName: "Tunes For Late Spring",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    songImg: "/images/home/song-image-2.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Phoebe Bridgers",
    songs: "5 Songs",
    duration: "45 min 12 sec",
    date: "10 September 2024",
    album: "EP",
    albumName: "SOS",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    songImg: "/images/home/song-image-1.png",
    userImg: "/images/home/user-image-2.png",
    userName: "Rex Orange County",
    songs: "4 Songs",
    duration: "35 min 19 sec",
    date: "18 November 2024",
    album: "Album",
    albumName: "Prune, You Talk Funny",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    songImg: "/images/home/song-image-2.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Clairo",
    songs: "3 Songs",
    duration: "28 min 03 sec",
    date: "25 December 2024",
    album: "Single",
    albumName: "COYOTE",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    songImg: "/images/home/song-image-1.png",
    userImg: "/images/home/user-image-2.png",
    userName: "U made me a star",
    songs: "6 Songs",
    duration: "54 min 30 sec",
    date: "1 January 2025",
    album: "Album",
    albumName: "Ocean Eyes Revival",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    songImg: "/images/home/song-image-1.png",
    userImg: "/images/home/user-image-2.png",
    userName: "U made me a star",
    songs: "6 Songs",
    duration: "54 min 30 sec",
    date: "1 January 2025",
    album: "Album",
    albumName: "Ocean Eyes Revival",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
];

const merchLists = [
  {
    _id: 1,
    merchImg: "/images/home/merch-image-1.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "s", "m", "l", "xl"],
  },
  {
    _id: 2,
    merchImg: "/images/home/merch-image-2.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Essential Logo",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl", "xxl"],
  },
  {
    _id: 3,
    merchImg: "/images/home/merch-image-3.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Beyond The Stream",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl", "xxl"],
  },
  {
    _id: 4,
    merchImg: "/images/home/merch-image-4.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "m", "l", "xl", "xxl"],
  },
  {
    _id: 5,
    merchImg: "/images/home/merch-image-5.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "s", "m", "l", "xl"],
  },
  {
    _id: 6,
    merchImg: "/images/home/merch-image-1.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Essential Logo",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl", "xxl"],
  },
  {
    _id: 7,
    merchImg: "/images/home/merch-image-2.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Beyond The Stream",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl"],
  },
  {
    _id: 8,
    merchImg: "/images/home/merch-image-3.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["m", "l", "xl", "xxl"],
  },
  {
    _id: 9,
    merchImg: "/images/home/merch-image-4.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "s", "m", "l", "xl"],
  },
  {
    _id: 10,
    merchImg: "/images/home/merch-image-5.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Essential Logo",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "m", "l", "xl", "xxl"],
  },
  {
    _id: 11,
    merchImg: "/images/home/merch-image-1.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Beyond The Stream",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "m", "l", "xl", "xxl"],
  },
  {
    _id: 12,
    merchImg: "/images/home/merch-image-2.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "m", "l", "xl"],
  },
  {
    _id: 13,
    merchImg: "/images/home/merch-image-3.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl", "xxl"],
  },
  {
    _id: 14,
    merchImg: "/images/home/merch-image-4.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "Essential Logo",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["xs", "s", "m", "l", "xxl"],
  },
  {
    _id: 15,
    merchImg: "/images/home/merch-image-5.png",
    merchImages: [
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
      "/images/home/merch-image-2.png",
      "/images/home/merch-image-1.png",
    ],
    type: "T-Shirt",
    merchName: "The Audience Economy",
    price: "30",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    availableSize: ["s", "m", "l", "xl"],
  },
];

const artistData = [
  {
    img: "/images/home/user-image-1.png",
    title: "Gus Dapperton",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Billie Eilish",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Tame Impala",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Lana Del Rey",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Mac DeMarco",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Joji",
  },
];

const topReleasesData = [
  {
    artistImg: "/images/default/artist-img-1.png",
    type: "Single",
    name: "MILLION DOLLAR BABY",
    tags: "FT. Brent Faiyaz, FELIX!",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    artistImg: "/images/default/artist-img-1.png",
    type: "Single",
    name: "DEVIL IS A LIE",
    tags: "FT. Brent Faiyaz, FELIX!",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    artistImg: "/images/default/artist-img-2.png",
    type: "Single",
    name: "BUNKER PREROLL ",
    tags: "FT. Brent Faiyaz, FELIX!",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    artistImg: "/images/default/artist-img-1.png",
    type: "Single",
    name: "Upset",
    tags: "FT. Brent Faiyaz, FELIX!",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    artistImg: "/images/default/artist-img-2.png",
    type: "Single",
    name: "Last Nite",
    tags: "FT. Brent Faiyaz, FELIX!",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
];

const topProjectsData = [
  {
    image: "/images/default/project-img-1.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Tommy Richman",
    songs: "13 Songs",
    duration: "23 min 43 sec",
    date: "2 October 2024",
    album: "Album",
    albumName: "COYOTE",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    image: "/images/default/project-img-2.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Tommy Richman",
    songs: "2 Songs",
    duration: "2 min 43 sec",
    date: "2 October 2024",
    album: "Album",
    albumName: "Tunes For Late Spring",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    image: "/images/default/project-img-1.png",
    userImg: "/images/home/user-image-1.png",
    userName: "Tommy Richman",
    songs: "2 Songs",
    duration: "23 min 43 sec",
    date: "2 October 2024",
    album: "Album",
    albumName: "Tunes For Late Spring",
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
];

const offerData = [
  {
    image: "/images/landing/community.png",
    title: "Community",
    text: "Build a loyal, engaged fanbase that shares your passion. Strengthen connections and create a sense of belonging through interactive and meaningful experiences.",
  },
  {
    image: "/images/landing/sales.png",
    title: "Direct-to-Audience Sales",
    text: "Build a loyal, engaged fanbase that shares your passion. Strengthen connections and create a sense of belonging through interactive and meaningful experiences.",
  },
  {
    image: "/images/landing/dollar.png",
    title: "Independence",
    text: "Take full control of your music, data, and revenue streams. Embrace true independence and unlock your full creative and business potential.",
  },
  {
    image: "/images/landing/vip.png",
    title: "Exclusive/VIP Experiences",
    text: "Reward your biggest supporters with unforgettable, exclusive perks. Give your VIPs access to one-of-a-kind experiences that turn fans into lifelong advocates.",
  },
  {
    image: "/images/landing/funnel.png",
    title: "Sales Funnel",
    text: "Guide your audience seamlessly from discovering your music to attending live events, purchasing merch, and becoming VIPs—all in one cohesive ecosystem.",
  },
  {
    image: "/images/landing/win.png",
    title: "$VIP Token",
    text: "Empower your fanbase with $VIP tokens. Offer rewards, exclusive access, and perks that strengthen their connection to your music and vision.",
  },
];

const faqLists = [
  {
    question:
      "How is Audience Different From Traditional Music Distribution Channels/Platforms?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question:
      "How Much Does It Cost To Use Audience, And Are There Any Hidden Costs?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question: "Can I Upload Both Singles And Albums On Audience?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question: "How Do I Start Uploading Music On Audience?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question:
      "I'm New To On-Chain And Don't Have A Wallet, Can I Still Use Audience?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question:
      "How Long Does The Process Take? Can I Start Selling My Music As Soon As I Upload On Audience?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question:
      "Do I Need to Own Everything? Can I Upload Covers And Remixes On Audience?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
  {
    question: "When And How Often Do I Get Paid?",
    answer:
      "Our entry-level Starter pack offers $10 per upload, allowing artists to keep an impressive 90% of their revenue. For those looking to unlock advanced features, our Pro pack is available via invitation only. Book a consultation to find out more. Please note, there might be a small additional charge on some platforms to cover network fees, ensuring transparent and fair pricing. Find comprehensive details on our pricing page.",
  },
];

const latestReleasesData = [
  {
    albumName: "Tunes For Late Spring",
    albumImg: "/images/home/song-image-1.png",
    totalSongs: "4",
    duration: "16m",
    singerName: "Gus Dapperton",
    singerImg: "/images/home/user-image-1.png",
    songs: [
      {
        id: 1,
        title: "Lil Tune Ft. Electric Guest",
        src: "/songs/lil-tune.mp3",
      },
      {
        id: 2,
        title: "What You Won’t Do For Love",
        src: "/songs/lil-tune.mp3",
      },
      { id: 3, title: "Believe", src: "/songs/lil-tune.mp3" },
      { id: 4, title: "Everything She Wants", src: "/songs/lil-tune.mp3" },
    ],
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
  {
    albumName: "ULTRAMARINE",
    albumImg: "/images/home/song-image-3.png",
    totalSongs: "4",
    duration: "26 min 5 sec",
    singerName: "Wesley Joseph",
    singerImg: "/images/home/user-image-1.png",
    songs: [
      { id: 1, title: "The Bloom", src: "/songs/lil-tune.mp3" },
      { id: 2, title: "Ultramarine", src: "/songs/lil-tune.mp3" },
      { id: 3, title: "Strangers", src: "/songs/lil-tune.mp3" },
      { id: 4, title: "Thrilla", src: "/songs/lil-tune.mp3" },
    ],
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
  },
];

const unlockSecData = [
  {
    img: "/images/landing/vip-ex.png",
    title: "VIP Experiences",
    description:
      "Unlock invitations to exclusive live events, meet-and-greets, and private performances, giving you memories that last a lifetime.",
  },
  {
    img: "/images/landing/limited.png",
    title: "Limited-Edition Collectibles",
    description:
      "Own rare, limited-edition merchandise, digital collectibles, and signed memorabilia, available only to token holders.",
  },
  {
    img: "/images/landing/rewards.png",
    title: "Rewards for Engagement",
    description:
      "Earn $VIP Tokens by streaming tracks, buying merch, or attending shows—then use them to unlock more music, experiences, or perks.",
  },
  {
    img: "/images/landing/direct.png",
    title: "Direct Connection to Artists",
    description:
      "Be part of a fan-powered economy where your support directly impacts the artists, fostering a deeper connection and making you a key part of their journey.",
  },
];

const fanArtistData = [
  {
    img: "/images/home/user-image-1.png",
    title: "Gus Dapperton",
    releases: "20",
    revenue: "20000",
  },
  {
    img: "/images/home/user-image-2.png",
    title: "Billie Eilish",
    releases: "35",
    revenue: "50000",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Tame Impala",
    releases: "15",
    revenue: "30000",
  },
  {
    img: "/images/home/user-image-2.png",
    title: "Lana Del Rey",
    releases: "40",
    revenue: "45000",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Mac DeMarco",
    releases: "12",
    revenue: "15000",
  },
  {
    img: "/images/home/user-image-1.png",
    title: "Joji",
    releases: "25",
    revenue: "32000",
  },
];

const mintHeroData = [
  {
    albumName: "Tunes For Late Spring",
    albumImg: "/images/home/song-image-1.png",
    totalSongs: "4",
    duration: "16m",
    singerName: "Gus Dapperton",
    singerImg: "/images/home/user-image-1.png",
    songs: [
      {
        id: 1,
        title: "The Bloom",
        src: "/songs/lil-tune.mp3",
      },
      {
        id: 2,
        title: "Ultramarine",
        src: "/songs/lil-tune.mp3",
      },
      { id: 3, title: "Thrilla", src: "/songs/lil-tune.mp3" },
      { id: 4, title: "Strangers", src: "/songs/lil-tune.mp3" },
    ],
    companyImages: [
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
      "/images/home/artist-img-2.png",
      "/images/home/artist-img.png",
    ],
    activities: [
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },

      {
        title: "1x - 27 Nov 24",
        img: "/images/default/activity-img.png",
      },
    ],
    leaderboard: [
      {
        img: "/images/default/activity-img.png",
        title: "Top Dog - Mike Mikinson",
        mins: "500 Mints",
      },
      {
        img: "/images/default/activity-img.png",
        title: "Runner Up - Raf Rafy",
        mins: "200 Mints",
      },
      {
        img: "/images/default/activity-img.png",
        title: "3rd - Name Last Name",
        mins: "500 Mints",
      },
      {
        img: "/images/default/activity-img.png",
        title: "Top Dog - Mike Mikinson",
        mins: "300 Mints",
      },
      {
        img: "/images/default/activity-img.png",
        title: "4th - Name Name",
        mins: "800 Mints",
      },
      {
        img: "/images/default/activity-img.png",
        title: "Top Dog - Mike Mikinson",
        mins: "500 Mints",
      },
    ],
  },
];

const PackagesData = [
  {
    price: "100",
    name: "Starter Pack",
    description: "Get started with out starter package.",
    features: ["Upload to multiple platforms"],
  },
  {
    price: "6",
    name: "Pro Pack",
    description:
      "This package will have a “One time upload cost” plus a monthly subscription of $6 a month",
    features: [
      "Upload To Multiple Platforms",
      "Add Multiple Metadatas",
      "Discounted Platform Fees",
      "Sound Scan Drop",
      "Social Links",
    ],
  },
];

const socialLinks = [
  {
    title: "Instagram",
    icon: <AiFillInstagram fontSize={27} color="#fff" />,
  },
  {
    title: "Facebook",
    icon: <IoLogoFacebook fontSize={27} color="#fff" />,
  },
  {
    title: "Telegram",
    icon: <FaTelegramPlane fontSize={27} color="#fff" />,
  },
  {
    title: "Youtube",
    icon: <FaYoutube fontSize={27} color="#fff" />,
  },
  {
    title: "X",
    icon: <RiTwitterXLine fontSize={27} color="#fff" />,
  },
  {
    title: "Tiktok",
    icon: <AiOutlineTikTok fontSize={27} color="#fff" />,
  },
];

const fanIcons = [
  "/images/fan/google.png",
  "/images/fan/whatsapp.png",
  "/images/fan/slack.png",
  "/images/fan/dribble.png",
  "/images/fan/pinterest.png",
  "/images/fan/facebook.png",
  "/images/fan/apple.png",
  "/images/fan/x.png",
  "/images/fan/windows.png",
  "/images/fan/instagram.png",
  "/images/fan/amazon.png",
  "/images/fan/discord.png",
  "/images/fan/linkedin.png",
  "/images/fan/github.png",
  "/images/fan/spotify.png",
];

const myMusicData = [
  {
    ep: "EP",
    title: "Tunes For Late Spring",
    image: "/images/home/song-image-1.png",
    singerImg: "/images/home/user-image-1.png",
    singerName: "Gus Dapperton",
    songs: "4",
  },
  {
    ep: "Single",
    title: "The Bloom",
    image: "/images/home/song-image-1.png",
    singerImg: "/images/home/user-image-2.png",
    singerName: "Wesley Joseph",
    songs: "4",
  },
  {
    ep: "EP",
    title: "Strangers",
    image: "/images/home/song-image-3.png",
    singerImg: "/images/home/user-image-1.png",
    singerName: "Gus Dapperton",
    songs: "4",
  },
  {
    ep: "Single",
    title: "Tunes For Late Spring",
    image: "/images/home/song-image-1.png",
    singerImg: "/images/home/user-image-2.png",
    singerName: "Wesley Joseph",
    songs: "4",
  },
  {
    ep: "EP",
    title: "The Bloom",
    image: "/images/home/song-image-3.png",
    singerImg: "/images/home/user-image-1.png",
    singerName: "Gus Dapperton",
    songs: "4",
  },
];

const myMerchData = [
  {
    shirt: "T-Shirt",
    title: "The Audience Economy",
    image: "/images/home/merch-image-1.png",
    released: "December 2024",
  },
  {
    shirt: "T-Shirt",
    title: "The Audience Economy",
    image: "/images/home/merch-image-1.png",
    released: "December 2024",
  },
  {
    shirt: "T-Shirt",
    title: "The Audience Economy",
    image: "/images/home/merch-image-1.png",
    released: "December 2024",
  },
  {
    shirt: "T-Shirt",
    title: "The Audience Economy",
    image: "/images/home/merch-image-1.png",
    released: "December 2024",
  },
  {
    shirt: "T-Shirt",
    title: "The Audience Economy",
    image: "/images/home/merch-image-1.png",
    released: "December 2024",
  },
];

const analyticsData = [
  {
    totalMins: 300,
    title: "Tunes For Late Spring",
    image: "/images/home/song-image-1.png",
    images: [
      {
        image: "/images/artist/analytics-1.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-2.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-3.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
    ],
  },
  {
    totalMins: 300,
    title: "Tunes For Late Spring",
    image: "/images/home/song-image-1.png",
    images: [
      {
        image: "/images/artist/analytics-1.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-2.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-3.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
    ],
  },
  {
    totalMins: 300,
    title: "Tunes For Late Spring",
    image: "/images/home/song-image-1.png",
    images: [
      {
        image: "/images/artist/analytics-1.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-2.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-3.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-4.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
      {
        image: "/images/artist/analytics-5.png",
        totalEarned: 30000,
        totalMins: 300,
      },
    ],
  },
];

const merchSalesData = [
  {
    image: "/images/home/merch-image-1.png",
    title: "The Audience Economy",
    totalSold: 13,
    totalEarned: 234,
  },
  {
    image: "/images/home/merch-image-2.png",
    title: "Creator's Influence",
    totalSold: 25,
    totalEarned: 540,
  },
  {
    image: "/images/home/merch-image-3.png",
    title: "Building Digital Assets",
    totalSold: 18,
    totalEarned: 410,
  },
  {
    image: "/images/home/merch-image-4.png",
    title: "Branding for Growth",
    totalSold: 30,
    totalEarned: 720,
  },
  {
    image: "/images/home/merch-image-5.png",
    title: "Content Monetization",
    totalSold: 22,
    totalEarned: 620,
  },
];

const artistsProfile = [
  {
    image: "/images/home/user-image-1.png",
    name: "Gus Dapperton",
    role: "Artist",
  },
  {
    image: "/images/home/song-image-1.png",
    name: "Lil Tunes",
    role: "Artist",
  },
  {
    image: "/images/home/user-image-2.png",
    name: "Gus Dapperton",
    role: "Artist",
  },
  {
    image: "/images/home/user-image-1.png",
    name: "Gus Dapperton",
    role: "Artist",
  },
  {
    image: "/images/home/song-image-1.png",
    name: "Lil Tunes",
    role: "Artist",
  },
];

export {
  pagesLinks,
  dropsList,
  merchLists,
  artistData,
  topReleasesData,
  topProjectsData,
  offerData,
  faqLists,
  latestReleasesData,
  unlockSecData,
  fanArtistData,
  mintHeroData,
  PackagesData,
  socialLinks,
  fanIcons,
  myMusicData,
  myMerchData,
  analyticsData,
  merchSalesData,
  artistsProfile,
};
