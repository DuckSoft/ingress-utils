function clr() {
    document.getElementById("result").innerHTML = "";
}

function res(para) {
    document.getElementById("result").innerHTML += para;
}

function calc() {
    /** XMP和US的基础伤害 */
    const listWeaponDamageXM = [150,300,500,900,1200,1500,1800,2700];
    /** XMP的作战半径 */
    const listXMPDamageRadius = [42,48,58,72,90,112,140,168];
    /** US的作战半径 */
    const listUSDamageRadius = [10,13,16,18,21,24,27,30];

    var radius = 0;
    var sType = document.getElementById("w_type").selectedIndex,
        sLvl = document.getElementById("w_lvl").selectedIndex,
        iRad = parseInt(document.getElementById("i_rad").value);

    clr();

    switch (sType) {
        case 0: radius = listXMPDamageRadius[sLvl]; res("XMP Burster L"); break;
        case 1: radius = listUSDamageRadius[sLvl]; res("Ultra Strike L"); break;
        default: res("??? L"); break;
    }

    res(sLvl + 1);
    res("\n 理论伤害: " + listWeaponDamageXM[sLvl]);

    if (radius < iRad) {
        res("\n 错误: 超出最大射程"+radius+"m。伤害减为0。");
    } else {
        var divider = Math.pow(2,5*iRad/radius);
        res("\n 计算伤害: ");
        res(Math.floor(listWeaponDamageXM[sLvl]/divider));
        res(" @ " + iRad + "m");
    }
}
