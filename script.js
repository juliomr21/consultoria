function generar_cadastro() {
  
  let link_what = ['https://loja.produtosasos.com.br/precadastro/283582', 'https://loja.produtosasos.com.br/precadastro/202116']
  //const id = new Date().getUTCSeconds() % 3;
 
    window.open(link_what[1]);
}
function generar_cadastro_pago() {
  let link_pago = 'https://loja.produtosasos.com.br/precadastro/202116'; 
     window.open(link_pago);
}
function generar_cel() {
  let link_what = ' https://api.whatsapp.com/send?phone=559881921315';
  window.open(link_what);
}
function show_duvida(id_d) {
  if (document.getElementById('p' + id_d).style.display == 'none') {
     document.getElementById('p' + id_d).style.display = 'block'
     document.getElementById('pm' + id_d).style.display = 'block'
     document.getElementById('pp' + id_d).style.display = 'none'
    }
  else { 
    document.getElementById('p' + id_d).style.display = 'none'
  document.getElementById('pm' + id_d).style.display = 'none'
  document.getElementById('pp' + id_d).style.display = 'block'
   }
}
function go_to_section(seccionId) {
  var seccion = document.getElementById(seccionId);
  seccion.scrollIntoView();
}

window.onscroll = function () {
  var registro = document.getElementById('registro').offsetTop;
  var planos = document.getElementById('planos').offsetTop;
  var duvidas = document.getElementById('duvidas').offsetTop;
  var extras = document.getElementById('extras').offsetTop;
  var footerT = document.getElementById('footer-term').offsetTop;
  var positionY =  window.innerHeight + window.scrollY;
 
  if (positionY  <= registro || positionY >= footerT ) {
    document.getElementById('btn-whatsapp').style.display = 'none';

  } else {
    document.getElementById('btn-whatsapp').style.display = 'block';
  }
  if ((positionY >= planos && positionY < duvidas) || (positionY >= extras) )  {
    const btnWhatsapp = document.querySelector('.btn-whatsapp-o');
    btnWhatsapp.style.animationPlayState = 'running';
}else {
  const btnWhatsapp = document.querySelector('.btn-whatsapp-o');
  btnWhatsapp.style.animationPlayState = 'paused';
}
if (positionY  >= registro) {
  document.getElementById('v-youtube').style.display = 'block';

}
 }



