var select = document.getElementById("select-country");
var options = [
    "Abecásia",
    "Afeganistão", 
    "África do Sul", 
    "Albânia", 
    "Alemanha", 
    "Andorra",
    "Angola",
    "Antiga e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Arménia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bangladexe",
    "Barbados",
    "Barém",
    "Bélgica",
    "Belize",
    "Benim",
    "Bielorrússia",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burquina Faso",
    "Burúndi",
    "Butão",
    "Cabo Verde",
    "Camarões",
    "Camboja",
    "Canadá",
    "Catar",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Colômbia",
    "Comores",
    "Congo-Brazzaville",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa do Marfim",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Egito",
    "Emirados Árabes Unidos",
    "Equador",
    "Eritreia",
    "Eslováquia",
    "Eslovénia",
    "Espanha",
    "Essuatíni",
    "Estado da Palestina",
    "Estados Unidos",
    "Estônia",
    "Etiópia",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Gana",
    "Geórgia",
    "Granada",
    "Grécia",
    "Guatemala",
    "Guiana",
    "Guiné",
    "Guiné Equatorial",
    "Guiné-Bissau",
    "Haiti",
    "Honduras",
    "Hungria",
    "Iêmen",
    "Ilhas Marechal",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jibuti",
    "Jordânia",
    "Kosovo",
    "Kuwaite",
    "Laus",
    "Lesoto",
    "Letônia",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macedônia do Norte",
    "Madagáscar",
    "Malásia",
    "Maláui",
    "Maldivas",
    "Mali",
    "Malta",
    "Marrocos",
    "Maurícia",
    "Mauritânia",
    "México",
    "Micronésia",
    "Moçambique",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Myanmar",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Noruega",
    "Nova Zelândia",
    "Omã",
    "Países Baixos",
    "Palau",
    "Panamá",
    "Papua Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Polônia",
    "Portugal",
    "Quênia",
    "Quirguistão",
    "Quiribati",
    "Reino Unido",
    "República Centro-Africana",
    "República Democrática do Congo",
    "República Dominicana",
    "República Tcheca",
    "Romênia",
    "Ruanda",
    "Rússia",
    "Salomão",
    "Salvador",
    "Samoa",
    "Santa Lúcia",
    "São Cristóvão e Neves",
    "São Marinho",
    "São Tomé e Príncipe",
    "São Vicente e Granadinas",
    "Seicheles",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Singapura",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Sudão",
    "Sudão do Sul",
    "Suécia",
    "Suíça",
    "Suriname",
    "Tailândia",
    "Tajiquistão",
    "Tanzânia",
    "Taiwan",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trindade e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Uruguai",
    "Usbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Zâmbia",
    "Zimbábue"
];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}