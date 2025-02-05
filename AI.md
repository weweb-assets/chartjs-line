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
- labels: binded<string[]> - X-axis labels. advanced mode only.
- datasets: binded<object[]> - Dataset objects with label, backgroundColor, borderColor, data keys. advanced mode only.
- options: binded<object> - Advanced chart options. advanced mode only.
- data: binded<object[]> - Data array. guided mode only.
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
    points:[{label: string, value: number, index: number, datasetIndex: number}]
  }
  Description: Triggered when user clicks on the chart, providing clicked data point information

Variables: none

Note: 
- To make graph responsive: First, always set these options : responsive: true and maintainAspectRatio: false, Second, set min-width: 0px to direct parent container.

Exemple:

{"uid":"chartjs-line-dca","tag":"chartjs-line","name":"Investment Comparison Chart","props":{"default":{"dataType":"advanced","labels":{"__wwtype":"f","code":"["Month 1","Month 2","Month 3","Month 4","Month 5","Month 6"]"},"datasets":{"__wwtype":"f","code":"[{"label": "DCA Investment","data":[1000,2050,3150,4300,5500,6750],"borderColor": "#3b82f6","backgroundColor": "rgba(59, 130, 246, 0.1)","tension": 0.4},{"label": "Lump Sum Investment","data":[6000,6120,6300,6480,6600,6700],"borderColor": "#10b981","backgroundColor": "rgba(16, 185, 129, 0.1)","tension": 0.4}]"},"options":{"__wwtype":"f","code":"{responsive: true,maintainAspectRatio: false,interaction: {intersect: false,mode: 'index'},plugins: {title: {display: true,text: 'Investment Growth Over Time',font: {  size: 16,weight: 'bold'  },padding: 20},legend: {position: 'top',labels: {  usePointStyle: true,padding: 20,font:{size: 14}  }},tooltip: {backgroundColor: 'rgba(255, 255, 255, 0.9)',titleColor: '#1e293b',bodyColor: '#1e293b',borderColor: '#e2e8f0',borderWidth: 1,padding: 12,displayColors: true,callbacks: {label: function(context){return context.dataset.label + ': $' + context.parsed.y.toLocaleString()}  }}},scales: {x: {grid: {display: false  },ticks: {  font:{size: 12}  }},y: {beginAtZero: true,grid: {  color: '#f1f5f9'  },ticks: {font:{size: 12},callback: function(value){return '$' + value.toLocaleString()}}}}n}"},"isLegend":true,"legendPosition":"top","legendAlignement":"center","legendSize":"12px","cubicInterpolationMode":"default","startAtZero":true,"dataOrderBy":"default","dataDirection":"ASC","dataXEmpty":false,"yAxis":"item-count","aggregate":"distinct"},"styles":{"default":{"width":"100%","height":"100%"}}},"styles":{"default":{"height":"400px","aspectRatio":"unset"}}}