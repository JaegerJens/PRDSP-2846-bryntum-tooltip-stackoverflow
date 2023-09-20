/**
 * Main Application script
 */
import React, { FunctionComponent, useRef } from 'react';
import { BryntumScheduler } from '@bryntum/schedulerpro-react';
import { schedulerConfig } from './SchedulerConfig';
import './App.scss';
import { tooltipContent } from './tooltip-content';

const App: FunctionComponent = () => {

    const scheduler = useRef<BryntumScheduler>(null);

    return (
        <BryntumScheduler
            ref = {scheduler}
            {...schedulerConfig}
            scheduleTooltipFeature={{
                mouseOffsetX: -10,
                mouseOffsetY: -10,
                generateTipContent: tooltipContent,
              }}
        />
    );
};

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/scheduler/docs/guide/Scheduler/integration/react/data-binding

export default App;
