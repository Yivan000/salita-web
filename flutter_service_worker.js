'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5b38e5d99d5bb37880ed3976997d0f01",
"assets/assets/fonts/NotoKufiArabic-Regular.ttf": "3ce2f0496fbe15c430b8b30257b1f423",
"assets/assets/fonts/NotoMusic-Regular.ttf": "2e53791c2c627baf8f733990f57fff79",
"assets/assets/fonts/NotoNaskhArabic-Regular.ttf": "fa716e02c0bf6d2a6618334ece74f727",
"assets/assets/fonts/NotoNastaliqUrdu-Regular.ttf": "9079bcded9009097ab1ea13bb2c3396d",
"assets/assets/fonts/NotoRashiHebrew-Regular.ttf": "64e413fb5476d7f225482a0c3d0c8e9a",
"assets/assets/fonts/NotoSans-Regular.ttf": "cfc5d23cf77820cce91cac49cbfa0b07",
"assets/assets/fonts/NotoSansAdlam-Regular.ttf": "f140bab5788958a6dfbb5fd4b0d7f451",
"assets/assets/fonts/NotoSansAdlamUnjoined-Regular.ttf": "c78b95a4f015385b3fa60c79c3b006eb",
"assets/assets/fonts/NotoSansAnatolianHieroglyphs-Regular.ttf": "3cc8883dd6c87f3dc7ccde9814dc7926",
"assets/assets/fonts/NotoSansArabic-Regular.ttf": "7e276291171900b52464400aade07fe6",
"assets/assets/fonts/NotoSansArabicUI-Regular.ttf": "3212ef8efe1d41a126b773669b3b5244",
"assets/assets/fonts/NotoSansArmenian-Regular.ttf": "9fbb112b80ceef68bca448419a6fadbf",
"assets/assets/fonts/NotoSansAvestan-Regular.ttf": "04c2aba77a01e112bd680a2ce8421303",
"assets/assets/fonts/NotoSansBalinese-Regular.ttf": "1972648e028a88d840dd8a08dd2c0d1b",
"assets/assets/fonts/NotoSansBamum-Regular.ttf": "2bafbbf4774bfc6ac177ef4ce048e3a3",
"assets/assets/fonts/NotoSansBassaVah-Regular.ttf": "12298c3c9500c4d1ab973d76abc0871a",
"assets/assets/fonts/NotoSansBatak-Regular.ttf": "0e74a9a13954f24734f8252dd287b8a2",
"assets/assets/fonts/NotoSansBengali-Regular.ttf": "96380fb10d8a7de534d94063c1659eea",
"assets/assets/fonts/NotoSansBengaliUI-Regular.ttf": "4494e07e7c95043bf720c519376abe53",
"assets/assets/fonts/NotoSansBhaiksuki-Regular.ttf": "9454c1e4fe42be850a7037918304c986",
"assets/assets/fonts/NotoSansBrahmi-Regular.ttf": "de8c48074f04e3fa5af99f4e6f0d50be",
"assets/assets/fonts/NotoSansBuginese-Regular.ttf": "4a1121137d575805de227dccc08450e5",
"assets/assets/fonts/NotoSansBuhid-Regular.ttf": "6bb399e80e335a500907e1d50c0ef9b2",
"assets/assets/fonts/NotoSansCanadianAboriginal-Regular.ttf": "94b1a0e57afd9588cdf1e8bbae05765a",
"assets/assets/fonts/NotoSansCarian-Regular.ttf": "b719658a524362d6ddcb0c2ee6edcfd9",
"assets/assets/fonts/NotoSansCaucasianAlbanian-Regular.ttf": "97a3b4774613785ecbc10517ab301da7",
"assets/assets/fonts/NotoSansChakma-Regular.ttf": "a0453517045a3cefc1e36f8bb736b4dc",
"assets/assets/fonts/NotoSansCham-Regular.ttf": "95891003555306a84644f8e58ea0669d",
"assets/assets/fonts/NotoSansCherokee-Regular.ttf": "8fd127c0ec531b99fbfb123a651241c8",
"assets/assets/fonts/NotoSansCoptic-Regular.ttf": "562d10553ec7807ce0a3feaa10c16ff9",
"assets/assets/fonts/NotoSansCuneiform-Regular.ttf": "de049ea41d703294ab0bbf877b499211",
"assets/assets/fonts/NotoSansCypriot-Regular.ttf": "e4d99a25f2d3b2ff7d530e629164ca2c",
"assets/assets/fonts/NotoSansDeseret-Regular.ttf": "05ab5d5e4a6a02c3698f02d2677958d2",
"assets/assets/fonts/NotoSansDevanagari-Regular.ttf": "477d33d07b112e86f807ff871729a20c",
"assets/assets/fonts/NotoSansDevanagariUI-Regular.ttf": "5abac4d641396e5fdaadb34671197f13",
"assets/assets/fonts/NotoSansDisplay-Regular.ttf": "c5ddd1fffc2219e51874de956559eb8d",
"assets/assets/fonts/NotoSansDuployan-Regular.ttf": "98f1a5052f7ef5d0f75d84eb37849841",
"assets/assets/fonts/NotoSansEgyptianHieroglyphs-Regular.ttf": "217b3a3811a1cdc1bc804da6f38453a6",
"assets/assets/fonts/NotoSansElbasan-Regular.ttf": "dc15b26d275d6e42a6facc78617ce225",
"assets/assets/fonts/NotoSansElymaic-Regular.ttf": "92289b9ec59f548ace37da6469321944",
"assets/assets/fonts/NotoSansEthiopic-Regular.ttf": "d83530d189621c150113c826dbef0f1d",
"assets/assets/fonts/NotoSansGeorgian-Regular.ttf": "d657e2c21a376619cb813eab0ba87476",
"assets/assets/fonts/NotoSansGlagolitic-Regular.ttf": "a136dae6d5e58eee10a9dc40db4b64c2",
"assets/assets/fonts/NotoSansGothic-Regular.ttf": "84756e0cfd92f9f2bbba43caf310e765",
"assets/assets/fonts/NotoSansGrantha-Regular.ttf": "9cc119144f5378f53452a4ce723d3d76",
"assets/assets/fonts/NotoSansGujarati-Regular.ttf": "97f15946f30b188150ab860583b0461b",
"assets/assets/fonts/NotoSansGujaratiUI-Regular.ttf": "ef8516c01bc4db0f9655eb03e3e651ce",
"assets/assets/fonts/NotoSansGurmukhi-Regular.ttf": "485dc20df2488ad60707ee27c305e8e2",
"assets/assets/fonts/NotoSansGurmukhiUI-Regular.ttf": "cacfe13f45b858258d2e102a739cf12d",
"assets/assets/fonts/NotoSansHanifiRohingya-Regular.ttf": "540422482461b1363dfd8703c17bae65",
"assets/assets/fonts/NotoSansHanunoo-Regular.ttf": "430478cd9038e095ffd98bbbf0146b70",
"assets/assets/fonts/NotoSansHatran-Regular.ttf": "1b8969e00ef9220396e1ab8c55c4c277",
"assets/assets/fonts/NotoSansHebrew-Regular.ttf": "2021d220e4cb4cb0be19587aaf1260e6",
"assets/assets/fonts/NotoSansHK-Regular.otf": "db57add944e2ac955a60a6e31a892363",
"assets/assets/fonts/NotoSansImperialAramaic-Regular.ttf": "1550ae01166d5bfd5d426d5e16853c8a",
"assets/assets/fonts/NotoSansIndicSiyaqNumbers-Regular.ttf": "ff32da0a2aa0245960a5e3488b72bd8e",
"assets/assets/fonts/NotoSansInscriptionalPahlavi-Regular.ttf": "431fcbcdb3d9baf8e2172e54a3a27c9a",
"assets/assets/fonts/NotoSansInscriptionalParthian-Regular.ttf": "0c48f3401bc2922b3e2b58fd2d341f90",
"assets/assets/fonts/NotoSansJavanese-Regular.ttf": "755ae85a77e835f018b6323007ace12b",
"assets/assets/fonts/NotoSansJP-Regular.otf": "f82ef23cfbf8b46a234465b0151ee71f",
"assets/assets/fonts/NotoSansKaithi-Regular.ttf": "af42077b231bed865dfd38f2ff0a2f09",
"assets/assets/fonts/NotoSansKannada-Regular.ttf": "20ca32b30c05517306a14b615bdabfb5",
"assets/assets/fonts/NotoSansKannadaUI-Regular.ttf": "71b569fe3d181f2211fa9e7352edaa6d",
"assets/assets/fonts/NotoSansKayahLi-Regular.ttf": "cc82c67106621ba3bef9cca90667beae",
"assets/assets/fonts/NotoSansKharoshthi-Regular.ttf": "528d0f4f167abbf4cf682ea4e6543770",
"assets/assets/fonts/NotoSansKhmer-Regular.ttf": "985fe94d9272b400873411229fc3a731",
"assets/assets/fonts/NotoSansKhmerUI-Regular.ttf": "afe05e0cf2cae79854f328e53667c8f8",
"assets/assets/fonts/NotoSansKhojki-Regular.ttf": "6cd87d039209c14394358fb820124e4c",
"assets/assets/fonts/NotoSansKhudawadi-Regular.ttf": "9dce9f6e997ac9302410af8c20b2ea20",
"assets/assets/fonts/NotoSansKR-Regular.otf": "2955ce7570641c69210186b840ccd72b",
"assets/assets/fonts/NotoSansLao-Regular.ttf": "25ee28807f6047652da0f9a0de4b614f",
"assets/assets/fonts/NotoSansLaoLooped-Regular.ttf": "f8e4e3f38d5be8cb678f499a79447d5c",
"assets/assets/fonts/NotoSansLaoUI-Regular.ttf": "6a44e9b54c9ef3cf544add5997e6d1f6",
"assets/assets/fonts/NotoSansLepcha-Regular.ttf": "01a0e9e869762223f187bc2f8150096a",
"assets/assets/fonts/NotoSansLimbu-Regular.ttf": "514612ce5fdaf8b89bf7cbf19d39d199",
"assets/assets/fonts/NotoSansLinearA-Regular.ttf": "a957338402025e40b2871ebcc37783b8",
"assets/assets/fonts/NotoSansLisu-Regular.ttf": "d34720d93e177e778965e57363225fb6",
"assets/assets/fonts/NotoSansLycian-Regular.ttf": "4cf12626c56a7fd963b5457ddf9ad50b",
"assets/assets/fonts/NotoSansLydian-Regular.ttf": "9fc158770d578278d8e3a98d34da5806",
"assets/assets/fonts/NotoSansMahajani-Regular.ttf": "42708aadda6eb673371bb80c1584f79d",
"assets/assets/fonts/NotoSansMalayalam-Regular.ttf": "63bfa107cc3861b6aae89aedd882e1af",
"assets/assets/fonts/NotoSansMalayalamUI-Regular.ttf": "6a80a9720ed155003c455fa509d45064",
"assets/assets/fonts/NotoSansMandaic-Regular.ttf": "e8d21e3f298af6e72df1ab8b02f51c62",
"assets/assets/fonts/NotoSansManichaean-Regular.ttf": "7e0bdf401e54017f004cf86393276fc1",
"assets/assets/fonts/NotoSansMarchen-Regular.ttf": "2a73a5d68a171ccdef5273bf41bd2a4c",
"assets/assets/fonts/NotoSansMasaramGondi-Regular.ttf": "6fc68ae37c8d642190ff90389308e4bf",
"assets/assets/fonts/NotoSansMath-Regular.ttf": "b0d236a20dbd326e8b66b385e9508fc1",
"assets/assets/fonts/NotoSansMayanNumerals-Regular.ttf": "7318fb3e5c16724be40cedd524d0ba5b",
"assets/assets/fonts/NotoSansMedefaidrin-Regular.ttf": "27130af35471db947456123e24d4a3ae",
"assets/assets/fonts/NotoSansMeeteiMayek-Regular.ttf": "64e528f4657907479a6910cdfba3a074",
"assets/assets/fonts/NotoSansMendeKikakui-Regular.ttf": "4124f7c20be66640834020a73438c403",
"assets/assets/fonts/NotoSansMeroitic-Regular.ttf": "13bb87673c7b86fcffc9cc7434624e95",
"assets/assets/fonts/NotoSansMiao-Regular.ttf": "515593b924e841c680df3efc5cbfe7bb",
"assets/assets/fonts/NotoSansModi-Regular.ttf": "16c923ed0387794a110a1e4e8f8f0519",
"assets/assets/fonts/NotoSansMongolian-Regular.ttf": "484ed5bc9310ea47520cab52f9aac954",
"assets/assets/fonts/NotoSansMro-Regular.ttf": "e36b6a58e404dc397bdaa6e4781dd990",
"assets/assets/fonts/NotoSansMultani-Regular.ttf": "044ae14b92d0465b10edbdb910307c7f",
"assets/assets/fonts/NotoSansMyanmar-Regular.ttf": "6a0df961cb91f09fb925a678f4039b09",
"assets/assets/fonts/NotoSansMyanmarUI-Regular.ttf": "388fcfc2cdf865a833fd96ac72eeb13a",
"assets/assets/fonts/NotoSansNabataean-Regular.ttf": "109f6756224dde758fb6982235f3c581",
"assets/assets/fonts/NotoSansNewa-Regular.ttf": "90a951e67192627090cf5571f2c7d329",
"assets/assets/fonts/NotoSansNewTaiLue-Regular.ttf": "fa0bfbc04e6e9c730a67d43c7a1ae961",
"assets/assets/fonts/NotoSansNKo-Regular.ttf": "40ccb02ed7bfb3a3584822a620910313",
"assets/assets/fonts/NotoSansNushu-Regular.ttf": "05d0d71d11f0db60b6f41d933e0f5620",
"assets/assets/fonts/NotoSansOgham-Regular.ttf": "3269988164b97a290cee5693c261c095",
"assets/assets/fonts/NotoSansOlChiki-Regular.ttf": "319bd91aa670d31e0b312e0f73adbeef",
"assets/assets/fonts/NotoSansOldHungarian-Regular.ttf": "c361c8305ad6fba1f47fec39ec441695",
"assets/assets/fonts/NotoSansOldNorthArabian-Regular.ttf": "3f1640570f8092d97e0d4ebe3cb1a8ea",
"assets/assets/fonts/NotoSansOldPermic-Regular.ttf": "f4089c41efda0b125b379ae5e6968ee7",
"assets/assets/fonts/NotoSansOldPersian-Regular.ttf": "4da0f7f1a166caca2cc664b1d4b8ceb0",
"assets/assets/fonts/NotoSansOldSogdian-Regular.ttf": "94dded734874218c834637f4793baf44",
"assets/assets/fonts/NotoSansOldSouthArabian-Regular.ttf": "c11bcd09659f11893aa6de4d407fd1d6",
"assets/assets/fonts/NotoSansOldTurkic-Regular.ttf": "166128effacc30c6ca9b4ff40bd02f7d",
"assets/assets/fonts/NotoSansOriya-Regular.ttf": "f02326a81cb915a1451a5b7d83d09f73",
"assets/assets/fonts/NotoSansOriyaUI-Regular.ttf": "9b31b5bbd1c115364b0e7138006acf57",
"assets/assets/fonts/NotoSansOsage-Regular.ttf": "3e356da931caa150d456402d630cee67",
"assets/assets/fonts/NotoSansOsmanya-Regular.ttf": "2733561f81bbf06d5b3a7884a52eea26",
"assets/assets/fonts/NotoSansPahawhHmong-Regular.ttf": "234b384534eb6287b1bd3bb3fe474287",
"assets/assets/fonts/NotoSansPalmyrene-Regular.ttf": "3c1cb516a62514758a1a5d8969aaf5bb",
"assets/assets/fonts/NotoSansPauCinHau-Regular.ttf": "a2521316308fc14d6b1983cdc916a2be",
"assets/assets/fonts/NotoSansPhagsPa-Regular.ttf": "341a7757054b2c7e7c81ae189cedb8a9",
"assets/assets/fonts/NotoSansPhoenician-Regular.ttf": "1e409df633b34f5f64db062d4fce59a8",
"assets/assets/fonts/NotoSansPsalterPahlavi-Regular.ttf": "ca2143619d8607291c729038fb1ee8b2",
"assets/assets/fonts/NotoSansRejang-Regular.ttf": "8fca572ed65986c667f6e2fe48cda563",
"assets/assets/fonts/NotoSansRunic-Regular.ttf": "26f43916709304b48b54a32b14944a30",
"assets/assets/fonts/NotoSansSamaritan-Regular.ttf": "14885bbb5eaba9dfcbf7911156b176db",
"assets/assets/fonts/NotoSansSaurashtra-Regular.ttf": "5b270aa7068f38a77ebf3c026611a343",
"assets/assets/fonts/NotoSansSC-Regular.otf": "b189a3afc31942fe81931222172cf48b",
"assets/assets/fonts/NotoSansSharada-Regular.ttf": "6ab3412ea5b8bb754a6b9007890adff9",
"assets/assets/fonts/NotoSansShavian-Regular.ttf": "a02ef6a0a01c98a1416b44563fb29e08",
"assets/assets/fonts/NotoSansSiddham-Regular.ttf": "0fa3aaa72dd55d2a050d3eff2ae8867d",
"assets/assets/fonts/NotoSansSignWriting-Regular.ttf": "5aab4c1e6e27ae99c14d1cfaee360578",
"assets/assets/fonts/NotoSansSinhala-Regular.ttf": "f215bc865f1df7bc1296058e9caff7b3",
"assets/assets/fonts/NotoSansSinhalaUI-Regular.ttf": "c530f3b34b83d745db9fd93adf8bb6a1",
"assets/assets/fonts/NotoSansSogdian-Regular.ttf": "df466886f8125cfcc4c36a530a5627c0",
"assets/assets/fonts/NotoSansSoraSompeng-Regular.ttf": "7ad37ba325b0192d93698713908c4270",
"assets/assets/fonts/NotoSansSoyombo-Regular.ttf": "0ec17754902f7ece2a7fc8505ce8aae1",
"assets/assets/fonts/NotoSansSundanese-Regular.ttf": "badcb351c15df80203961205ef36932e",
"assets/assets/fonts/NotoSansSylotiNagri-Regular.ttf": "41e80700e3820923fcc1a27642e1185c",
"assets/assets/fonts/NotoSansSymbols-Regular.ttf": "70835ec31aae9f3cdec3286cea0f03a8",
"assets/assets/fonts/NotoSansSymbols2-Regular.ttf": "e403c3ae294602a6c3587fd164450c39",
"assets/assets/fonts/NotoSansSyriac-Regular.ttf": "2f0981bfd3ffdd36163d1226d9ef97c0",
"assets/assets/fonts/NotoSansTagalog-Regular.ttf": "bdf191d62a2a3210e2df80e0db717be3",
"assets/assets/fonts/NotoSansTagbanwa-Regular.ttf": "255a4b9194c3f6f34d50af99121bb138",
"assets/assets/fonts/NotoSansTaiLe-Regular.ttf": "198cb67da8571bfd3469b7fb5eaf167a",
"assets/assets/fonts/NotoSansTaiTham-Regular.ttf": "0dbf46817d5f4eed0a83cea5222bd68c",
"assets/assets/fonts/NotoSansTaiViet-Regular.ttf": "e18dddc5680a9fee778fe8a1559a6f46",
"assets/assets/fonts/NotoSansTakri-Regular.ttf": "b87089baf84c3ed1902d09fbb08cfeb6",
"assets/assets/fonts/NotoSansTamil-Regular.ttf": "3ed02f48a9a66604db449fffeca244d9",
"assets/assets/fonts/NotoSansTamilSupplement-Regular.ttf": "0302355f80c07516de4bdc9ac57daf74",
"assets/assets/fonts/NotoSansTamilUI-Regular.ttf": "e9d62199e2a6ff7119034c0ec84f9e08",
"assets/assets/fonts/NotoSansTC-Regular.otf": "7f688e8b5cdf5e14dddaef1e0bd66031",
"assets/assets/fonts/NotoSansTelugu-Regular.ttf": "33e7d8fb12c18275b65f5984f5611409",
"assets/assets/fonts/NotoSansTeluguUI-Regular.ttf": "b5ff445be58a26cbe2dabd722a8cd6b7",
"assets/assets/fonts/NotoSansThaana-Regular.ttf": "23f4a16256f538dc6db812c5894f1f17",
"assets/assets/fonts/NotoSansThai-Regular.ttf": "275b8c0c123656b4c05d04af995b135e",
"assets/assets/fonts/NotoSansThaiLooped-Regular.ttf": "be12c8634a6389ff8e54a7db3ab12c33",
"assets/assets/fonts/NotoSansThaiUI-Regular.ttf": "73c76990d975bcd66702ef42702deb98",
"assets/assets/fonts/NotoSansTifinagh-Regular.ttf": "e376245db24dba190af75678e6598d12",
"assets/assets/fonts/NotoSansTifinaghAdrar-Regular.ttf": "2914b204f0504ff60231b20b4ba3febb",
"assets/assets/fonts/NotoSansTifinaghAgrawImazighen-Regular.ttf": "c0203cc9993e717206b9033c930e4cbf",
"assets/assets/fonts/NotoSansTifinaghAhaggar-Regular.ttf": "4bfe212d62c6e351e3f670a6bdc7e704",
"assets/assets/fonts/NotoSansTifinaghAir-Regular.ttf": "9f39d840643c7c09f409cc7e317a9eb5",
"assets/assets/fonts/NotoSansTifinaghAPT-Regular.ttf": "42ebd1a77c7a1144dc41589963a982a9",
"assets/assets/fonts/NotoSansTifinaghAzawagh-Regular.ttf": "2d5890b0949d98aed8b8afe06396f23d",
"assets/assets/fonts/NotoSansTifinaghGhat-Regular.ttf": "f59e5650b7aac18be60b70ac4d0894bd",
"assets/assets/fonts/NotoSansTifinaghHawad-Regular.ttf": "245924dde6c11e66f587e8b17fafcb45",
"assets/assets/fonts/NotoSansTifinaghRhissaIxa-Regular.ttf": "9fcbd6aee75e9ebe1d4c2b60d6dc4c67",
"assets/assets/fonts/NotoSansTifinaghSIL-Regular.ttf": "1197c14277b6e2bc06e8758f4186551c",
"assets/assets/fonts/NotoSansTifinaghTawellemmet-Regular.ttf": "5d836d50693c88e35e0ae568843aa93a",
"assets/assets/fonts/NotoSansTirhuta-Regular.ttf": "f4f5a2a23d1f11682583d7ec104aab4a",
"assets/assets/fonts/NotoSansUgaritic-Regular.ttf": "ad760c2adc01437d2d6b57892a3d027b",
"assets/assets/fonts/NotoSansVai-Regular.ttf": "b1bb10aa5c688fb2d1a19af9c2c0d622",
"assets/assets/fonts/NotoSansWancho-Regular.ttf": "010634f0348ecf82169855f3655464c9",
"assets/assets/fonts/NotoSansWarangCiti-Regular.ttf": "fe45d6efe030ced4f8b2429509bbe3bf",
"assets/assets/fonts/NotoSansYi-Regular.ttf": "cab3b7331aa31707de4095ea2d641cc4",
"assets/assets/fonts/NotoSansZanabazarSquare-Regular.ttf": "dffe569f45792dcc6d59bad0a7f08f8e",
"assets/assets/fonts/NotoSerifAhom-Regular.ttf": "aeea4621eeba104f32d7eb18c5efd108",
"assets/assets/fonts/NotoSerifDogra-Regular.ttf": "d8bed60299c3d43f1fe902e33509e620",
"assets/assets/fonts/NotoSerifNyiakengPuachueHmong-Regular.ttf": "81c2913b17e112be9ea33e853fc0a703",
"assets/assets/fonts/NotoSerifTamilSlanted-Regular.ttf": "97beadfbc40a6cc7bcf105464e159736",
"assets/assets/fonts/NotoSerifTangut-Regular.ttf": "d3e9888ebab7beb349e506f656e6d1ed",
"assets/assets/fonts/NotoSerifTibetan-Regular.ttf": "f2f699939a9f6b5278889f8c844b603a",
"assets/assets/fonts/NotoSerifYezidi-Regular.ttf": "bb7dc7eec20862ab00592a218596d43e",
"assets/assets/fonts/NotoTraditionalNushu-Regular.ttf": "e2476e35ccf67d81f3fc05130adb5989",
"assets/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/svg/definition_search_none.svg": "e1e95749f9b962c739ed6406c9d40158",
"assets/assets/svg/definition_search_type.svg": "133734cf02a834b171747157f62d59be",
"assets/FontManifest.json": "dd549b58df60d05bdc56e9613ccb4e23",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d575bbf4ab99e52aa771b839859816ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "36f0824f284e284cb057c51dbef78840",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "6a13c5e0a6baecd44466f74354d177b0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "03b5fe3db54744605368efa003e86b79",
"icons/Icon-512.png": "548f1c9d7e87fa9d57e8445154f44b12",
"icons/Icon-maskable-192.png": "03b5fe3db54744605368efa003e86b79",
"icons/Icon-maskable-512.png": "548f1c9d7e87fa9d57e8445154f44b12",
"index.html": "fafbd41831d8cd538d55d626d718bbde",
"/": "fafbd41831d8cd538d55d626d718bbde",
"main.dart.js": "d0aed757b90831c8aa052058a71f972e",
"manifest.json": "31b7b97a81661b9754e3a607427c58f0",
"version.json": "74461dd4270a36caa4a89460cd54138b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
