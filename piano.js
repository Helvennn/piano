const body = document.getElementsByTagName('body')[0];

let C1 = document.querySelector(".key.piano.C1");
let CS1 = document.querySelector(".key.piano.CS1");
let D1 = document.querySelector(".key.piano.D1");
let DS1 = document.querySelector(".key.piano.DS1");
let E1 = document.querySelector(".key.piano.E1");
let F1 = document.querySelector(".key.piano.F1");
let FS1 = document.querySelector(".key.piano.FS1");
let G1 = document.querySelector(".key.piano.G1");
let GS1 = document.querySelector(".key.piano.GS1");
let A1 = document.querySelector(".key.piano.A1");
let AS1 = document.querySelector(".key.piano.AS1");
let B1 = document.querySelector(".key.piano.B1");

let C2 = document.querySelector(".key.piano.C2");
let CS2 = document.querySelector(".key.piano.CS2");
let D2 = document.querySelector(".key.piano.D2");
let DS2 = document.querySelector(".key.piano.DS2");
let E2 = document.querySelector(".key.piano.E2");
let F2 = document.querySelector(".key.piano.F2");
let FS2 = document.querySelector(".key.piano.FS2");
let G2 = document.querySelector(".key.piano.G2");
let GS2 = document.querySelector(".key.piano.GS2");
let A2 = document.querySelector(".key.piano.A2");
let AS2 = document.querySelector(".key.piano.AS2");
let B2 = document.querySelector(".key.piano.B2");

let C3 = document.querySelector(".key.piano.C3");
let CS3 = document.querySelector(".key.piano.CS3");
let D3 = document.querySelector(".key.piano.D3");
let DS3 = document.querySelector(".key.piano.DS3");
let E3 = document.querySelector(".key.piano.E3");
let F3 = document.querySelector(".key.piano.F3");
let FS3 = document.querySelector(".key.piano.FS3");
let G3 = document.querySelector(".key.piano.G3");
let GS3 = document.querySelector(".key.piano.GS3");
let A3 = document.querySelector(".key.piano.A3");
let AS3 = document.querySelector(".key.piano.AS3");
let B3 = document.querySelector(".key.piano.B3");

let C4 = document.querySelector(".key.piano.C4");
let CS4 = document.querySelector(".key.piano.CS4");
let D4 = document.querySelector(".key.piano.D4");
let DS4 = document.querySelector(".key.piano.DS4");
let E4 = document.querySelector(".key.piano.E4");
let F4 = document.querySelector(".key.piano.F4");
let FS4 = document.querySelector(".key.piano.FS4");
let G4 = document.querySelector(".key.piano.G4");
let GS4 = document.querySelector(".key.piano.GS4");
let A4 = document.querySelector(".key.piano.A4");
let AS4 = document.querySelector(".key.piano.AS4");
let B4 = document.querySelector(".key.piano.B4");

let C5 = document.querySelector(".key.piano.C5");
let CS5 = document.querySelector(".key.piano.CS5");
let D5 = document.querySelector(".key.piano.D5");
let DS5 = document.querySelector(".key.piano.DS5");
let E5 = document.querySelector(".key.piano.E5");
let F5 = document.querySelector(".key.piano.F5");
let FS5 = document.querySelector(".key.piano.FS5");
let G5 = document.querySelector(".key.piano.G5");
let GS5 = document.querySelector(".key.piano.GS5");
let A5 = document.querySelector(".key.piano.A5");
let AS5 = document.querySelector(".key.piano.AS5");
let B5 = document.querySelector(".key.piano.B5");

let C6 = document.querySelector(".key.piano.C6");
let CS6 = document.querySelector(".key.piano.CS6");
let D6 = document.querySelector(".key.piano.D6");
let DS6 = document.querySelector(".key.piano.DS6");
let E6 = document.querySelector(".key.piano.E6");
let F6 = document.querySelector(".key.piano.F6");
let FS6 = document.querySelector(".key.piano.FS6");
let G6 = document.querySelector(".key.piano.G6");
let GS6 = document.querySelector(".key.piano.GS6");
let A6 = document.querySelector(".key.piano.A6");
let AS6 = document.querySelector(".key.piano.AS6");
let B6 = document.querySelector(".key.piano.B6");

let C7 = document.querySelector(".key.piano.C7");
let CS7 = document.querySelector(".key.piano.CS7");
let D7 = document.querySelector(".key.piano.D7");
let DS7 = document.querySelector(".key.piano.DS7");
let E7 = document.querySelector(".key.piano.E7");
let F7 = document.querySelector(".key.piano.F7");
let FS7 = document.querySelector(".key.piano.FS7");
let G7 = document.querySelector(".key.piano.G7");
let GS7 = document.querySelector(".key.piano.GS7");
let A7 = document.querySelector(".key.piano.A7");
let AS7 = document.querySelector(".key.piano.AS7");
let B7 = document.querySelector(".key.piano.B7");

const btnC = document.getElementsByClassName('btnC')[0];
const btnCS = document.getElementsByClassName('btnCS')[0];
const btnD = document.getElementsByClassName('btnD')[0];
const btnDS = document.getElementsByClassName('btnDS')[0];
const btnE = document.getElementsByClassName('btnE')[0];
const btnF = document.getElementsByClassName('btnF')[0];
const btnFS = document.getElementsByClassName('btnFS')[0];
const btnG = document.getElementsByClassName('btnG')[0];
const btnGS = document.getElementsByClassName('btnGS')[0];
const btnA = document.getElementsByClassName('btnA')[0];
const btnAS = document.getElementsByClassName('btnAS')[0];
const btnB = document.getElementsByClassName('btnB')[0];
const btnC1 = document.getElementsByClassName('btnC1')[0];
const btnD1 = document.getElementsByClassName('btnD1')[0];
const btnE1 = document.getElementsByClassName('btnE1')[0];

let cstA = document.getElementById('custom1');
let cstS = document.getElementById('custom2');
let cstD = document.getElementById('custom3');
let cstF = document.getElementById('custom4');
let cstG = document.getElementById('custom5');
let cstH = document.getElementById('custom6');
let cstJ = document.getElementById('custom7');
let cstK = document.getElementById('custom8');
let cstL = document.getElementById('custom9');

btnC.addEventListener('click', function(){
    C4.load();
    C4.play();
    btnC.style.backgroundColor = '#111';
    btnC.style.color = 'azure';
    setTimeout(function(){
        btnC.style.backgroundColor = 'azure';
        btnC.style.color = '#111';
    }, 300);
});
btnCS.addEventListener('click', function(){
    CS4.load();
    CS4.play();
    btnCS.style.backgroundColor = '#111';
    btnCS.style.color = 'azure';
    setTimeout(function(){
        btnCS.style.backgroundColor = 'azure';
        btnCS.style.color = '#111';
    }, 300);
});
btnD.addEventListener('click', function(){
    D4.load();
    D4.play();
    btnD.style.backgroundColor = '#111';
    btnD.style.color = 'azure';
    setTimeout(function(){
        btnD.style.backgroundColor = 'azure';
        btnD.style.color = '#111';
    }, 300);
});
btnDS.addEventListener('click', function(){
    DS4.load();
    DS4.play();
    btnDS.style.backgroundColor = '#111';
    btnDS.style.color = 'azure';
    setTimeout(function(){
        btnDS.style.backgroundColor = 'azure';
        btnDS.style.color = '#111';
    }, 300);
});
btnE.addEventListener('click', function(){
    E4.load();
    E4.play();
    btnE.style.backgroundColor = '#111';
    btnE.style.color = 'azure';
    setTimeout(function(){
        btnE.style.backgroundColor = 'azure';
        btnE.style.color = '#111';
    }, 300);
});
btnF.addEventListener('click', function(){
    F4.load();
    F4.play();
    btnF.style.backgroundColor = '#111';
    btnF.style.color = 'azure';
    setTimeout(function(){
        btnF.style.backgroundColor = 'azure';
        btnF.style.color = '#111';
    }, 300);
});
btnFS.addEventListener('click', function(){
    FS4.load();
    FS4.play();
    btnFS.style.backgroundColor = '#111';
    btnFS.style.color = 'azure';
    setTimeout(function(){
        btnFS.style.backgroundColor = 'azure';
        btnFS.style.color = '#111';
    }, 300);
});
btnG.addEventListener('click', function(){
    G4.load();
    G4.play();
    btnG.style.backgroundColor = '#111';
    btnG.style.color = 'azure';
    setTimeout(function(){
        btnG.style.backgroundColor = 'azure';
        btnG.style.color = '#111';
    }, 300);
});
btnGS.addEventListener('click', function(){
    GS4.load();
    GS4.play();
    btnGS.style.backgroundColor = '#111';
    btnGS.style.color = 'azure';
    setTimeout(function(){
        btnGS.style.backgroundColor = 'azure';
        btnGS.style.color = '#111';
    }, 300);
});
btnA.addEventListener('click', function(){
    A4.load();
    A4.play();
    btnA.style.backgroundColor = '#111';
    btnA.style.color = 'azure';
    setTimeout(function(){
        btnA.style.backgroundColor = 'azure';
        btnA.style.color = '#111';
    }, 300);
});
btnAS.addEventListener('click', function(){
    AS4.load();
    AS4.play();
    btnAS.style.backgroundColor = '#111';
    btnAS.style.color = 'azure';
    setTimeout(function(){
        btnAS.style.backgroundColor = 'azure';
        btnAS.style.color = '#111';
    }, 300);
});
btnB.addEventListener('click', function(){
    B4.load();
    B4.play();
    btnB.style.backgroundColor = '#111';
    btnB.style.color = 'azure';
    setTimeout(function(){
        btnB.style.backgroundColor = 'azure';
        btnB.style.color = '#111';
    }, 300);
});
btnC1.addEventListener('click', function(){
    C5.load();
    C5.play();
    btnC1.style.backgroundColor = '#111';
    btnC1.style.color = 'azure';
    setTimeout(function(){
        btnC1.style.backgroundColor = 'azure';
        btnC1.style.color = '#111';
    }, 300);
});
btnD1.addEventListener('click', function(){
    D5.load();
    D5.play();
    btnD1.style.backgroundColor = '#111';
    btnD1.style.color = 'azure';
    setTimeout(function(){
        btnD1.style.backgroundColor = 'azure';
        btnD1.style.color = '#111';
    }, 300);
});
btnE1.addEventListener('click', function(){
    E5.load();
    E5.play();
    btnE1.style.backgroundColor = '#111';
    btnE1.style.color = 'azure';
    setTimeout(function(){
        btnE1.style.backgroundColor = 'azure';
        btnE1.style.color = '#111';
    }, 300);
});

body.addEventListener('keydown', function(){
    let key = event.key;
    if(key == "1"){
        C4.load();
        C4.play();
        btnC.style.backgroundColor = '#111';
        btnC.style.color = 'azure';
        setTimeout(function(){
            btnC.style.backgroundColor = 'azure';
            btnC.style.color = '#111';
        }, 300);
    }
    if(key == 'q'){
        CS4.load();
        CS4.play();
        btnCS.style.backgroundColor = '#111';
        btnCS.style.color = 'azure';
        setTimeout(function(){
            btnCS.style.backgroundColor = 'azure';
            btnCS.style.color = '#111';
        }, 300);
    }
    if(key == '2'){
        D4.load();
        D4.play();
        btnD.style.backgroundColor = '#111';
        btnD.style.color = 'azure';
        setTimeout(function(){
            btnD.style.backgroundColor = 'azure';
            btnD.style.color = '#111';
        }, 300);
    }
    if(key == 'w'){
        DS4.load();
        DS4.play();
        btnDS.style.backgroundColor = '#111';
        btnDS.style.color = 'azure';
        setTimeout(function(){
            btnDS.style.backgroundColor = 'azure';
            btnDS.style.color = '#111';
        }, 300);
    }
    if(key == '3'){
        E4.load();
        E4.play();
        btnE.style.backgroundColor = '#111';
        btnE.style.color = 'azure';
        setTimeout(function(){
            btnE.style.backgroundColor = 'azure';
            btnE.style.color = '#111';
        }, 300);
    }
    if(key == '4'){
        F4.load();
        F4.play();
        btnF.style.backgroundColor = '#111';
        btnF.style.color = 'azure';
        setTimeout(function(){
            btnF.style.backgroundColor = 'azure';
            btnF.style.color = '#111';
        }, 300);
    }
    if(key == 'r'){
        FS4.load();
        FS4.play();
        btnFS.style.backgroundColor = '#111';
        btnFS.style.color = 'azure';
        setTimeout(function(){
            btnFS.style.backgroundColor = 'azure';
            btnFS.style.color = '#111';
        }, 300);
    }
    if(key == '5'){
        G4.load();
        G4.play();
        btnG.style.backgroundColor = '#111';
        btnG.style.color = 'azure';
        setTimeout(function(){
            btnG.style.backgroundColor = 'azure';
            btnG.style.color = '#111';
        }, 300);
    }
    if(key == 't'){
        GS4.load();
        GS4.play();
        btnGS.style.backgroundColor = '#111';
        btnGS.style.color = 'azure';
        setTimeout(function(){
            btnGS.style.backgroundColor = 'azure';
            btnGS.style.color = '#111';
        }, 300);
    }
    if(key == '6'){
        A4.load();
        A4.play();
        btnA.style.backgroundColor = '#111';
        btnA.style.color = 'azure';
        setTimeout(function(){
            btnA.style.backgroundColor = 'azure';
            btnA.style.color = '#111';
        }, 300);
    }
    if(key == 'y'){
        AS4.load();
        AS4.play();
        btnAS.style.backgroundColor = '#111';
        btnAS.style.color = 'azure';
        setTimeout(function(){
            btnAS.style.backgroundColor = 'azure';
            btnAS.style.color = '#111';
        }, 300);
    }
    if(key == '7'){
        B4.load();
        B4.play();
        btnB.style.backgroundColor = '#111';
        btnB.style.color = 'azure';
        setTimeout(function(){
            btnB.style.backgroundColor = 'azure';
            btnB.style.color = '#111';
        }, 300);
    }
    if(key == '8'){
        C5.load();
        C5.play();
        btnC1.style.backgroundColor = '#111';
        btnC1.style.color = 'azure';
        setTimeout(function(){
            btnC1.style.backgroundColor = 'azure';
            btnC1.style.color = '#111';
        }, 300);
    }
    if(key == '9'){
        D5.load();
        D5.play();
        btnD1.style.backgroundColor = '#111';
        btnD1.style.color = 'azure';
        setTimeout(function(){
            btnD1.style.backgroundColor = 'azure';
            btnD1.style.color = '#111';
        }, 300);
    }
    if(key == '0'){
        E5.load();
        E5.play();
        btnE1.style.backgroundColor = '#111';
        btnE1.style.color = 'azure';
        setTimeout(function(){
            btnE1.style.backgroundColor = 'azure';
            btnE1.style.color = '#111';
        }, 300);
    }

    if(key == 'a'){
        if(cstA.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstA.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstA.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstA.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstA.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstA.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstA.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstA.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstA.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstA.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstA.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstA.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstA.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstA.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstA.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstA.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstA.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstA.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstA.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstA.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstA.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstA.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstA.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstA.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstA.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstA.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstA.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstA.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstA.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstA.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstA.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstA.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstA.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstA.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstA.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstA.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstA.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstA.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstA.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstA.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstA.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstA.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstA.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstA.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstA.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstA.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstA.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstA.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstA.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstA.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstA.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstA.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstA.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstA.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstA.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstA.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstA.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstA.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstA.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstA.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstA.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstA.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstA.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstA.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstA.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstA.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstA.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstA.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstA.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstA.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstA.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstA.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstA.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstA.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstA.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstA.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstA.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstA.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstA.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstA.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstA.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstA.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstA.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstA.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 's'){
        if(cstS.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstS.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstS.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstS.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstS.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstS.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstS.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstS.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstS.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstS.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstS.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstS.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstS.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstS.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstS.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstS.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstS.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstS.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstS.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstS.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstS.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstS.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstS.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstS.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstS.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstS.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstS.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstS.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstS.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstS.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstS.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstS.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstS.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstS.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstS.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstS.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstS.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstS.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstS.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstS.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstS.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstS.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstS.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstS.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstS.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstS.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstS.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstS.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstS.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstS.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstS.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstS.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstS.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstS.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstS.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstS.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstS.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstS.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstS.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstS.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstS.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstS.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstS.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstS.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstS.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstS.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstS.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstS.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstS.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstS.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstS.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstS.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstS.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstS.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstS.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstS.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstS.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstS.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstS.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstS.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstS.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstS.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstS.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstS.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'd'){
        if(cstD.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstD.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstD.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstD.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstD.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstD.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstD.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstD.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstD.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstD.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstD.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstD.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstD.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstD.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstD.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstD.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstD.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstD.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstD.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstD.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstD.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstD.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstD.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstD.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstD.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstD.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstD.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstD.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstD.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstD.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstD.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstD.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstD.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstD.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstD.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstD.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstD.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstD.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstD.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstD.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstD.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstD.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstD.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstD.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstD.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstD.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstD.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstD.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstD.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstD.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstD.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstD.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstD.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstD.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstD.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstD.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstD.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstD.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstD.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstD.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstD.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstD.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstD.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstD.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstD.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstD.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstD.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstD.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstD.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstD.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstD.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstD.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstD.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstD.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstD.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstD.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstD.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstD.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstD.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstD.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstD.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstD.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstD.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstD.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'f'){
        if(cstF.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstF.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstF.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstF.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstF.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstF.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstF.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstF.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstF.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstF.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstF.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstF.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstF.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstF.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstF.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstF.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstF.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstF.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstF.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstF.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstF.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstF.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstF.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstF.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstF.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstF.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstF.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstF.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstF.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstF.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstF.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstF.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstF.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstF.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstF.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstF.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstF.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstF.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstF.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstF.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstF.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstF.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstF.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstF.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstF.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstF.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstF.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstF.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstF.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstF.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstF.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstF.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstF.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstF.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstF.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstF.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstF.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstF.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstF.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstF.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstF.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstF.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstF.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstF.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstF.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstF.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstF.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstF.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstF.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstF.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstF.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstF.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstF.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstF.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstF.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstF.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstF.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstF.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstF.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstF.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstF.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstF.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstF.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstF.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'g'){
        if(cstG.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstG.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstG.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstG.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstG.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstG.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstG.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstG.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstG.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstG.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstG.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstG.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstG.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstG.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstG.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstG.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstG.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstG.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstG.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstG.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstG.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstG.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstG.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstG.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstG.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstG.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstG.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstG.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstG.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstG.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstG.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstG.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstG.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstG.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstG.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstG.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstG.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstG.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstG.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstG.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstG.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstG.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstG.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstG.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstG.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstG.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstG.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstG.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstG.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstG.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstG.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstG.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstG.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstG.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstG.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstG.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstG.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstG.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstG.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstG.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstG.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstG.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstG.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstG.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstG.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstG.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstG.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstG.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstG.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstG.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstG.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstG.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstG.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstG.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstG.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstG.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstG.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstG.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstG.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstG.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstG.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstG.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstG.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstG.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'h'){
        if(cstH.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstH.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstH.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstH.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstH.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstH.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstH.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstH.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstH.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstH.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstH.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstH.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstH.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstH.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstH.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstH.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstH.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstH.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstH.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstH.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstH.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstH.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstH.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstH.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstH.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstH.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstH.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstH.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstH.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstH.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstH.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstH.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstH.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstH.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstH.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstH.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstH.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstH.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstH.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstH.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstH.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstH.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstH.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstH.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstH.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstH.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstH.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstH.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstH.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstH.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstH.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstH.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstH.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstH.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstH.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstH.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstH.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstH.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstH.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstH.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstH.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstH.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstH.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstH.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstH.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstH.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstH.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstH.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstH.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstH.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstH.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstH.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstH.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstH.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstH.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstH.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstH.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstH.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstH.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstH.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstH.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstH.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstH.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstH.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'j'){
        if(cstJ.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstJ.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstJ.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstJ.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstJ.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstJ.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstJ.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstJ.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstJ.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstJ.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstJ.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstJ.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstJ.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstJ.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstJ.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstJ.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstJ.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstJ.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstJ.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstJ.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstJ.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstJ.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstJ.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstJ.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstJ.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstJ.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstJ.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstJ.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstJ.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstJ.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstJ.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstJ.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstJ.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstJ.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstJ.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstJ.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstJ.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstJ.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstJ.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstJ.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstJ.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstJ.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstJ.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstJ.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstJ.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstJ.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstJ.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstJ.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstJ.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstJ.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstJ.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstJ.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstJ.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstJ.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstJ.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstJ.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstJ.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstJ.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstJ.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstJ.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstJ.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstJ.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstJ.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstJ.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstJ.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstJ.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstJ.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstJ.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstJ.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstJ.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstJ.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstJ.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstJ.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstJ.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstJ.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstJ.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstJ.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstJ.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstJ.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstJ.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstJ.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstJ.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstJ.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstJ.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'k'){
        if(cstK.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstK.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstK.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstK.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstK.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstK.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstK.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstK.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstK.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstK.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstK.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstK.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstK.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstK.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstK.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstK.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstK.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstK.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstK.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstK.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstK.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstK.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstK.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstK.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstK.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstK.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstK.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstK.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstK.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstK.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstK.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstK.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstK.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstK.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstK.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstK.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstK.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstK.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstK.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstK.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstK.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstK.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstK.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstK.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstK.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstK.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstK.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstK.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstK.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstK.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstK.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstK.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstK.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstK.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstK.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstK.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstK.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstK.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstK.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstK.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstK.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstK.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstK.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstK.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstK.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstK.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstK.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstK.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstK.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstK.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstK.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstK.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstK.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstK.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstK.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstK.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstK.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstK.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstK.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstK.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstK.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstK.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstK.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstK.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
    if(key == 'l'){
        if(cstL.value == 'C1'){
            C1.load();
            C1.play();
        } else if(cstL.value == 'CS1'){
            CS1.load();
            CS1.play();
        } else if(cstL.value == 'D1'){
            D1.load();
            D1.play();
        } else if(cstL.value == 'DS1'){
            DS1.load();
            DS1.play();
        } else if(cstL.value == 'E1'){
            E1.load();
            E1.play();
        } else if(cstL.value == 'F1'){
            F1.load();
            F1.play();
        } else if(cstL.value == 'FS1'){
            FS1.load();
            FS1.play();
        } else if(cstL.value == 'G1'){
            G1.load();
            G1.play();
        } else if(cstL.value == 'GS1'){
            GS1.load();
            GS1.play();
        } else if(cstL.value == 'A1'){
            A1.load();
            A1.play();
        } else if(cstL.value == 'AS1'){
            AS1.load();
            AS1.play();
        } else if(cstL.value == 'B1'){
            B1.load();
            B1.play();
        } else if(cstL.value == 'C2'){
            C2.load();
            C2.play();
        } else if(cstL.value == 'CS2'){
            CS2.load();
            CS2.play();
        } else if(cstL.value == 'D2'){
            D2.load();
            D2.play();
        } else if(cstL.value == 'DS2'){
            DS2.load();
            DS2.play();
        } else if(cstL.value == 'E2'){
            E2.load();
            E2.play();
        } else if(cstL.value == 'F2'){
            F2.load();
            F2.play();
        } else if(cstL.value == 'FS2'){
            FS2.load();
            FS2.play();
        } else if(cstL.value == 'G2'){
            G2.load();
            G2.play();
        } else if(cstL.value == 'GS2'){
            GS2.load();
            GS2.play();
        } else if(cstL.value == 'A2'){
            A2.load();
            A2.play();
        } else if(cstL.value == 'AS2'){
            AS2.load();
            AS2.play();
        } else if(cstL.value == 'B2'){
            B2.load();
            B2.play();
        } else if(cstL.value == 'C3'){
            C3.load();
            C3.play();
        } else if(cstL.value == 'CS3'){
            CS3.load();
            CS3.play();
        } else if(cstL.value == 'D3'){
            D3.load();
            D3.play();
        } else if(cstL.value == 'DS3'){
            DS3.load();
            DS3.play();
        } else if(cstL.value == 'E3'){
            E3.load();
            E3.play();
        } else if(cstL.value == 'F3'){
            F3.load();
            F3.play();
        } else if(cstL.value == 'FS3'){
            FS3.load();
            FS3.play();
        } else if(cstL.value == 'G3'){
            G3.load();
            G3.play();
        } else if(cstL.value == 'GS3'){
            GS3.load();
            GS3.play();
        } else if(cstL.value == 'A3'){
            A3.load();
            A3.play();
        } else if(cstL.value == 'AS3'){
            AS3.load();
            AS3.play();
        } else if(cstL.value == 'B3'){
            B3.load();
            B3.play();
        } else if(cstL.value == 'C4'){
            C4.load();
            C4.play();
        } else if(cstL.value == 'CS4'){
            CS4.load();
            CS4.play();
        } else if(cstL.value == 'D4'){
            D4.load();
            D4.play();
        } else if(cstL.value == 'DS4'){
            DS4.load();
            DS4.play();
        } else if(cstL.value == 'E4'){
            E4.load();
            E4.play();
        } else if(cstL.value == 'F4'){
            F4.load();
            F4.play();
        } else if(cstL.value == 'FS4'){
            FS4.load();
            FS4.play();
        } else if(cstL.value == 'G4'){
            G4.load();
            G4.play();
        } else if(cstL.value == 'GS4'){
            GS4.load();
            GS4.play();
        } else if(cstL.value == 'A4'){
            A4.load();
            A4.play();
        } else if(cstL.value == 'AS4'){
            AS4.load();
            AS4.play();
        } else if(cstL.value == 'B4'){
            B4.load();
            B4.play();
        } else if(cstL.value == 'C5'){
            C5.load();
            C5.play();
        } else if(cstL.value == 'CS5'){
            CS5.load();
            CS5.play();
        } else if(cstL.value == 'D5'){
            D5.load();
            D5.play();
        } else if(cstL.value == 'DS5'){
            DS5.load();
            DS5.play();
        } else if(cstL.value == 'E5'){
            E5.load();
            E5.play();
        } else if(cstL.value == 'F5'){
            F5.load();
            F5.play();
        } else if(cstL.value == 'FS5'){
            FS5.load();
            FS5.play();
        } else if(cstL.value == 'G5'){
            G5.load();
            G5.play();
        } else if(cstL.value == 'GS5'){
            GS5.load();
            GS5.play();
        } else if(cstL.value == 'A5'){
            A5.load();
            A5.play();
        } else if(cstL.value == 'AS5'){
            AS5.load();
            AS5.play();
        } else if(cstL.value == 'B5'){
            B5.load();
            B5.play();
        } else if(cstL.value == 'C6'){
            C6.load();
            C6.play();
        } else if(cstL.value == 'CS6'){
            CS6.load();
            CS6.play();
        } else if(cstL.value == 'D6'){
            D6.load();
            D6.play();
        } else if(cstL.value == 'DS6'){
            DS6.load();
            DS6.play();
        } else if(cstL.value == 'E6'){
            E6.load();
            E6.play();
        } else if(cstL.value == 'F6'){
            F6.load();
            F6.play();
        } else if(cstL.value == 'FS6'){
            FS6.load();
            FS6.play();
        } else if(cstL.value == 'G6'){
            G6.load();
            G6.play();
        } else if(cstL.value == 'GS6'){
            GS6.load();
            GS6.play();
        } else if(cstL.value == 'A6'){
            A6.load();
            A6.play();
        } else if(cstL.value == 'AS6'){
            AS6.load();
            AS6.play();
        } else if(cstL.value == 'B6'){
            B6.load();
            B6.play();
        } else if(cstL.value == 'C7'){
            C7.load();
            C7.play();
        } else if(cstL.value == 'CS7'){
            CS7.load();
            CS7.play();
        } else if(cstL.value == 'D7'){
            D7.load();
            D7.play();
        } else if(cstL.value == 'DS7'){
            DS7.load();
            DS7.play();
        } else if(cstL.value == 'E7'){
            E7.load();
            E7.play();
        } else if(cstL.value == 'F7'){
            F7.load();
            F7.play();
        } else if(cstL.value == 'FS7'){
            FS7.load();
            FS7.play();
        } else if(cstL.value == 'G7'){
            G7.load();
            G7.play();
        } else if(cstL.value == 'GS7'){
            GS7.load();
            GS7.play();
        } else if(cstL.value == 'A7'){
            A7.load();
            A7.play();
        } else if(cstL.value == 'AS7'){
            AS7.load();
            AS7.play();
        } else if(cstL.value == 'B7'){
            B7.load();
            B7.play();
        } 
    }
});