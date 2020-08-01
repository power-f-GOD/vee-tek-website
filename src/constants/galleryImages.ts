export interface GalleryImageProp {
  title: string;
  image: string;
}

const baseUrl: string = "/images/gallery";

const general: GalleryImageProp[] = [
  { image: `${baseUrl}/general/i1`, title: "Vee-Tek Pipes" },
  { image: `${baseUrl}/general/i2`, title: "Vee-Tek Pipes" },
  { image: `${baseUrl}/general/i3`, title: "Vee-Tek Pipes" },
  { image: `${baseUrl}/general/i4`, title: "Vee-Tek Pipes" },
];

const pipes: GalleryImageProp[] = [
  { image: `${baseUrl}/pipes/i1`, title: "Extruder Panel Machine" },
  { image: `${baseUrl}/pipes/i2`, title: "Injection packeting" },
  { image: `${baseUrl}/pipes/i3`, title: "Mixer Machine Control" },
  { image: `${baseUrl}/pipes/i4`, title: "Mixer Machine" },
  { image: `${baseUrl}/pipes/i5`, title: "Printer Machine" },
  { image: `${baseUrl}/pipes/i6`, title: "Vee-Tek Delivery Truck" },
  { image: `${baseUrl}/pipes/i7`, title: "Vee-Tek Enugu Factory Office 3" },
  { image: `${baseUrl}/pipes/i8`, title: "Vee-Tek Enugu Factory Office 3" },
  { image: `${baseUrl}/pipes/i9`, title: "Fittings Packaging Process" },
  { image: `${baseUrl}/pipes/i10`, title: "Vee-Tek Packaging" },
];

const gears: GalleryImageProp[] = [
  { image: `${baseUrl}/switch/i1`, title: "Switchgears" },
  { image: `${baseUrl}/switch/i2`, title: "Switchgears engineers at work" },
  { image: `${baseUrl}/switch/i3`, title: "Switchgears engineers at work" },
  { image: `${baseUrl}/switch/i5`, title: "Switchgears engineers at work" },
];

export default [...general, ...pipes, ...gears];
