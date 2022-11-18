import Layout from "../components/Layout";

export default function Policies() {
  return (
    <div>
      <Layout navbarType={2}>
        <div className="page-header flex h-40 mb-16">
          <h2 className="text-white m-auto text-3xl uppercase">
            Terms & Conditions
          </h2>
        </div>

        <div id="side-padding" className="flex flex-col gap-4">
          <h2 className="text-xl">Conditions</h2>
          <p className="font-light">
            Patterns purchased at www.magomade.dk is for private use only and
            therefore can't be copied, shared, or resold.
          </p>
        </div>

        <div id="padding" className="flex flex-col gap-4">
          <h2 className="text-xl">Payment</h2>
          <p className="font-light">
            MagoMade accepts online payments with Visa, Maestro, Mastercard,
            ApplePay, GooglePay and Shop Pay. The total of digital products is
            withdrawn immediately and once the payment is completed, the product
            is send digitally via e-mail.
          </p>
        </div>

        <div id="side-padding" className="flex flex-col gap-4">
          <h2 className="text-xl">Errors</h2>
          <p className="font-light">
            In case of errors or omissions, please contact: Mail:
            sandra@magomade.dk
          </p>
        </div>

        <div id="padding" className="flex flex-col gap-4">
          <h2 className="text-xl">Right of Withdrawel</h2>
          <p className="font-light">
            No right of withdrawel is granted for digital products purchased as
            digital download on www.magomade.dk.
          </p>
        </div>
      </Layout>
    </div>
  );
}
