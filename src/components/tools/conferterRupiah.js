/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

const ConferterRupiah = (duitMe) => {
  let duit = duitMe;
  let numberStr = duit.toString();
  let split = numberStr.split(',');
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  let ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

  if (ribuan) {
    let separator = sisa ? ',' : '';
    rupiah += separator + ribuan.join(',');
  }
  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return rupiah;
};

export default ConferterRupiah;
