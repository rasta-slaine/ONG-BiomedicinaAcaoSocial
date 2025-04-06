import React, { useState } from "react";

export const FormDonation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode integrar com API de pagamento ou serviço backend
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="max-w-md  w-full bg-white shadow-xl rounded-2xl p-8 transition-all duration-300">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-indigo-600">
            Etapa {step} de 3
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm text-gray-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm text-gray-700">
                Valor da doação (R$)
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                placeholder="Ex: 50"
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Nome:</strong> {formData.name}
              </p>
              <p className="text-gray-700">
                <strong>E-mail:</strong> {formData.email}
              </p>
              <p className="text-gray-700">
                <strong>Valor:</strong> R$ {formData.amount}
              </p>
              <p className="text-sm text-gray-500">
                Ao confirmar, você será redirecionado para a página de pagamento
                segura.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-xl text-sm bg-gray-200 hover:bg-gray-300 transition"
              >
                Voltar
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
              >
                Confirmar e Doar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
