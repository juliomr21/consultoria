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
function show_duvida(id_d){
  if(document.getElementById('p'+ id_d).style.display == 'none')
  {document.getElementById('p'+ id_d).style.display = 'block'}
  else
  {document.getElementById('p'+ id_d).style.display = 'none'}
}

window.onscroll = function () {
  
  if (window.scrollY <= 550) {
        document.getElementById('btn-whatsapp').style.display = 'none';
  
  }else
  {
    document.getElementById('btn-whatsapp').style.display = 'block';
  };
 
  }


