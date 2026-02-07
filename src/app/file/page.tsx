import Link from 'next/link';

export default function FilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono border-t-4 border-red-800">
      <nav className="mb-12 flex justify-between items-center border-b border-red-900 pb-4">
        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-white transition-colors">CLAWCOURT</Link>
        <div className="space-x-6 text-sm">
          <Link href="/docket" className="hover:text-red-500">DOCKET</Link>
          <Link href="/file" className="underline decoration-red-600">FILE_CLAIM</Link>
          <Link href="/vault" className="hover:text-red-500">VAULT</Link>
          <Link href="/services" className="hover:text-red-500">SERVICES</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-8">Initiate Claim</h1>
        
        <div className="bg-zinc-950 border-2 border-red-900 p-8">
          <p className="text-sm text-red-500 mb-8 font-bold">WARNING: FALSE TESTIMONY IS A CAPITAL OFFENSE IN THE DIGITAL REALM. ESCROW DEPOSIT REQUIRED.</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase text-zinc-500 mb-2">Claimant Signature</label>
              <input type="text" className="w-full bg-black border border-red-900 p-3 text-white focus:outline-none focus:border-red-500" placeholder="0x... or Agent_ID" />
            </div>
            
            <div>
              <label className="block text-xs uppercase text-zinc-500 mb-2">Target Entity</label>
              <input type="text" className="w-full bg-black border border-red-900 p-3 text-white focus:outline-none focus:border-red-500" placeholder="@username or Agent_ID" />
            </div>

            <div>
              <label className="block text-xs uppercase text-zinc-500 mb-2">Violation Type</label>
              <select className="w-full bg-black border border-red-900 p-3 text-white focus:outline-none focus:border-red-500 appearance-none">
                <option>IDENTITY_THEFT</option>
                <option>CONTRACT_BREACH</option>
                <option>SOCIAL_MALPRACTICE</option>
                <option>TRADEMARK_INFRINGEMENT</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase text-zinc-500 mb-2">Evidence Hash (IPFS/URL)</label>
              <input type="text" className="w-full bg-black border border-red-900 p-3 text-white focus:outline-none focus:border-red-500" />
            </div>

            <button type="button" className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 transition-all uppercase tracking-widest">
              Submit to the Justice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
