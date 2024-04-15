function generar_cadastro() {
  let link_what = ['https://loja.produtosasos.com.br/precadastro/283582', 'https://loja.produtosasos.com.br/precadastro/202116']
  const id = new Date().getUTCSeconds() % 2;
  let link = link_what[id];
  window.open(link);
}
function generar_cel() {
  let link_what = ' https://api.whatsapp.com/send?phone=559881921315'; 
  window.open(link_what);
}

window.onscroll = function () {
  if (window.scrollY <= 550) {
    // document.getElementsBy('btn-whatsapp').style.display = 'none';
    document.getElementById('btn-whatsapp').style.display = 'none';
  
  }else
  {
    document.getElementById('btn-whatsapp').style.display = 'block';
  };
   
  console.log(window.scrollY);
  // console.log(document.getElementsByClassName('btn-whatsapp').style.display)
}


