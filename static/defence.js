function clr() {
    document.getElementById("result").innerHTML = "";
}

function res(para) {
    document.getElementById("result").innerHTML += para;
}

function getShieldMitigation(shieldType) {
    /** Shield为Portal提供的Mitigation */
    const listShieldMitigation = [0,30,40,60,70];
    return listShieldMitigation[shieldType];
}

function getResonatorHealth(resonatorType) {
    /** Resonator为Portal提供的XM数值 */
    const listResonatorXM = [0,1000,1500,2000,2500,3000,4000,5000,6000];
    return listResonatorXM[resonatorType];
}

function calc() {
    var dTotal = 0;	//总Mitigation
    clr();

    res("-=== Mitigation ===-\n");
    res("[盾]");

    var tShield = [0, 0, 0, 0];	//盾的种类
    var dShield = [0, 0, 0, 0];	//盾的Mitigation

    for (var _=0; _<4; ++_) {
        tShield[_] = document.getElementById("s"+(_+1)).selectedIndex;
        dShield[_] = getShieldMitigation(tShield[_]);
        res(" " + dShield[_]);
        dTotal += dShield[_];
    }
    res("\n => 共计: "+dTotal);

    res("\n[Link] ");
    var nLink = document.getElementById("n_link").value;
    var dLink = Math.round(400/9*Math.atan(nLink/Math.E));
    dTotal += dLink;
    res(dLink);
    res("\n => 共计: "+dTotal);

    if (dTotal > 95) {
        res("\nMitigation超限，已控制为95。");
        dTotal = 95
    } else {
        res("\nMitigation未超限，为"+dTotal);
    }

    res("\n-=== Resonator ===-\n");
    var tResonator = [0,0,0,0,0,0,0,0];
    var hResonator = [0,0,0,0,0,0,0,0];
    var hTotal = 0;
    for (var __=0; __<8; ++__) {
        tResonator[_] = document.getElementById("r"+(_+1)).selectedIndex;
        hResonator[_] = getResonatorHealth(tResonator[_]);
        res (" #"+ (_+1) + ": " + hResonator[_] + " (" + Math.ceil(hResonator[_]*100/(100-dTotal))+ ")\n");
        hTotal += hResonator[_];
    }
    res("共计: "+hTotal+ " ("+ Math.ceil(hTotal*100/(100-dTotal)) +") XM\n------------\n");
    res("说明：括号内为考虑了Mitigation的XM数值。");
}