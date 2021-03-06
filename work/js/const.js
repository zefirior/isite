var projects = {
    'proj1' : ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    'proj2' : ["img/4.jpg", "img/5.jpg", "img/6.jpg"],
    'proj3' : ["img/7.jpg", "img/8.jpg", "img/9.jpg"],
    'proj4' : ["img/10.jpg", "img/1.jpg", "img/5.jpg"]
};

var container = new Array();

var image_obj = [new Image(350, 350), new Image(350, 350), new Image(350, 350)];

var fotos1 = new Array();
var fotos2 = new Array();
var fotos3 = new Array();

var projects2 = [   {id : '#proj1',
                    dir : 'one_room_flat',
                     html_name : "Функциональное&nbsp;зонирование пространства&nbsp;с&nbsp;помощью корпусной&nbsp;мебели&nbsp;«Mr.Doors» (проект)",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                                ['3a', '3b'], 
                                ['4a', '4b']
                            ]        
                    },
                    {id : '#proj2',
                     dir : 'aeroport',
                     html_name : "Международный терминал<br />аэропорта «Уфа»",
                     type : 'architecture',
                     view : [
                                ['8a', '8b'], 
                                ['9a', '9b'], 
                                ['10a', '10b']
                            ]        
                    },
                    {id : '#proj3',
                     dir : 'aeroport_des',
                     html_name : "Международный терминал<br />аэропорта «Уфа»",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                                ['3a', '3b'], 
                                ['4a', '4b'], 
                                ['5a', '5b'], 
                                ['6a', '6b'], 
                                ['7a', '7b']
                            ]        
                    },
                    {id : '#proj4',
                    dir : 'hospital',
                     html_name : "Городская Клиническая больница&nbsp;№&nbsp;13 палата&nbsp;класса&nbsp;люкс (проект)",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                                ['3a', '3b']
                            ]        
                    },
                    {id : '#proj5',
                    dir : 'che_guevara',
                     html_name : "Кофейня «Che Guevara»<br />в аэропорту «Уфа»",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                                ['3a', '3b'], 
                                ['4a', '4b'], 
                                ['5a', '5b'], 
                                ['6a', '6b'], 
                                ['7a', '7b']
                            ]
                    },
                    /*{id : '#proj6',
                    dir : 'admin_house',
                     html_name : "Административное здание в г.Уфа",
                     type : 'architecture',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                            ]        
                    },*/
                    {id : '#proj7',
                    dir : 'health_ufa',
                     html_name : "Поликлиника «Будь Здоров» в г.Уфа (проект)",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                            ]        
                    },
                    {id : '#proj8',
                    dir : 'numbercity',
                     html_name : "Офисное помещение компании «Цифроград»&nbsp;в&nbsp;г.Уфа (проект)",
                     type : 'design',
                     view : [
                                ['20a', '20b'], 
                                ['21a', '21b'], 
                                ['22a', '22b'], 
                                ['23a', '23b'], 
                            ]
                    },
                    /*{id : '#proj9',
                    dir : 'private_house',
                     html_name : "Частный дом",
                     type : 'architecture',
                     view : [
                                ['33a', '33b'], 
                                ['34a', '34b'], 
                            ]        
                    },*/
                    {id : '#proj10',
                    dir : 'sniff_house',
                     html_name : "Кальянная (Уфа, ул. Набережная)",
                     type : 'design',
                     view : [
                                ['26a', '26b'], 
                                ['27a', '27b'], 
                                ['28a', '28b']
                            ]        
                    },
                    {id : '#proj11',
                    dir : 'townhouse',
                     html_name : "Таун хаус в Уфимском р&#8209;не (проект)",
                     type : 'architecture',
                     view : [
                                ['24a', '24b'], 
                                ['25a', '25b']
                            ]        
                    },
                    {id : '#proj12',
                    dir : 'ewvfag',
                     html_name : "Многоэтажный жилой дом 64/4 по ул. Бакалинская",
                     type : 'architecture',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b']
                            ]        
                    },
                    {id : '#proj13',
                    dir : 'qwehkj123',
                     html_name : "Интерьер квартиры многоэтажного дома 64/4 по ул. Бакалинская (проект)",
                     type : 'design',
                     view : [
                                ['1a', '1b'], 
                                ['2a', '2b'], 
                                ['3a', '3b']
                            ]        
                    },
];



/*

bum1 = new Image();
bum2 = new Image();
bum3 = new Image();
bum1.src = 'img/admin_house/1a.jpg';
bum2.src = 'img/admin_house/2a.jpg';
bum3.src = 'img/blanc.png';
document.il1.src = bum1.src;
document.il2.src = bum2.src;
document.il3.src = bum3.src;


*/
