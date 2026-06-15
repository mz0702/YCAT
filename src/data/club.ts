import type { ImageMetadata } from "astro";
import weidinger from "../assets/people/weidinger.jpg";
import bourjau from "../assets/people/bourjau.jpg";
import zandler from "../assets/people/zandler.jpg";
import schuetz from "../assets/people/schuetz.jpg";
import lechner from "../assets/people/lechner.jpg";
import appel from "../assets/people/appel.jpg";
import kohl from "../assets/people/kohl.jpg";
import pilmes from "../assets/people/pilmes.jpg";

export type Member = {
  role: string;
  name: string;
  detail?: string;
  phone?: string;
  email?: string;
  photo?: ImageMetadata;
};

export const vorstand: Member[] = [
  {
    role: "1. Vorsitzender",
    name: "Dr. Alexander Oswald",
    detail: "BLSV Vereinsmanager",
    phone: "+49 (0)178 3589804",
    email: "oswald@ycat.de",
  },
  {
    role: "2. Vorsitzender",
    name: "Erik Weidinger",
    detail: "auch per WhatsApp",
    phone: "+49 (0)171 9936676",
    email: "weidinger@ycat.de",
    photo: weidinger,
  },
  {
    role: "Schriftführer",
    name: "Dr. h. c. Michael Bourjau",
    photo: bourjau,
  },
  {
    role: "Kassenwart",
    name: "Gabi Zandler",
    email: "zandler@ycat.de",
    photo: zandler,
  },
];

export const erweiterterVorstand: Member[] = [
  {
    role: "Hafenmeister",
    name: "Volker Schütz",
    phone: "+49 (0)162 5682107",
    email: "schuetz@ycat.de",
    photo: schuetz,
  },
  {
    role: "Zeugwart",
    name: "unbesetzt",
    detail: "Position derzeit offen",
  },
  {
    role: "Gebäudewart",
    name: "Fritz Lechner",
    email: "fritz.lechner@ycat.de",
    photo: lechner,
  },
  {
    role: "Obmann des Wettsegelsports",
    name: "Dr. Manfred Appel",
    email: "appel@ycat.de",
    photo: appel,
  },
  {
    role: "Jugendwart",
    name: "Erik Weidinger",
    detail: "kommissarisch betreut",
    phone: "+49 (0)171 9936676",
    email: "weidinger@ycat.de",
    photo: weidinger,
  },
  {
    role: "Sportwart",
    name: "Hans Kohl",
    phone: "+49 (0)176 56581100",
    email: "kohl@ycat.de",
    photo: kohl,
  },
  {
    role: "Pressewart",
    name: "Mathias Pilmes",
    phone: "+49 (0)171 457 6585",
    email: "pilmes@ycat.de",
    photo: pilmes,
  },
];

export type Obmann = {
  klasse: string;
  name: string;
  phone?: string;
  email?: string;
  classLink?: { label: string; href: string };
};

export const obleute: Obmann[] = [
  {
    klasse: "420er",
    name: "Dr. Kerstin Waterloh",
    phone: "+49 (0)177 2862560",
    email: "waterloh@ycat.de",
  },
  {
    klasse: "Dyas",
    name: "Dr. Manfred Appel",
    phone: "+49 (0)8022 24520",
    email: "appel@ycat.de",
    classLink: { label: "dyas.org", href: "http://www.dyas.org" },
  },
  {
    klasse: "Kielzugvogel",
    name: "Christoph Haag",
    email: "haag@ycat.de",
    classLink: { label: "kieler.org", href: "http://kieler.org/wordpress/" },
  },
  {
    klasse: "H-Boot",
    name: "Markus Kellermann",
    phone: "+49 (0)152 53933961",
    email: "kellermann@ycat.de",
    classLink: { label: "h-boot.org", href: "http://www.h-boot.org/" },
  },
  {
    klasse: "Drachen",
    name: "Position offen",
    classLink: { label: "dodv.org", href: "http://www.dodv.org/" },
  },
];

export const klassenLinks = [
  { label: "Tempest", href: "http://www.tempestclass.de/" },
  { label: "FD", href: "http://www.sailfd.de/" },
  { label: "Starboot", href: "http://www.starclass.de/" },
  { label: "Finn Dinghy", href: "https://finnwelle.de/" },
  { label: "KZV / Kieler", href: "http://kieler.org/wordpress/" },
  { label: "Dyas", href: "http://www.dyas.org" },
  { label: "H-Boot", href: "http://www.h-boot.org/" },
  { label: "Drachen", href: "http://www.dodv.org/" },
];

export const chairmen = [
  { years: "2012 – heute", name: "Dr. Alexander Oswald" },
  { years: "2010 – 2012", name: "Christian Eisenbach" },
  { years: "2009", name: "Joachim Tebbe" },
  { years: "2000 – 2009", name: "Sepp Höss" },
  { years: "1994 – 2000", name: "Martin Mitterer" },
  { years: "1979 – 1994", name: "Sepp Höss" },
  { years: "1960 – 1979", name: "Dr. Heinz Laprell" },
  { years: "1946 – 1960", name: "Fred Fränkel" },
  { years: "1949 – 1955", name: "Joachim Bickmann" },
];
