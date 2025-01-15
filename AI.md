---
name: chartjs-line
description: The chartjs-line component utilizes the Chart.js library to render customizable line charts in guided or advanced modes, offering extensive options for data configuration, styling, and interactivity, including click event handling.
keywords:
  - chart.js
  - line chart
  - data visualization
  - guided mode
  - advanced mode
  - dataset customization
  - x-axis labels
  - y-axis aggregation
  - chart options
  - legend configuration
  - event handling
---

#### chartjs-line

Component Purpose: Renders a line chart using Chart.js library with guided or advanced modes for customization of labels, datasets, and chart options.

Properties:
- dataType: 'guided' | 'advanced' - Chart mode
- labels: string[] - X-axis labels (binded formula)
- datasets: object[] - Dataset objects with label, backgroundColor, borderColor, data (binded formula)
- options: object - Advanced chart options (binded formula)
- data: object[] - Data array for guided mode
- xAxisTitle: string - X-axis title
- dataXField: string - X-axis data field
- dataXFieldProperty: string - X-axis field property for arrays
- dataOrderBy: 'default' | 'x' | 'y' - Data ordering field
- dataDirection: 'ASC' | 'DESC' - Order direction
- dataXEmpty: boolean - Include empty x-axis values
- yAxis: 'item-count' | 'field-summary' - Y-axis type
- dataYField: string - Y-axis data field
- dataYFieldProperty: string - Y-axis field property for arrays
- aggregate: 'distinct' | 'value' | 'sum' | 'average' | 'median' | 'min' | 'max' - Y-axis aggregation
- groupBy: string - Data grouping field
- groupByProperty: string - Group by property for arrays
- colors: string[] - Dataset colors
- isLegend: boolean - Show legend
- legendPosition: 'top' | 'bottom' | 'left' | 'right' - Legend position
- legendAlignement: 'start' | 'center' | 'end' - Legend alignment
- legendSize: string - Legend font size
- legendColor: string - Legend text color
- labelColor: string - Axis labels color
- gridColor: string - Grid lines color
- cubicInterpolationMode: 'default' | 'monotone' - Line interpolation
- startAtZero: boolean - Y-axis starts at zero

Children: none

Events:
- chart:click
  Payload: {
    dataX: any,
    dataY: any,
    position: {x: number, y: number},
    points: [{label: string, value: number, index: number, datasetIndex: number}]
  }
  Description: Triggered when user clicks on the chart, providing clicked data point information

Variables: none

Note: To make graph responsive and contained, set max-width: 100% and height: auto. Set min-width: 0px to direct parent container.
