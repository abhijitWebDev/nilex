/**
 * High-resolution photos from Unsplash (free to use under the Unsplash License,
 * no attribution required). They are served through next/image, which resizes
 * and converts them to AVIF/WebP for each screen size.
 *
 * To swap a photo, replace its Unsplash photo id. To self-host instead, drop a
 * file in /public/images and use a local path like "/images/kedarnath.jpg".
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`

export const img = {
  // Uttarakhand & Char Dham
  kedarnathCrowd: u("1612438214708-f428a707dd4e"),
  kedarnathValley: u("1698574996391-73f103113f60"),
  kedarnathPeaks: u("1759262988017-199c93bacb6d"),
  kedarnathFacade: u("1712733900711-d0b929d0d7cc"),
  badrinath: u("1601821139314-66a4d14cfc00"),
  gangotri: u("1630307357687-8222c5ac88dd"),
  yamunotri: u("1695839878079-74eea8635536"),
  rishikesh: u("1712510817140-917938f92e5b"),
  helicopter: u("1620734630836-4fa8203b924e"),

  // Himachal & Spiti
  manali: u("1597167231350-d057a45dc868"),
  keyMonastery: u("1653844573020-71f77a0ccb8c"),
  spitiBuddha: u("1628782379401-4fff9cdcbbfe"),
  spitiValley: u("1746093846930-ab89242b9fb9"),

  // Kashmir
  dalLake: u("1564329494258-3f72215ba175"),
  dalShikaras: u("1715457573748-8e8a70b2c1be"),
  srinagar: u("1557116953-36724198de1c"),
  gulmarg: u("1568889753852-196c487a536e"),
  pahalgam: u("1701957494338-95527b753a7f"),
  sonamarg: u("1623996243194-fd281057d568"),

  // Ladakh
  pangong: u("1636800877579-b69375ae9532"),
  pangongBlue: u("1632815975120-dce4a293dc9f"),
  lehMonastery: u("1744197068961-18194526c236"),
  leh: u("1636802582801-d13fcff47d55"),
  nubra: u("1660303941192-575c686e9b05"),

  // Uttar Pradesh & Punjab
  tajMahal: u("1564507592333-c60657eea523"),
  varanasi: u("1706186839147-0d708602587b"),
  goldenTemple: u("1623059508779-2542c6e83753"),
  goldenTempleDay: u("1651910031161-7c75098bce75"),

  // International
  fujiPagoda: u("1578271887552-5ac3a72752bc"),
  fujiTemple: u("1673300187070-4170c4c60aaa"),
  marinaBay: u("1525625293386-3f8f99389edd"),
  marinaBayNight: u("1628221680019-f28a2716e727"),
  petronas: u("1597148543182-830ef7bbb904"),
  petronasNight: u("1472017053394-b29fded587cd"),
  greatWall: u("1608037521277-154cd1b89191"),
  greatWallAutumn: u("1547150492-da7ff1742941"),
  beijing: u("1547981609-4b6bfe67ca0b"),
  shanghai: u("1545893835-abaa50cbe628"),
  xian: u("1528163186890-de9b86b54b51"),
  guilin: u("1659233306527-226a26a08634"),
  hongKong: u("1603025174040-9cbbc29cdfb1"),
  lofoten: u("1663428520845-056989f8a664"),
  norway: u("1527004013197-933c4bb611b3"),
  fjord: u("1601439678777-b2b3c56fa627"),
  stockholm: u("1588653818221-2651ec1a6423"),
  copenhagen: u("1513622470522-26c3c8a854bc"),
  helsinki: u("1538332576228-eb5b4c4de6f5"),

  // Wide panorama for the footer
  himalayaPanorama: u("1582466521533-0c6aa82f4be5"),
} as const
