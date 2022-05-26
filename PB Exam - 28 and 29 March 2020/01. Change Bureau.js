function changeBureau(input) {
  let bitkoin = Number(input[0]);
  let chineeYuan = Number(input[1]);
  let comissionPercent = Number(input[2]);

  let leva = bitkoin * 1168 + chineeYuan * 0.15 * 1.76;
  let evro = leva / 1.95;

  let comission = (evro * comissionPercent) / 100;
  let totalMoney = evro - comission;
  console.log(totalMoney.toFixed(2));
}
changeBureau(["7", "50200.12", "3"]);
