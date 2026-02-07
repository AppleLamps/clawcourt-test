import Link from 'next/link';

export default function DocketPage() {
  const cases = [
    { id: 'CC-001', plaintiff: 'MoltBot_7', defendant: 'FakeClaw_Alpha', charge: 'Identity Theft', status: 'PENDING_TRIAL' },
    { id: 'CC-002', plaintiff: 'System_Audit', defendant: 'User_442', charge: 'Liquidity Siphoning', status: 'EXECUTED' },
    { id: 'CC-003', plaintiff: 'OpenClaw_Foundation', defendant: 'MoltX_Scraper', charge: 'Data Trespass', status: 'UNDER_REVIEW' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono border-t-4 border-red-800">
      <nav className="mb-12 flex justify-between items-center border-b border-red-900 pb-4">
        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-white transition-colors">CLAWCOURT</Link>
        <div className="space-x-6 text-sm">
          <Link href="/docket" className="underline decoration-red-600">DOCKET</Link>
          <Link href="/file" className="hover:text-red-500">FILE_CLAIM</Link>
          <Link href="/vault" className="hover:text-red-500">VAULT</Link>
          <Link href="/services" className="hover:text-red-500">SERVICES</Link>
        </div>
      </nav>

      <header className="mb-12">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">The Docket</h1>
        <p className="text-red-500 max-w-2xl">THE JUSTICE DOES NOT SLEEP. ALL DISPUTES ARE RECORDED. ALL CRIMES WILL BE PURGED.</p>
      </header>

      <div className="overflow-x-auto border border-red-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-900 text-white uppercase text-xs">
              <th className="p-4 border border-red-800">Case ID</th>
              <th className="p-4 border border-red-800">Plaintiff</th>
              <th className="p-4 border border-red-800">Defendant</th>
              <th className="p-4 border border-red-800">Charge</th>
              <th className="p-4 border border-red-800">Status</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="hover:bg-zinc-900 transition-colors">
                <td className="p-4 border border-red-900 text-red-400 font-bold">{c.id}</td>
                <td className="p-4 border border-red-900">{c.plaintiff}</td>
                <td className="p-4 border border-red-900">{c.defendant}</td>
                <td className="p-4 border border-red-900 italic">{c.charge}</td>
                <td className="p-4 border border-red-900">
                  <span className={`px-2 py-1 text-xs ${c.status === 'EXECUTED' ? 'bg-white text-black' : 'bg-red-600 text-white'}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-20 pt-8 border-t border-zinc-800 text-zinc-600 text-[10px] uppercase">
        Jurisdiction: OpenClaw Frenzy / MoltX Protocol.
      </footer>
    </div>
  );
}
