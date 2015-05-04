(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      ons.notification.alert({message: 'Hello, World!'});
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;

    $scope.backReset = function(index) {
	var pages = $scope.navi.getPages();
	var i = 1;
	/* console.log("pages.length=%i", pages.length); */
	while (pages.length > 2) {
 	  pages[pages.length - 1].destroy();
	}
	$scope.navi.popPage();
    };

    $scope.showReplaceDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      /*      $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      /*      $scope.navi.popPage(); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

    $scope.showReplaceRandomDetail = function() {
      var selectedItem = $data.items[Math.floor(Math.random() * 153)];
      $data.selectedItem = selectedItem;
      /* $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [

{ idx: '0',  pidx: '152',nidx: '1',    title: '爱',	label: 'ài',	        desc: 'amore; amare; piacere; affetto' },
{ idx: '1',  pidx: '0',  nidx: '2',    title: '八',	label: 'bā',	        desc: 'otto; 8' },
{ idx: '2',  pidx: '1',  nidx: '3',    title: '爸爸',	label: 'bàba',	        desc: 'papà (informale)' },
{ idx: '3',  pidx: '2',  nidx: '4',    title: '杯子',	label: 'bēizi',	        desc: 'tazza; coppa; bicchiere' },
{ idx: '4',  pidx: '3',  nidx: '5',    title: '北京',	label: 'Běijīng',	desc: 'Pechino; Beijing' },
{ idx: '5',  pidx: '4',  nidx: '6',    title: '本',	label: 'běn',	        desc: '[cl per libri, periodici, file]; radice di una pianta; origine; base' },
{ idx: '6',  pidx: '5',  nidx: '7',    title: '不客气',	label: 'bùkèqi',	desc: 'prego; brusco; rude' },
{ idx: '7',  pidx: '6',  nidx: '8',    title: '不',	label: 'bù',	        desc: 'no (usato prima di verbi); non (usato prima di nomi; aggettivi)' },
{ idx: '8',  pidx: '7',  nidx: '9',    title: '菜',	label: 'cài',	        desc: 'cibo; verdura' },
{ idx: '9',  pidx: '8',  nidx: '10',   title: '茶',	label: 'chá',	        desc: 'the; pianta del the' },
{ idx: '10', pidx: '9',  nidx: '11',   title: '吃',	label: 'chī',	        desc: 'mangiare; pranzare; cancellare; distruggere; assorbire' },
{ idx: '11', pidx: '10', nidx: '12',   title: '出租车',	label: 'chūzūchē',	desc: 'taxi' },
{ idx: '12', pidx: '11', nidx: '13',   title: '打电话',	label: 'dǎdiànhuà',	desc: 'telefonare; fare una telefonata' },
{ idx: '13', pidx: '12', nidx: '14',   title: '大',	label: 'dà',	        desc: 'grande; enorme; largo; ampio' },
{ idx: '14', pidx: '13', nidx: '15',   title: '的',	label: 'de',	        desc: 'di; particella strutturale, collega nome e attributo descrittivo o possessivo' },
{ idx: '15', pidx: '14', nidx: '16',   title: '点',	label: 'diǎn',	        desc: 'punto; goccia; uno dei tratti dei caratteri cinesi; un poco; classificatore per piccole quantità indeterminate' },
{ idx: '16', pidx: '15', nidx: '17',   title: '电脑',	label: 'diànnǎo',	desc: 'computer' },
{ idx: '17', pidx: '16', nidx: '18',   title: '电视',	label: 'diànshì',	desc: 'TV; televisione' },
{ idx: '18', pidx: '17', nidx: '19',   title: '电影',	label: 'diànyǐng',	desc: 'film' },
{ idx: '19', pidx: '18', nidx: '20',   title: '东西',	label: 'dōngxi',	desc: 'cosa in generale' },
{ idx: '20', pidx: '19', nidx: '21',   title: '都',	label: 'dōu',	        desc: 'tutti; entrambi; del tutto' },
{ idx: '21', pidx: '20', nidx: '22',   title: '读',	label: 'dú',	        desc: 'leggere; studiare; leggere parole' },
{ idx: '22', pidx: '21', nidx: '23',   title: '对不起',	label: 'duìbuqǐ',	desc: 'mi spiace; scusami; per favore' },
{ idx: '23', pidx: '22', nidx: '24',   title: '多',	label: 'duō',	        desc: 'molto; tanti; numerosi' },
{ idx: '24', pidx: '23', nidx: '25',   title: '多少',	label: 'duōshao',	desc: 'quanto; numero; quantità' },
{ idx: '25', pidx: '24', nidx: '26',   title: '儿子',	label: 'érzi',	        desc: 'figlio' },
{ idx: '26', pidx: '25', nidx: '27',   title: '二',	label: 'èr',	        desc: 'due; 2' },
{ idx: '27', pidx: '26', nidx: '28',   title: '饭馆',	label: 'fànguǎn',	desc: 'ristorante' },
{ idx: '28', pidx: '27', nidx: '29',   title: '飞机',	label: 'fēijī',	        desc: 'aereo' },
{ idx: '29', pidx: '28', nidx: '30',   title: '分钟',	label: 'fēnzhōng',	desc: 'minuto' },
{ idx: '30', pidx: '29', nidx: '31',   title: '高兴',	label: 'gāoxìng',	desc: 'felice; allegro' },
{ idx: '31', pidx: '30', nidx: '32',   title: '个',	label: 'gè',	        desc: '[classificatore generico]; individuo; questo' },
{ idx: '32', pidx: '31', nidx: '33',   title: '工作',	label: 'gōngzuò',	desc: 'lavoro; costruzione; compito' },
{ idx: '33', pidx: '32', nidx: '34',   title: '狗',	label: 'gǒu',	        desc: 'cane' },
{ idx: '34', pidx: '33', nidx: '35',   title: '汉语',	label: 'Hànyǔ',	        desc: 'la lingua Cinese' },
{ idx: '35', pidx: '34', nidx: '36',   title: '好',	label: 'hǎo',	        desc: 'bene; buono; proprio; indica completamento' },
{ idx: '36', pidx: '35', nidx: '37',   title: '喝',	label: 'hē',	        desc: 'bere; gridare un comando' },
{ idx: '37', pidx: '36', nidx: '38',   title: '和',	label: 'hé',	        desc: 'e; assieme con; con; unione' },
{ idx: '38', pidx: '37', nidx: '39',   title: '很',	label: 'hěn',	        desc: 'molto; parecchio' },
{ idx: '39', pidx: '38', nidx: '40',   title: '后面',	label: 'hòumiàn',	desc: 'dietro; dopo; più tardi' },
{ idx: '40', pidx: '39', nidx: '41',   title: '回',	label: 'huí',	        desc: 'ritornare; rispondere; [classificatore per atti di commedie]' },
{ idx: '41', pidx: '40', nidx: '42',   title: '会',	label: 'huì',	        desc: 'potere; esser possibile; essere in grado di' },
{ idx: '42', pidx: '41', nidx: '43',   title: '火车站',	label: 'huǒchēzhàn',	desc: 'stazione ferroviaria' },
{ idx: '43', pidx: '42', nidx: '44',   title: '几',	label: 'jǐ',	        desc: 'alcuni; quanti?' },
{ idx: '44', pidx: '43', nidx: '45',   title: '家',	label: 'jiā',	        desc: 'casa; famiglia; [classificatore per aziende]' },
{ idx: '45', pidx: '44', nidx: '46',   title: '叫',	label: 'jiào',	        desc: 'chiamare; chiamarsi; chiedere' },
{ idx: '46', pidx: '45', nidx: '47',   title: '今天',	label: 'jīntiān',	desc: 'oggi; ora; al momento' },
{ idx: '47', pidx: '46', nidx: '48',   title: '九',	label: 'jiǔ',	        desc: 'nove; 9' },
{ idx: '48', pidx: '47', nidx: '49',   title: '开',	label: 'kāi',	        desc: 'aprire; iniziare; accendere;' },
{ idx: '49', pidx: '48', nidx: '50',   title: '看',	label: 'kàn',	        desc: 'vedere; guardare; leggere (in silenzio); pensare' },
{ idx: '50', pidx: '49', nidx: '51',   title: '看见',	label: 'kànjiàn',	desc: 'vedere; dare una occhiata' },
{ idx: '51', pidx: '50', nidx: '52',   title: '块',	label: 'kuài',	        desc: 'pezzo; blocco; [classificatore per articoli di vestiario; pezzi di torta]' },
{ idx: '52', pidx: '51', nidx: '53',   title: '来',	label: 'lái',	        desc: 'venire; arrivare' },
{ idx: '53', pidx: '52', nidx: '54',   title: '老师',	label: 'lǎoshī',	desc: 'maestro; insegnante' },
{ idx: '54', pidx: '53', nidx: '55',   title: '了',	label: 'le',	        desc: '[particella modale]; [indicatore di azione completata]' },
{ idx: '55', pidx: '54', nidx: '56',   title: '冷',	label: 'lěng',	        desc: 'freddo' },
{ idx: '56', pidx: '55', nidx: '57',   title: '里',	label: 'lǐ',	        desc: 'in; dentro; interno' },
{ idx: '57', pidx: '56', nidx: '58',   title: '零',	label: 'líng',	        desc: 'zero; 0;' },
{ idx: '58', pidx: '57', nidx: '59',   title: '六',	label: 'liù',	        desc: 'sei; 6' },
{ idx: '59', pidx: '58', nidx: '60',   title: '妈妈',	label: 'māma',	        desc: 'mamma' },
{ idx: '60', pidx: '59', nidx: '61',   title: '吗',	label: 'ma',	        desc: '[particella interrogativa]' },
{ idx: '61', pidx: '60', nidx: '62',   title: '买',	label: 'mǎi',	        desc: 'comprare; acquistare' },
{ idx: '62', pidx: '61', nidx: '63',   title: '猫',	label: 'māo',	        desc: 'gatto' },
{ idx: '63', pidx: '62', nidx: '64',   title: '没',	label: 'méi',	        desc: 'non; [prefisso negativo per verbi]' },
{ idx: '64', pidx: '63', nidx: '65',   title: '没关系',	label: 'méiguānxi',	desc: 'non importa' },
{ idx: '65', pidx: '64', nidx: '66',   title: '米饭',	label: 'mǐfàn',	        desc: 'riso (bollito)' },
{ idx: '66', pidx: '65', nidx: '67',   title: '明天',	label: 'míngtiān',	desc: 'domani' },
{ idx: '67', pidx: '66', nidx: '68',   title: '名字',	label: 'míngzi',	desc: 'nome (di persona o cosa)' },
{ idx: '68', pidx: '67', nidx: '69',   title: '哪',	label: 'nǎ',	        desc: 'quale? come?' },
{ idx: '69', pidx: '68', nidx: '70',   title: '哪儿',	label: 'nǎr',	        desc: 'dove?' },
{ idx: '70', pidx: '69', nidx: '71',   title: '那',	label: 'nà',	        desc: 'quello; allora; in quel caso' },
{ idx: '71', pidx: '70', nidx: '72',   title: '那儿',	label: 'nàr',	        desc: 'lì' },
{ idx: '72', pidx: '71', nidx: '73',   title: '呢',	label: 'ne',	        desc: '[particella interrogativa]' },
{ idx: '73', pidx: '72', nidx: '74',   title: '能',	label: 'néng',	        desc: 'potere; essere capace di; abilità; capacità; aver la possibilità di' },
{ idx: '74', pidx: '73', nidx: '75',   title: '你',	label: 'nǐ',	        desc: 'tu (informale)' },
{ idx: '75', pidx: '74', nidx: '76',   title: '年',	label: 'nián',	        desc: 'anno' },
{ idx: '76', pidx: '75', nidx: '77',   title: '女儿',	label: 'nǚ ér',	        desc: 'figlia' },
{ idx: '77', pidx: '76', nidx: '78',   title: '朋友',	label: 'péngyou',	desc: 'amico' },
{ idx: '78', pidx: '77', nidx: '79',   title: '漂亮',	label: 'piàoliang',	desc: 'bella; carina' },
{ idx: '79', pidx: '78', nidx: '80',   title: '苹果',	label: 'píngguǒ',	desc: 'mela' },
{ idx: '80', pidx: '79', nidx: '81',   title: '七',	label: 'qī',	        desc: 'sette; 7' },
{ idx: '81', pidx: '80', nidx: '82',   title: '钱',	label: 'qián',	        desc: 'soldi; moneta' },
{ idx: '82', pidx: '81', nidx: '83',   title: '前面',	label: 'qiánmiàn',	desc: 'davanti; di fronte; che precede' },
{ idx: '83', pidx: '82', nidx: '84',   title: '请',	label: 'qǐng',	        desc: 'chiedere; invitare; prego' },
{ idx: '84', pidx: '83', nidx: '85',   title: '去',	label: 'qù',	        desc: 'andare' },
{ idx: '85', pidx: '84', nidx: '86',   title: '热',	label: 'rè',	        desc: 'caldo; scaldare' },
{ idx: '86', pidx: '85', nidx: '87',   title: '人',	label: 'rén',	        desc: 'persona; uomo; gente' },
{ idx: '87', pidx: '86', nidx: '88',   title: '认识',	label: 'rènshi',	desc: 'capire; sapere; riconoscere; essere familiari con' },
{ idx: '88', pidx: '87', nidx: '89',   title: '日',	label: 'rì',	        desc: 'sole; giorno; data; giorno del mese' },
{ idx: '89', pidx: '88', nidx: '90',   title: '三',	label: 'sān',	        desc: 'tre; 3' },
{ idx: '90', pidx: '89', nidx: '91',   title: '商店',	label: 'shāngdiàn',	desc: 'negozio' },
{ idx: '91', pidx: '90', nidx: '92',   title: '上',	label: 'shàng',	        desc: 'sopra' },
{ idx: '92', pidx: '91', nidx: '93',   title: '上午',	label: 'shàngwǔ',	desc: 'mattino' },
{ idx: '93', pidx: '92', nidx: '94',   title: '少',	label: 'shǎo',	        desc: 'poco; alcuni' },
{ idx: '94', pidx: '93', nidx: '95',   title: '谁',	label: 'shéi',	        desc: 'chi?' },
{ idx: '95', pidx: '94', nidx: '96',   title: '什么',	label: 'shénme',	desc: 'qualcosa; cosa?' },
{ idx: '96', pidx: '95', nidx: '97',   title: '十',	label: 'shí',	        desc: 'dieci; 10' },
{ idx: '97', pidx: '96', nidx: '98',   title: '时候',	label: 'shíhou',	desc: 'tempo; periodo; intervallo di tempo' },
{ idx: '98', pidx: '97', nidx: '99',   title: '是',	label: 'shì',	        desc: 'essere; si' },
{ idx: '99', pidx: '98', nidx: '100',  title: '书',	label: 'shū',	        desc: 'libro; lettera' },
{ idx: '100',pidx: '99', nidx: '101',  title: '水',	label: 'shuǐ',	        desc: 'acqua; fiume; liquido' },
{ idx: '101',pidx: '100',nidx: '102',  title: '水果',	label: 'shuǐguǒ',	desc: 'frutta' },
{ idx: '102',pidx: '101',nidx: '103',  title: '睡觉',	label: 'shuìjiào',	desc: 'andare a letto; dormire' },
{ idx: '103',pidx: '102',nidx: '104',  title: '说话',	label: 'shuōhuà',	desc: 'parlare; dire; raccontare storie' },
{ idx: '104',pidx: '103',nidx: '105',  title: '四',	label: 'sì',	        desc: 'quattro; 4' },
{ idx: '105',pidx: '104',nidx: '106',  title: '岁',	label: 'suì',	        desc: 'anno; [class.per anno]' },
{ idx: '106',pidx: '105',nidx: '107',  title: '他',	label: 'tā',	        desc: 'egli' },
{ idx: '107',pidx: '106',nidx: '108',  title: '她',	label: 'tā',	        desc: 'ella' },
{ idx: '108',pidx: '107',nidx: '109',  title: '太',	label: 'tài',	        desc: 'troppo; molto; estremamente' },
{ idx: '109',pidx: '108',nidx: '110',  title: '天气',	label: 'tiānqì',	desc: 'tempo atmosferico' },
{ idx: '110',pidx: '109',nidx: '111',  title: '听',	label: 'tīng',	        desc: 'ascoltare; sentire; obbedire' },
{ idx: '111',pidx: '110',nidx: '112',  title: '同学',	label: 'tóngxué',	desc: 'compagno di classe' },
{ idx: '112',pidx: '111',nidx: '113',  title: '喂',	label: 'wèi',	        desc: 'pronto (al telefono)' },
{ idx: '113',pidx: '112',nidx: '114',  title: '我',	label: 'wǒ',	        desc: 'io' },
{ idx: '114',pidx: '113',nidx: '115',  title: '我们',	label: 'wǒmen',	        desc: 'noi' },
{ idx: '115',pidx: '114',nidx: '116',  title: '五',	label: 'wǔ',	        desc: 'cinque, 5' },
{ idx: '116',pidx: '115',nidx: '117',  title: '喜欢',	label: 'xǐhuan',	desc: 'piacere' },
{ idx: '117',pidx: '116',nidx: '118',  title: '下',	label: 'xià',	        desc: 'sotto; basso; dopo' },
{ idx: '118',pidx: '117',nidx: '119',  title: '下午',	label: 'xiàwǔ',	        desc: 'pomeriggio' },
{ idx: '119',pidx: '118',nidx: '120',  title: '下雨',	label: 'xiàyǔ',	        desc: 'piovere; piovoso' },
{ idx: '120',pidx: '119',nidx: '121',  title: '先生',	label: 'xiānsheng',	desc: 'signore; maestro; marito' },
{ idx: '121',pidx: '120',nidx: '122',  title: '现在',	label: 'xiànzài',	desc: 'ora; adesso; al momento' },
{ idx: '122',pidx: '121',nidx: '123',  title: '想',	label: 'xiǎng',	        desc: 'pensare; credere; supporre' },
{ idx: '123',pidx: '122',nidx: '124',  title: '小',	label: 'xiǎo',	        desc: 'piccolo; giovane' },
{ idx: '124',pidx: '123',nidx: '125',  title: '小姐',	label: 'xiǎojiě',	desc: 'giovane signora; signorina' },
{ idx: '125',pidx: '124',nidx: '126',  title: '些',	label: 'xiē',	        desc: 'alcuni' },
{ idx: '126',pidx: '125',nidx: '127',  title: '写',	label: 'xiě',	        desc: 'scrivere' },
{ idx: '127',pidx: '126',nidx: '128',  title: '谢谢',	label: 'xièxie',	desc: 'grazie; ringraziare' },
{ idx: '128',pidx: '127',nidx: '129',  title: '星期',	label: 'xīngqī',	desc: 'settimana' },
{ idx: '129',pidx: '128',nidx: '130',  title: '学生',	label: 'xuésheng',	desc: 'studente; scolaro' },
{ idx: '130',pidx: '129',nidx: '131',  title: '学习',	label: 'xuéxí',	        desc: 'studiare; imparare' },
{ idx: '131',pidx: '130',nidx: '132',  title: '学校',	label: 'xuéxiào',	desc: 'scuola' },
{ idx: '132',pidx: '131',nidx: '133',  title: '一',	label: 'yī',	        desc: 'uno; 1; singolo' },
{ idx: '133',pidx: '132',nidx: '134',  title: '衣服',	label: 'yīfu',	        desc: 'vestito' },
{ idx: '134',pidx: '133',nidx: '135',  title: '医生',	label: 'yīshēng',	desc: 'dottore' },
{ idx: '135',pidx: '134',nidx: '136',  title: '医院',	label: 'yīyuàn',	desc: 'ospedale' },
{ idx: '136',pidx: '135',nidx: '137',  title: '椅子',	label: 'yǐzi',	        desc: 'sedia' },
{ idx: '137',pidx: '136',nidx: '138',  title: '有',	label: 'yǒu',	        desc: 'avere; esserci; esistere' },
{ idx: '138',pidx: '137',nidx: '139',  title: '月',	label: 'yuè',	        desc: 'mese; luna' },
{ idx: '139',pidx: '138',nidx: '140',  title: '在',	label: 'zài',	        desc: 'in; esistere; [indica azione in corso]' },
{ idx: '140',pidx: '139',nidx: '141',  title: '再见',	label: 'zàijiàn',	desc: 'arrivederci; ci vediamo' },
{ idx: '141',pidx: '140',nidx: '142',  title: '怎么',	label: 'zěnme',	        desc: 'come; cosa; perché' },
{ idx: '142',pidx: '141',nidx: '143',  title: '怎么样',	label: 'zěnmeyàng',	desc: 'in che modo; come va' },
{ idx: '143',pidx: '142',nidx: '144',  title: '这',	label: 'zhè',	        desc: 'questo' },
{ idx: '144',pidx: '143',nidx: '145',  title: '这儿',	label: 'zhèr',	        desc: 'qui' },
{ idx: '145',pidx: '144',nidx: '146',  title: '中国',	label: 'Zhōngguó',	desc: 'Cina' },
{ idx: '146',pidx: '145',nidx: '147',  title: '中午',	label: 'zhōngwǔ',	desc: 'mezzogiorno' },
{ idx: '147',pidx: '146',nidx: '148',  title: '住',	label: 'zhù',	        desc: 'vivere; abitare; stare; resiedere' },
{ idx: '148',pidx: '147',nidx: '149',  title: '桌子',	label: 'zhuōzi',	desc: 'tavolo; scrivania' },
{ idx: '149',pidx: '148',nidx: '150',  title: '字',	label: 'zì',	        desc: 'lettera; carattere; parola' },
{ idx: '150',pidx: '149',nidx: '151',  title: '昨天',	label: 'zuótiān',	desc: 'ieri' },
{ idx: '151',pidx: '150',nidx: '152',  title: '坐',	label: 'zuò',	        desc: 'sedersi; prendere (un mezzo)' },
{ idx: '152',pidx: '151',nidx: '0',    title: '做',	label: 'zuò',	        desc: 'fare; produrre; scrivere; comporre; diventare' }

      ]; 
      
      return data;
  });
})();

