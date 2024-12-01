import { Coach } from './../coach';
import { Injectable } from '@angular/core';
import { Achievements } from '../interfaces/achievements';
import { Gallery } from '../gallery';
import { Sponsrs } from '../sponsrs';
import { Squad } from '../squad';
import { Store } from '../store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
showNav= new BehaviorSubject(true)
  constructor() { }
achievements:Achievements[]=[
  {
    src:'Champions-League.png',
    title:'Champions League',
    num:5,
    years:'1991-92, 2005-06, 2008-09, 2010-11, 2014-15'
  },
  {
    src:'Fifa-Club-World-Cup.png',
    title:'FIFA Club World Cup',
    num:3,
    years:'2009-10, 2011-12, 2015-16'
  },
  {
    src:'Recopa-d-Europa.jpg',
    title:'European Cup Winners Cup',
    num:4,
    years:'1978-79, 1981-82, 1988-89, 1996-97'
  },
  {
    src:'Copa-de-Fires.jpg',
    title:'Fairs Cup',
    num:3,
    years:'1957-58, 1959-60, 1965-66'
  },
  {
    src:'Copa-de-Fires.jpg',
    title:'Fairs Super Cup',
    num:1,
    years:'1971-72'
  },
  {
    src:'European-Super-Cup.png',
    title:'European Super Cup',
    num:5,
    years:'1992-93, 1997-98, 2009-10, 2011-12, 2015-16'
  },
  {
    src:'Copa-Llatina.jpg',
    title:'Latin Cup',
    num:2,
    years:'1948-49, 1951-52'
  },
  {
    src:'Trophy-Sponsorships.jpg',
    title:'Pyrenees Cup',
    num:4,
    years:'1909-10, 1910-11, 1911-12, 1912-13'
  },
  {
    src:'la-liga.png',
    title:'Spanish League Championship',
    num:27,
    years:'1928-29, 1944-45, 1947-48, 1948-49, 1951-52, 1952-53, 1958-59, 1959-60, 1973-74, 1984-85, 1990-91, 1991-92, 1992-93, 1993-94, 1997-98, 1998-99, 2004-05, 2005-06, 2008-09, 2009-10, 2010-11, 2012-13, 2014-15, 2015-16, 2017-18, 2018-19, 2022-23'
  },
  {
    src:'Spanish-Cup.png',
    title:'Copa del Rey - 31',
    num:31,
    years:'1909-10, 1911-12, 1912-13, 1919-20, 1921-22, 1924-25, 1925-26, 1927-28, 1941-42, 1950-51, 1951-52, 1952-53, 1956-57, 1958-59, 1962-63, 1967-68, 1970-71, 1977-78, 1980-81, 1982-83, 1987-88, 1989-90, 1996-97, 1997-98, 2008-09, 2011-12, 2014-15, 2015-16, 2016-17, 2017-18, 2020-21'
  },
  {
    src:'Supercopa-Espanya.jpg',
    title:'Spanish Super Cup',
    num:14,
    years:'1983-84, 1991-92, 1992-93, 1994-95, 1996-97, 2005-06, 2006-07, 2009-10, 2010-11, 2011-12, 2013-14, 2016-17, 2018-19, 2022-23'
  },
  {
    src:'Copa-de-la-Lliga.jpg',
    title:'Spanish League Cup',
    num:2,
    years:'1982-83, 1985-86'
  },
  {
    src:'cup-symbolizing-victory-in-a-competition-for-barcelona-football-club-soccer-team-catalan-league-2PH18PR.jpg',
    title:'Catalan League',
    num:1,
    years:'1937-38'
  },
  {
    src:'Campionat-de-Catalunya.jpg',
    title:'Catalan League Championship',
    num:23,
    years:'1901-1902, 1902-03, 1904-05, 1908-09, 1909-10, 1910-11, 1912-13, 1915-16, 1918-19, 1919-20, 1920-21, 1921-22, 1923-24, 1924-25, 1925-26, 1926-27, 1927-28, 1929-30, 1930-31, 1931-32, 1934-35, 1935-36, 1937-38 (includes Copa Macaya (1901-02) and Copa Barcelona (1902-03)'
  },
  {
    src:'Supercopa-Catalunya.jpg',
    title:'Catalan Super Cup',
    num:2,
    years:'2014-15, 2017-18'
  },
  {
    src:'Copa-Catalunya.jpg',
    title:'Catalan Cup',
    num:8,
    years:'1990-91, 1992-93, 1999-00, 2003-04, 2004-05, 2006-07, 2012-13, 2013-14 (until 1993-94, Copa Generalitat)'
  },
  {
    src:'Eva-Duarte.jpg',
    title:'Eva Duarte Cup',
    num:3,
    years:'1948-49, 1951-52, 1952-53'
  }
]
gallery:Gallery[]=[
  {src:'mini__MGA0478.jpg'},
  {src:'mini__GP22548.jpg'},
  {src:'mini__GP11828.jpg'},
  {src:'mini__GP10774.jpg'},
  {src:'IMG_2037.jpg'},
  {src:'_MGA9854.jpg'},
  {src:'_MGA5079.jpg'},
  {src:'_MGA2004.jpg'},
  {src:'_MGA1841.jpg'},
  {src:'_GP23350.jpg'},
  {src:'_GP21869.jpg'},
  {src:'_GP20575.jpg'},
  {src:'_GP17664.jpg'},
  {src:'_GP16711.jpg'},
  {src:'_GP12266.jpg'},
  {src:'_GP12247.jpg'},
]
sponsrs:Sponsrs[]=[
  {src:'1Xbet.png'},
  {src:'Spotify.png'},
  {src:'cocacola.png'},
  {src:'Nike.png'},
  {src:'Prime.png'},
  {src:'Afficionados.png'},
  {src:'ambilight.png'},
  {src:'assistencia.png'},
  {src:'Azemad.png'},
  {src:'BCD-Sports.png'},
  {src:'bimbo.png'},
  {src:'Biotech.png'},
  {src:'BMGnew.png'},
  {src:'caixabank.png'},
  {src:'ChilizNew.png'},
  {src:'cupra.png'},
  {src:'daka.png'},
  {src:'ebc-full-logo-white.svg'},
  {src:'Estrella.png'},
  {src:'Feeberse.png'},
  {src:'Fever.png'},
  {src:'GLS.png'},
  {src:'herno.png'},
  {src:'HMD.png'},
  {src:'hpe-logo.png'},
  {src:'Konami.png'},
  {src:'LOGO_LABORATORIO-DERMATOLOGICO_WHITE.png'},
  {src:'maybank.png'},
  {src:'Rappi.png'},
  {src:'scotiabank.png'},
  {src:'sebang.png'},
  {src:'serveto.png'},
  {src:'shb.png'},
  {src:'Stanley.png'},
  {src:'vegannation.png'},
  {src:'Vueling.png'},
  {src:'whitebit.png'},
  {src:'zic-logo-white.png'},
]
goolKeepers:Squad[]=[
  {
    src:'01-Ter_Stegen-M.jpg',
    num:1,
    name:'Ter Stegen',
    title:'Goalkeeper'
  },
  {
    src:'13-Inaki_Pena-M.jpg',
    num:13,
    name:'Peña',
    title:'Goalkeeper'
  },
  {
    src:'25-Szczesny-M.jpg',
    num:25,
    name:'Szczęsny',
    title:'Goalkeeper'
  }
]
defeenders:Squad[]=[
  {
    src:'02-Cubarsi-M.jpg',
    num:2,
    name:'Cubarsí',
    title:'Defender'
  },
  {
    src:'03-Balde-M.jpg',
    num:3,
    name:'Balde',
    title:'Defender'
  },
  {
    src:'04-Araujo-M.jpg',
    num:4,
    name:'Araujo',
    title:'Defender'
  },
  {
    src:'05-Martinez-M.jpg',
    num:5,
    name:'Martinez',
    title:'Defender'
  },
  {
    src:'15-Christensen-M.jpg',
    num:15,
    name:'Christensen',
    title:'Defender'
  },
  {
    src:'23-Kounde-M.jpg',
    num:23,
    name:'Kounde',
    title:'Defender'
  },
  {
    src:'24-Eric_Garcia-M.jpg',
    num:24,
    name:'Garcia',
    title:'Defender'
  }
]
midfielders:Squad[]=[
  {
    src:'06-Gavi-M.jpg',
    num:6,
    name:'Gavi',
    title:'Midfielder'
  },
  {
    src:'08-Pedri-M.jpg',
    num:8,
    name:'Pedri',
    title:'Midfielder'
  },
  {
    src:'14-Pablo_Torre-M.jpg',
    num:14,
    name:'Torre',
    title:'Midfielder'
  },
  {
    src:'16-Fermin-M.jpg',
    num:16,
    name:'López',
    title:'Midfielder'
  },
  {
    src:'17-Casado-M.jpg',
    num:17,
    name:'Casadó',
    title:'Midfielder'
  },
  {
    src:'20-Olmo-M.jpg',
    num:20,
    name:'Olmo',
    title:'Midfielder'
  },
  {
    src:'21-De_Jong-M.jpg',
    num:21,
    name:'De Jong',
    title:'Midfielder'
  },
]
forwards:Squad[]=[
  {
    src:'07-Ferran_Torres-M.jpg',
    num:7,
    name:'Torres',
    title:'Forward'
  },
  {
    src:'09-Lewandowski-M.jpg',
    num:9,
    name:'Lewandowski',
    title:'Forward'
  },
  {
    src:'10-Ansu_Fati-M.jpg',
    num:10,
    name:'Ansu Fati',
    title:'Forward'
  },
  {
    src:'11-Raphinha-M.jpg',
    num:11,
    name:'Raphinha',
    title:'Forward'
  },
  {
    src:'18-Pau_Victor-M.jpg',
    num:18,
    name:'Víctor',
    title:'Forward'
  },
  {
    src:'19-Lamine-M.jpg',
    num:19,
    name:'Lamine Yamal',
    title:'Forward'
  }
]
coach:Coach[]=[
  {
    src:'00-Hansi_Flick-M.jpg',
    name:'HANSI FLICK',
    title:'Coach'
  }
]
store:Store[]=[
  {
    src:'FCBESSENTIALSMASC2062.jpg',
    title:'T-shirt black Barça',
    price:34.99
  },
  {
    src:'FE642301_1.gif',
    title:`SIGNED | Limited Edition FC BARCELONA x COLDPLAY`,
    price:2999.99
  },
  {
    src:'700x1060-BLMP0007401720-5_cb380146-326d-4338-9c85-4a50e2f62d89.jpg',
    title:'1995-97 Season Jersey',
    price:69.99
  },
  {
    src:'2024-03-28BLM-JULESKOUNDE-301.jpg',
    title:'Red T-Shiert Barça 1899',
    price:29.99
  },
  {
    src:'23100M_df628b19-071e-4227-8601-ea571f95303c.jpg',
    title:`UCL Men's third jersey 24/25 FC Barcelona - Player's Edition`,
    price:164.99
  },
  {
    src:'25100BC_1.jpg',
    title:`UCL Men's home jersey 24/25 FC Barcelona`,
    price:114.99
  },
  {
    src:'700x1060-74741-2.jpg',
    title:`FC Barcelona Christmas Mug`,
    price:12.99
  },
  {
    src:'Ficha-Producto-COREII4339.jpg',
    title:`Christmas jumper grey FC Barcelona`,
    price:49.99
  },
  {
    src:'700x1060-BLMP000812002-1.jpg',
    title:`Christmas jumper reindeer FC Barcelona - Junior`,
    price:39.99
  },
  {
    src:'Ficha-Producto-COREII4382.jpg',
    title:`Christmas jumper reindeer FC Barcelona`,
    price:49.99
  },
  {
    src:'700x1060-BLMP000812004-1.jpg',
    title:`Christmas jumper grey FC Barcelona - Junior`,
    price:35
  },
  {
    src:'25100BMC_1.jpg',
    title:`UCL Men's home jersey 24/25 FC Barcelona - Player's Edition`,
    price:164.99
  },
  {
    src:'25200CWF_1.jpg',
    title:`UWCL Women's away jersey 24/25 FC Barcelona`,
    price:114.99
  },
  {
    src:'araujo.jpg',
    title:`1899 Retro Home Kit Jersey- Long Sleeves`,
    price:74.99
  },
  {
    src:'BARCACapsulaAbril24_FOTO2_067.jpg',
    title:`Bomber jacket Barça 1899`,
    price:89.99
  },
  {
    src:'BLMP740011_1.jpg',
    title:`Sweatshirt Retro 1899`,
    price:79.99
  },
  {
    src:'BLMP812035_1.jpg',
    title:`Christmas jumper - Junior`,
    price:39.99
  },
  {
    src:'BLMP812036_1.jpg',
    title:`Christmas hat - Junior`,
    price:22.99
  },
  {
    src:'BLMP000816002_1.jpg',
    title:`FC Barcelona Christmas Mug`,
    price:12.99
  },
  {
    src:'BLMP000816005_1.jpg',
    title:`Christmas gift bag`,
    price:5.99
  },
  {
    src:'BLMP000850002_1.jpg',
    title:`FC Barcelona Christmas boxer pack`,
    price:29.99
  },
  {
    src:'CORE-II3860.jpg',
    title:`Hoodie black trencadis Barça`,
    price:64.99
  },
  {
    src:'CORE-II4178.jpg',
    title:`T-shirt beige Barça`,
    price:29.99
  },
  {
    src:'FCBESSENTIALSMASC2577.jpg',
    title:`Jacket black Barça`,
    price:74.99
  },
  {
    src:'FE565501_1.jpg',
    title:`FC Barcelona christmas pyjamas`,
    price:39.99
  },
  {
    src:'FE565501_1.jpg',
    title:`FC Barcelona christmas pyjamas-Kids`,
    price:34.99
  },
  {
    src:'Ficha-blaugrana-shirt-1400X1868px.jpg',
    title:`Barça x Coldplay Limited Edition Blaugrana Oversized T-shirt`,
    price:39.99
  },
  {
    src:'Ficha-hoodie-blaugrana-1400X1868px_43f740a5-72a2-4b8c-8076-311879f4282e.jpg',
    title:`Barça x Coldplay Limited Edition Blaugrana hoodie`,
    price:74.99
  },
  {
    src:'Ficha-scarff-1400X1868px.jpg',
    title:`Barça x Coldplay Limited Edition Blaugrana Scarf`,
    price:24.99
  },
  {
    src:'Ficha-yellow-shirt-1400X1868px.jpg',
    title:`Barça x Coldplay Limited Edition Yellow T-shirt`,
    price:34.99
  },
  {
    src:'Ficha-Producto-COREII4330.jpg',
    title:`Christmas Jumper`,
    price:49.99
  },
  {
    src:'FN9187-410_1.jpg',
    title:`FC Barcelona home shorts 24/25 - Junior`,
    price:39.99
  },
  {
    src:'FN9233-456_3_cc1aefd6-0b90-4b2d-9021-319e7df197ea.jpg',
    title:`Younger kids home kit 24/25 FC Barcelona`,
    price:69.99
  },
  {
    src:'FN9452-011-PHSFM001.jpg',
    title:`Tracksuit FC Barcelona 24/25`,
    price:139.99
  },
  {
    src:'FQ2294-418_1.jpg',
    title:`FC Barcelona training shirt 24/25 third kit - Player's Edition`,
    price:74.99
  },
  {
    src:'FQ3216-010_1.jpg',
    title:`Hoodie black Barça Nike`,
    price:94.99
  },
  {
    src:'FZ4691-410_1.jpg',
    title:`FC Barcelona home short 24/25 - Player's Edition`,
    price:74.99
  },
  {
    src:'imagen_3.jpg',
    title:`UCL Junior home jersey 24/25 FC Barcelona`,
    price:94.99
  },
  {
    src:'VO240712A46165.jpg',
    title:`FC Barcelona coach training Shirt 24/25`,
    price:49.99
  },
]
}
