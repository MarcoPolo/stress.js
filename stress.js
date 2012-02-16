var querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');

function batman() {
    ballz = function(){}

var functions = {
  "getSimilarArtists" : {
    url : "similarartists", 
    parameters : [
      "artistID"
    ],
    optionalParameters : []
  },
  "getDemographicsData" : {
    url : "demographics",
    parameters : [
      "artistID"
    ],
    optionalParameters : []
  },
  "getDailyShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ],
    optionalParameters : []
  },
  "getDailyTwitterShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ],
    optionalParameters : []
  },
  "getDailyFacebookShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getDailyStreams" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getDailyLibraryCount" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getDailyPercentOver30Plays" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getDailyPercentCompletedPlays" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getDailyFavorites" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startDate", 
        "endDate"
    ], optionalParameters : []
  },
  "getWeeklyShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyStreams" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyTwitterShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyFacebookShares" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyLibraries" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyPercentPlaysOver30" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyFavorites" : {
    url : "activityreport",
    parameters :  [
        "artistID", 
        "startWeek", 
        "startYear",
        "endWeek",
        "endYear"
    ], optionalParameters : []
  },
  "getWeeklyFavorites" : {
    url : "activityreport",
    parameters : [
        "artistID", 
        "startWeek", 
        "startYear", 
        "endWeek", 
        "endYear"
    ], optionalParameters : []
  },
  "getMonthlyShares" : {
    url : "activityreport",
    parameters : [
      "artistID", 
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyStreams" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyLibraries" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyPercentPlaysOver30" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyPercentPlaysCompleted" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyFavorites" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyFacebookShares" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getMonthlyTwitterShares" : {
    url : "activityreport",
    parameters : [
      "artistID",
      "startMonth", 
      "startYear", 
      "endMonth", 
      "endYear"
    ], optionalParameters : []
  },
  "getSongData" : {
    url : "songs",
    parameters : [
      "artistID" 
    ],
    optionalParameters : [
      "sortMetric",
      "sortDirection"
    ]
  },
  "getSongData" : {
    url : "songs",
    parameters : [
      "artistID"
    ],
    optionalParameters : [
      "sortMetric",
      "sortDirection"
    ]
  },
  "searchArtistsByName" : {
    url : "search",
    parameters : [
      "artistName"
    ],
    optionalParameters : [
      "limit"
    ]
  },
  "getCityData" : {
    url : "geography",
    parameters : [
      "artistID"
    ],
    optionalParameters : [
      "parentLocation",
      "locationFragment",
      "maxResults",
      "sortMetric",
      "sortDirection"
    ]
  },
  "getRegionData" : {
    url : "geography",
    parameters : [
      "artistID"
    ],
    optionalParameters : [
      "parentLocation",
      "locationFragment",
      "maxResults",
      "sortMetric",
      "sortDirection"
    ]
  },
  "getCountryData" : {
    url : "geography",
    parameters : [
      "artistID"
    ],
    optionalParameters : [
      "locationFragment",
      "maxResults",
      "sortMetric",
      "sortDirection"
    ]
  }
};

var artistIds = [1254743, 1153324, 1314457, 674027, 1118876, 1259314, 1298964, 431603, 401394, 1382474, 1164089, 658595, 1055805, 401901, 1247012, 1167491, 401737, 1164015, 919306, 401719, 442780, 401378, 448959, 1076808, 402024, 401441, 1041910, 1238792, 401899, 1326542, 1163185, 1191472, 1018927, 1193111, 401331, 401368, 1313314, 401582, 401910, 1301232, 859533, 1035307, 403585, 1041960, 402838, 401421, 1163453, 401998, 1239926, 406117, 405212, 1187703, 1194756, 973606, 1311540, 599869, 401561, 1307475, 401560, 1331320, 401699, 413185, 1388225, 1194359, 401880, 1375182, 1128441, 405535, 401620, 401823, 1121318, 1039452, 1124862, 1178738, 402352, 1020256, 1254142, 1204009, 1301216, 1141461, 401609, 401868, 446663, 410176, 401563, 1371875, 1257602, 1231781, 1305291, 1131305, 526664, 1191778, 401540, 538058, 401367, 402559, 401549, 401538, 1233798, 1311882, 407446, 404087, 1082691, 1194891, 1347418, 1387774, 401444, 1140582, 1297100, 1226796, 401407, 392457, 401945, 1156967, 1200814, 1314710, 1227484, 1367722, 1284543, 1167221, 407602, 401849, 1168676, 1104088, 1306665, 1263820, 550306, 406456, 403146, 405659, 402377, 1372926, 1228066, 1230460, 1208828, 401339, 401779, 401878, 401706, 401933, 401499, 403632, 401718, 1083831, 1068934, 1341165, 449934, 916082, 550350, 406817, 401743, 1055074, 1236186, 1313493, 1375878, 1120397, 1225814, 1082536, 1313590, 405271, 401411, 402819, 401408, 401626, 437833, 612919, 560726, 620149, 1160754, 1095391, 1359042, 1164510, 402916, 401383, 401548, 1293950, 1023948, 402681, 405835, 886189, 404951, 401942, 1155189, 1378678, 1348489, 401366, 401857, 422990, 401717, 412699, 401712, 401735, 405887, 1304544, 1350298, 1270257, 1286237, 1246071, 1248165, 1091743, 1006789, 1080183, 1363634, 401816, 412105, 401918, 1223552, 1187094, 1175229, 1024106, 1362935, 1205622, 1263113, 1301313, 1280956, 1326543, 1311091, 1097898, 1069041, 1218493, 1196281, 401974, 401990, 401372, 403643, 431473, 1241454, 1087977, 1142689, 1397219, 1398424, 1013662, 1099873, 430469, 596754, 403164, 404945, 407017, 601408, 401338, 1256933, 1283327, 974395, 1110807, 1169781, 402660, 401971, 401969, 401401, 440675, 401534, 403565, 402362, 401758, 402081, 1067835, 1177219, 1176963, 1253611, 1224103, 1316051, 1066641, 1272731, 1190486, 1204675, 413622, 425454, 439029, 433832, 401448, 620141, 403948, 718546, 689284, 402467, 401749, 1060770, 1212690, 1385070, 1083251, 1159524, 1091297, 1257882, 1118101, 1054733, 409474, 411431, 405114, 401503, 402418, 401906, 404019, 401915, 401483, 765657, 401738, 437219, 1204702, 1036080, 1395953, 1212326, 1244463, 1301749, 1233164, 1187554, 1192918, 1189385, 1347885, 1189594, 411735, 401498, 642216, 401740, 403450, 844622, 716049, 414380, 733975, 406970, 1316704, 1384633, 1223977, 1240106, 1313807, 1289213, 1198162, 1106081, 1385253, 1053153, 1186870, 1199772, 1237606, 401591, 401584, 450075, 401807, 471650, 404872, 404933, 401494, 401333, 803543, 727294, 411007, 401973, 406805, 1175329, 1176435, 1336742, 1153661, 1381289, 1078610, 1338387, 1305319, 1286472, 1088111, 1252640, 1339504, 404196, 403731, 401414, 401739, 401446, 414481, 406241, 424164, 1176624, 1079167, 1228067, 1373659, 1356458, 943677, 1189162, 1301869, 1238517, 1209166, 1225005, 1247266, 1145515, 1164503, 1340636, 1316143, 1391435, 403361, 827126, 409780, 428362, 570027, 406544, 414426, 440096, 401964, 421838, 781884, 401935, 444659, 408938, 403724, 1233111, 1274450, 1218114, 1239653, 1313051, 1372820, 1374244, 1226790, 1379468, 1253274, 1306606, 1256332, 1038659, 1369548, 1320246, 1046339, 1191353, 1151500, 1117632, 1362808, 1390508, 1312747, 1257078, 1318243, 401762, 401588, 440157, 405442, 417551, 396654, 401330, 730506, 402364, 402605, 657444, 405124, 419874, 401806, 392444, 406546, 402431, 447232, 405467, 419079, 404080, 401464, 403099, 403754, 856493, 401527, 403295, 403261, 401994, 898374, 561445, 1201302, 1256366, 1311325, 1046429, 1293226, 1304783, 1057899, 1259286, 1177203, 1186688, 1201310, 1193460, 1341645, 1263429, 1384790, 1392503, 1224264, 1378141, 1061411, 1241837, 1165023, 1165294, 1169055, 1190863, 1163782, 1255588, 401578, 403714, 401900, 419884, 409662, 404173, 416662, 401871, 403262, 403318, 401558, 402007, 689392, 411952, 450128, 404995, 403719, 704377, 703848, 422771, 410327, 401478, 405812, 421888, 735316, 432757, 401351, 403307, 861212, 401579, 1279201, 1165046, 1271101, 1060162, 1384355, 1104339, 1117673, 1307751, 1252995, 1045123, 1390417, 1130848, 1193571, 1141004, 1112067, 1204239, 1171896, 1171472, 1166945, 1163456, 1389362, 1309819, 1034690, 1251353, 1352641, 1242837, 1308908, 1194101, 1313716, 1259675, 1216897, 1312285, 1164029, 1192503, 1192075, 1327953, 1197948, 1008563, 1039787, 1025499, 401467, 768432, 425399, 435876, 403330, 401447, 559533, 893782, 401790, 504977, 405592, 791030, 450102, 402428, 403475, 405001, 403718, 401571, 423466, 401595, 404096, 404316, 411107, 414081, 425094, 709607, 481227, 404871, 401388, 628832, 403703, 403743, 401617, 1224192, 1170575, 1391679, 1102033, 1348960, 1043740, 1397033, 1216647, 1065372, 931162, 1213392, 1290717, 1221467, 1313652, 1287504, 1335388, 1200965, 1337204, 1189148, 1366952, 976102, 1146382, 1288123, 1070774, 1230735, 1167834, 1217970, 1035819, 1118190, 1109084, 1356912, 1222891, 1189121, 1104171, 1054152, 1233160, 1047639, 1311261, 1156190, 1047754, 1254003, 401423, 401781, 407892, 413641, 871250, 591848, 403268, 404297, 403934, 401336, 708420, 547768, 828893, 392276, 424207, 411012, 404009, 419891, 416090, 923472, 405520, 404595, 401525, 402421, 402862, 408922, 401872, 401752, 405670, 401364, 409695, 410987, 402469, 404497, 404072, 401988, 404920, 405544, 405002, 624911, 533474, 563777, 1034678, 1165296, 1111610, 1192470, 1207725, 1381204, 1394238, 1222912, 1198922, 1255221, 1055158, 1343399, 1198940, 974885, 1215048, 1193798, 1202113, 1354778, 1334961, 1336907, 1378447, 1219091, 1211856, 1127650, 1329317, 1386575, 1189601, 1395163, 1038242, 1260238, 1197088, 1309132, 1035196, 1378762, 1185932, 1197818, 1302653, 1225600, 1336016, 1238094, 1283513, 1394063, 1380357, 1191225, 1110352, 1233067, 1173053, 1225435, 1331391, 1210919, 1199488, 1258614, 1278107, 1340213, 1220227, 1018961, 1126945, 1229624, 1319452, 1174538, 1295004, 1313599, 1301517, 1369063, 1207996, 1187940, 1174659, 1371446, 1254374, 1054042, 1199728, 1302292, 1360957, 1250513, 1377021, 434927, 401851, 408279, 624154, 392447, 401696, 414583, 401724, 680253, 642812, 643171, 431400, 401991, 451700, 443041, 622905, 439668, 602504, 417799, 404076, 403935, 411811, 777092, 405115, 412122, 402291, 401438, 406803, 887554, 417502, 411843, 414766, 683027, 402504, 440902, 453218, 407238, 401854, 405552, 415636, 592075, 446526, 403691, 886064, 413567, 401923, 413040, 451241, 1126009, 1164801, 1259285, 1203750, 1191724, 1232488, 1189750, 1117010, 1288576, 1218556, 1230728, 1353723, 1199018, 1354124, 1341619, 1313633, 1040579, 1240914, 1317381, 1061919, 1132553, 1247186, 1190581, 967650, 1068284, 1397519, 1369502, 1014415, 1380507, 1389085, 1075291, 1145606, 1360619, 1337205, 1009939, 1338007, 1249988, 1371314, 1201976, 993871, 1336333, 1082667, 1370990, 1233711, 1195692, 1377334, 1123109, 1198200, 1220309, 1199438, 1307604, 1395355, 1323928, 1104245, 1386765, 1048821, 1235954, 1066919, 1169226, 1262940, 1188871, 1344350, 1036589, 1316024, 1161318, 1194406, 1148028, 1234589, 1117461, 1195723, 1250505, 1315142, 1271795, 1160148, 1350682, 1225470, 1387629, 1167342, 1305254, 1197098, 1309747, 1392309, 1207325, 1316249, 1212356, 1368460, 1318611, 1064025, 1098344, 1015273, 974296, 1052415, 1198998, 1288816, 1325076, 1042835, 1098279, 1227177, 1018266, 1239896, 1190650, 1350022, 1164208, 1173145, 1267976, 1021211, 1207740, 1229772, 1113168, 1201551, 1199053, 788034, 401728, 401727, 571176, 438850, 402286, 401376, 403574, 921711, 407559, 407605, 417763, 407678, 409817, 403152, 410173, 410035, 856714, 405460, 401443, 698834, 401569, 416315, 565133, 878373, 443471, 401947, 605051, 655660, 403707, 402464, 412094, 722943, 916461, 628838, 407020, 404881, 401462, 402296, 638933, 411109, 424954, 401389, 404735, 416947, 443487, 408974, 403583, 403570, 777687, 405253, 401439, 408292, 401434, 414588, 419890, 441273, 431263, 420773, 424030, 407206, 423584, 403968, 530069, 406015, 402601, 402019, 402833, 704446, 402498, 452097, 895496, 874186, 787394, 578214, 567868, 402142, 412358, 401798, 451336, 402355, 1359107, 1202012, 1190055, 1078205, 1317710, 1227687, 1256803, 1079767, 1122305];

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


    function getFun(){
        var numFunctions = Object.size(functions); // get number of available functions
        var randNum = Math.floor(Math.random()*(numFunctions)); // get random number between 0 and numFunctions
        var functionName = Object.keys(functions)[randNum]; // select our random function
        var numParams = functions[functionName].parameters.length; // grab the number of parameters of that function
        var hasParams = (numParams > 0); // boolean val if method has required parameters
        var numOptParams = functions[functionName].optionalParameters.length; // grab the number of parameters of that function
        var hasOptParams = (numOptParams > 0); // boolean val if method has optional parameters

        var url = functions[functionName].url;
        var method = functionName;
        var parameters = "{";

        if (hasParams) {
          for (var p in functions[functionName].parameters){
            var param = functions[functionName].parameters[p];
            if (param == "artistID") {
              var id = artistIds[Math.floor(Math.random()*(artistIds.length))];
              parameters += "\"artistID\": " + id + ", ";
            }
            else if (param == "startDate") {
              var year = Math.floor(Math.random()*(3)+8);
              if (year < 10) year = "0"+year.toString();
              year = "20" + year.toString();
              var month = Math.floor(Math.random()*(12)+1);
              if (month < 10) month = "0"+month.toString();
              var day = Math.floor(Math.random()*(30)+1);
              if (day < 10) day = "0"+day.toString();
              var date = year + "-" + month + "-" + day;
              parameters += "\"startDate\": " + date + ", ";
            }
            else if (param == "endate") {
              var year = Math.floor(Math.random()*(3)+8);
              if (year < 10) year = "0"+year.toString();
              year = "20" + year.toString();
              var month = Math.floor(Math.random()*(12)+1);
              if (month < 10) month = "0"+month.toString();
              var day = Math.floor(Math.random()*(30)+1);
              if (day < 10) day = "0"+day.toString();
              var date = year + "-" + month + "-" + day;
              parameters += "\"endDate\": " + date + ", ";
            }
            else if (param == "startWeek") {
              var week = Math.floor(Math.random()*(53)+1).toString();
              parameters += "\"startWeek\": " + week + ", ";
            }
            else if (param == "endWeek") {
              var week = Math.floor(Math.random()*(53)+1).toString();
              parameters += "\"endWeek\": " + week + ", ";
            }
            else if (param == "startMonth") {
              var month = Math.floor(Math.random()*(12)+1).toString();
              parameters += "\"startMonth\": " + month + ", ";
            }
            else if (param == "endMonth") {
              var month = Math.floor(Math.random()*(12)+1).toString();
              parameters += "\"endMonth\": " + month + ", ";
            }
            else if (param == "startYear") {
              var year = Math.floor(Math.random()*(3)+8);
              if (year < 10) year = "0"+year.toString();
              year = "20" + year.toString();
              parameters += "\"startYear\": " + year + ", ";
            }
            else if (param == "endYear") {
              var year = Math.floor(Math.random()*(3)+8);
              if (year < 10) year = "0"+year.toString();
              year = "20" + year.toString();
              parameters += "\"endYear\": " + year + ", ";
            }
          }
        }
        if (hasOptParams) {
          for (var optParam in functions[functionName].optionalParameters) {
            if (Math.floor(Math.random()*(2))) {
              //console.log(functions[functionName].optionalParameters[optParam]);
            }
          }
        }

        if (parameters.length > 1) parameters = parameters.substring(0, parameters.length-2); // remove trailing comma
        parameters += "}";

        return {url:url, method:method, parameters:parameters};
    }
    ballz.prototype.getFun = getFun;
    return new ballz();
}

/* A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 * PUB 180-2 as well as the corresponding HMAC implementation as defined in
 * FIPS PUB 198a
 *
 * Version 1.3 Copyright Brian Turek 2008-2010
 * Distributed under the BSD License
 * See http://jssha.sourceforge.net/ for more information
 *
 * Several functions taken from Paul Johnson
 */
(function ()
{
	/*
	 * Configurable variables. Defaults typically work
	 */
	/* Number of Bits Per character (8 for ASCII, 16 for Unicode) */
	var charSize = 8, 
	/* base-64 pad character. "=" for strict RFC compliance */
	b64pad = "", 
	/* hex output format. 0 - lowercase; 1 - uppercase */
	hexCase = 0, 

	/*
	 * Int_64 is a object for 2 32-bit numbers emulating a 64-bit number
	 *
	 * @constructor
	 * @param {Number} msint_32 The most significant 32-bits of a 64-bit number
	 * @param {Number} lsint_32 The least significant 32-bits of a 64-bit number
	 */
	Int_64 = function (msint_32, lsint_32)
	{
		this.highOrder = msint_32;
		this.lowOrder = lsint_32;
	},

	/*
	 * Convert a string to an array of big-endian words
	 * If charSize is ASCII, characters >255 have their hi-byte silently
	 * ignored.
	 *
	 * @param {String} str String to be converted to binary representation
	 * @return Integer array representation of the parameter
	 */
	str2binb = function (str)
	{
		var bin = [], mask = (1 << charSize) - 1,
			length = str.length * charSize, i;

		for (i = 0; i < length; i += charSize)
		{
			bin[i >> 5] |= (str.charCodeAt(i / charSize) & mask) <<
				(32 - charSize - (i % 32));
		}

		return bin;
	},

	/*
	 * Convert a hex string to an array of big-endian words
	 *
	 * @param {String} str String to be converted to binary representation
	 * @return Integer array representation of the parameter
	 */
	hex2binb = function (str)
	{
		var bin = [], length = str.length, i, num;

		for (i = 0; i < length; i += 2)
		{
			num = parseInt(str.substr(i, 2), 16);
			if (!isNaN(num))
			{
				bin[i >> 3] |= num << (24 - (4 * (i % 8)));
			}
			else
			{
				return "INVALID HEX STRING";
			}
		}

		return bin;
	},

	/*
	 * Convert an array of big-endian words to a hex string.
	 *
	 * @private
	 * @param {Array} binarray Array of integers to be converted to hexidecimal
	 *	 representation
	 * @return Hexidecimal representation of the parameter in String form
	 */
	binb2hex = function (binarray)
	{
		var hex_tab = (hexCase) ? "0123456789ABCDEF" : "0123456789abcdef",
			str = "", length = binarray.length * 4, i, srcByte;

		for (i = 0; i < length; i += 1)
		{
			srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
			str += hex_tab.charAt((srcByte >> 4) & 0xF) +
				hex_tab.charAt(srcByte & 0xF);
		}

		return str;
	},

	/*
	 * Convert an array of big-endian words to a base-64 string
	 *
	 * @private
	 * @param {Array} binarray Array of integers to be converted to base-64
	 *	 representation
	 * @return Base-64 encoded representation of the parameter in String form
	 */
	binb2b64 = function (binarray)
	{
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" +
			"0123456789+/", str = "", length = binarray.length * 4, i, j,
			triplet;

		for (i = 0; i < length; i += 3)
		{
			triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) |
				(((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) |
				((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
			for (j = 0; j < 4; j += 1)
			{
				if (i * 8 + j * 6 <= binarray.length * 32)
				{
					str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
				}
				else
				{
					str += b64pad;
				}
			}
		}
		return str;
	},

	/*
	 * The 32-bit implementation of circular rotate left
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @param {Number} n The number of bits to shift
	 * @return The x shifted circularly by n bits
	 */
	rotl_32 = function (x, n)
	{
		return (x << n) | (x >>> (32 - n));
	},

	/*
	 * The 32-bit implementation of circular rotate right
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @param {Number} n The number of bits to shift
	 * @return The x shifted circularly by n bits
	 */
	rotr_32 = function (x, n)
	{
		return (x >>> n) | (x << (32 - n));
	},

	/*
	 * The 64-bit implementation of circular rotate right
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @param {Number} n The number of bits to shift
	 * @return The x shifted circularly by n bits
	 */
	rotr_64 = function (x, n)
	{
		if (n <= 32)
		{
			return new Int_64(
					(x.highOrder >>> n) | (x.lowOrder << (32 - n)),
					(x.lowOrder >>> n) | (x.highOrder << (32 - n))
				);
		}
		else
		{
			return new Int_64(
					(x.lowOrder >>> n) | (x.highOrder << (32 - n)),
					(x.highOrder >>> n) | (x.lowOrder << (32 - n))
				);
		}
	},

	/*
	 * The 32-bit implementation of shift right
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @param {Number} n The number of bits to shift
	 * @return The x shifted by n bits
	 */
	shr_32 = function (x, n)
	{
		return x >>> n;
	},

	/*
	 * The 64-bit implementation of shift right
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @param {Number} n The number of bits to shift
	 * @return The x shifted by n bits
	 */
	shr_64 = function (x, n)
	{
		if (n <= 32)
		{
			return new Int_64(
					x.highOrder >>> n,
					x.lowOrder >>> n | (x.highOrder << (32 - n))
				);
		}
		else
		{
			return new Int_64(
					0,
					x.highOrder << (32 - n)
				);
		}
	},

	/*
	 * The 32-bit implementation of the NIST specified Parity function
	 *
	 * @private
	 * @param {Number} x The first 32-bit integer argument
	 * @param {Number} y The second 32-bit integer argument
	 * @param {Number} z The third 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	parity_32 = function (x, y, z)
	{
		return x ^ y ^ z;
	},

	/*
	 * The 32-bit implementation of the NIST specified Ch function
	 *
	 * @private
	 * @param {Number} x The first 32-bit integer argument
	 * @param {Number} y The second 32-bit integer argument
	 * @param {Number} z The third 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	ch_32 = function (x, y, z)
	{
		return (x & y) ^ (~x & z);
	},

	/*
	 * The 64-bit implementation of the NIST specified Ch function
	 *
	 * @private
	 * @param {Int_64} x The first 64-bit integer argument
	 * @param {Int_64} y The second 64-bit integer argument
	 * @param {Int_64} z The third 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	ch_64 = function (x, y, z)
	{
		return new Int_64(
				(x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
				(x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
			);
	},

	/*
	 * The 32-bit implementation of the NIST specified Maj function
	 *
	 * @private
	 * @param {Number} x The first 32-bit integer argument
	 * @param {Number} y The second 32-bit integer argument
	 * @param {Number} z The third 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	maj_32 = function (x, y, z)
	{
		return (x & y) ^ (x & z) ^ (y & z);
	},

	/*
	 * The 64-bit implementation of the NIST specified Maj function
	 *
	 * @private
	 * @param {Int_64} x The first 64-bit integer argument
	 * @param {Int_64} y The second 64-bit integer argument
	 * @param {Int_64} z The third 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	maj_64 = function (x, y, z)
	{
		return new Int_64(
				(x.highOrder & y.highOrder) ^
				(x.highOrder & z.highOrder) ^
				(y.highOrder & z.highOrder),
				(x.lowOrder & y.lowOrder) ^
				(x.lowOrder & z.lowOrder) ^
				(y.lowOrder & z.lowOrder)
			);
	},

	/*
	 * The 32-bit implementation of the NIST specified Sigma0 function
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	sigma0_32 = function (x)
	{
		return rotr_32(x, 2) ^ rotr_32(x, 13) ^ rotr_32(x, 22);
	},

	/*
	 * The 64-bit implementation of the NIST specified Sigma0 function
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	sigma0_64 = function (x)
	{
		var rotr28 = rotr_64(x, 28), rotr34 = rotr_64(x, 34),
			rotr39 = rotr_64(x, 39);

		return new Int_64(
				rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
				rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder);
	},

	/*
	 * The 32-bit implementation of the NIST specified Sigma1 function
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	sigma1_32 = function (x)
	{
		return rotr_32(x, 6) ^ rotr_32(x, 11) ^ rotr_32(x, 25);
	},

	/*
	 * The 64-bit implementation of the NIST specified Sigma1 function
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	sigma1_64 = function (x)
	{
		var rotr14 = rotr_64(x, 14), rotr18 = rotr_64(x, 18),
			rotr41 = rotr_64(x, 41);

		return new Int_64(
				rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
				rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder);
	},

	/*
	 * The 32-bit implementation of the NIST specified Gamma0 function
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	gamma0_32 = function (x)
	{
		return rotr_32(x, 7) ^ rotr_32(x, 18) ^ shr_32(x, 3);
	},

	/*
	 * The 64-bit implementation of the NIST specified Gamma0 function
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	gamma0_64 = function (x)
	{
		var rotr1 = rotr_64(x, 1), rotr8 = rotr_64(x, 8), shr7 = shr_64(x, 7);

		return new Int_64(
				rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
				rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
			);
	},

	/*
	 * The 32-bit implementation of the NIST specified Gamma1 function
	 *
	 * @private
	 * @param {Number} x The 32-bit integer argument
	 * @return The NIST specified output of the function
	 */
	gamma1_32 = function (x)
	{
		return rotr_32(x, 17) ^ rotr_32(x, 19) ^ shr_32(x, 10);
	},

	/*
	 * The 64-bit implementation of the NIST specified Gamma1 function
	 *
	 * @private
	 * @param {Int_64} x The 64-bit integer argument
	 * @return The NIST specified output of the function
	 */
	gamma1_64 = function (x)
	{
		var rotr19 = rotr_64(x, 19), rotr61 = rotr_64(x, 61),
			shr6 = shr_64(x, 6);

		return new Int_64(
				rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
				rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
			);
	},

	/*
	 * Add two 32-bit integers, wrapping at 2^32. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Number} x The first 32-bit integer argument to be added
	 * @param {Number} y The second 32-bit integer argument to be added
	 * @return The sum of x + y
	 */
	safeAdd_32_2 = function (x, y)
	{
		var lsw = (x & 0xFFFF) + (y & 0xFFFF),
			msw = (x >>> 16) + (y >>> 16) + (lsw >>> 16);

		return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
	},

	/*
	 * Add four 32-bit integers, wrapping at 2^32. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Number} a The first 32-bit integer argument to be added
	 * @param {Number} b The second 32-bit integer argument to be added
	 * @param {Number} c The third 32-bit integer argument to be added
	 * @param {Number} d The fourth 32-bit integer argument to be added
	 * @return The sum of a + b + c + d
	 */
	safeAdd_32_4 = function (a, b, c, d)
	{
		var lsw = (a & 0xFFFF) + (b & 0xFFFF) + (c & 0xFFFF) + (d & 0xFFFF),
			msw = (a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) +
				(lsw >>> 16);

		return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
	},

	/*
	 * Add five 32-bit integers, wrapping at 2^32. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Number} a The first 32-bit integer argument to be added
	 * @param {Number} b The second 32-bit integer argument to be added
	 * @param {Number} c The third 32-bit integer argument to be added
	 * @param {Number} d The fourth 32-bit integer argument to be added
	 * @param {Number} e The fifth 32-bit integer argument to be added
	 * @return The sum of a + b + c + d + e
	 */
	safeAdd_32_5 = function (a, b, c, d, e)
	{
		var lsw = (a & 0xFFFF) + (b & 0xFFFF) + (c & 0xFFFF) + (d & 0xFFFF) +
				(e & 0xFFFF),
			msw = (a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) +
				(e >>> 16) + (lsw >>> 16);

		return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
	},

	/*
	 * Add two 64-bit integers, wrapping at 2^64. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Int_64} x The first 64-bit integer argument to be added
	 * @param {Int_64} y The second 64-bit integer argument to be added
	 * @return The sum of x + y
	 */
	safeAdd_64_2 = function (x, y)
	{
		var lsw, msw, lowOrder, highOrder;

		lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
		msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new Int_64(highOrder, lowOrder);
	},

	/*
	 * Add four 64-bit integers, wrapping at 2^64. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Int_64} a The first 64-bit integer argument to be added
	 * @param {Int_64} b The second 64-bit integer argument to be added
	 * @param {Int_64} c The third 64-bit integer argument to be added
	 * @param {Int_64} d The fouth 64-bit integer argument to be added
	 * @return The sum of a + b + c + d
	 */
	safeAdd_64_4 = function (a, b, c, d)
	{
		var lsw, msw, lowOrder, highOrder;

		lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) +
			(c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
		msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) +
			(c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) +
			(c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) +
			(c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new Int_64(highOrder, lowOrder);
	},

	/*
	 * Add five 64-bit integers, wrapping at 2^64. This uses 16-bit operations
	 * internally to work around bugs in some JS interpreters.
	 *
	 * @private
	 * @param {Int_64} a The first 64-bit integer argument to be added
	 * @param {Int_64} b The second 64-bit integer argument to be added
	 * @param {Int_64} c The third 64-bit integer argument to be added
	 * @param {Int_64} d The fouth 64-bit integer argument to be added
	 * @param {Int_64} e The fouth 64-bit integer argument to be added
	 * @return The sum of a + b + c + d + e
	 */
	safeAdd_64_5 = function (a, b, c, d, e)
	{
		var lsw, msw, lowOrder, highOrder;

		lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) +
			(c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) +
			(e.lowOrder & 0xFFFF);
		msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) +
			(c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) +
			(lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) +
			(c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) +
			(e.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) +
			(c.highOrder >>> 16) + (d.highOrder >>> 16) +
			(e.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new Int_64(highOrder, lowOrder);
	},

	/*
	 * Calculates the SHA-1 hash of the string set at instantiation
	 *
	 * @private
	 * @param {Array} message The binary array representation of the string to
	 *	 hash
	 * @param {Number} messageLen The number of bits in the message
	 * @return The array of integers representing the SHA-1 hash of message
	 */
	coreSHA1 = function (message, messageLen)
	{
		var W = [], a, b, c, d, e, T, ch = ch_32, parity = parity_32,
			maj = maj_32, rotl = rotl_32, safeAdd_2 = safeAdd_32_2, i, t,
			safeAdd_5 = safeAdd_32_5, appendedMessageLength,
			H = [
				0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0
			],
			K = [
				0x5a827999, 0x5a827999, 0x5a827999, 0x5a827999,
				0x5a827999, 0x5a827999, 0x5a827999, 0x5a827999,
				0x5a827999, 0x5a827999, 0x5a827999, 0x5a827999,
				0x5a827999, 0x5a827999, 0x5a827999, 0x5a827999,
				0x5a827999, 0x5a827999, 0x5a827999, 0x5a827999,
				0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1,
				0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1,
				0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1,
				0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1,
				0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1, 0x6ed9eba1,
				0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc,
				0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc,
				0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc,
				0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc,
				0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc, 0x8f1bbcdc,
				0xca62c1d6, 0xca62c1d6, 0xca62c1d6, 0xca62c1d6,
				0xca62c1d6, 0xca62c1d6, 0xca62c1d6, 0xca62c1d6,
				0xca62c1d6, 0xca62c1d6, 0xca62c1d6, 0xca62c1d6,
				0xca62c1d6, 0xca62c1d6, 0xca62c1d6, 0xca62c1d6,
				0xca62c1d6, 0xca62c1d6, 0xca62c1d6, 0xca62c1d6
			];

		/* Append '1' at the end of the binary string */
		message[messageLen >> 5] |= 0x80 << (24 - (messageLen % 32));
		/* Append length of binary string in the position such that the new
		length is a multiple of 512.  Logic does not work for even multiples
		of 512 but there can never be even multiples of 512 */
		message[(((messageLen + 65) >> 9) << 4) + 15] = messageLen;

		appendedMessageLength = message.length;

		for (i = 0; i < appendedMessageLength; i += 16)
		{
			a = H[0];
			b = H[1];
			c = H[2];
			d = H[3];
			e = H[4];

			for (t = 0; t < 80; t += 1)
			{
				if (t < 16)
				{
					W[t] = message[t + i];
				}
				else
				{
					W[t] = rotl(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
				}

				if (t < 20)
				{
					T = safeAdd_5(rotl(a, 5), ch(b, c, d), e, K[t], W[t]);
				}
				else if (t < 40)
				{
					T = safeAdd_5(rotl(a, 5), parity(b, c, d), e, K[t], W[t]);
				}
				else if (t < 60)
				{
					T = safeAdd_5(rotl(a, 5), maj(b, c, d), e, K[t], W[t]);
				} else {
					T = safeAdd_5(rotl(a, 5), parity(b, c, d), e, K[t], W[t]);
				}

				e = d;
				d = c;
				c = rotl(b, 30);
				b = a;
				a = T;
			}

			H[0] = safeAdd_2(a, H[0]);
			H[1] = safeAdd_2(b, H[1]);
			H[2] = safeAdd_2(c, H[2]);
			H[3] = safeAdd_2(d, H[3]);
			H[4] = safeAdd_2(e, H[4]);
		}

		return H;
	},

	/*
	 * Calculates the desired SHA-2 hash of the string set at instantiation
	 *
	 * @private
	 * @param {Array} The binary array representation of the string to hash
	 * @param {Number} The number of bits in message
	 * @param {String} variant The desired SHA-2 variant
	 * @return The array of integers representing the SHA-2 hash of message
	 */
	coreSHA2 = function (message, messageLen, variant)
	{
		var a, b, c, d, e, f, g, h, T1, T2, H, numRounds, lengthPosition, i, t,
			binaryStringInc, binaryStringMult, safeAdd_2, safeAdd_4, safeAdd_5,
			gamma0, gamma1, sigma0, sigma1, ch, maj, Int, K, W = [],
			appendedMessageLength;

		/* Set up the various function handles and variable for the specific 
		 * variant */
		if (variant === "SHA-224" || variant === "SHA-256")
		{
			/* 32-bit variant */
			numRounds = 64;
			lengthPosition = (((messageLen + 65) >> 9) << 4) + 15;
			binaryStringInc = 16;
			binaryStringMult = 1;
			Int = Number;
			safeAdd_2 = safeAdd_32_2;
			safeAdd_4 = safeAdd_32_4;
			safeAdd_5 = safeAdd_32_5;
			gamma0 = gamma0_32;
			gamma1 = gamma1_32;
			sigma0 = sigma0_32;
			sigma1 = sigma1_32;
			maj = maj_32;
			ch = ch_32;
			K = [
					0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
					0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
					0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
					0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
					0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
					0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
					0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
					0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
					0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
					0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
					0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
					0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
					0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
					0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
					0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
					0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
				];

			if (variant === "SHA-224")
			{
				H = [
						0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
						0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
					];
			}
			else
			{
				H = [
						0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
						0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
					];
			}
		}
		else if (variant === "SHA-384" || variant === "SHA-512")
		{
			/* 64-bit variant */
			numRounds = 80;
			lengthPosition = (((messageLen + 128) >> 10) << 5) + 31;
			binaryStringInc = 32;
			binaryStringMult = 2;
			Int = Int_64;
			safeAdd_2 = safeAdd_64_2;
			safeAdd_4 = safeAdd_64_4;
			safeAdd_5 = safeAdd_64_5;
			gamma0 = gamma0_64;
			gamma1 = gamma1_64;
			sigma0 = sigma0_64;
			sigma1 = sigma1_64;
			maj = maj_64;
			ch = ch_64;

			K = [
				new Int(0x428a2f98, 0xd728ae22), new Int(0x71374491, 0x23ef65cd),
				new Int(0xb5c0fbcf, 0xec4d3b2f), new Int(0xe9b5dba5, 0x8189dbbc),
				new Int(0x3956c25b, 0xf348b538), new Int(0x59f111f1, 0xb605d019),
				new Int(0x923f82a4, 0xaf194f9b), new Int(0xab1c5ed5, 0xda6d8118),
				new Int(0xd807aa98, 0xa3030242), new Int(0x12835b01, 0x45706fbe),
				new Int(0x243185be, 0x4ee4b28c), new Int(0x550c7dc3, 0xd5ffb4e2),
				new Int(0x72be5d74, 0xf27b896f), new Int(0x80deb1fe, 0x3b1696b1),
				new Int(0x9bdc06a7, 0x25c71235), new Int(0xc19bf174, 0xcf692694),
				new Int(0xe49b69c1, 0x9ef14ad2), new Int(0xefbe4786, 0x384f25e3),
				new Int(0x0fc19dc6, 0x8b8cd5b5), new Int(0x240ca1cc, 0x77ac9c65),
				new Int(0x2de92c6f, 0x592b0275), new Int(0x4a7484aa, 0x6ea6e483),
				new Int(0x5cb0a9dc, 0xbd41fbd4), new Int(0x76f988da, 0x831153b5),
				new Int(0x983e5152, 0xee66dfab), new Int(0xa831c66d, 0x2db43210),
				new Int(0xb00327c8, 0x98fb213f), new Int(0xbf597fc7, 0xbeef0ee4),
				new Int(0xc6e00bf3, 0x3da88fc2), new Int(0xd5a79147, 0x930aa725),
				new Int(0x06ca6351, 0xe003826f), new Int(0x14292967, 0x0a0e6e70),
				new Int(0x27b70a85, 0x46d22ffc), new Int(0x2e1b2138, 0x5c26c926),
				new Int(0x4d2c6dfc, 0x5ac42aed), new Int(0x53380d13, 0x9d95b3df),
				new Int(0x650a7354, 0x8baf63de), new Int(0x766a0abb, 0x3c77b2a8),
				new Int(0x81c2c92e, 0x47edaee6), new Int(0x92722c85, 0x1482353b),
				new Int(0xa2bfe8a1, 0x4cf10364), new Int(0xa81a664b, 0xbc423001),
				new Int(0xc24b8b70, 0xd0f89791), new Int(0xc76c51a3, 0x0654be30),
				new Int(0xd192e819, 0xd6ef5218), new Int(0xd6990624, 0x5565a910),
				new Int(0xf40e3585, 0x5771202a), new Int(0x106aa070, 0x32bbd1b8),
				new Int(0x19a4c116, 0xb8d2d0c8), new Int(0x1e376c08, 0x5141ab53),
				new Int(0x2748774c, 0xdf8eeb99), new Int(0x34b0bcb5, 0xe19b48a8),
				new Int(0x391c0cb3, 0xc5c95a63), new Int(0x4ed8aa4a, 0xe3418acb),
				new Int(0x5b9cca4f, 0x7763e373), new Int(0x682e6ff3, 0xd6b2b8a3),
				new Int(0x748f82ee, 0x5defb2fc), new Int(0x78a5636f, 0x43172f60),
				new Int(0x84c87814, 0xa1f0ab72), new Int(0x8cc70208, 0x1a6439ec),
				new Int(0x90befffa, 0x23631e28), new Int(0xa4506ceb, 0xde82bde9),
				new Int(0xbef9a3f7, 0xb2c67915), new Int(0xc67178f2, 0xe372532b),
				new Int(0xca273ece, 0xea26619c), new Int(0xd186b8c7, 0x21c0c207),
				new Int(0xeada7dd6, 0xcde0eb1e), new Int(0xf57d4f7f, 0xee6ed178),
				new Int(0x06f067aa, 0x72176fba), new Int(0x0a637dc5, 0xa2c898a6),
				new Int(0x113f9804, 0xbef90dae), new Int(0x1b710b35, 0x131c471b),
				new Int(0x28db77f5, 0x23047d84), new Int(0x32caab7b, 0x40c72493),
				new Int(0x3c9ebe0a, 0x15c9bebc), new Int(0x431d67c4, 0x9c100d4c),
				new Int(0x4cc5d4be, 0xcb3e42b6), new Int(0x597f299c, 0xfc657e2a),
				new Int(0x5fcb6fab, 0x3ad6faec), new Int(0x6c44198c, 0x4a475817)
			];

			if (variant === "SHA-384")
			{
				H = [
					new Int(0xcbbb9d5d, 0xc1059ed8), new Int(0x0629a292a, 0x367cd507),
					new Int(0x9159015a, 0x3070dd17), new Int(0x0152fecd8, 0xf70e5939),
					new Int(0x67332667, 0xffc00b31), new Int(0x98eb44a87, 0x68581511),
					new Int(0xdb0c2e0d, 0x64f98fa7), new Int(0x047b5481d, 0xbefa4fa4)
				];
			}
			else
			{
				H = [
					new Int(0x6a09e667, 0xf3bcc908), new Int(0xbb67ae85, 0x84caa73b),
					new Int(0x3c6ef372, 0xfe94f82b), new Int(0xa54ff53a, 0x5f1d36f1),
					new Int(0x510e527f, 0xade682d1), new Int(0x9b05688c, 0x2b3e6c1f),
					new Int(0x1f83d9ab, 0xfb41bd6b), new Int(0x5be0cd19, 0x137e2179)
				];
			}
		}

		/* Append '1' at the end of the binary string */
		message[messageLen >> 5] |= 0x80 << (24 - messageLen % 32);
		/* Append length of binary string in the position such that the new
		 * length is correct */
		message[lengthPosition] = messageLen;

		appendedMessageLength = message.length;

		for (i = 0; i < appendedMessageLength; i += binaryStringInc)
		{
			a = H[0];
			b = H[1];
			c = H[2];
			d = H[3];
			e = H[4];
			f = H[5];
			g = H[6];
			h = H[7];

			for (t = 0; t < numRounds; t += 1)
			{
				if (t < 16)
				{
					/* Bit of a hack - for 32-bit, the second term is ignored */
					W[t] = new Int(message[t * binaryStringMult + i],
							message[t * binaryStringMult + i + 1]);
				}
				else
				{
					W[t] = safeAdd_4(
							gamma1(W[t - 2]), W[t - 7],
							gamma0(W[t - 15]), W[t - 16]
						);
				}

				T1 = safeAdd_5(h, sigma1(e), ch(e, f, g), K[t], W[t]);
				T2 = safeAdd_2(sigma0(a), maj(a, b, c));
				h = g;
				g = f;
				f = e;
				e = safeAdd_2(d, T1);
				d = c;
				c = b;
				b = a;
				a = safeAdd_2(T1, T2);
			}

			H[0] = safeAdd_2(a, H[0]);
			H[1] = safeAdd_2(b, H[1]);
			H[2] = safeAdd_2(c, H[2]);
			H[3] = safeAdd_2(d, H[3]);
			H[4] = safeAdd_2(e, H[4]);
			H[5] = safeAdd_2(f, H[5]);
			H[6] = safeAdd_2(g, H[6]);
			H[7] = safeAdd_2(h, H[7]);
		}

		switch (variant)
		{
		case "SHA-224":
			return	[
				H[0], H[1], H[2], H[3],
				H[4], H[5], H[6]
			];
		case "SHA-256":
			return H;
		case "SHA-384":
			return [
				H[0].highOrder, H[0].lowOrder,
				H[1].highOrder, H[1].lowOrder,
				H[2].highOrder, H[2].lowOrder,
				H[3].highOrder, H[3].lowOrder,
				H[4].highOrder, H[4].lowOrder,
				H[5].highOrder, H[5].lowOrder
			];
		case "SHA-512":
			return [
				H[0].highOrder, H[0].lowOrder,
				H[1].highOrder, H[1].lowOrder,
				H[2].highOrder, H[2].lowOrder,
				H[3].highOrder, H[3].lowOrder,
				H[4].highOrder, H[4].lowOrder,
				H[5].highOrder, H[5].lowOrder,
				H[6].highOrder, H[6].lowOrder,
				H[7].highOrder, H[7].lowOrder
			];
		default:
			/* This should never be reached */
			return []; 
		}
	},

	/*
	 * jsSHA is the workhorse of the library.  Instantiate it with the string to
	 * be hashed as the parameter
	 *
	 * @constructor
	 * @param {String} srcString The string to be hashed
	 * @param {String} inputFormat The format of srcString, ASCII or HEX
	 */
	jsSHA = function (srcString, inputFormat)
	{

		this.sha1 = null;
		this.sha224 = null;
		this.sha256 = null;
		this.sha384 = null;
		this.sha512 = null;

		this.strBinLen = null;
		this.strToHash = null;

		/* Convert the input string into the correct type */
		if ("HEX" === inputFormat)
		{
			if (0 !== (srcString.length % 2))
			{
				return "TEXT MUST BE IN BYTE INCREMENTS";
			}
			this.strBinLen = srcString.length * 4;
			this.strToHash = hex2binb(srcString);
		}
		else if (("ASCII" === inputFormat) ||
			 ('undefined' === typeof(inputFormat)))
		{
			this.strBinLen = srcString.length * charSize;
			this.strToHash = str2binb(srcString);
		}
		else
		{
			return "UNKNOWN TEXT INPUT TYPE";
		}
	};

	jsSHA.prototype = {
		/*
		 * Returns the desired SHA hash of the string specified at instantiation
		 * using the specified parameters
		 *
		 * @param {String} variant The desired SHA variant (SHA-1, SHA-224,
		 *	 SHA-256, SHA-384, or SHA-512)
		 * @param {String} format The desired output formatting (B64 or HEX)
		 * @return The string representation of the hash in the format specified
		 */
		getHash : function (variant, format)
		{
			var formatFunc = null, message = this.strToHash.slice();

			switch (format)
			{
			case "HEX":
				formatFunc = binb2hex;
				break;
			case "B64":
				formatFunc = binb2b64;
				break;
			default:
				return "FORMAT NOT RECOGNIZED";
			}

			switch (variant)
			{
			case "SHA-1":
				if (null === this.sha1)
				{
					this.sha1 = coreSHA1(message, this.strBinLen);
				}
				return formatFunc(this.sha1);
			case "SHA-224":
				if (null === this.sha224)
				{
					this.sha224 = coreSHA2(message, this.strBinLen, variant);
				}
				return formatFunc(this.sha224);
			case "SHA-256":
				if (null === this.sha256)
				{
					this.sha256 = coreSHA2(message, this.strBinLen, variant);
				}
				return formatFunc(this.sha256);
			case "SHA-384":
				if (null === this.sha384)
				{
					this.sha384 = coreSHA2(message, this.strBinLen, variant);
				}
				return formatFunc(this.sha384);
			case "SHA-512":
				if (null === this.sha512)
				{
					this.sha512 = coreSHA2(message, this.strBinLen, variant);
				}
				return formatFunc(this.sha512);
			default:
				return "HASH NOT RECOGNIZED";
			}
		},

		/*
		 * Returns the desired HMAC of the string specified at instantiation
		 * using the key and variant param.
		 *
		 * @param {String} key The key used to calculate the HMAC
		 * @param {String} inputFormat The format of key, ASCII or HEX
		 * @param {String} variant The desired SHA variant (SHA-1, SHA-224,
		 *	 SHA-256, SHA-384, or SHA-512)
		 * @param {String} outputFormat The desired output formatting
		 *	 (B64 or HEX)
		 * @return The string representation of the hash in the format specified
		 */
		getHMAC : function (key, inputFormat, variant, outputFormat)
		{
			var formatFunc, keyToUse, blockByteSize, blockBitSize, i,
				retVal, lastArrayIndex, keyBinLen, hashBitSize,
				keyWithIPad = [], keyWithOPad = [];

			/* Validate the output format selection */
			switch (outputFormat)
			{
			case "HEX":
				formatFunc = binb2hex;
				break;
			case "B64":
				formatFunc = binb2b64;
				break;
			default:
				return "FORMAT NOT RECOGNIZED";
			}

			/* Validate the hash variant selection and set needed variables */
			switch (variant)
			{
			case "SHA-1":
				blockByteSize = 64;
				hashBitSize = 160;
				break;
			case "SHA-224":
				blockByteSize = 64;
				hashBitSize = 224;
				break;
			case "SHA-256":
				blockByteSize = 64;
				hashBitSize = 256;
				break;
			case "SHA-384":
				blockByteSize = 128;
				hashBitSize = 384;
				break;
			case "SHA-512":
				blockByteSize = 128;
				hashBitSize = 512;
				break;
			default:
				return "HASH NOT RECOGNIZED";
			}

			/* Validate input format selection */
			if ("HEX" === inputFormat)
			{
				/* Nibbles must come in pairs */
				if (0 !== (key.length % 2))
				{
					return "KEY MUST BE IN BYTE INCREMENTS";
				}
				keyToUse = hex2binb(key);
				keyBinLen = key.length * 4;
			}
			else if ("ASCII" === inputFormat)
			{
				keyToUse = str2binb(key);
				keyBinLen = key.length * charSize;
			}
			else
			{
				return "UNKNOWN KEY INPUT TYPE";
			}

			/* These are used multiple times, calculate and store them */
			blockBitSize = blockByteSize * 8;
			lastArrayIndex = (blockByteSize / 4) - 1;

			/* Figure out what to do with the key based on its size relative to
			 * the hash's block size */
			if (blockByteSize < (keyBinLen / 8))
			{
				if ("SHA-1" === variant)
				{
					keyToUse = coreSHA1(keyToUse, keyBinLen);
				}
				else
				{
					keyToUse = coreSHA2(keyToUse, keyBinLen, variant);
				}
				/* For all variants, the block size is bigger than the output
				 * size so there will never be a useful byte at the end of the
				 * string */
				keyToUse[lastArrayIndex] &= 0xFFFFFF00;
			}
			else if (blockByteSize > (keyBinLen / 8))
			{
				/* If the blockByteSize is greater than the key length, there
				 * will always be at LEAST one "useless" byte at the end of the
				 * string */
				keyToUse[lastArrayIndex] &= 0xFFFFFF00;
			}

			/* Create ipad and opad */
			for (i = 0; i <= lastArrayIndex; i += 1)
			{
				keyWithIPad[i] = keyToUse[i] ^ 0x36363636;
				keyWithOPad[i] = keyToUse[i] ^ 0x5C5C5C5C;
			}

			/* Calculate the HMAC */
			if ("SHA-1" === variant)
			{
				retVal = coreSHA1(
							keyWithIPad.concat(this.strToHash),
							blockBitSize + this.strBinLen);
				retVal = coreSHA1(
							keyWithOPad.concat(retVal),
							blockBitSize + hashBitSize);
			}
			else
			{
				retVal = coreSHA2(
							keyWithIPad.concat(this.strToHash),
							blockBitSize + this.strBinLen, variant);
				retVal = coreSHA2(
							keyWithOPad.concat(retVal),
							blockBitSize + hashBitSize, variant);
			}

			return (formatFunc(retVal));
		}
	};

	exports.jsSHA = jsSHA;
}());

jsSHA = exports.jsSHA;
function api(hostTarget){
    this.hostTarget = hostTarget;
}

function apiWrapper(hostTarget){

    //constants
    var publicKey = '009DBDD9C9732F59445E831AEE65717A072FA96A2D7082E0425A3C2061EB6013';
    var secretKey = '11A112F200DD31331C5D538101E00E4A55F661F52F6F20E3FFA42E74A4FCC957';

    var checkSignature = function(reqObj, testSig, jsSHA){
        var signature = getSignature(reqObj, jsSHA);
        console.log(signature);
        console.log(testSig);
        return signature==testSig;
    }

    var callAPI = function(apiName, method, paramObj, jsSHA){
        requestObj = {
            "headers" : {
                "publicKey": publicKey
            },
            "method" : method,
            "parameters" : paramObj
        };

        var signature = getSignature(requestObj, jsSHA);
        var requestURL = apiName + "?signature=" + signature;
        return {url:requestURL, reqObj :requestObj}

        
    }

    var calcHMAC = function(text, key, jsSHA){
        var shaObj = new jsSHA(text);
        return shaObj.getHMAC(key, "ASCII", "SHA-256", "HEX");
    }


    var getSignature = function(requestObj, jsSHA){
        var paramObjSer = JSON.stringify(requestObj),
            signature = calcHMAC(paramObjSer, secretKey, jsSHA);
        return signature;
    }

    api.prototype.checkSignature = checkSignature;
    api.prototype.callAPI = callAPI;
    return new api(hostTarget);

}


var batm = new batman();


api = new apiWrapper('http://beluga/');


//urlObj = api.callAPI('/test.php','getWeeklyStreams',{artistid:'200',startWeek:"1",endWeek:"50",startYear:"2011","endYear":"2011"},jsSHA);


timetable = {};

rescallback = function(id) {
    var startTime = new Date();

    return function(res){
        //console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
      
        res.on('data', function (chunk) {
            var delta = new Date() - startTime
            console.log(urlObj);
            timetable[id] = delta;
            console.log('diff:',delta);
            console.log('BODY: ' + chunk);
        });

        if( id == 1 ){
           avg = avgTime(); 
           console.log('\n');
           console.log('\n');
           console.log('The average time was:',avg)
           console.log('\n');
           console.log('\n');
        }
    }
}

var avgTime = function() {
    var sum=0;
    for ( id in timetable ){
        sum += timetable[id];
    }
    return sum/process.argv[2];
}

/*
var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
  
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
*/

var upto = process.argv[2];

var req;

while (upto > 0) {
    var lol = batm.getFun();
    urlObj = api.callAPI('/api/artist/'+lol.url+'/index.php',lol.method,lol.parameters,jsSHA);


    var post_data = JSON.stringify(urlObj.reqObj);


    var options = {
        host: 'beluga',
        port: 80,
        path: urlObj.url,
        //headers: urlObj.reqObj,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data.length
        }
    };
    req = http.request(options, rescallback(upto, urlObj));
    req.write(post_data, encoding='utf8');
    req.end();
    console.log('END');
    upto -= 1;
}




//req.write('data\n');

//

