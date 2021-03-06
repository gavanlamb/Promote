import {TaskMockRunner} from 'azure-pipelines-task-lib/mock-run';
import * as path from 'path';

let taskPath = path.join(__dirname, '../src', 'Task.js');
let tmr: TaskMockRunner = new TaskMockRunner(taskPath);

tmr.setInput('feed', 'feed-id');
tmr.setInput('view', 'view-id');
tmr.run();