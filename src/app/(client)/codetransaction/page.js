'use client'
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import '@/app/global.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import { useRouter } from 'next/navigation';

const CodeEntry = () => {
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
    const [codes, setCodes] = useState(['', '', '', '']);
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [alert, setAlert] = useState('');

    const handleCodeChange = (value) => {
        const newCodes = [...codes];
        newCodes[currentCodeIndex] = value;
        setCodes(newCodes);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const codeToVerify = codes[currentCodeIndex];

        try {
            const response = await axios.post('/api/verify-codes', { code: codeToVerify, index: currentCodeIndex });
            if (response.data.success) {
                setProgress((prevProgress) => prevProgress + 25);
                setAlert('Code accepté. Veuillez entrer le suivant.');

                if (currentCodeIndex < 3) {
                    setCurrentCodeIndex(currentCodeIndex + 1);
                } else {
                    setAlert('Tous les codes ont été validés.');
                }
            } else {
                setAlert(response.data.message);
            }
        } catch (error) {
            setAlert('Erreur lors de la vérification du code. Veuillez contacter l’administrateur.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <header className="flex justify-between items-center mb-4">
                    <button>
                        <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                    </button>
                </header>
                <h1 className="text-xl font-semibold text-black mb-4">Entrez vos codes</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor={`code-${currentCodeIndex}`} className="text-black">Code {currentCodeIndex + 1}</label>
                        <input
                            type="text"
                            className="mt-2 p-2 w-full border rounded text-black"
                            id={`code-${currentCodeIndex}`}
                            value={codes[currentCodeIndex]}
                            onChange={(e) => handleCodeChange(e.target.value)}
                            disabled={currentCodeIndex >= 4}
                        />
                    </div>
                    <button type="submit" className="w-full py-2 mt-4 text-lg font-semibold text-white bg-red-600 rounded-lg" disabled={currentCodeIndex >= 4}>
                        Vérifier
                    </button>
                </form>

                {alert && <div className="text-red-600 mt-4">{alert}</div>}

                <div className="w-full bg-gray-200 rounded-full mt-4">
                    <div
                        className="bg-red-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
                        style={{ width: `${progress}%` }}
                    >
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeEntry;
