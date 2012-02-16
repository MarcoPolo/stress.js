function batman() {

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
      parameters += "artistID : " + id + ", ";
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
      parameters += "startDate : " + date + ", ";
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
      parameters += "endDate : " + date + ", ";
    }
    else if (param == "startWeek") {
      var week = Math.floor(Math.random()*(53)+1).toString();
      parameters += "startWeek : " + week + ", ";
    }
    else if (param == "endWeek") {
      var week = Math.floor(Math.random()*(53)+1).toString();
      parameters += "endWeek : " + week + ", ";
    }
    else if (param == "startMonth") {
      var month = Math.floor(Math.random()*(12)+1).toString();
      parameters += "startMonth : " + month + ", ";
    }
    else if (param == "endMonth") {
      var month = Math.floor(Math.random()*(12)+1).toString();
      parameters += "endMonth : " + month + ", ";
    }
    else if (param == "startYear") {
      var year = Math.floor(Math.random()*(3)+8);
      if (year < 10) year = "0"+year.toString();
      year = "20" + year.toString();
      parameters += "startYear : " + year + ", ";
    }
    else if (param == "endYear") {
      var year = Math.floor(Math.random()*(3)+8);
      if (year < 10) year = "0"+year.toString();
      year = "20" + year.toString();
      parameters += "endYear : " + year + ", ";
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
