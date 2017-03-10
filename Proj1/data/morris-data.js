$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            date: '2010 Q1',
            steps: 2647
        }, {
            date: '2010 Q2',
            steps: 2441
        }, {
            date: '2010 Q3',
            steps: 2501
        }, {
            date: '2010 Q4',
            steps: 5689
        }, {
            date: '2011 Q1',
            steps: 2293
        }, {
            date: '2011 Q2',
            steps: 1881
        }, {
            date: '2011 Q3',
            steps: 1588
        }, {
            date: '2011 Q4',
            steps: 1233
        }, {
            date: '2012 Q1',
            steps: 3456
        }, {
            date: '2012 Q2',
            steps: 1791
        }],
        xkey: 'date',
        ykeys: ['steps'],
        labels: ['steps'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Walk",
            value: 45
        }, {
            label: "Jog",
            value: 30
        }, {
            label: "Run",
            value: 25
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
