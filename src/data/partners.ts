import type { ImageMetadata } from "astro";
import hub from "../assets/sponsors/hub.jpg";
import bammer from "../assets/sponsors/bammer.jpg";
import gonitiaer from "../assets/sponsors/gonitiaer.png";
import windsports from "../assets/sponsors/windsports.jpg";
import antretter from "../assets/sponsors/sponsor-1.jpg";

export type Sponsor = { name: string; logo: ImageMetadata; href?: string; trade: string };

export const sponsors: Sponsor[] = [
  { name: "Windsports Tegernsee", trade: "Segelzubehör & Bootsservice", logo: windsports, href: "http://www.windsports-tegernsee.de/" },
  { name: "Anton Bammer GmbH", trade: "Zimmerei · Holzbau, Gmund", logo: bammer },
  { name: "Ihr Bäderstudio & Handwerkerteam", trade: "Bad & Handwerk", logo: hub },
  { name: "Alois Gonitianer", trade: "Bau- und Kunstschlosserei", logo: gonitiaer },
  { name: "AK-Spenglertechnik · K. Antretter GmbH", trade: "Spenglerei & Dachdeckerei, Miesbach", logo: antretter },
];

export type LinkGroup = { title: string; links: { label: string; href: string }[] };

export const linkGroups: LinkGroup[] = [
  {
    title: "Vereine am Tegernsee",
    links: [
      { label: "Schlierseer Segelclub", href: "http://www.schlierseer-segelclub.de/" },
      { label: "Segelverein Rottach-Egern", href: "http://www.svre.de/" },
      { label: "Tegernseer Touring Yacht Club", href: "http://www.ttyc.de/" },
      { label: "Yacht Club Bad Wiessee", href: "http://www.ycbw.de/" },
    ],
  },
  {
    title: "Verbände",
    links: [
      { label: "International Sailing Federation", href: "http://www.sailing.org/" },
      { label: "Deutscher Seglerverband", href: "http://www.dsv.org/" },
      { label: "Bayerischer Seglerverband", href: "http://www.bayernsail.de/" },
      { label: "Bayerischer Landes-Sportverband", href: "http://www.blsv.de/" },
      { label: "Sport im Landkreis Miesbach", href: "http://www.landkreis-miesbach.de/Landkreis/Sport/" },
    ],
  },
  {
    title: "Tourismus am Tegernsee",
    links: [
      { label: "tegernsee.com – Tourismus-Portal", href: "http://www.tegernsee.com/" },
      { label: "inzumi – Reiseführer Tegernseer Tal", href: "http://inzumi.com/de/travel/destination/d_id/Tegernseer-Tal" },
      { label: "mein-tegernsee.de", href: "http://www.mein-tegernsee.de/" },
    ],
  },
  {
    title: "Sonstiges",
    links: [
      { label: "Windsports Tegernsee – Segelzubehör & Bootsservice", href: "http://www.windsports-tegernsee.de/" },
      { label: "sailingcenter Tegernsee", href: "http://www.sailingcenter.de/" },
      { label: "Uli Finckh – Wettfahrtleiter & Schiedsrichter", href: "http://www.finckh.org/" },
      { label: "MACCANDY", href: "http://www.maccandy.de/" },
      { label: "Tegernsee bei Wikipedia", href: "http://de.wikipedia.org/wiki/Tegernsee" },
    ],
  },
];
