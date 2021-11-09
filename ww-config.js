export default {
    editor: {
        label: {
            fr: 'Chart - Line',
            en: 'Chart - Line',
        },
        icon: 'fontawesome/solid/chart-line',
    },
    properties: {
        legendPosition: {
            label: {
                en: 'Legend position',
                fr: 'Legend position',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'top', label: { en: 'Top' } },
                    { value: 'bottom', label: { en: 'Bottom' } },
                    { value: 'left', label: { en: 'Left' } },
                    { value: 'right', label: { en: 'Right' } },
                ],
            },
            bindable: true,
            responsive: true,
            defaultValue: 'top',
        },
        labels: {
            label: {
                en: 'Labels',
                fr: 'Labels',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart labels' },
            },
            responsive: true,
            section: 'settings',
            bindable: 'list',
            defaultValue: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah'],
        },
        datasets: {
            label: {
                en: 'Datasets',
                fr: 'Datasets',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart Datasets' },
            },
            responsive: true,
            section: 'settings',
            bindable: 'list',
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [100.0, 15.0, 62.0, 30.0],
                    cubicInterpolationMode: 'monotone',
                },
            ],
        },
    },
};
