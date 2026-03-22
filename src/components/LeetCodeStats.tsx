import { useState, useEffect } from 'react';
import { Trophy, Activity, ExternalLink } from 'lucide-react';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

const LeetCodeStats = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          'https://leetcode-stats-api.herokuapp.com/GANJI_ANIRUDH'
        );
        const result = await response.json();
        if (result.status === 'success') {
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Fallback data if API fails (based on user screenshot)
  const displayData = data || {
    totalSolved: 79,
    totalQuestions: 3374,
    easySolved: 50,
    totalEasy: 932,
    mediumSolved: 21,
    totalMedium: 2027,
    hardSolved: 6,
    totalHard: 915,
    acceptanceRate: 0,
    ranking: 1800430,
  };

  const StatBar = ({ 
    label, 
    solved, 
    total, 
    color 
  }: { 
    label: string; 
    solved: number; 
    total: number; 
    color: string;
  }) => (
    <div className="space-y-1.5">
      <div className="flex justify-between items-end px-1">
        <span className="text-[10px] uppercase font-black tracking-wider opacity-60">
          {label}
        </span>
        <span className="text-xs font-mono font-bold">
          {solved}<span className="text-[10px] opacity-30 mx-1">/</span>{total}
        </span>
      </div>
      <div className="h-2 w-full bg-black/5 border border-black/10 overflow-hidden relative">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out border-r border-black`}
          style={{ width: `${(solved / total) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="border-4 border-black p-5 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-3">
        <div>
          <h3 className="font-mono text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            LeetCode Stats_
          </h3>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-1">
            // @GANJI_ANIRUDH
          </p>
        </div>
        <a 
          href="https://leetcode.com/u/GANJI_ANIRUDH/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {/* Left Side: Summary */}
        <div className="flex flex-col justify-center items-center p-4 bg-black/5 border-2 border-black border-dashed relative overflow-hidden group">
          <Trophy className="w-12 h-12 mb-2 opacity-10 absolute -top-2 -right-2 rotate-12 group-hover:scale-110 transition-transform" />
          <span className="text-4xl font-black font-mono leading-none">
            {displayData.totalSolved}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">
            Solved
          </span>
          <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white border border-black text-[10px] font-mono">
            <Activity className="w-3 h-3 text-green-600" />
            Rank: #{displayData.ranking.toLocaleString()}
          </div>
        </div>

        {/* Right Side: Detailed Breakdown */}
        <div className="space-y-4">
          <StatBar 
            label="Easy" 
            solved={displayData.easySolved} 
            total={displayData.totalEasy} 
            color="bg-green-400" 
          />
          <StatBar 
            label="Med." 
            solved={displayData.mediumSolved} 
            total={displayData.totalMedium} 
            color="bg-yellow-400" 
          />
          <StatBar 
            label="Hard" 
            solved={displayData.hardSolved} 
            total={displayData.totalHard} 
            color="bg-red-400" 
          />
        </div>
      </div>

      {!loading && !data && (
        <div className="mt-4 text-[9px] font-mono text-center opacity-30 italic">
          * Showing cached baseline stats
        </div>
      )}
    </div>
  );
};

export default LeetCodeStats;
