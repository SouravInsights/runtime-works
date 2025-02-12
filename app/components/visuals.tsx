import React from "react";
import {
  Bell,
  MessageSquare,
  Calendar,
  Clock,
  GitBranch,
  BarChart2,
  Layers,
  Users,
} from "lucide-react";

const DriftVisual = () => {
  return (
    <div className="bg-white/5 backdrop-blur p-4 md:p-6 rounded-lg border border-white/10 overflow-hidden">
      {/* Top Bar with Notifications - Always visible */}
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell size={20} className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
              4
            </span>
          </div>
          <div className="relative">
            <MessageSquare size={20} className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-xs flex items-center justify-center">
              12
            </span>
          </div>
          <div className="relative">
            <Calendar size={20} className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Clock size={16} />
          <span className="hidden sm:inline">Sprint ends in 2 days</span>
          <span className="sm:hidden">2d left</span>
        </div>
      </div>

      {/* Mobile View - Condensed Stats */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/5 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <BarChart2 size={16} className="text-blue-400" />
              <span className="text-xs text-gray-400">Sprint</span>
            </div>
            <div className="h-2 bg-white/10 rounded overflow-hidden mb-2">
              <div className="h-full bg-blue-500 w-3/4"></div>
            </div>
            <div className="text-xs">75% complete</div>
          </div>

          <div className="bg-white/5 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <GitBranch size={16} className="text-purple-400" />
              <span className="text-xs text-gray-400">PRs</span>
            </div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs text-yellow-500">3 need review</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <Layers size={16} className="text-green-400" />
              <span className="text-xs text-gray-400">Tasks</span>
            </div>
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs">8 in progress</div>
          </div>

          <div className="bg-white/5 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <Users size={16} className="text-orange-400" />
              <span className="text-xs text-gray-400">Meetings</span>
            </div>
            <div className="text-2xl font-bold">6</div>
            <div className="text-xs">today</div>
          </div>
        </div>
      </div>

      {/* Desktop View - Full Board */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded">
            <h4 className="text-sm font-medium mb-2">Sprint Progress</h4>
            <div className="h-2 bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-blue-500 w-3/4"></div>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span>75% completed</span>
              <span>3 days left</span>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded">
            <h4 className="text-sm font-medium mb-2">Open PRs</h4>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center text-xs space-x-2">
                  <GitBranch size={12} />
                  <span>feature/RT-102{i}</span>
                  <span className="ml-auto text-yellow-500">
                    3 reviews needed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kanban Board - Only on Desktop */}
        <div className="col-span-2 grid grid-cols-3 gap-4">
          {["To Do", "In Progress", "Done"].map((column) => (
            <div key={column} className="space-y-3">
              <h4 className="text-sm font-medium px-2">{column}</h4>
              {[1, 2].map((ticket) => (
                <div key={ticket} className="bg-white/5 p-3 rounded text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">RT-{1000 + ticket}</span>
                    <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300">
                      Feature
                    </span>
                  </div>
                  <p className="text-sm">Task {ticket}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkshopVisual = () => {
  return (
    <div className="bg-black/80 backdrop-blur p-6 rounded-lg border border-blue-900/30">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="font-mono text-sm space-y-2">
        <p>
          <span className="text-green-500">$</span> runtime.works init
        </p>
        <p className="text-gray-500">
          Creating an environment for thoughtful systems...
        </p>

        <div className="pl-4 pt-2 text-blue-400">
          <p>→ No pressure to sprint</p>
          <p>→ No arbitrary deadlines</p>
          <p>→ No feature factory</p>
        </div>

        <p className="text-gray-500">Setting up development values...</p>

        <div className="pl-4 pt-2 text-blue-400">
          <p>→ Deep understanding</p>
          <p>→ Clean architecture</p>
          <p>→ Systems that scale</p>
        </div>

        <p className="text-green-400 mt-4">✓ Ready to build what matters</p>
      </div>
    </div>
  );
};

export { DriftVisual, WorkshopVisual };
