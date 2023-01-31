import { RoutesType, StationType } from "./mrt.types";
const EW1: StationType = { name: "EW1", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Pasir Ris" };
const EW2DT32: StationType = {
  name: "EW2/DT32",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Tampines",
};
const EW3: StationType = { name: "EW3", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Simei" };
const EW4CG: StationType = {
  name: "EW4/CG",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "EWLChangi", minuteFromStn1: 0 },
  ],
  description: "Tanah Merah",
};
const EW5: StationType = { name: "EW5", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Bedok" };
const EW6: StationType = { name: "EW6", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Kembangan" };
const EW7: StationType = { name: "EW7", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Eunos" };
const EW8CC9: StationType = {
  name: "EW8/CC9",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Paya Lebar",
};
const EW9: StationType = { name: "EW9", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Aljunied" };
const EW10: StationType = { name: "EW10", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Kallang" };
const EW11: StationType = { name: "EW11", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Lavender" };
const EW12DT14: StationType = {
  name: "EW12/DT14",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Bugis",
};
const NS25EW13: StationType = {
  name: "NS25/EW13",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "NSL", minuteFromStn1: 0 },
  ],
  description: "City Hall",
};
const NS26EW14: StationType = {
  name: "NS26/EW14",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "NSL", minuteFromStn1: 0 },
  ],
  description: "Raffles Place",
};
const EW15: StationType = { name: "EW15", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Tanjong Pagar" };
const EW16NE3TE17: StationType = {
  name: "EW16/NE3/TE17",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "NEL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
  ],
  description: "Outram Park",
};
const EW17: StationType = { name: "EW17", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Tiong Bahru" };
const EW18: StationType = { name: "EW18", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Redhill" };
const EW19: StationType = { name: "EW19", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Queenstown" };
const EW20: StationType = { name: "EW20", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Commonwealth" };
const CC22EW21: StationType = {
  name: "CC22/EW21",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Buona Vista",
};
const EW22: StationType = { name: "EW22", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Dover" };
const EW23: StationType = { name: "EW23", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Clementi" };
const NS1EW24: StationType = {
  name: "NS1/EW24",
  crossRoute: [
    { route: "EWL", minuteFromStn1: 0 },
    { route: "NSL", minuteFromStn1: 0 },
  ],
  description: "Jurong East",
};
const EW25: StationType = { name: "EW25", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Chinese Garden" };
const EW26: StationType = { name: "EW26", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Lakeside" };
const EW27: StationType = { name: "EW27", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Boon Lay" };
const EW28: StationType = { name: "EW28", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Pioneer" };
const EW29: StationType = { name: "EW29", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Joo Koon" };
const EW30: StationType = { name: "EW30", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Gul Circle" };
const EW31: StationType = { name: "EW31", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Tuas Crescent" };
const EW32: StationType = { name: "EW32", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Tuas West Road" };
const EW33: StationType = { name: "EW33", crossRoute: [{ route: "EWL", minuteFromStn1: 0 }], description: "Tuas Link" };
const CG1DT35: StationType = {
  name: "CG1/DT35",
  crossRoute: [
    { route: "EWLChangi", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Expo",
};
const CG2: StationType = { name: "CG2", crossRoute: [{ route: "EWLChangi", minuteFromStn1: 0 }], description: "Changi Airport" };
const NS2: StationType = { name: "NS2", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Bukit Batok" };
const NS3: StationType = { name: "NS3", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Bukit Gombak" };
const NS4BP1: StationType = {
  name: "NS4/BP1",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "BP-CCK", minuteFromStn1: 0 },
  ],
  description: "Choa Chu Kang",
};
const NS5: StationType = { name: "NS5", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Yew Tee" };
const NS7: StationType = { name: "NS7", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Kranji" };
const NS8: StationType = { name: "NS8", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Marsiling" };
const NS9TE2: StationType = {
  name: "NS9/TE2",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
  ],
  description: "Woodlands",
};
const NS10: StationType = { name: "NS10", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Admiralty" };
const NS11: StationType = { name: "NS11", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Sembawang" };
const NS12: StationType = { name: "NS12", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Canberra" };
const NS13: StationType = { name: "NS13", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Yishun" };
const NS14: StationType = { name: "NS14", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Khatib" };
const NS15: StationType = { name: "NS15", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Yio Chu Kang" };
const NS16: StationType = { name: "NS16", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Ang Mo Kio" };
const NS17CC15: StationType = {
  name: "NS17/CC15",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Bishan",
};
const NS18: StationType = { name: "NS18", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Braddell" };
const NS19: StationType = { name: "NS19", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Toa Payoh" };
const NS20: StationType = { name: "NS20", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Novena" };
const NS21DT11: StationType = {
  name: "NS21/DT11",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Netwon",
};
const TE14NS22: StationType = {
  name: "TE14/NS22",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
  ],
  description: "Orchard",
};
const NS23: StationType = { name: "NS23", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Somerset" };
const NS24NE6CC1: StationType = {
  name: "NS24/NE6/CC1",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "CCLDhoby", minuteFromStn1: 0 },
    { route: "NEL", minuteFromStn1: 0 },
  ],
  description: "Dhoby Ghaut",
};
const NS27TE20CE2: StationType = {
  name: "NS27/TE20/CE2",
  crossRoute: [
    { route: "NSL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Marina Bay",
};
const NS28: StationType = { name: "NS28", crossRoute: [{ route: "NSL", minuteFromStn1: 0 }], description: "Marina South Pier" };
const CC29NE1: StationType = {
  name: "CC29/NE1",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "HarbourFront",
};
const NE4DT19: StationType = {
  name: "NE4/DT19",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Chinatown",
};
const NE5: StationType = { name: "NE5", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Clarke Quay" };
const NE7DT12: StationType = {
  name: "NE7/DT12",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Little India",
};
const NE8: StationType = { name: "NE8", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Farrer Park" };
const NE9: StationType = { name: "NE9", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Boon Keng" };
const NE10: StationType = { name: "NE10", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Potong Pasir" };
const NE11: StationType = { name: "NE11", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Woodleigh" };
const NE12CC13: StationType = {
  name: "NE12/CC13",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Serangoon",
};
const NE13: StationType = { name: "NE13", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Kovan" };
const NE14: StationType = { name: "NE14", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Hougang" };
const NE15: StationType = { name: "NE15", crossRoute: [{ route: "NEL", minuteFromStn1: 0 }], description: "Buangkok" };
const NE16STC: StationType = {
  name: "NE16/STC",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Sengkang",
};
const NE17PTC: StationType = {
  name: "NE17/PTC",
  crossRoute: [
    { route: "NEL", minuteFromStn1: 0 },
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Punggol",
};
const DT16CE1: StationType = {
  name: "DT16/CE1",
  crossRoute: [
    { route: "DTL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "Bayfront",
};
const DT15CC4: StationType = {
  name: "DT15/CC4",
  crossRoute: [
    { route: "CCL", minuteFromStn1: 0 },
    { route: "CCLDhoby", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Promenade",
};
const CC5: StationType = { name: "CC5", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Nicoll Highway" };
const CC6: StationType = { name: "CC6", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Satdium" };
const CC7: StationType = { name: "CC7", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Mountbatten" };
const CC8: StationType = { name: "CC8", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Dakota" };
const DT26CC10: StationType = {
  name: "DT26/CC10",
  crossRoute: [
    { route: "DTL", minuteFromStn1: 0 },
    { route: "CCL", minuteFromStn1: 0 },
  ],
  description: "MacPherson",
};
const CC11: StationType = { name: "CC11", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Tai Seng" };
const CC12: StationType = { name: "CC12", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Bartley" };
const CC14: StationType = { name: "CC14", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Lorong Chuan" };
const CC16: StationType = { name: "CC16", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Marymount" };
const CC17TE9: StationType = {
  name: "CC17/TE9",
  crossRoute: [
    { route: "CCL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
  ],
  description: "Caldecott",
};
const CC19DT9: StationType = {
  name: "CC19/DT9",
  crossRoute: [
    { route: "CCL", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Botanic Gardens",
};
const CC20: StationType = { name: "CC20", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Farrer Road" };
const CC21: StationType = { name: "CC21", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Holland Village" };
const CC23: StationType = { name: "CC23", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "One-north" };
const CC24: StationType = { name: "CC24", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Kent Ridge" };
const CC25: StationType = { name: "CC25", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Haw Par Villa" };
const CC26: StationType = { name: "CC26", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Pasir Panjang" };
const CC27: StationType = { name: "CC27", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Labrador Park" };
const CC28: StationType = { name: "CC28", crossRoute: [{ route: "CCL", minuteFromStn1: 0 }], description: "Telok Blangah" };
const CC2: StationType = { name: "CC2", crossRoute: [{ route: "CCLDhoby", minuteFromStn1: 0 }], description: "Bras Basah" };
const CC3: StationType = { name: "CC3", crossRoute: [{ route: "CCLDhoby", minuteFromStn1: 0 }], description: "Esplanade" };
const BP6DT1: StationType = {
  name: "BP6/DT1",
  crossRoute: [
    { route: "BP-CCK", minuteFromStn1: 0 },
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
    { route: "DTL", minuteFromStn1: 0 },
  ],
  description: "Bukit Panjang",
};
const DT2: StationType = { name: "DT2", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Cashew" };
const DT3: StationType = { name: "DT3", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Hillview" };
const DT5: StationType = { name: "DT5", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Beauty World" };
const DT6: StationType = { name: "DT6", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "King Albert Park" };
const DT7: StationType = { name: "DT7", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Sixth Avenue" };
const DT8: StationType = { name: "DT8", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Tan Kah Kee" };
const DT10TE11: StationType = {
  name: "DT10/TE11",
  crossRoute: [
    { route: "DTL", minuteFromStn1: 0 },
    { route: "TEL", minuteFromStn1: 0 },
  ],
  description: "Stevens",
};
const DT13: StationType = { name: "DT13", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Rochor" };
const DT17: StationType = { name: "DT17", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Downtown" };
const DT18: StationType = { name: "DT18", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Telok Ayeh" };
const DT20: StationType = { name: "DT20", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Fort Canning" };
const DT21: StationType = { name: "DT21", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Bencoolen" };
const DT22: StationType = { name: "DT22", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Jalan Besar" };
const DT23: StationType = { name: "DT23", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Bendemeer" };
const DT24: StationType = { name: "DT24", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Geylang Bahru" };
const DT25: StationType = { name: "DT25", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Mattar" };
const DT27: StationType = { name: "DT27", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Ubi" };
const DT28: StationType = { name: "DT28", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Kaki Bukit" };
const DT29: StationType = { name: "DT29", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Bedok North" };
const DT30: StationType = { name: "DT30", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Bedok Reservoir" };
const DT31: StationType = { name: "DT31", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Tampines West" };
const DT33: StationType = { name: "DT33", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Tampines East" };
const DT34: StationType = { name: "DT34", crossRoute: [{ route: "DTL", minuteFromStn1: 0 }], description: "Upper Changi" };
const TE1: StationType = { name: "TE1", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Woodlands North" };
const TE3: StationType = { name: "TE3", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Woodlands South" };
const TE4: StationType = { name: "TE4", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Springleaf" };
const TE5: StationType = { name: "TE5", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Lentor" };
const TE6: StationType = { name: "TE6", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Mayflower" };
const TE7: StationType = { name: "TE7", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Bright Hill" };
const TE8: StationType = { name: "TE8", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Upper Thomson" };
const TE12: StationType = { name: "TE12", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Napier" };
const TE13: StationType = { name: "TE13", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Orchard Boulevard" };
const TE15: StationType = { name: "TE15", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Great World" };
const TE16: StationType = { name: "TE16", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Havelock" };
const TE18: StationType = { name: "TE18", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Maxwell" };
const TE19: StationType = { name: "TE19", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Shenton Way" };
const TE22: StationType = { name: "TE22", crossRoute: [{ route: "TEL", minuteFromStn1: 0 }], description: "Gardens by the Bay" };
const BP2: StationType = { name: "BP2", crossRoute: [{ route: "BP-CCK", minuteFromStn1: 0 }], description: "South View" };
const BP3: StationType = { name: "BP3", crossRoute: [{ route: "BP-CCK", minuteFromStn1: 0 }], description: "Keat Hong" };
const BP4: StationType = { name: "BP4", crossRoute: [{ route: "BP-CCK", minuteFromStn1: 0 }], description: "Teck Whye" };
const BP5: StationType = { name: "BP5", crossRoute: [{ route: "BP-CCK", minuteFromStn1: 0 }], description: "Phoenix" };
const BP7: StationType = {
  name: "BP7",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Petir",
};
const BP8: StationType = {
  name: "BP8",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Pending",
};
const BP9: StationType = {
  name: "BP9",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Bangkit",
};
const BP10: StationType = {
  name: "BP10",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Fajar",
};
const BP11: StationType = {
  name: "BP11",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Segar",
};
const BP12: StationType = {
  name: "BP12",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Jelapang",
};
const BP13: StationType = {
  name: "BP13",
  crossRoute: [
    { route: "BP-C", minuteFromStn1: 0 },
    { route: "BP-C-R", minuteFromStn1: 0 },
  ],
  description: "Senja",
};
const SE1: StationType = {
  name: "SE1",
  crossRoute: [
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
  ],
  description: "Compassvale",
};
const SE2: StationType = {
  name: "SE2",
  crossRoute: [
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
  ],
  description: "Rumbia",
};
const SE3: StationType = {
  name: "SE3",
  crossRoute: [
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
  ],
  description: "Bakau",
};
const SE4: StationType = {
  name: "SE4",
  crossRoute: [
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
  ],
  description: "Kangkar",
};
const SE5: StationType = {
  name: "SE5",
  crossRoute: [
    { route: "SK-E", minuteFromStn1: 0 },
    { route: "SK-E-R", minuteFromStn1: 0 },
  ],
  description: "Ranggung",
};
const SW1: StationType = {
  name: "SW1",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Cheng Lim",
};
const SW2: StationType = {
  name: "SW2",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Farmway",
};
const SW3: StationType = {
  name: "SW3",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Kupang",
};
const SW4: StationType = {
  name: "SW4",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Thanggam",
};
const SW5: StationType = {
  name: "SW5",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Fernvale",
};
const SW6: StationType = {
  name: "SW6",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Layar",
};
const SW7: StationType = {
  name: "SW7",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Tongkang",
};
const SW8: StationType = {
  name: "SW8",
  crossRoute: [
    { route: "SK-W", minuteFromStn1: 0 },
    { route: "SK-W-R", minuteFromStn1: 0 },
  ],
  description: "Renjong",
};
const PE1: StationType = {
  name: "PE1",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Cove",
};
const PE2: StationType = {
  name: "PE2",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Meridian",
};
const PE3: StationType = {
  name: "PE3",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Coral Edge",
};
const PE4: StationType = {
  name: "PE4",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Riviera",
};
const PE5: StationType = {
  name: "PE5",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Kadaloor",
};
const PE6: StationType = {
  name: "PE6",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Oasis",
};
const PE7: StationType = {
  name: "PE7",
  crossRoute: [
    { route: "PG-E", minuteFromStn1: 0 },
    { route: "PG-E-R", minuteFromStn1: 0 },
  ],
  description: "Damai",
};
const PW1: StationType = {
  name: "PW1",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Sam Kee",
};
const PW2: StationType = {
  name: "PW2",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Teck Lee",
};
const PW3: StationType = {
  name: "PW3",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Punggol Point",
};
const PW4: StationType = {
  name: "PW4",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Samudera",
};
const PW5: StationType = {
  name: "PW5",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Nibong",
};
const PW6: StationType = {
  name: "PW6",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Sumang",
};
const PW7: StationType = {
  name: "PW7",
  crossRoute: [
    { route: "PG-W", minuteFromStn1: 0 },
    { route: "PG-W-R", minuteFromStn1: 0 },
  ],
  description: "Soo Teck",
};

export const allStation: Array<StationType> = [EW1, EW2DT32, EW3, EW4CG, EW5, EW6, EW7, EW8CC9, EW9, EW10, EW11, EW12DT14, NS25EW13, NS26EW14, EW15, EW16NE3TE17, EW17, EW18, EW19, EW20, CC22EW21, EW22, EW23, NS1EW24, EW25, EW26, EW27, EW28, EW29, EW30, EW31, EW32, EW33, CG1DT35, CG2, NS2, NS3, NS4BP1, NS5, NS7, NS8, NS9TE2, NS10, NS11, NS12, NS13, NS14, NS15, NS16, NS17CC15, NS18, NS19, NS20, NS21DT11, TE14NS22, NS23, NS24NE6CC1, NS27TE20CE2, NS28, CC29NE1, NE4DT19, NE5, NE7DT12, NE8, NE9, NE10, NE11, NE12CC13, NE13, NE14, NE15, NE16STC, NE17PTC, DT16CE1, DT15CC4, CC5, CC6, CC7, CC8, DT26CC10, CC11, CC12, CC14, CC16, CC17TE9, CC19DT9, CC20, CC21, CC23, CC24, CC25, CC26, CC27, CC28, CC2, CC3, BP6DT1, DT2, DT3, DT5, DT6, DT7, DT8, DT10TE11, DT13, DT17, DT18, DT20, DT21, DT22, DT23, DT24, DT25, DT27, DT28, DT29, DT30, DT31, DT33, DT34, TE1, TE3, TE4, TE5, TE6, TE7, TE8, TE12, TE13, TE15, TE16, TE18, TE19, TE22, BP2, BP3, BP4, BP5, BP7, BP8, BP9, BP10, BP11, BP12, BP13, SE1, SE2, SE3, SE4, SE5, SW1, SW2, SW3, SW4, SW5, SW6, SW7, SW8, PE1, PE2, PE3, PE4, PE5, PE6, PE7, PW1, PW2, PW3, PW4, PW5, PW6, PW7];
export const allRoutes: RoutesType = {
  EWL: [EW1, EW2DT32, EW3, EW4CG, EW5, EW6, EW7, EW8CC9, EW9, EW10, EW11, EW12DT14, NS25EW13, NS26EW14, EW15, EW16NE3TE17, EW17, EW18, EW19, EW20, CC22EW21, EW22, EW23, NS1EW24, EW25, EW26, EW27, EW28, EW29, EW30, EW31, EW32, EW33],
  EWLChangi: [EW4CG, CG1DT35, CG2],
  NSL: [NS1EW24, NS2, NS3, NS4BP1, NS5, NS7, NS8, NS9TE2, NS10, NS11, NS12, NS13, NS14, NS15, NS16, NS17CC15, NS18, NS19, NS20, NS21DT11, TE14NS22, NS23, NS24NE6CC1, NS25EW13, NS26EW14, NS27TE20CE2, NS28],
  NEL: [CC29NE1, EW16NE3TE17, NE4DT19, NE5, NS24NE6CC1, NE7DT12, NE8, NE9, NE10, NE11, NE12CC13, NE13, NE14, NE15, NE16STC, NE17PTC],
  CCL: [NS27TE20CE2, DT16CE1, DT15CC4, CC5, CC6, CC7, CC8, EW8CC9, DT26CC10, CC11, CC12, NE12CC13, CC14, NS17CC15, CC16, CC17TE9, CC19DT9, CC20, CC21, CC22EW21, CC23, CC24, CC25, CC26, CC27, CC28, CC29NE1],
  CCLDhoby: [NS24NE6CC1, CC2, CC3, DT15CC4],
  DTL: [BP6DT1, DT2, DT3, DT5, DT6, DT7, DT8, CC19DT9, DT10TE11, NS21DT11, NE7DT12, DT13, EW12DT14, DT15CC4, DT16CE1, DT17, DT18, NE4DT19, DT20, DT21, DT22, DT23, DT24, DT25, DT26CC10, DT27, DT28, DT29, DT30, DT31, EW2DT32, DT33, DT34, CG1DT35],
  TEL: [TE1, NS9TE2, TE3, TE4, TE5, TE6, TE7, TE8, CC17TE9, DT10TE11, TE12, TE13, TE14NS22, TE15, TE16, EW16NE3TE17, TE18, TE19, NS27TE20CE2, TE22],
  "BP-CCK": [NS4BP1, BP2, BP3, BP4, BP5, BP6DT1],
  "BP-C": [BP6DT1, BP7, BP8, BP9, BP10, BP11, BP12, BP13],
  "BP-C-R": [BP6DT1, BP13, BP12, BP11, BP10, BP9, BP8, BP7],
  "SK-E": [NE16STC, SE1, SE2, SE3, SE4, SE5],
  "SK-E-R": [NE16STC, SE5, SE4, SE3, SE2, SE1],
  "SK-W": [NE16STC, SW1, SW2, SW3, SW4, SW5, SW6, SW7, SW8],
  "SK-W-R": [NE16STC, SW8, SW7, SW6, SW5, SW4, SW3, SW2, SW1],
  "PG-E": [NE17PTC, PE1, PE2, PE3, PE4, PE5, PE6, PE7],
  "PG-E-R": [NE17PTC, PE7, PE6, PE5, PE4, PE3, PE2, PE1],
  "PG-W": [NE17PTC, PW1, PW2, PW3, PW4, PW5, PW6, PW7],
  "PG-W-R": [NE17PTC, PW7, PW6, PW5, PW4, PW3, PW2, PW1],
};
