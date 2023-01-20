import { RoutesType, StationType } from "./mrt.types";

const EW1: StationType = { name: "EW1", crossRoute: ["EWL"], description: "Pasir Ris" };
const EW2DT32: StationType = { name: "EW2/DT32", crossRoute: ["EWL", "DTL"], description: "Tampines" };
const EW3: StationType = { name: "EW3", crossRoute: ["EWL"], description: "Simei" };
const EW4CG: StationType = { name: "EW4/CG", crossRoute: ["EWL", "EWLChangi"], description: "Tanah Merah" };
const EW5: StationType = { name: "EW5", crossRoute: ["EWL"], description: "Bedok" };
const EW6: StationType = { name: "EW6", crossRoute: ["EWL"], description: "Kembangan" };
const EW7: StationType = { name: "EW7", crossRoute: ["EWL"], description: "Eunos" };
const EW8CC9: StationType = { name: "EW8/CC9", crossRoute: ["EWL", "CCL"], description: "Paya Lebar" };
const EW9: StationType = { name: "EW9", crossRoute: ["EWL"], description: "Aljunied" };
const EW10: StationType = { name: "EW10", crossRoute: ["EWL"], description: "Kallang" };
const EW11: StationType = { name: "EW11", crossRoute: ["EWL"], description: "Lavender" };
const EW12DT14: StationType = { name: "EW12/DT14", crossRoute: ["EWL", "DTL"], description: "Bugis" };
const NS25EW13: StationType = { name: "NS25/EW13", crossRoute: ["EWL", "NSL"], description: "City Hall" };
const NS26EW14: StationType = { name: "NS26/EW14", crossRoute: ["EWL", "NSL"], description: "Raffles Place" };
const EW15: StationType = { name: "EW15", crossRoute: ["EWL"], description: "Tanjong Pagar" };
const EW16NE3TE17: StationType = { name: "EW16/NE3/TE17", crossRoute: ["EWL", "NEL", "TEL"], description: "Outram Park" };
const EW17: StationType = { name: "EW17", crossRoute: ["EWL"], description: "Tiong Bahru" };
const EW18: StationType = { name: "EW18", crossRoute: ["EWL"], description: "Redhill" };
const EW19: StationType = { name: "EW19", crossRoute: ["EWL"], description: "Queenstown" };
const EW20: StationType = { name: "EW20", crossRoute: ["EWL"], description: "Commonwealth" };
const CC22EW21: StationType = { name: "CC22/EW21", crossRoute: ["EWL", "CCL"], description: "Buona Vista" };
const EW22: StationType = { name: "EW22", crossRoute: ["EWL"], description: "Dover" };
const EW23: StationType = { name: "EW23", crossRoute: ["EWL"], description: "Clementi" };
const NS1EW24: StationType = { name: "NS1/EW24", crossRoute: ["EWL", "NSL"], description: "Jurong East" };
const EW25: StationType = { name: "EW25", crossRoute: ["EWL"], description: "Chinese Garden" };
const EW26: StationType = { name: "EW26", crossRoute: ["EWL"], description: "Lakeside" };
const EW27: StationType = { name: "EW27", crossRoute: ["EWL"], description: "Boon Lay" };
const EW28: StationType = { name: "EW28", crossRoute: ["EWL"], description: "Pioneer" };
const EW29: StationType = { name: "EW29", crossRoute: ["EWL"], description: "Joo Koon" };
const EW30: StationType = { name: "EW30", crossRoute: ["EWL"], description: "Gul Circle" };
const EW31: StationType = { name: "EW31", crossRoute: ["EWL"], description: "Tuas Crescent" };
const EW32: StationType = { name: "EW32", crossRoute: ["EWL"], description: "Tuas West Road" };
const EW33: StationType = { name: "EW33", crossRoute: ["EWL"], description: "Tuas Link" };
const CG1DT35: StationType = { name: "CG1/DT35", crossRoute: ["EWLChangi", "DTL"], description: "Expo" };
const CG2: StationType = { name: "CG2", crossRoute: ["EWLChangi"], description: "Changi Airport" };
const NS2: StationType = { name: "NS2", crossRoute: ["NSL"], description: "Bukit Batok" };
const NS3: StationType = { name: "NS3", crossRoute: ["NSL"], description: "Bukit Gombak" };
const NS4BP1: StationType = { name: "NS4/BP1", crossRoute: ["NSL", "BP-CCK"], description: "Choa Chu Kang" };
const NS5: StationType = { name: "NS5", crossRoute: ["NSL"], description: "Yew Tee" };
const NS7: StationType = { name: "NS7", crossRoute: ["NSL"], description: "Kranji" };
const NS8: StationType = { name: "NS8", crossRoute: ["NSL"], description: "Marsiling" };
const NS9TE2: StationType = { name: "NS9/TE2", crossRoute: ["NSL", "TEL"], description: "Woodlands" };
const NS10: StationType = { name: "NS10", crossRoute: ["NSL"], description: "Admiralty" };
const NS11: StationType = { name: "NS11", crossRoute: ["NSL"], description: "Sembawang" };
const NS12: StationType = { name: "NS12", crossRoute: ["NSL"], description: "Canberra" };
const NS13: StationType = { name: "NS13", crossRoute: ["NSL"], description: "Yishun" };
const NS14: StationType = { name: "NS14", crossRoute: ["NSL"], description: "Khatib" };
const NS15: StationType = { name: "NS15", crossRoute: ["NSL"], description: "Yio Chu Kang" };
const NS16: StationType = { name: "NS16", crossRoute: ["NSL"], description: "Ang Mo Kio" };
const NS17CC15: StationType = { name: "NS17/CC15", crossRoute: ["NSL", "CCL"], description: "Bishan" };
const NS18: StationType = { name: "NS18", crossRoute: ["NSL"], description: "Braddell" };
const NS19: StationType = { name: "NS19", crossRoute: ["NSL"], description: "Toa Payoh" };
const NS20: StationType = { name: "NS20", crossRoute: ["NSL"], description: "Novena" };
const NS21DT11: StationType = { name: "NS21/DT11", crossRoute: ["NSL", "DTL"], description: "Netwon" };
const TE14NS22: StationType = { name: "TE14/NS22", crossRoute: ["NSL", "TEL"], description: "Orchard" };
const NS23: StationType = { name: "NS23", crossRoute: ["NSL"], description: "Somerset" };
const NS24NE6CC1: StationType = { name: "NS24/NE6/CC1", crossRoute: ["NSL", "CCLDhoby", "NEL"], description: "Dhoby Ghaut" };
const NS27TE20CE2: StationType = { name: "NS27/TE20/CE2", crossRoute: ["NSL", "TEL", "CCL"], description: "Marina Bay" };
const NS28: StationType = { name: "NS28", crossRoute: ["NSL"], description: "Marina South Pier" };
const CC29NE1: StationType = { name: "CC29/NE1", crossRoute: ["NEL", "CCL"], description: "HarbourFront" };
const NE4DT19: StationType = { name: "NE4/DT19", crossRoute: ["NEL", "DTL"], description: "Chinatown" };
const NE5: StationType = { name: "NE5", crossRoute: ["NEL"], description: "Clarke Quay" };
const NE7DT12: StationType = { name: "NE7/DT12", crossRoute: ["NEL", "DTL"], description: "Little India" };
const NE8: StationType = { name: "NE8", crossRoute: ["NEL"], description: "Farrer Park" };
const NE9: StationType = { name: "NE9", crossRoute: ["NEL"], description: "Boon Keng" };
const NE10: StationType = { name: "NE10", crossRoute: ["NEL"], description: "Potong Pasir" };
const NE11: StationType = { name: "NE11", crossRoute: ["NEL"], description: "Woodleigh" };
const NE12CC13: StationType = { name: "NE12/CC13", crossRoute: ["NEL", "CCL"], description: "Serangoon" };
const NE13: StationType = { name: "NE13", crossRoute: ["NEL"], description: "Kovan" };
const NE14: StationType = { name: "NE14", crossRoute: ["NEL"], description: "Hougang" };
const NE15: StationType = { name: "NE15", crossRoute: ["NEL"], description: "Buangkok" };
const NE16STC: StationType = { name: "NE16/STC", crossRoute: ["NEL", "SK-E", "SK-E-R", "SK-W", "SK-W-R"], description: "Sengkang" };
const NE17PTC: StationType = { name: "NE17/PTC", crossRoute: ["NEL", "PG-E", "PG-E-R", "PG-W", "PG-W-R"], description: "Punggol" };
const DT16CE1: StationType = { name: "DT16/CE1", crossRoute: ["DTL", "CCL"], description: "Bayfront" };
const DT15CC4: StationType = { name: "DT15/CC4", crossRoute: ["CCL", "CCLDhoby", "DTL"], description: "Promenade" };
const CC5: StationType = { name: "CC5", crossRoute: ["CCL"], description: "Nicoll Highway" };
const CC6: StationType = { name: "CC6", crossRoute: ["CCL"], description: "Satdium" };
const CC7: StationType = { name: "CC7", crossRoute: ["CCL"], description: "Mountbatten" };
const CC8: StationType = { name: "CC8", crossRoute: ["CCL"], description: "Dakota" };
const DT26CC10: StationType = { name: "DT26/CC10", crossRoute: ["DTL", "CCL"], description: "MacPherson" };
const CC11: StationType = { name: "CC11", crossRoute: ["CCL"], description: "Tai Seng" };
const CC12: StationType = { name: "CC12", crossRoute: ["CCL"], description: "Bartley" };
const CC14: StationType = { name: "CC14", crossRoute: ["CCL"], description: "Lorong Chuan" };
const CC16: StationType = { name: "CC16", crossRoute: ["CCL"], description: "Marymount" };
const CC17TE9: StationType = { name: "CC17/TE9", crossRoute: ["CCL", "TEL"], description: "Caldecott" };
const CC19DT9: StationType = { name: "CC19/DT9", crossRoute: ["CCL", "DTL"], description: "Botanic Gardens" };
const CC20: StationType = { name: "CC20", crossRoute: ["CCL"], description: "Farrer Road" };
const CC21: StationType = { name: "CC21", crossRoute: ["CCL"], description: "Holland Village" };
const CC23: StationType = { name: "CC23", crossRoute: ["CCL"], description: "One-north" };
const CC24: StationType = { name: "CC24", crossRoute: ["CCL"], description: "Kent Ridge" };
const CC25: StationType = { name: "CC25", crossRoute: ["CCL"], description: "Haw Par Villa" };
const CC26: StationType = { name: "CC26", crossRoute: ["CCL"], description: "Pasir Panjang" };
const CC27: StationType = { name: "CC27", crossRoute: ["CCL"], description: "Labrador Park" };
const CC28: StationType = { name: "CC28", crossRoute: ["CCL"], description: "Telok Blangah" };
const CC2: StationType = { name: "CC2", crossRoute: ["CCLDhoby"], description: "Bras Basah" };
const CC3: StationType = { name: "CC3", crossRoute: ["CCLDhoby"], description: "Esplanade" };
const BP6DT1: StationType = { name: "BP6/DT1", crossRoute: ["BP-CCK", "BP-C", "BP-C-R", "DTL"], description: "Bukit Panjang" };
const DT2: StationType = { name: "DT2", crossRoute: ["DTL"], description: "Cashew" };
const DT3: StationType = { name: "DT3", crossRoute: ["DTL"], description: "Hillview" };
const DT5: StationType = { name: "DT5", crossRoute: ["DTL"], description: "Beauty World" };
const DT6: StationType = { name: "DT6", crossRoute: ["DTL"], description: "King Albert Park" };
const DT7: StationType = { name: "DT7", crossRoute: ["DTL"], description: "Sixth Avenue" };
const DT8: StationType = { name: "DT8", crossRoute: ["DTL"], description: "Tan Kah Kee" };
const DT10TE11: StationType = { name: "DT10/TE11", crossRoute: ["DTL", "TEL"], description: "Stevens" };
const DT13: StationType = { name: "DT13", crossRoute: ["DTL"], description: "Rochor" };
const DT17: StationType = { name: "DT17", crossRoute: ["DTL"], description: "Downtown" };
const DT18: StationType = { name: "DT18", crossRoute: ["DTL"], description: "Telok Ayeh" };
const DT20: StationType = { name: "DT20", crossRoute: ["DTL"], description: "Fort Canning" };
const DT21: StationType = { name: "DT21", crossRoute: ["DTL"], description: "Bencoolen" };
const DT22: StationType = { name: "DT22", crossRoute: ["DTL"], description: "Jalan Besar" };
const DT23: StationType = { name: "DT23", crossRoute: ["DTL"], description: "Bendemeer" };
const DT24: StationType = { name: "DT24", crossRoute: ["DTL"], description: "Geylang Bahru" };
const DT25: StationType = { name: "DT25", crossRoute: ["DTL"], description: "Mattar" };
const DT27: StationType = { name: "DT27", crossRoute: ["DTL"], description: "Ubi" };
const DT28: StationType = { name: "DT28", crossRoute: ["DTL"], description: "Kaki Bukit" };
const DT29: StationType = { name: "DT29", crossRoute: ["DTL"], description: "Bedok North" };
const DT30: StationType = { name: "DT30", crossRoute: ["DTL"], description: "Bedok Reservoir" };
const DT31: StationType = { name: "DT31", crossRoute: ["DTL"], description: "Tampines West" };
const DT33: StationType = { name: "DT33", crossRoute: ["DTL"], description: "Tampines East" };
const DT34: StationType = { name: "DT34", crossRoute: ["DTL"], description: "Upper Changi" };
const TE1: StationType = { name: "TE1", crossRoute: ["TEL"], description: "Woodlands North" };
const TE3: StationType = { name: "TE3", crossRoute: ["TEL"], description: "Woodlands South" };
const TE4: StationType = { name: "TE4", crossRoute: ["TEL"], description: "Springleaf" };
const TE5: StationType = { name: "TE5", crossRoute: ["TEL"], description: "Lentor" };
const TE6: StationType = { name: "TE6", crossRoute: ["TEL"], description: "Mayflower" };
const TE7: StationType = { name: "TE7", crossRoute: ["TEL"], description: "Bright Hill" };
const TE8: StationType = { name: "TE8", crossRoute: ["TEL"], description: "Upper Thomson" };
const TE12: StationType = { name: "TE12", crossRoute: ["TEL"], description: "Napier" };
const TE13: StationType = { name: "TE13", crossRoute: ["TEL"], description: "Orchard Boulevard" };
const TE15: StationType = { name: "TE15", crossRoute: ["TEL"], description: "Great World" };
const TE16: StationType = { name: "TE16", crossRoute: ["TEL"], description: "Havelock" };
const TE18: StationType = { name: "TE18", crossRoute: ["TEL"], description: "Maxwell" };
const TE19: StationType = { name: "TE19", crossRoute: ["TEL"], description: "Shenton Way" };
const TE22: StationType = { name: "TE22", crossRoute: ["TEL"], description: "Gardens by the Bay" };
const BP2: StationType = { name: "BP2", crossRoute: ["BP-CCK"], description: "South View" };
const BP3: StationType = { name: "BP3", crossRoute: ["BP-CCK"], description: "Keat Hong" };
const BP4: StationType = { name: "BP4", crossRoute: ["BP-CCK"], description: "Teck Whye" };
const BP5: StationType = { name: "BP5", crossRoute: ["BP-CCK"], description: "Phoenix" };
const BP7: StationType = { name: "BP7", crossRoute: ["BP-C", "BP-C-R"], description: "Petir" };
const BP8: StationType = { name: "BP8", crossRoute: ["BP-C", "BP-C-R"], description: "Pending" };
const BP9: StationType = { name: "BP9", crossRoute: ["BP-C", "BP-C-R"], description: "Bangkit" };
const BP10: StationType = { name: "BP10", crossRoute: ["BP-C", "BP-C-R"], description: "Fajar" };
const BP11: StationType = { name: "BP11", crossRoute: ["BP-C", "BP-C-R"], description: "Segar" };
const BP12: StationType = { name: "BP12", crossRoute: ["BP-C", "BP-C-R"], description: "Jelapang" };
const BP13: StationType = { name: "BP13", crossRoute: ["BP-C", "BP-C-R"], description: "Senja" };
const SE1: StationType = { name: "SE1", crossRoute: ["SK-E", "SK-E-R"], description: "Compassvale" };
const SE2: StationType = { name: "SE2", crossRoute: ["SK-E", "SK-E-R"], description: "Rumbia" };
const SE3: StationType = { name: "SE3", crossRoute: ["SK-E", "SK-E-R"], description: "Bakau" };
const SE4: StationType = { name: "SE4", crossRoute: ["SK-E", "SK-E-R"], description: "Kangkar" };
const SE5: StationType = { name: "SE5", crossRoute: ["SK-E", "SK-E-R"], description: "Ranggung" };
const SW1: StationType = { name: "SW1", crossRoute: ["SK-W", "SK-W-R"], description: "Cheng Lim" };
const SW2: StationType = { name: "SW2", crossRoute: ["SK-W", "SK-W-R"], description: "Farmway" };
const SW3: StationType = { name: "SW3", crossRoute: ["SK-W", "SK-W-R"], description: "Kupang" };
const SW4: StationType = { name: "SW4", crossRoute: ["SK-W", "SK-W-R"], description: "Thanggam" };
const SW5: StationType = { name: "SW5", crossRoute: ["SK-W", "SK-W-R"], description: "Fernvale" };
const SW6: StationType = { name: "SW6", crossRoute: ["SK-W", "SK-W-R"], description: "Layar" };
const SW7: StationType = { name: "SW7", crossRoute: ["SK-W", "SK-W-R"], description: "Tongkang" };
const SW8: StationType = { name: "SW8", crossRoute: ["SK-W", "SK-W-R"], description: "Renjong" };
const PE1: StationType = { name: "PE1", crossRoute: ["PG-E", "PG-E-R"], description: "Cove" };
const PE2: StationType = { name: "PE2", crossRoute: ["PG-E", "PG-E-R"], description: "Meridian" };
const PE3: StationType = { name: "PE3", crossRoute: ["PG-E", "PG-E-R"], description: "Coral Edge" };
const PE4: StationType = { name: "PE4", crossRoute: ["PG-E", "PG-E-R"], description: "Riviera" };
const PE5: StationType = { name: "PE5", crossRoute: ["PG-E", "PG-E-R"], description: "Kadaloor" };
const PE6: StationType = { name: "PE6", crossRoute: ["PG-E", "PG-E-R"], description: "Oasis" };
const PE7: StationType = { name: "PE7", crossRoute: ["PG-E", "PG-E-R"], description: "Damai" };
const PW1: StationType = { name: "PW1", crossRoute: ["PG-W", "PG-W-R"], description: "Sam Kee" };
const PW2: StationType = { name: "PW2", crossRoute: ["PG-W", "PG-W-R"], description: "Teck Lee" };
const PW3: StationType = { name: "PW3", crossRoute: ["PG-W", "PG-W-R"], description: "Punggol Point" };
const PW4: StationType = { name: "PW4", crossRoute: ["PG-W", "PG-W-R"], description: "Samudera" };
const PW5: StationType = { name: "PW5", crossRoute: ["PG-W", "PG-W-R"], description: "Nibong" };
const PW6: StationType = { name: "PW6", crossRoute: ["PG-W", "PG-W-R"], description: "Sumang" };
const PW7: StationType = { name: "PW7", crossRoute: ["PG-W", "PG-W-R"], description: "Soo Teck" };

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
