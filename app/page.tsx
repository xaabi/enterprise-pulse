'tsx'
'use client';

import React, { useState, useEffect } from 'react';

export default function EnterpriseDashboard() {
  const [metrics, setMetrics] = useState({
    activeConnections: 1240,
    requestLatency: '24ms',
    systemStatus: 'HEALTHY',
    flashSaleStock: 100,
  });

  // Simulasi pembaruan data real-time ala enterprise monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        activeConnections: Math.floor(1200 + Math.random() * 150),
        requestLatency: `${Math.floor(20 + Math.random() * 10)}ms`,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">EnterprisePulse Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Real-time system telemetry & high-concurrency traffic monitor</p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-400">System Status: {metrics.systemStatus}</span>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Active Connections</p>
          <h3 className="text-3xl font-bold text-white mt-2">{metrics.activeConnections}</h3>
          <span className="text-xs text-emerald-400 mt-1 block">↑ 12% from last hour</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-400">API Latency</p>
          <h3 className="text-3xl font-bold text-white mt-2">{metrics.requestLatency}</h3>
          <span className="text-xs text-emerald-400 mt-1 block">Optimal performance</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Flash Sale Stock (Redis)</p>
          <h3 className="text-3xl font-bold text-white mt-2">{metrics.flashSaleStock}</h3>
          <span className="text-xs text-blue-400 mt-1 block">Atomic lock active</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-400">Security Compliance</p>
          <h3 className="text-3xl font-bold text-white mt-2">UU PDP 100%</h3>
          <span className="text-xs text-emerald-400 mt-1 block">PII Masking Shielded</span>
        </div>
      </div>

      {/* Action / Simulation Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Infrastructure Actions</h2>
        <p className="text-slate-400 text-sm mb-6">
          Gunakan panel ini untuk menguji konektivitas atau melakukan simulasi lonjakan traffic pada core backend.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => alert("Simulasi: Menghubungkan ke FlashScale-Core API...")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-lg transition"
          >
            Test Flash Sale Endpoint
          </button>
          <button 
            onClick={() => alert("Simulasi: Memeriksa log enkripsi NexusGuard AI...")}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-5 py-2.5 rounded-lg transition border border-slate-700"
          >
            Verify PII Security Logs
          </button>
        </div>
      </div>
    </main>
  );
}