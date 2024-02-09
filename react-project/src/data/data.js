import SVG_FB from "../assets/svg/facebook.svg";
import SVG_YOUTUBE from "../assets/svg/youtube.svg";
import SVG_GITHUB from "../assets/svg/github.svg";
import SVG_TWITTER from "../assets/svg/twitter.svg";
import SVG_INSTAGRAM from "../assets/svg/instagram.svg";

const SITE_NAME = {
  title: "Bids & Battles",
  slogan: "Collecting triumphs",
  path: "home",
};

const SITE_INFO = {
  Corporation: "Spectrum Legal Solutions LLC",
  Address: "789 Legal Lane, City Heights, Region",
  TaxID: "876-543-210",
  Registration: "987654321",
  Phone: "+1 (555) 987-6543",
  Email: "contact@spectrumlegalsolutions.com",
};

const NAV_LINKS = [
  {
    title: "home",
    path: "/home",
  },
  {
    title: "characters",
    path: "/characters",
  },
  {
    title: "comics",
    path: "/comics",
  },
];

const SOCIAL_LINKS = [
  {
    title: "github",
    path: SVG_GITHUB,
    to: "github.com",
    id: 1,
    width: 20,
    height: 20,
  },
  {
    title: "facebook",
    path: SVG_FB,
    to: "facebook.com",
    id: 2,
    width: 20,
    height: 20,
  },
  {
    title: "twitter",
    path: SVG_TWITTER,
    to: "twitter.com",
    id: 3,
    width: 20,
    height: 20,
  },
  {
    title: "instagram",
    path: SVG_INSTAGRAM,
    to: "instagram.com",
    id: 4,
    width: 20,
    height: 20,
  },
  {
    title: "youtube",
    path: SVG_YOUTUBE,
    to: "youtube.com",
    id: 5,
    width: 20,
    height: 20,
  },
];

export { SITE_NAME, SITE_INFO, NAV_LINKS, SOCIAL_LINKS };
