function generar_cadastro() {
    let link_what = ['https://loja.produtosasos.com.br/precadastro/283582',  'https://loja.produtosasos.com.br/precadastro/202116']
    const id = new Date().getUTCSeconds() % 2;
    let link = link_what[id];
    window.open(link);
  }
  