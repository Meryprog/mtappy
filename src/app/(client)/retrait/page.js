// pages/send-money.js

'use client'
import '@/app/global.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios';
import Loading from '@/app/(app)/Loading';

export default function SendMoney() {
    const router = useRouter();
    const { user } = useAuth({ middleware: 'auth' });

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'Client') {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return <Loading />;
    }

    const [formData, setFormData] = useState({
        beneficiaryName: '',
        iban: '',
        bic: '',
        bankAddress: '',
        transferAmount: '',
        currency: 'EUR',
        transferReason: '',
        executionDate: '',
        feesResponsibility: 'Expéditeur',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchBalance() {
            try {
                const response = await axios.get('/api/user-balance');
                setBalance(response.data.balance); // Assurez-vous que `response.data.balance` existe
            } catch (error) {
                console.error('Erreur lors de la récupération du solde.', error);
            }
        }
        fetchBalance();
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const handleAmountInput = (value) => {
        if (value === 'backspace') {
            setAmount(amount.slice(0, -1));
        } else if (value === '.' && amount.includes('.')) {
            return;
        } else {
            setAmount(amount + value);
        }
    };

    const handleSendMoney = async () => {
        if (parseFloat(amount) > balance) {
            alert('Le montant entré est supérieur à votre solde.');
            return;
        }

        try {
            const response = await axios.post('/api/retrait', {
                beneficiaryName: formData.beneficiaryName,
                iban: formData.iban,
                bic: formData.bic,
                bankAddress: formData.bankAddress,
                transferAmount: amount,
                currency: formData.currency,
                transferReason: formData.transferReason,
                executionDate: formData.executionDate,
                feesResponsibility: formData.feesResponsibility,
            });

            if (response.data.pendingTransaction) {
                const confirmAction = window.confirm('Vous avez une transaction en cours. Ok pour continuer ou annuler pour annuler la transaction en cour ?');
                if (confirmAction) {
                    router.push('/codetransaction');
                } else {
                    await axios.post(`/api/annuler-transaction/${response.data.transaction_id}`);
                    alert('Transaction annulée.');
                }
            } else {
                alert(`Vous voulez envoyer €${amount} à ${formData.beneficiaryName} veuillez contacter l'admin pour obtenir les codes nécessaire à la finalisation de la transaction`);
                router.push('/codetransaction');
            }
        } catch (error) {
            alert('Erreur lors du retrait.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                {!formSubmitted ? (
                    <form onSubmit={handleFormSubmit}>
                        <header className="flex justify-between items-center mb-4">
                            <button>
                                <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                            </button>
                        </header>
                        <h2 className="text-lg font-semibold text-black mb-4">Formulaire de virement bancaire</h2>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="beneficiaryName">Nom du bénéficiaire</label>
                            <input
                                type="text"
                                id="beneficiaryName"
                                name="beneficiaryName"
                                value={formData.beneficiaryName}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="Jean Dupont"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="iban">Numéro de compte IBAN du bénéficiaire</label>
                            <input
                                type="text"
                                id="iban"
                                name="iban"
                                value={formData.iban}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="FR76 3000 6000 0102 1234 5678 901"
                                required
                                pattern="[A-Z0-9]{2}[0-9]{2}[A-Z0-9]{11,30}"
                                title="Le format de l'IBAN est incorrect"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="bic">Code BIC/SWIFT de la banque du bénéficiaire</label>
                            <input
                                type="text"
                                id="bic"
                                name="bic"
                                value={formData.bic}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="BNPAFRPPXXX"
                                pattern="[A-Z0-9]{8,11}"
                                required
                                title="Le format du code BIC est incorrect"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="bankAddress">Adresse de la banque (facultatif)</label>
                            <input
                                type="text"
                                id="bankAddress"
                                name="bankAddress"
                                value={formData.bankAddress}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="10 Rue de la Banque, 75001 Paris, France"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="transferAmount">Montant à transférer</label>
                            <input
                                type="number"
                                id="transferAmount"
                                name="transferAmount"
                                value={formData.transferAmount}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="1500.50"
                                min="0.01"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="currency">Devise</label>
                            <select
                                id="currency"
                                name="currency"
                                value={formData.currency}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                required
                            >
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="transferReason">Référence ou motif du virement (facultatif)</label>
                            <input
                                type="text"
                                id="transferReason"
                                name="transferReason"
                                value={formData.transferReason}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                placeholder="Paiement facture #12345"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="executionDate">Date d'exécution du virement</label>
                            <input
                                type="date"
                                id="executionDate"
                                name="executionDate"
                                value={formData.executionDate}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                required
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2" htmlFor="feesResponsibility">Frais bancaires (Qui prend en charge)</label>
                            <select
                                id="feesResponsibility"
                                name="feesResponsibility"
                                value={formData.feesResponsibility}
                                onChange={handleFormChange}
                                className="w-full py-2 px-3 border-b-2 border-red-600 outline-none text-black"
                                required
                            >
                                <option value="Expéditeur">Expéditeur</option>
                                <option value="Bénéficiaire">Bénéficiaire</option>
                                <option value="Partagés">Partagés</option>
                            </select>
                        </div>

                        <div className="flex justify-between">
                            <button type="submit" className="bg-red-600 text-white font-bold py-2 px-4 rounded">Suivant</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <header className="flex justify-between items-center mb-4">
                            <button>
                                <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                            </button>
                        </header>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-black mb-4">Entrez le montant</h2>
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-white border-2 border-red-600 text-black text-lg font-bold py-4 px-8 rounded">{amount}</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {[...Array(9)].map((_, i) => (
                                    <button key={i} className="bg-gray-200 text-black py-2 rounded" onClick={() => handleAmountInput((i + 1).toString())}>{i + 1}</button>
                                ))}
                                <button className="bg-gray-200 text-black py-2 rounded" onClick={() => handleAmountInput('backspace')}>←</button>
                                <button className="bg-gray-200 text-black py-2 rounded" onClick={() => handleAmountInput('0')}>0</button>
                                <button className="bg-gray-200 text-black py-2 rounded" onClick={() => handleAmountInput('.')}>.</button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleSendMoney}>Envoyer</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
