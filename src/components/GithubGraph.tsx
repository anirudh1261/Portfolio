import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubGraph = () => {
  return (
    <div className="border-4 border-black p-4 bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">
      {/* green glow accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39d353] via-[#26a641] to-[#006d32]" />
      <h3 className="font-mono text-xl font-bold mb-4 border-b-2 border-black pb-2 uppercase tracking-tighter flex items-center gap-3 mt-1">
        <span className="inline-block w-3 h-3 rounded-full bg-[#39d353] shadow-[0_0_8px_#39d353]"></span>
        GitHub Activity_
        <span className="ml-auto text-[10px] font-normal px-2 py-0.5 bg-[#39d353]/15 border border-[#39d353]/40 text-[#26a641] rounded-sm">Live</span>
      </h3>
      <div className="flex justify-center overflow-x-auto pb-2">
        <GitHubCalendar
          username="anirudh1261"
          colorScheme="light"
          style={{
            fontFamily: 'monospace',
          }}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          }}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1.5 text-[#26a641]">
          <span className="inline-block w-2 h-2 rounded-sm bg-[#40c463]"></span>
          <span className="text-[10px] opacity-70">Less</span>
          <span className="flex gap-0.5">
            {['#9be9a8','#40c463','#30a14e','#216e39'].map(c => (
              <span key={c} className="inline-block w-2 h-2 rounded-sm" style={{background: c}}></span>
            ))}
          </span>
          <span className="text-[10px] opacity-70">More</span>
        </span>
        <span className="text-gray-400 text-[10px]">// contribs over last year</span>
      </div>
    </div>
  );
};

export default GithubGraph;
