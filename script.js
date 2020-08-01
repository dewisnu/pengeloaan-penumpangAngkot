var penumpang = ['cobray',undefined,'ari'];
var tambahpenumpang = function (namapenumpang, penumpang ) {
   //jika angkot kosong 
   if (penumpang.length == 0) {
       //tambah penumpang di awal array 
       penumpang.push(namapenumpang);
       //kembalikan isi array dan keluar dari fuction 
     return penumpang;
   }
   else{
        //telusuri kursi dari awal 
     for (var i = 0; i <= penumpang.length; i++) {
         
      //jika ada kursi kosong 
         if (penumpang[i] == undefined) {
             //tambah penumpang di kursi tersebut
             penumpang[i] = namapenumpang
               //kembalikan isi array dan keluar dari fuction 
             return penumpang;
              //jika sudah ada nama yang sama 
         }
         else if (penumpang[i] == namapenumpang) {
              // tampilkan pesan kesalahannya 
             console.log('penumpang ' + namapenumpang + ' sudah ada');
             // kembalikan isi array dan keluar dari fuction 
             return penumpang;
         }
         
         //jika seluruh kursi terisi
         else if(i == penumpang.length ){
             //tambah penumpang di akhir array 
            penumpang.push(namapenumpang);
            //kembalikan isi array dan keluar dari fuction    
            return penumpang;
         }
   
   
        
       }
 
        
    }
   
    
   
}

var hapuspenumpang = function (namapenumpang, penumpang) {
  //jika angkot kosong 
  if (penumpang.length == 0) {
    //tambah penumpang di awal array 
    console.log('angkot kosong')
    //kembalikan isi array dan keluar dari fuction 
    return penumpang;
  }
  else {
    //telusuri kursi dari awal 
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namapenumpang) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log('tidak ada nama penumpang yang sesuai');
        return penumpang;
      }




    }


  }



}



