import React from 'react';
import { 
  Clock, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Plus,
  Filter,
  Calendar
} from 'lucide-react';

const TaskPreview = () => {
  const columns = [
    {
      title: 'To Do',
      color: 'gray',
      count: 8,
      tasks: [
        {
          id: 1,
          title: 'Implement user authentication',
          priority: 'high',
          assignee: { name: 'Alex', avatar: 'A' },
          dueDate: '2 days',
          labels: ['Frontend', 'Security']
        },
        {
          id: 2,
          title: 'Design mobile dashboard',
          priority: 'medium',
          assignee: { name: 'Sarah', avatar: 'S' },
          dueDate: '5 days',
          labels: ['Design', 'Mobile']
        },
        {
          id: 3,
          title: 'API documentation update',
          priority: 'low',
          assignee: { name: 'John', avatar: 'J' },
          dueDate: '1 week',
          labels: ['Documentation']
        }
      ]
    },
    {
      title: 'In Progress',
      color: 'yellow',
      count: 5,
      tasks: [
        {
          id: 4,
          title: 'Database optimization',
          priority: 'high',
          assignee: { name: 'Mike', avatar: 'M' },
          dueDate: 'Today',
          labels: ['Backend', 'Performance'],
          progress: 75
        },
        {
          id: 5,
          title: 'Unit test coverage',
          priority: 'medium',
          assignee: { name: 'Emma', avatar: 'E' },
          dueDate: '3 days',
          labels: ['Testing'],
          progress: 40
        }
      ]
    },
    {
      title: 'Done',
      color: 'green',
      count: 12,
      tasks: [
        {
          id: 6,
          title: 'Login page redesign',
          priority: 'medium',
          assignee: { name: 'Lisa', avatar: 'L' },
          completedDate: 'Yesterday',
          labels: ['Frontend', 'Design']
        },
        {
          id: 7,
          title: 'Payment gateway integration',
          priority: 'high',
          assignee: { name: 'David', avatar: 'D' },
          completedDate: '2 days ago',
          labels: ['Backend', 'Integration']
        }
      ]
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-error-600';
      case 'medium':
        return 'bg-warning-600';
      case 'low':
        return 'bg-info-600';
      default:
        return 'bg-text-muted';
    }
  };

  const getColumnColor = (color) => {
    switch (color) {
      case 'yellow':
        return 'border-warning-600';
      case 'green':
        return 'border-success-600';
      default:
        return 'border-text-muted';
    }
  };

  return (
    <section className="py-16 bg-dark-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Your Tasks at a Glance
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Visualize your development workflow with our intuitive Kanban board. 
            Track progress, manage priorities, and collaborate seamlessly.
          </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`bg-dark-secondary rounded-xl border-2 ${getColumnColor(column.color)} p-4`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-text-primary">
                    {column.title}
                  </h3>
                  <span className="bg-dark-tertiary text-text-secondary text-xs px-2 py-1 rounded-full">
                    {column.count}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-text-muted hover:text-text-primary transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-text-muted hover:text-green-primary transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-dark-tertiary rounded-lg p-4 border border-dark-accent hover:border-green-primary/30 transition-all duration-200 hover-lift cursor-pointer group"
                  >
                    {/* Priority Indicator */}
                    <div className={`w-full h-1 ${getPriorityColor(task.priority)} rounded-full mb-3`} />

                    {/* Task Title */}
                    <h4 className="text-text-primary font-medium mb-3 group-hover:text-green-primary transition-colors">
                      {task.title}
                    </h4>

                    {/* Progress Bar (for In Progress tasks) */}
                    {task.progress && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-text-muted mb-1">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <div className="w-full bg-dark-accent rounded-full h-1.5">
                          <div
                            className="bg-green-primary h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Labels */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {task.labels.map((label, labelIndex) => (
                        <span
                          key={labelIndex}
                          className="text-xs bg-green-primary/10 text-green-primary px-2 py-1 rounded"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between">
                      {/* Assignee */}
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-primary rounded-full flex items-center justify-center text-dark-primary text-xs font-medium">
                          {task.assignee.avatar}
                        </div>
                        <span className="text-text-muted text-xs">
                          {task.assignee.name}
                        </span>
                      </div>

                      {/* Due Date / Completion */}
                      <div className="flex items-center space-x-1 text-xs text-text-muted">
                        {task.dueDate && (
                          <>
                            <Calendar className="w-3 h-3" />
                            <span>{task.dueDate}</span>
                          </>
                        )}
                        {task.completedDate && (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-success-600" />
                            <span>{task.completedDate}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Task Button */}
                <button className="w-full p-4 border-2 border-dashed border-dark-accent rounded-lg text-text-muted hover:text-green-primary hover:border-green-primary transition-all duration-200 group">
                  <div className="flex items-center justify-center space-x-2">
                    <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Add task</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center px-6 py-3 bg-green-primary text-dark-primary font-semibold rounded-lg hover:bg-green-secondary transition-colors glow-green hover-lift">
            <ArrowRight className="w-5 h-5 mr-2" />
            View Full Board
          </button>
          
          <button className="inline-flex items-center px-6 py-3 border-2 border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-primary hover:text-dark-primary transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Create New Task
          </button>
        </div>

        {/* Task Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Tasks', value: '25', icon: Clock },
            { label: 'Completed Today', value: '8', icon: CheckCircle2 },
            { label: 'High Priority', value: '3', icon: AlertCircle },
            { label: 'Team Members', value: '6', icon: User }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-dark-secondary/50 rounded-lg p-4 text-center hover-lift transition-all duration-200"
              >
                <IconComponent className="w-6 h-6 text-green-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TaskPreview;