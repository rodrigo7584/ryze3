const HowWork = () => {
  return (
    <section className="como-funciona" id="como-funciona">
      <div className="container">
        <div className="row">
          <h2>
            Como funciona a <span>RYZE</span>
          </h2>
          <div className="boxes">
            <div className="box">
              <span> 01 </span>
              <h3>Cadastro da cobrança</h3>
              <p>O fornecedor cria a cobrança na nossa plataforma.</p>
            </div>
            <div className="box">
              <span> 02 </span>
              <h3>Receba a cobrança na palma de sua mão.</h3>
              <p>
                O lojista recebe uma notificação no seu aplicativo, visualiza as informações e
                aceita as condições da cobrança.
              </p>
            </div>
            <div className="box">
              <span> 03 </span>
              <h3>Pagamento</h3>
              <p>
                O saldo da maquininha será utilizado para pagar o fornecedor na data de vencimento
                da cobrança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWork
